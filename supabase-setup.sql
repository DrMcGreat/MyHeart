-- MyHeart V2 schema + RLS policies

create extension if not exists "pgcrypto";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('individual','facility','doctor')),
  first_name text,
  last_name text,
  facility_name text,
  profile_photo_url text,
  facility_logo_url text,
  specialty text,
  facility_id uuid references profiles(id) on delete set null,
  date_of_birth date,
  sex text,
  phone text,
  city text,
  country text,
  email text,
  created_at timestamptz default now()
);

alter table profiles add column if not exists facility_id uuid references profiles(id) on delete set null;
alter table profiles add column if not exists profile_photo_url text;
alter table profiles add column if not exists facility_logo_url text;

create table if not exists facility_staff (
  id uuid primary key default gen_random_uuid(),
  facility_id uuid references profiles(id) on delete cascade,
  doctor_name text not null,
  specialty text,
  email text not null,
  contract_status text,
  doctor_id uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists medications (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references profiles(id) on delete cascade,
  added_by uuid references profiles(id) on delete set null,
  added_by_name text,
  added_by_role text,
  name text not null,
  dosage text,
  posology text,
  doses_per_day int,
  notes text,
  next_visit date,
  created_at timestamptz default now()
);

alter table medications add column if not exists doses_per_day int;

create table if not exists diagnoses (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references profiles(id) on delete cascade,
  doctor_id uuid references profiles(id) on delete set null,
  summary text not null,
  created_at timestamptz default now()
);

create table if not exists availability_slots (
  id uuid primary key default gen_random_uuid(),
  doctor_id uuid references profiles(id) on delete cascade,
  facility_id uuid references profiles(id),
  start_time timestamptz not null,
  end_time timestamptz not null,
  status text not null default 'open',
  booked_by uuid references profiles(id),
  created_at timestamptz default now()
);

create table if not exists appointments (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references profiles(id) on delete cascade,
  doctor_id uuid references profiles(id) on delete set null,
  facility_id uuid references profiles(id),
  start_time timestamptz not null,
  end_time timestamptz not null,
  status text not null default 'scheduled',
  created_at timestamptz default now()
);

create index if not exists appointments_doctor_time_idx on appointments (doctor_id, start_time);
create index if not exists appointments_patient_time_idx on appointments (patient_id, start_time);
create index if not exists availability_doctor_time_idx on availability_slots (doctor_id, start_time);
create index if not exists medications_patient_idx on medications (patient_id, created_at);

create table if not exists medication_logs (
  id uuid primary key default gen_random_uuid(),
  medication_id uuid references medications(id) on delete cascade,
  patient_id uuid references profiles(id) on delete cascade,
  log_date date not null,
  doses_taken int not null default 0,
  created_at timestamptz default now(),
  unique (medication_id, patient_id, log_date)
);

create index if not exists medication_logs_patient_date_idx on medication_logs (patient_id, log_date);

create table if not exists cvh_scores (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references profiles(id) on delete cascade,
  score int not null,
  created_at timestamptz default now()
);

create index if not exists cvh_scores_patient_idx on cvh_scores (patient_id, created_at);

alter table profiles enable row level security;
drop policy if exists "profiles_select_auth" on profiles;
create policy "profiles_select_auth" on profiles
  for select to authenticated
  using (true);
drop policy if exists "profiles_insert_own" on profiles;
create policy "profiles_insert_own" on profiles
  for insert to authenticated
  with check (auth.uid() = id);
drop policy if exists "profiles_update_own" on profiles;
create policy "profiles_update_own" on profiles
  for update to authenticated
  using (auth.uid() = id);

alter table facility_staff enable row level security;
drop policy if exists "facility_staff_select" on facility_staff;
create policy "facility_staff_select" on facility_staff
  for select to authenticated
  using (facility_id = auth.uid() or doctor_id = auth.uid() or email = auth.email());
drop policy if exists "facility_staff_insert" on facility_staff;
create policy "facility_staff_insert" on facility_staff
  for insert to authenticated
  with check (facility_id = auth.uid());
drop policy if exists "facility_staff_update" on facility_staff;
create policy "facility_staff_update" on facility_staff
  for update to authenticated
  using (facility_id = auth.uid() or doctor_id = auth.uid());
drop policy if exists "facility_staff_delete" on facility_staff;
create policy "facility_staff_delete" on facility_staff
  for delete to authenticated
  using (facility_id = auth.uid());

alter table medications enable row level security;
drop policy if exists "medications_select" on medications;
create policy "medications_select" on medications
  for select to authenticated
  using (patient_id = auth.uid() or added_by = auth.uid());
drop policy if exists "medications_insert" on medications;
create policy "medications_insert" on medications
  for insert to authenticated
  with check (added_by = auth.uid());
drop policy if exists "medications_update" on medications;
create policy "medications_update" on medications
  for update to authenticated
  using (patient_id = auth.uid() or added_by = auth.uid());
drop policy if exists "medications_delete" on medications;
create policy "medications_delete" on medications
  for delete to authenticated
  using (patient_id = auth.uid() or added_by = auth.uid());

alter table medication_logs enable row level security;
drop policy if exists "medication_logs_select" on medication_logs;
create policy "medication_logs_select" on medication_logs
  for select to authenticated
  using (patient_id = auth.uid());
drop policy if exists "medication_logs_insert" on medication_logs;
create policy "medication_logs_insert" on medication_logs
  for insert to authenticated
  with check (patient_id = auth.uid());
drop policy if exists "medication_logs_update" on medication_logs;
create policy "medication_logs_update" on medication_logs
  for update to authenticated
  using (patient_id = auth.uid());
drop policy if exists "medication_logs_delete" on medication_logs;
create policy "medication_logs_delete" on medication_logs
  for delete to authenticated
  using (patient_id = auth.uid());

alter table cvh_scores enable row level security;
drop policy if exists "cvh_scores_select" on cvh_scores;
create policy "cvh_scores_select" on cvh_scores
  for select to authenticated
  using (patient_id = auth.uid());
drop policy if exists "cvh_scores_insert" on cvh_scores;
create policy "cvh_scores_insert" on cvh_scores
  for insert to authenticated
  with check (patient_id = auth.uid());
drop policy if exists "cvh_scores_delete" on cvh_scores;
create policy "cvh_scores_delete" on cvh_scores
  for delete to authenticated
  using (patient_id = auth.uid());

alter table diagnoses enable row level security;
drop policy if exists "diagnoses_select" on diagnoses;
create policy "diagnoses_select" on diagnoses
  for select to authenticated
  using (patient_id = auth.uid() or doctor_id = auth.uid());
drop policy if exists "diagnoses_insert" on diagnoses;
create policy "diagnoses_insert" on diagnoses
  for insert to authenticated
  with check (doctor_id = auth.uid());
drop policy if exists "diagnoses_update" on diagnoses;
create policy "diagnoses_update" on diagnoses
  for update to authenticated
  using (doctor_id = auth.uid());
drop policy if exists "diagnoses_delete" on diagnoses;
create policy "diagnoses_delete" on diagnoses
  for delete to authenticated
  using (doctor_id = auth.uid());

alter table availability_slots enable row level security;
drop policy if exists "availability_select" on availability_slots;
create policy "availability_select" on availability_slots
  for select to authenticated
  using (true);
drop policy if exists "availability_insert" on availability_slots;
create policy "availability_insert" on availability_slots
  for insert to authenticated
  with check (doctor_id = auth.uid());
drop policy if exists "availability_update" on availability_slots;
create policy "availability_update" on availability_slots
  for update to authenticated
  using (doctor_id = auth.uid() or status = 'open')
  with check (doctor_id = auth.uid() or booked_by = auth.uid());
drop policy if exists "availability_delete" on availability_slots;
create policy "availability_delete" on availability_slots
  for delete to authenticated
  using (doctor_id = auth.uid());

alter table appointments enable row level security;
drop policy if exists "appointments_select" on appointments;
create policy "appointments_select" on appointments
  for select to authenticated
  using (patient_id = auth.uid() or doctor_id = auth.uid() or facility_id = auth.uid());
drop policy if exists "appointments_insert" on appointments;
create policy "appointments_insert" on appointments
  for insert to authenticated
  with check (patient_id = auth.uid() or doctor_id = auth.uid());
drop policy if exists "appointments_update" on appointments;
create policy "appointments_update" on appointments
  for update to authenticated
  using (patient_id = auth.uid() or doctor_id = auth.uid() or facility_id = auth.uid());
drop policy if exists "appointments_delete" on appointments;
create policy "appointments_delete" on appointments
  for delete to authenticated
  using (patient_id = auth.uid() or doctor_id = auth.uid());

-- Storage bucket for profile assets (run once).
insert into storage.buckets (id, name, public)
values ('profile-assets', 'profile-assets', true)
on conflict (id) do nothing;

alter table storage.objects enable row level security;
drop policy if exists "profile_assets_read" on storage.objects;
create policy "profile_assets_read" on storage.objects
  for select to public
  using (bucket_id = 'profile-assets');
drop policy if exists "profile_assets_insert" on storage.objects;
create policy "profile_assets_insert" on storage.objects
  for insert to authenticated
  with check (
    bucket_id = 'profile-assets'
    and split_part(name, '/', 1) in ('profiles', 'facilities')
    and split_part(name, '/', 2) = auth.uid()::text
  );
drop policy if exists "profile_assets_update" on storage.objects;
create policy "profile_assets_update" on storage.objects
  for update to authenticated
  using (
    bucket_id = 'profile-assets'
    and split_part(name, '/', 1) in ('profiles', 'facilities')
    and split_part(name, '/', 2) = auth.uid()::text
  );
drop policy if exists "profile_assets_delete" on storage.objects;
create policy "profile_assets_delete" on storage.objects
  for delete to authenticated
  using (
    bucket_id = 'profile-assets'
    and split_part(name, '/', 1) in ('profiles', 'facilities')
    and split_part(name, '/', 2) = auth.uid()::text
  );

const SUPABASE_URL = 'https://smaughjcwnzsnxzvzzvp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_POhzK6LSp15-xPiag4QHgA_c6X-T4HQ';
const isSupabaseConfigured =
  !SUPABASE_URL.includes('YOUR_') && !SUPABASE_ANON_KEY.includes('YOUR_');
const supabaseClient =
  window.supabase && isSupabaseConfigured
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
const STORAGE_BUCKET = 'profile-assets';

const appRoot = document.getElementById('appRoot');
const authView = document.getElementById('authView');
const registerView = document.getElementById('registerView');
const hubView = document.getElementById('hubView');
const assessmentView = document.getElementById('assessmentView');
const medsView = document.getElementById('medsView');
const appointmentsView = document.getElementById('appointmentsView');

const topBar = document.getElementById('topBar');
const userGreeting = document.getElementById('userGreeting');
const userAvatar = document.getElementById('userAvatar');
const homeBtn = document.getElementById('homeBtn');
const signOutBtn = document.getElementById('signOutBtn');
const backToHubBtn = document.getElementById('backToHubBtn');

const tabSignIn = document.getElementById('tabSignIn');
const tabSignUp = document.getElementById('tabSignUp');
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');
const signUpPasswordConfirm = document.getElementById('signUpPasswordConfirm');
const signInMessage = document.getElementById('signInMessage');
const signUpMessage = document.getElementById('signUpMessage');

const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');
const individualFields = document.getElementById('individualFields');
const individualFirstName = document.getElementById('individualFirstName');
const individualLastName = document.getElementById('individualLastName');
const individualDob = document.getElementById('individualDob');
const individualSex = document.getElementById('individualSex');
const individualPhone = document.getElementById('individualPhone');
const individualCity = document.getElementById('individualCity');
const individualCountry = document.getElementById('individualCountry');
const individualEmail = document.getElementById('individualEmail');
const individualPhoto = document.getElementById('individualPhoto');
const individualPhotoPreview = document.getElementById('individualPhotoPreview');

const hubAssess = document.getElementById('hubAssess');
const hubMeds = document.getElementById('hubMeds');
const hubBook = document.getElementById('hubBook');
const hubOpenMove = document.getElementById('hubOpenMove');
const hubOpenAssessment = document.getElementById('hubOpenAssessment');
const backToHubFromMeds = document.getElementById('backToHubFromMeds');
const backToHubFromAppointments = document.getElementById('backToHubFromAppointments');
const stepsForm = document.getElementById('stepsForm');
const stepsToday = document.getElementById('stepsToday');
const stepsGoal = document.getElementById('stepsGoal');
const stepsMessage = document.getElementById('stepsMessage');
const stepsSummary = document.getElementById('stepsSummary');
const stepsTrend = document.getElementById('stepsTrend');
const stepsTrendSummary = document.getElementById('stepsTrendSummary');
const stepsConnectMessage = document.getElementById('stepsConnectMessage');
const deviceButtons = document.querySelectorAll('[data-device]');
const cvhTrend = document.getElementById('cvhTrend');
const cvhTrendSummary = document.getElementById('cvhTrendSummary');
const cvhTrendEmpty = document.getElementById('cvhTrendEmpty');
const cvhRunAssessment = document.getElementById('cvhRunAssessment');
const hubCvhScore = document.getElementById('hubCvhScore');
const hubCvhLabel = document.getElementById('hubCvhLabel');
const hubStepsValue = document.getElementById('hubStepsValue');
const hubMinutesValue = document.getElementById('hubMinutesValue');
const hubDistanceValue = document.getElementById('hubDistanceValue');
const hubPAValue = document.getElementById('hubPAValue');
const hubBPValue = document.getElementById('hubBPValue');
const askForm = document.getElementById('askForm');
const askTopic = document.getElementById('askTopic');
const askQuestion = document.getElementById('askQuestion');
const askMessage = document.getElementById('askMessage');
const askResponse = document.getElementById('askResponse');
const askResponseBody = document.getElementById('askResponseBody');

const bottomNav = document.getElementById('bottomNav');
const navButtons = document.querySelectorAll('.bottom-nav .nav-btn');
const exploreButtons = document.querySelectorAll('[data-explore]');

const sleepForm = document.getElementById('sleepForm');
const sleepHoursInput = document.getElementById('sleepHoursInput');
const sleepGoalInput = document.getElementById('sleepGoalInput');
const sleepMessage = document.getElementById('sleepMessage');
const sleepSummary = document.getElementById('sleepSummary');
const sleepTrend = document.getElementById('sleepTrend');
const sleepTrendSummary = document.getElementById('sleepTrendSummary');
const sleepConnectMessage = document.getElementById('sleepConnectMessage');

const moveForm = document.getElementById('moveForm');
const moveStepsToday = document.getElementById('moveStepsToday');
const moveStepsGoal = document.getElementById('moveStepsGoal');
const moveMessage = document.getElementById('moveMessage');
const moveSummary = document.getElementById('moveSummary');
const moveTrend = document.getElementById('moveTrend');
const moveTrendSummary = document.getElementById('moveTrendSummary');
const moveConnectMessage = document.getElementById('moveConnectMessage');
const moveCvhScore = document.getElementById('moveCvhScore');
const moveCvhLabel = document.getElementById('moveCvhLabel');
const moveStepsValue = document.getElementById('moveStepsValue');
const moveMinutesValue = document.getElementById('moveMinutesValue');
const moveDistanceValue = document.getElementById('moveDistanceValue');
const movePAValue = document.getElementById('movePAValue');
const moveBPValue = document.getElementById('moveBPValue');
const moveRecommendationsList = document.getElementById('moveRecommendationsList');
const moveTargetsList = document.getElementById('moveTargetsList');
const hubMedList = document.getElementById('hubMedList');
const hubMedEmpty = document.getElementById('hubMedEmpty');
const hubAppointmentList = document.getElementById('hubAppointmentList');
const hubAppointmentEmpty = document.getElementById('hubAppointmentEmpty');

const medForm = document.getElementById('medForm');
const medList = document.getElementById('medList');
const medEmpty = document.getElementById('medEmpty');
const medMessage = document.getElementById('medMessage');
const medSetupBtn = document.getElementById('medSetupBtn');
const medSetupSection = document.getElementById('medSetupSection');
const medName = document.getElementById('medName');
const medDosage = document.getElementById('medDosage');
const medPosology = document.getElementById('medPosology');
const medDosesPerDay = document.getElementById('medDosesPerDay');
const medNextVisit = document.getElementById('medNextVisit');
const medNotes = document.getElementById('medNotes');
const medReminderMessage = document.getElementById('medReminderMessage');

const doctorSelect = document.getElementById('doctorSelect');
const slotList = document.getElementById('slotList');
const slotEmpty = document.getElementById('slotEmpty');
const bookingMessage = document.getElementById('bookingMessage');
const patientAppointments = document.getElementById('patientAppointments');
const patientAppointmentsEmpty = document.getElementById('patientAppointmentsEmpty');
const appointmentSearch = document.getElementById('appointmentSearch');
const modeInPerson = document.getElementById('modeInPerson');
const modeRemote = document.getElementById('modeRemote');
const suggestionCardio = document.getElementById('suggestionCardio');
const suggestionLifestyle = document.getElementById('suggestionLifestyle');

const availabilityForm = document.getElementById('availabilityForm');
const availabilityStart = document.getElementById('availabilityStart');
const availabilityDuration = document.getElementById('availabilityDuration');
const doctorFacilitySelect = document.getElementById('doctorFacilitySelect');
const availabilityType = document.getElementById('availabilityType');
const availabilityList = document.getElementById('availabilityList');
const availabilityMessage = document.getElementById('availabilityMessage');
const doctorPatientCount = document.getElementById('doctorPatientCount');
const doctorFacilityCount = document.getElementById('doctorFacilityCount');
const scheduleDate = document.getElementById('scheduleDate');
const scheduleDuration = document.getElementById('scheduleDuration');
const generateScheduleBtn = document.getElementById('generateScheduleBtn');
const scheduleMessage = document.getElementById('scheduleMessage');
const doctorUpcoming = document.getElementById('doctorUpcoming');
const doctorUpcomingEmpty = document.getElementById('doctorUpcomingEmpty');
const doctorPatientSelect = document.getElementById('doctorPatientSelect');
const patientInfo = document.getElementById('patientInfo');
const diagnosisForm = document.getElementById('diagnosisForm');
const diagnosisText = document.getElementById('diagnosisText');
const diagnosisMessage = document.getElementById('diagnosisMessage');
const prescriptionForm = document.getElementById('prescriptionForm');
const prescriptionName = document.getElementById('prescriptionName');
const prescriptionDosage = document.getElementById('prescriptionDosage');
const prescriptionPosology = document.getElementById('prescriptionPosology');
const prescriptionMessage = document.getElementById('prescriptionMessage');
const doctorMissed = document.getElementById('doctorMissed');
const doctorMissedEmpty = document.getElementById('doctorMissedEmpty');
const doctorLost = document.getElementById('doctorLost');
const doctorLostEmpty = document.getElementById('doctorLostEmpty');

const staffForm = document.getElementById('staffForm');
const staffList = document.getElementById('staffList');
const staffEmpty = document.getElementById('staffEmpty');
const staffMessage = document.getElementById('staffMessage');
const staffName = document.getElementById('staffName');
const staffSpecialty = document.getElementById('staffSpecialty');
const staffEmail = document.getElementById('staffEmail');
const staffContract = document.getElementById('staffContract');

const form = document.getElementById('assessment');
const scoreValue = document.getElementById('scoreValue');
const scoreUnit = document.getElementById('scoreUnit');
const scoreLabel = document.getElementById('scoreLabel');
const scoreIndicator = document.getElementById('scoreIndicator');
const modalIndicator = document.getElementById('modalIndicator');
const modalScore = document.getElementById('modalScore');
const modalLabel = document.getElementById('modalLabel');
const resultModal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');
const exitToHub = document.getElementById('exitToHub');
const resetBtn = document.getElementById('resetBtn');
const getResultsBtn = document.getElementById('getResultsBtn');
const resultsHint = document.getElementById('resultsHint');
const langSelect = document.getElementById('langSelect');
const advicePanel = document.getElementById('advicePanel');
const adviceSummary = document.getElementById('adviceSummary');
const adviceList = document.getElementById('adviceList');
const adviceClinician = document.getElementById('adviceClinician');
const modalAdviceSummary = document.getElementById('modalAdviceSummary');
const modalAdviceList = document.getElementById('modalAdviceList');
const modalAdviceClinician = document.getElementById('modalAdviceClinician');

const ageInput = document.getElementById('age');
const sexSelect = document.getElementById('sex');

const activityModerate = document.getElementById('activityModerate');
const activityVigorous = document.getElementById('activityVigorous');
const nicotineStatus = document.getElementById('nicotineStatus');
const nicotineSecondhand = document.getElementById('nicotineSecondhand');
const sleepHours = document.getElementById('sleepHours');
const bmiUnitInputs = document.querySelectorAll('input[name=\"bmiUnit\"]');
const bmiImperialFields = document.getElementById('bmiImperialFields');
const bmiMetricFields = document.getElementById('bmiMetricFields');
const weightLb = document.getElementById('weightLb');
const heightIn = document.getElementById('heightIn');
const weightKg = document.getElementById('weightKg');
const heightCm = document.getElementById('heightCm');
const bmiResult = document.getElementById('bmiResult');
const lipidsNonHDL = document.getElementById('lipidsNonHDL');
const lipidsMeds = document.getElementById('lipidsMeds');
const glucoseA1c = document.getElementById('glucoseA1c');
const bpSystolic = document.getElementById('bpSystolic');
const bpDiastolic = document.getElementById('bpDiastolic');
const bpMeds = document.getElementById('bpMeds');

let hasSubmitted = false;
let currentLang = 'en';
let currentUser = null;
let currentProfile = null;
let pendingRole = null;
let cachedDoctors = [];
let cachedAppointments = [];
let cachedPatientAppointments = [];
let appointmentMode = 'in_person';
let cachedFacilities = [];
let doctorFacilityTotal = 0;
let pendingIndividualPhotoFile = null;
let latestCvhScore = null;

const translations = {
  en: {
    title: 'B-Healthy - Check you heart health',
    language: { label: 'Language' },
    nav: {
      back: 'Back to menu',
      signOut: 'Sign out',
      home: 'Home',
      profile: 'Profile',
      sleep: 'Sleep',
      move: 'Move',
      explore: 'Explore',
      assess: 'Assess',
    },
    auth: {
      title: 'Welcome to B-Healthy',
      subtitle: 'Sign in to continue or create a profile to get started.',
      signIn: 'Sign in',
      signUp: 'Sign up',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      profileType: 'Profile type',
      createAccount: 'Create account',
    },
    roles: {
      individual: 'Individual profile',
      facility: 'Health facility profile',
      doctor: 'Medical practitioner profile',
    },
    register: {
      title: 'Complete your profile',
      subtitle: 'Tell us a bit more so we can personalize the experience.',
      role: 'Profile type',
      save: 'Save profile',
    },
    profile: {
      firstName: 'First name',
      lastName: 'Surname',
      dob: 'Date of birth',
      sex: 'Sex',
      phone: 'Phone number',
      city: 'City',
      country: 'Country',
      email: 'Email address',
      specialty: 'Medical specialty',
      facility: 'Health facility (optional)',
      facilityName: 'Facility name',
      photo: 'Profile photo (optional)',
      logo: 'Facility logo (optional)',
    },
    hub: {
      title: 'What would you like to do?',
      subtitle: 'Choose an option to continue.',
      assess: 'Assess health',
      meds: 'Check medication',
      book: 'Book an appointment',
      activityTitle: 'Daily activity',
      activitySub: 'Track your daily steps.',
      stepsToday: "Today's steps",
      stepsGoal: 'Daily goal',
      saveSteps: 'Save',
      stepsEmpty: 'No steps logged yet.',
      stepsUnit: 'steps',
      stepsGoalLabel: 'of goal',
      minutesHint: '150 min/week',
      trendTitle: '7-day trend',
      trendEmpty: 'No trend data yet.',
      trendSummary: '{today} steps today · {diff}% vs yesterday',
      trendNoYesterday: '{today} steps today',
      deviceTitle: 'Connect a device',
      deviceHint: 'Link Apple Health, Google Fit, or Fitbit (coming soon).',
      deviceComingSoon: 'Device sync is coming soon.',
      cvhTitle: 'CVH score trend',
      cvhSub: 'Track your heart health score over time.',
      cvhEmpty: 'No CVH scores yet. Run your first assessment.',
      cvhLatest: 'Latest score: {score} · {date}',
      cvhChange: 'Change since last check: {diff}',
      cvhRun: 'Run assessment',
      viewActivity: 'View activity',
      viewCvh: 'CVH trend',
      askTitle: 'Asks',
      askSub: 'Ask about CVH prevention or medications.',
      askTopicLabel: 'Topic',
      askTopicCvh: 'CVH prevention',
      askTopicMeds: 'Medication guidance',
      askQuestionLabel: 'Your question',
      askPlaceholder: 'e.g., How can I improve my blood pressure?',
      askSubmit: 'Get guidance',
      askResponseTitle: 'Guidance',
      askDisclaimer: 'This guidance is general education and not a medical diagnosis.',
      askCvhIntro: 'Here are general CVH prevention tips:',
      askMedsIntro: 'Here are general medication tips:',
      askCvhDiet: 'Favor vegetables, fruits, whole grains, and limit salty or sugary foods.',
      askCvhActivity: 'Aim for 150 minutes of moderate activity weekly, and break up long sitting time.',
      askCvhSleep: 'Target 7–9 hours of sleep and keep a steady sleep schedule.',
      askCvhNicotine: 'Avoid tobacco or vaping; quitting is one of the biggest heart health boosts.',
      askCvhStress: 'Use stress reducers like walks, breathing, or short relaxation breaks.',
      askCvhBp: 'Check blood pressure regularly and reduce sodium if it is elevated.',
      askCvhGeneral1: 'Keep a balanced diet, move daily, and stay hydrated.',
      askCvhGeneral2: 'Track your CVH score monthly to see progress.',
      askMedsAdherence: 'Take medicines exactly as prescribed; do not stop without medical advice.',
      askMedsMissed: 'If you miss a dose, follow your prescription label or pharmacist guidance.',
      askMedsSideEffects: 'Report persistent or severe side effects to your clinician.',
      askMedsInteractions: 'Ask a pharmacist before mixing medications, supplements, or alcohol.',
      askMedsGeneral1: 'Use reminders and your medication tracker to stay consistent.',
      askUrgent: 'If you have severe symptoms (chest pain, fainting, severe shortness of breath), seek urgent care.',
      remindersTitle: 'Reminders',
      medsReminder: 'Medications',
      medsEmpty: 'No medications yet.',
      appointmentsReminder: 'Upcoming appointments',
      appointmentsEmpty: 'No upcoming appointments.',
    },
    sleep: {
      title: 'Sleep tracking',
      subhead: 'Log your sleep and get tips to improve rest.',
      hours: 'Hours slept',
      goal: 'Sleep goal (hours)',
      save: 'Save',
      empty: 'No sleep data yet.',
      trendTitle: '7-day trend',
      trendEmpty: 'No trend data yet.',
      summaryGood: 'Great sleep! Keep your routine steady.',
      summaryLow: 'Try aiming for 7–9 hours and a consistent bedtime.',
      deviceTitle: 'Connect a device',
      deviceHint: 'Link Apple Health or Google Fit (coming soon).',
      deviceComingSoon: 'Sleep sync is coming soon.',
    },
    move: {
      dashboardTitle: 'Your cardiovascular health',
      heroTitle: 'Your cardiovascular health',
      cvhScore: 'CVH score',
      stepsStat: 'Steps',
      minutesStat: 'Minutes',
      distanceStat: 'Distance',
      paLabel: 'PA',
      bpLabel: 'BP',
      cvhEmpty: 'No score yet',
      paValue: 'PA · {minutes} min/week',
      recommendationsTitle: 'Recommendations',
      recommendationsSub: 'To improve',
      targetsTitle: 'Personal targets',
      targetsSub: 'My personal goals',
      badgesTitle: 'Badges',
      badgeStreak: 'Consistency',
      badgeHeart: 'Heart care',
      badgeSpark: 'Energy',
      updateTitle: "Update today's activity",
      updateSubhead: 'Track activity and keep your streak.',
      title: 'Move tracking',
      subhead: 'Track activity and hit your goals.',
      stepsToday: "Today's steps",
      stepsGoal: 'Daily goal',
      save: 'Save',
      empty: 'No activity data yet.',
      trendTitle: '7-day trend',
      trendEmpty: 'No trend data yet.',
      summaryMet: 'Great job — goal reached!',
      summaryKeep: 'Keep moving to reach your daily goal.',
      whoTip: 'WHO recommends 150 minutes of moderate activity per week.',
      deviceTitle: 'Connect a device',
      deviceHint: 'Link Apple Health, Google Fit, or Fitbit (coming soon).',
      deviceComingSoon: 'Activity sync is coming soon.',
      recommendGoal: 'Add {diff} more steps to reach your daily goal.',
      recommendGoalMet: 'Great work hitting your daily goal.',
      recommendMove: 'Add two short walks to boost daily movement.',
      recommendBreaks: 'Take movement breaks every hour.',
      recommendStrength: 'Include strength training twice per week.',
      targetSteps: '{goal} steps per day',
      targetStepsDefault: '10,000 steps per day',
      targetFruits: '3 servings of fruits and vegetables per day',
      targetWater: '2 liters of water',
      targetStrength: '12 minutes of strengthening exercises',
    },
    explore: {
      title: 'Explore features',
      subhead: 'Jump into any part of B-Healthy.',
    },
    meds: {
      guardianTitle: 'Treatment Guardian',
      setupTitle: 'Set Up Medications',
      setupTrack: 'Track all your medications in one place.',
      setupSchedule: 'Set a schedule and get reminders.',
      setupPrivacy: 'Your medication information is encrypted and cannot be read by anyone.',
      setupButton: 'Set Up Medications',
      privacyNote:
        'Your medication information is encrypted and cannot be read by anyone, including B-Healthy.',
      title: 'Check medication',
      current: 'Current medications',
      empty: 'No medications yet.',
      addTitle: 'Add medication',
      name: 'Medication name',
      dosage: 'Dosage',
      posology: 'Posology',
      dosesPerDay: 'Doses per day',
      nextVisit: 'Next visit date (optional)',
      notes: 'Notes',
      add: 'Save medication',
      addedBy: 'Added by',
      nextVisitShort: 'Next visit:',
      reminderPending: 'Reminder: pending doses today for',
      reminderDone: 'All scheduled doses are completed for today.',
      dosesStatus: '{taken} of {total} doses taken today',
      markAll: 'Mark all taken',
      noSchedule: 'Add doses per day to enable reminders.',
      calendarTitle: 'Daily confirmation',
    },
    appointments: {
      title: 'Book an appointment',
      greeting: 'How are you feeling?',
      takeAppointment: 'Book an appointment',
      searchLabel: 'Search',
      searchPlaceholder: 'Search doctors, specialties, or city',
      modeInPerson: 'In clinic',
      modeInPersonHint: 'Meet a practitioner on site',
      modeRemote: 'Remote',
      modeRemoteHint: 'Video consultation from home',
      suggestions: 'Suggestions',
      suggestionCardio: 'Heart health check',
      suggestionLifestyle: 'Lifestyle coaching',
      suggestionCtaAssessment: 'Start assessment',
      suggestionCtaAdvice: 'View advice',
      bookTitle: 'Choose a doctor and time',
      doctor: 'Doctor',
      book: 'Book',
      noSlots: 'No open slots for this doctor yet.',
      upcoming: 'Your upcoming appointments',
      none: 'No upcoming appointments.',
      doctorFallback: 'Doctor',
    },
    doctor: {
      title: 'Doctor dashboard',
      overview: 'Overview',
      totalPatients: 'Patients followed',
      facilityCount: 'Facilities',
      availability: 'Add availability',
      facility: 'Facility',
      appointmentType: 'Appointment type',
      typeInPerson: 'In clinic',
      typeRemote: 'Remote',
      hours: 'Working hours: 09:00–12:30 & 13:30–17:00',
      scheduleDate: 'Date',
      slotLength: 'Slot length (minutes)',
      generate: 'Generate day slots',
      start: 'Start time',
      duration: 'Duration (minutes)',
      addSlot: 'Add slot',
      upcoming: 'Upcoming appointments',
      none: 'No upcoming appointments.',
      patients: 'All patients',
      selectPatient: 'Select a patient',
      diagnosis: 'Add diagnosis',
      saveDiagnosis: 'Save diagnosis',
      medication: 'Medication',
      dosage: 'Dosage',
      posology: 'Posology',
      prescribe: 'Prescribe medication',
      missed: 'Missed visits',
      noneMissed: 'No missed visits.',
      lost: 'Lost to follow-up',
      noneLost: 'No patients lost to follow-up.',
      lastVisit: 'last visit',
      patientFallback: 'Patient',
      statusOpen: 'open',
      statusBooked: 'booked',
      statusBlocked: 'occupied',
      markBusy: 'Mark occupied',
      reopen: 'Reopen',
    },
    facility: {
      title: 'Facility dashboard',
      staff: 'Staff list',
      none: 'No staff listed yet.',
      addStaff: 'Add staff member',
      staffName: 'Name',
      staffSpecialty: 'Specialty',
      staffEmail: 'Email',
      staffContract: 'Contract status',
      add: 'Add staff',
    },
    messages: {
      supabaseMissing: 'Supabase is not configured yet. Please add your URL and anon key in app.js.',
      signUpCheckEmail: 'Check your email to confirm your account, then sign in.',
      signUpSuccess: 'Account created. Complete your profile.',
      signOut: 'Signed out.',
      profileSaved: 'Profile saved.',
      saved: 'Saved.',
      passwordMismatch: 'Passwords do not match.',
      selectRole: 'Please choose a profile type.',
      individualOnly: 'This app is for individual accounts. Please use the facility app.',
      facilityRequired: 'Select a facility for in-clinic appointments.',
      scheduleCreated: 'Day schedule generated.',
      scheduleEmpty: 'All slots already exist for that day.',
      missingPatient: 'Select a patient first.',
      slotBooked: 'Appointment booked.',
      slotTaken: 'That slot is no longer available.',
      askEmpty: 'Please enter a question to get guidance.',
    },
    yes: 'Yes',
    no: 'No',
    hero: {
      title: 'Check you heart health',
      subhead:
        'A simple, private check-in on eight key cardiovascular health metrics.',
    },
    install: {
      summary: 'Install this app (optional)',
      desktop:
        'Desktop (Chrome/Edge): click the install icon in the address bar, or use the browser menu.',
      android: 'Android (Chrome): Menu -> Install app or Add to Home screen.',
      ios: 'iPhone/iPad (Safari): Share -> Add to Home Screen.',
    },
    score: {
      heading: 'Overall Cardiovascular Health',
      fillForm: 'Fill out the form, then click Get Results.',
      completeSections: 'Complete all sections to see your score.',
      high: 'High cardiovascular health',
      moderate: 'Moderate cardiovascular health',
      low: 'Low cardiovascular health',
      legend: 'Low <50 · Moderate 50–79 · High ≥80',
      modalTitle: 'Your Cardiovascular Health Score',
    },
    actions: {
      reset: 'Reset',
      getResults: 'Get Results',
      remove: 'Remove',
      hintDefault: 'Complete all fields to enable results.',
      ready: 'Ready when you are.',
      needDemographics: 'Add age and sex to enable results.',
      needMetrics: 'Complete all health questions to enable results.',
    },
    advice: {
      title: 'Targeted advice',
      summaryHigh: 'High range. Keep your strongest habits steady.',
      summaryModerate: 'Moderate range. Improving a few areas can lift your score.',
      summaryLow: 'Low range. It may be worth discussing this with a healthcare professional.',
      summaryDefault: 'Your cardiovascular health is trending well.',
      fallback1: 'Maintain balanced meals and hydration to keep your diet score high.',
      fallback2: 'Keep regular activity, sleep, and stress management routines.',
      fallback3: 'Stay nicotine-free and keep up routine checkups.',
      clinicianDefault:
        'If you have symptoms or concerns, consider discussing your results with a healthcare professional.',
      clinicianPrefix: 'Consider discussing with a healthcare professional if any apply:',
      items: {
        diet: 'Increase fruits, vegetables, whole grains, and choose water over sugary drinks.',
        activity: 'Aim for at least 150 minutes of moderate activity per week.',
        nicotine: 'Quitting nicotine is one of the biggest improvements for heart health.',
        sleep: 'Target 7 to 9 hours of sleep most nights.',
        bmi: 'Even modest weight loss can improve cardiovascular health.',
        lipids: 'Favor unsaturated fats and review cholesterol numbers with a clinician.',
        glucose: 'Limit refined carbs and follow your diabetes or prediabetes plan.',
        pressure: 'Reduce sodium, stay active, and manage stress to support healthy BP.',
      },
    },
    flags: {
      overallLow: 'overall score in the low range',
      highBp: 'blood pressure in a high range',
      glucoseAboveNormal: 'blood sugar above normal',
      glucoseAboveTarget: 'blood sugar above target',
      nonHdlHigh: 'non-HDL cholesterol high',
      bmiObesity: 'BMI in the obesity range',
      nicotineUse: 'nicotine use or recent use',
      secondhand: 'frequent secondhand smoke exposure',
    },
    pills: { stats: 'Stats', behavior: 'Behavior', factor: 'Factor' },
    metrics: {
      about: 'About You',
      diet: 'Diet Quality',
      activity: 'Physical Activity',
      nicotine: 'Nicotine Exposure',
      sleep: 'Sleep Health',
      bmi: 'Body Mass Index',
      lipids: 'Blood Lipids (Non-HDL)',
      glucose: 'Blood Glucose',
      pressure: 'Blood Pressure',
    },
    about: {
      help: 'Age and sex help with aggregate statistics only. Not used in scoring.',
      age: 'Age',
      sex: 'Sex at birth',
      sexOptions: {
        female: 'Female',
        male: 'Male',
        intersex: 'Intersex',
        preferNot: 'Prefer not to say',
      },
    },
    select: { placeholder: 'Select...' },
    diet: {
      help: 'Quick diet check. We translate these answers into a diet score (0–100).',
      produce: { label: 'Fruits and vegetables per day', opt0: '0–1 servings', opt1: '2–3 servings', opt2: '4+ servings' },
      grains: { label: 'Whole grains per day', opt0: '0–1 servings', opt1: '2–3 servings', opt2: '4+ servings' },
      sugary: { label: 'Sugary drinks per week', opt0: '0–1 drinks', opt1: '2–6 drinks', opt2: '7+ drinks' },
      meat: { label: 'Processed or red meat per week', opt0: '0–1 servings', opt1: '2–6 servings', opt2: '7+ servings' },
      protein: { label: 'Fish or plant proteins per week', opt0: '0–1 servings', opt1: '2–3 servings', opt2: '4+ servings' },
      footnote: 'We can refine this with a longer AHA diet screener later.',
    },
    activity: {
      help: 'Moderate minutes + 2× vigorous minutes per week.',
      moderate: 'Moderate min/week',
      vigorous: 'Vigorous min/week',
      footnote: 'AHA scoring tops out at 150+ moderate-equivalent minutes.',
    },
    nicotine: {
      help: 'Includes cigarettes, vaping, and secondhand smoke exposure.',
      status: 'Status',
      options: {
        never: 'Never smoker',
        former5: 'Former smoker, >5 years',
        former1to5: 'Former smoker, 1–5 years',
        former1: 'Former smoker, <1 year',
        vaping: 'Current vaping / inhaled nicotine (no cigarettes)',
        current: 'Current smoker',
      },
      secondhand: 'Regular indoor secondhand exposure',
      footnote: 'Indoor secondhand exposure reduces the score by 20 points.',
    },
    sleep: { help: 'Average hours of sleep per night (adult scoring).', hours: 'Hours/night' },
    bmi: {
      help: 'Enter weight and height. We will calculate BMI automatically.',
      unitImperial: 'Imperial (lb, in)',
      unitMetric: 'Metric (kg, cm)',
      weightLb: 'Weight (lb)',
      heightIn: 'Height (in)',
      weightKg: 'Weight (kg)',
      heightCm: 'Height (cm)',
      calculated: 'Calculated BMI',
      footnote: 'BMI is one factor. Consider clinician guidance for context.',
    },
    lipids: {
      help: 'Most labs report non-HDL cholesterol (mg/dL).',
      nonHdl: 'Non-HDL (mg/dL)',
      meds: 'On cholesterol-lowering medication',
    },
    glucose: {
      help: 'Use HbA1c (%) if available; scoring differs by diabetes status.',
      noDiabetes: 'No diabetes diagnosis',
      diabetes: 'Diabetes diagnosis',
      a1c: 'HbA1c (%)',
      footnote: 'If HbA1c ≥7.0% and you have diabetes, choose diabetes mode.',
    },
    pressure: {
      help: 'Use your most recent resting BP (mmHg).',
      systolic: 'Systolic',
      diastolic: 'Diastolic',
      meds: 'On blood pressure medication',
    },
    footer: {
      disclaimer:
        'Adult scoring only. This tool is for general wellness awareness and does not replace clinical advice.',
    },
    modal: { exit: 'Exit', close: 'Close' },
    placeholders: {
      age: 'e.g., 42',
      moderate: 'e.g., 120',
      vigorous: 'e.g., 30',
      sleep: 'e.g., 7.5',
      weightLb: 'e.g., 180',
      heightIn: 'e.g., 70',
      weightKg: 'e.g., 82',
      heightCm: 'e.g., 178',
      bmi: '--',
      nonHdl: 'e.g., 140',
      a1c: 'e.g., 6.8',
      systolic: 'e.g., 118',
      diastolic: 'e.g., 76',
    },
  },
  fr: {
    title: 'B-Healthy - Vérifiez la santé de votre cœur',
    language: { label: 'Langue' },
    nav: {
      back: 'Retour au menu',
      signOut: 'Se déconnecter',
      home: 'Accueil',
      profile: 'Profil',
      sleep: 'Sommeil',
      move: 'Bouger',
      explore: 'Explorer',
      assess: 'Évaluer',
    },
    auth: {
      title: 'Bienvenue sur B-Healthy',
      subtitle: 'Connectez-vous pour continuer ou créez un profil pour démarrer.',
      signIn: 'Se connecter',
      signUp: "S'inscrire",
      email: 'Email',
      password: 'Mot de passe',
      confirmPassword: 'Confirmer le mot de passe',
      profileType: 'Type de profil',
      createAccount: 'Créer un compte',
    },
    roles: {
      individual: 'Profil individuel',
      facility: 'Profil établissement de santé',
      doctor: 'Profil médecin',
    },
    register: {
      title: 'Complétez votre profil',
      subtitle: 'Quelques informations pour personnaliser votre expérience.',
      role: 'Type de profil',
      save: 'Enregistrer le profil',
    },
    profile: {
      firstName: 'Prénom',
      lastName: 'Nom',
      dob: 'Date de naissance',
      sex: 'Sexe',
      phone: 'Numéro de téléphone',
      city: 'Ville',
      country: 'Pays',
      email: 'Adresse email',
      specialty: 'Spécialité médicale',
      facility: 'Établissement de santé (optionnel)',
      facilityName: "Nom de l'établissement",
      photo: 'Photo de profil (optionnel)',
      logo: "Logo de l'établissement (optionnel)",
    },
    hub: {
      title: 'Que souhaitez-vous faire ?',
      subtitle: 'Choisissez une option pour continuer.',
      assess: 'Évaluer la santé',
      meds: 'Vérifier les médicaments',
      book: 'Prendre rendez-vous',
      activityTitle: 'Activité quotidienne',
      activitySub: 'Suivez vos pas du jour.',
      stepsToday: 'Pas du jour',
      stepsGoal: 'Objectif quotidien',
      saveSteps: 'Enregistrer',
      stepsEmpty: 'Aucun pas enregistré pour l’instant.',
      stepsUnit: 'pas',
      stepsGoalLabel: 'de l’objectif',
      minutesHint: '150 min/semaine',
      trendTitle: 'Tendance sur 7 jours',
      trendEmpty: 'Aucune tendance pour le moment.',
      trendSummary: '{today} pas aujourd’hui · {diff}% vs hier',
      trendNoYesterday: '{today} pas aujourd’hui',
      deviceTitle: 'Connecter un appareil',
      deviceHint: 'Apple Health, Google Fit ou Fitbit (bientôt disponibles).',
      deviceComingSoon: 'La synchronisation arrive bientôt.',
      cvhTitle: 'Tendance du score CVH',
      cvhSub: 'Suivez votre score de santé cardiaque dans le temps.',
      cvhEmpty: 'Aucun score CVH pour le moment. Lancez votre première évaluation.',
      cvhLatest: 'Dernier score : {score} · {date}',
      cvhChange: 'Écart depuis le dernier contrôle : {diff}',
      cvhRun: "Lancer l'évaluation",
      viewActivity: 'Voir l’activité',
      viewCvh: 'Tendance CVH',
      askTitle: 'Questions',
      askSub: 'Posez des questions sur la prévention CVH ou les médicaments.',
      askTopicLabel: 'Sujet',
      askTopicCvh: 'Prévention CVH',
      askTopicMeds: 'Conseils médicaments',
      askQuestionLabel: 'Votre question',
      askPlaceholder: 'ex. Comment améliorer ma tension artérielle ?',
      askSubmit: 'Obtenir des conseils',
      askResponseTitle: 'Conseils',
      askDisclaimer: "Ces conseils sont généraux et ne remplacent pas un avis médical.",
      askCvhIntro: 'Voici des conseils généraux de prévention CVH :',
      askMedsIntro: 'Voici des conseils généraux sur les médicaments :',
      askCvhDiet: 'Privilégiez légumes, fruits, céréales complètes, et limitez le sel et le sucre.',
      askCvhActivity: 'Visez 150 minutes d’activité modérée par semaine et évitez la sédentarité.',
      askCvhSleep: 'Visez 7–9 heures de sommeil avec une routine régulière.',
      askCvhNicotine: 'Évitez tabac ou vape; arrêter est l’un des meilleurs leviers.',
      askCvhStress: 'Réduisez le stress avec des pauses, respiration, ou marche.',
      askCvhBp: 'Surveillez la tension et réduisez le sodium en cas d’élévation.',
      askCvhGeneral1: 'Alimentation équilibrée, activité régulière et hydratation sont clés.',
      askCvhGeneral2: 'Suivez votre score CVH chaque mois pour voir les progrès.',
      askMedsAdherence: 'Prenez les médicaments comme prescrits; ne les arrêtez pas sans avis médical.',
      askMedsMissed: 'Si une dose est oubliée, suivez l’étiquette ou demandez au pharmacien.',
      askMedsSideEffects: 'Signalez les effets indésirables persistants ou sévères.',
      askMedsInteractions: 'Vérifiez avec un pharmacien avant de mélanger médicaments, compléments ou alcool.',
      askMedsGeneral1: 'Utilisez des rappels et le suivi pour rester régulier.',
      askUrgent:
        'Si vous avez des symptômes graves (douleur thoracique, malaise, essoufflement sévère), consultez en urgence.',
      remindersTitle: 'Rappels',
      medsReminder: 'Médicaments',
      medsEmpty: 'Aucun médicament pour le moment.',
      appointmentsReminder: 'Rendez-vous à venir',
      appointmentsEmpty: 'Aucun rendez-vous à venir.',
    },
    sleep: {
      title: 'Suivi du sommeil',
      subhead: 'Enregistrez votre sommeil et recevez des conseils.',
      hours: 'Heures dormies',
      goal: 'Objectif sommeil (heures)',
      save: 'Enregistrer',
      empty: 'Aucune donnée de sommeil.',
      trendTitle: 'Tendance sur 7 jours',
      trendEmpty: 'Aucune tendance pour le moment.',
      summaryGood: 'Bon sommeil ! Gardez votre routine.',
      summaryLow: 'Visez 7–9 heures et un horaire régulier.',
      deviceTitle: 'Connecter un appareil',
      deviceHint: 'Apple Health ou Google Fit (bientôt disponibles).',
      deviceComingSoon: 'La synchronisation sommeil arrive bientôt.',
    },
    move: {
      dashboardTitle: 'Votre santé cardiovasculaire',
      heroTitle: 'Votre santé cardiovasculaire',
      cvhScore: 'Score CVH',
      stepsStat: 'Pas',
      minutesStat: 'Minutes',
      distanceStat: 'Distance',
      paLabel: 'AP',
      bpLabel: 'TA',
      cvhEmpty: 'Pas de score pour le moment',
      paValue: 'AP · {minutes} min/sem',
      recommendationsTitle: 'Recommandations',
      recommendationsSub: 'À améliorer',
      targetsTitle: 'Objectifs personnels',
      targetsSub: 'Mes objectifs',
      badgesTitle: 'Badges',
      badgeStreak: 'Régularité',
      badgeHeart: 'Coeur',
      badgeSpark: 'Énergie',
      updateTitle: "Mettre à jour l'activité du jour",
      updateSubhead: 'Suivez votre activité et gardez le rythme.',
      title: "Suivi d'activité",
      subhead: 'Suivez votre activité et atteignez vos objectifs.',
      stepsToday: 'Pas du jour',
      stepsGoal: 'Objectif quotidien',
      save: 'Enregistrer',
      empty: "Aucune donnée d'activité.",
      trendTitle: 'Tendance sur 7 jours',
      trendEmpty: 'Aucune tendance pour le moment.',
      summaryMet: 'Bravo — objectif atteint !',
      summaryKeep: 'Continuez pour atteindre votre objectif.',
      whoTip: 'L’OMS recommande 150 minutes d’activité modérée par semaine.',
      deviceTitle: 'Connecter un appareil',
      deviceHint: 'Apple Health, Google Fit ou Fitbit (bientôt disponibles).',
      deviceComingSoon: 'La synchronisation arrive bientôt.',
      recommendGoal: 'Ajoutez {diff} pas pour atteindre votre objectif.',
      recommendGoalMet: 'Bravo, objectif atteint.',
      recommendMove: 'Ajoutez deux courtes marches pour bouger plus.',
      recommendBreaks: 'Faites une pause active chaque heure.',
      recommendStrength: 'Incluez 2 séances de renforcement par semaine.',
      targetSteps: '{goal} pas par jour',
      targetStepsDefault: '10 000 pas par jour',
      targetFruits: '3 portions de fruits et légumes par jour',
      targetWater: "2 litres d'eau",
      targetStrength: "12 minutes d'exercices de renforcement",
    },
    explore: {
      title: 'Explorer les fonctionnalités',
      subhead: 'Accédez rapidement aux sections de B-Healthy.',
    },
    meds: {
      guardianTitle: 'Gardien du traitement',
      setupTitle: 'Configurer les médicaments',
      setupTrack: 'Regroupez tous vos médicaments en un seul endroit.',
      setupSchedule: 'Définissez un horaire et recevez des rappels.',
      setupPrivacy: 'Vos informations de traitement sont chiffrées et inaccessibles.',
      setupButton: 'Configurer les médicaments',
      privacyNote:
        "Vos informations de traitement sont chiffrées et ne peuvent être lues par personne, y compris B-Healthy.",
      title: 'Vérifier les médicaments',
      current: 'Médicaments en cours',
      empty: 'Aucun médicament pour le moment.',
      addTitle: 'Ajouter un médicament',
      name: 'Nom du médicament',
      dosage: 'Dosage',
      posology: 'Posologie',
      dosesPerDay: 'Prises par jour',
      nextVisit: 'Date du prochain rendez-vous (optionnel)',
      notes: 'Notes',
      add: 'Enregistrer le médicament',
      addedBy: 'Ajouté par',
      nextVisitShort: 'Prochain rendez-vous :',
      reminderPending: 'Rappel : prises restantes aujourd’hui pour',
      reminderDone: 'Toutes les prises prévues sont complétées pour aujourd’hui.',
      dosesStatus: '{taken} sur {total} prises effectuées aujourd’hui',
      markAll: 'Tout marquer',
      noSchedule: 'Ajoutez le nombre de prises par jour pour activer les rappels.',
      calendarTitle: 'Confirmation quotidienne',
    },
    appointments: {
      title: 'Prendre rendez-vous',
      greeting: 'Comment vous sentez-vous ?',
      takeAppointment: 'Prendre rendez-vous',
      searchLabel: 'Rechercher',
      searchPlaceholder: 'Rechercher un médecin, une spécialité ou une ville',
      modeInPerson: 'Au cabinet',
      modeInPersonHint: 'Rencontre en présentiel',
      modeRemote: 'À distance',
      modeRemoteHint: 'Consultation vidéo à domicile',
      suggestions: 'Suggestions',
      suggestionCardio: 'Bilan cardiaque',
      suggestionLifestyle: 'Coaching de mode de vie',
      suggestionCtaAssessment: "Démarrer l'évaluation",
      suggestionCtaAdvice: 'Voir les conseils',
      bookTitle: 'Choisissez un médecin et un créneau',
      doctor: 'Médecin',
      book: 'Réserver',
      noSlots: 'Aucun créneau disponible pour ce médecin.',
      upcoming: 'Vos prochains rendez-vous',
      none: 'Aucun rendez-vous à venir.',
      doctorFallback: 'Médecin',
    },
    doctor: {
      title: 'Tableau de bord médecin',
      overview: 'Aperçu',
      totalPatients: 'Patients suivis',
      facilityCount: 'Établissements',
      availability: 'Ajouter des disponibilités',
      facility: 'Établissement',
      appointmentType: 'Type de rendez-vous',
      typeInPerson: 'Au cabinet',
      typeRemote: 'À distance',
      hours: 'Horaires : 09:00–12:30 & 13:30–17:00',
      scheduleDate: 'Date',
      slotLength: 'Durée du créneau (minutes)',
      generate: 'Générer les créneaux du jour',
      start: 'Début',
      duration: 'Durée (minutes)',
      addSlot: 'Ajouter un créneau',
      upcoming: 'Rendez-vous à venir',
      none: 'Aucun rendez-vous à venir.',
      patients: 'Tous les patients',
      selectPatient: 'Sélectionner un patient',
      diagnosis: 'Ajouter un diagnostic',
      saveDiagnosis: 'Enregistrer le diagnostic',
      medication: 'Médicament',
      dosage: 'Dosage',
      posology: 'Posologie',
      prescribe: 'Prescrire un médicament',
      missed: 'Rendez-vous manqués',
      noneMissed: 'Aucun rendez-vous manqué.',
      lost: 'Perdus de vue',
      noneLost: 'Aucun patient perdu de vue.',
      lastVisit: 'dernière visite',
      patientFallback: 'Patient',
      statusOpen: 'libre',
      statusBooked: 'réservé',
      statusBlocked: 'occupé',
      markBusy: 'Marquer occupé',
      reopen: 'Réouvrir',
    },
    facility: {
      title: 'Tableau de bord établissement',
      staff: 'Liste du personnel',
      none: 'Aucun personnel enregistré.',
      addStaff: 'Ajouter un membre du personnel',
      staffName: 'Nom',
      staffSpecialty: 'Spécialité',
      staffEmail: 'Email',
      staffContract: 'Statut du contrat',
      add: 'Ajouter',
    },
    messages: {
      supabaseMissing:
        'Supabase n’est pas encore configuré. Ajoutez votre URL et votre clé anonyme dans app.js.',
      signUpCheckEmail: "Vérifiez votre email pour confirmer le compte, puis connectez-vous.",
      signUpSuccess: 'Compte créé. Complétez votre profil.',
      signOut: 'Déconnecté.',
      profileSaved: 'Profil enregistré.',
      saved: 'Enregistré.',
      passwordMismatch: 'Les mots de passe ne correspondent pas.',
      selectRole: 'Veuillez choisir un type de profil.',
      individualOnly:
        "Cette application est réservée aux profils individuels. Veuillez utiliser l'application établissement.",
      facilityRequired: 'Sélectionnez un établissement pour un rendez-vous en présentiel.',
      scheduleCreated: 'Créneaux générés pour la journée.',
      scheduleEmpty: 'Tous les créneaux existent déjà pour ce jour.',
      missingPatient: 'Sélectionnez d’abord un patient.',
      slotBooked: 'Rendez-vous réservé.',
      slotTaken: 'Ce créneau n’est plus disponible.',
      askEmpty: 'Veuillez saisir une question pour recevoir des conseils.',
    },
    yes: 'Oui',
    no: 'Non',
    hero: {
      title: 'Vérifiez la santé de votre cœur',
      subhead:
        'Un bref auto-bilan privé de huit indicateurs clés de santé cardiovasculaire.',
    },
    install: {
      summary: 'Installer cette app (optionnel)',
      desktop:
        "Ordinateur (Chrome/Edge) : cliquez sur l'icône d'installation dans la barre d'adresse, ou utilisez le menu.",
      android: "Android (Chrome) : Menu -> Installer l'app ou Ajouter à l'écran d'accueil.",
      ios: "iPhone/iPad (Safari) : Partager -> Ajouter à l'écran d'accueil.",
    },
    score: {
      heading: 'Santé cardiovasculaire globale',
      fillForm: 'Remplissez le formulaire, puis cliquez sur Voir les résultats.',
      completeSections: 'Complétez toutes les sections pour voir votre score.',
      high: 'Santé cardiovasculaire élevée',
      moderate: 'Santé cardiovasculaire modérée',
      low: 'Santé cardiovasculaire faible',
      legend: 'Faible <50 · Modérée 50–79 · Élevée ≥80',
      modalTitle: 'Votre score de santé cardiovasculaire',
    },
    actions: {
      reset: 'Réinitialiser',
      getResults: 'Voir les résultats',
      remove: 'Retirer',
      hintDefault: 'Complétez tous les champs pour activer les résultats.',
      ready: 'Prêt quand vous l’êtes.',
      needDemographics: 'Ajoutez l’âge et le sexe pour activer les résultats.',
      needMetrics: 'Répondez à toutes les questions de santé pour activer les résultats.',
    },
    advice: {
      title: 'Conseils ciblés',
      summaryHigh: 'Niveau élevé. Gardez vos meilleures habitudes.',
      summaryModerate: 'Niveau modéré. Améliorer quelques points peut augmenter votre score.',
      summaryLow: 'Niveau faible. Il peut être utile d’en parler à un professionnel de santé.',
      summaryDefault: 'Votre santé cardiovasculaire évolue bien.',
      fallback1: 'Maintenez une alimentation équilibrée et une bonne hydratation.',
      fallback2: 'Conservez une activité régulière, un bon sommeil et la gestion du stress.',
      fallback3: 'Restez sans nicotine et maintenez des bilans réguliers.',
      clinicianDefault:
        'Si vous avez des symptômes ou des inquiétudes, pensez à discuter de vos résultats avec un professionnel de santé.',
      clinicianPrefix: 'Envisagez d’en parler à un professionnel de santé si cela s’applique :',
      items: {
        diet: 'Augmentez fruits, légumes et céréales complètes, et privilégiez l’eau.',
        activity: 'Visez au moins 150 minutes d’activité modérée par semaine.',
        nicotine: 'Arrêter la nicotine est l’un des plus grands bénéfices pour le cœur.',
        sleep: 'Visez 7 à 9 heures de sommeil par nuit.',
        bmi: 'Même une perte de poids modeste peut améliorer la santé cardiovasculaire.',
        lipids: 'Privilégiez les graisses insaturées et revoyez vos lipides avec un clinicien.',
        glucose: 'Limitez les sucres raffinés et suivez votre plan diabète ou prédiabète.',
        pressure: 'Réduisez le sel, restez actif et gérez le stress.',
      },
    },
    flags: {
      overallLow: 'score global dans la zone faible',
      highBp: 'tension artérielle élevée',
      glucoseAboveNormal: 'glycémie au-dessus de la normale',
      glucoseAboveTarget: 'glycémie au-dessus de la cible',
      nonHdlHigh: 'cholestérol non-HDL élevé',
      bmiObesity: 'IMC dans la zone d’obésité',
      nicotineUse: 'usage récent de nicotine',
      secondhand: 'exposition fréquente à la fumée secondaire',
    },
    pills: { stats: 'Stats', behavior: 'Comportement', factor: 'Facteur' },
    metrics: {
      about: 'À propos de vous',
      diet: 'Qualité de l’alimentation',
      activity: 'Activité physique',
      nicotine: 'Exposition à la nicotine',
      sleep: 'Sommeil',
      bmi: 'Indice de masse corporelle',
      lipids: 'Lipides sanguins (non-HDL)',
      glucose: 'Glycémie',
      pressure: 'Tension artérielle',
    },
    about: {
      help: 'Âge et sexe servent uniquement aux statistiques agrégées. Pas utilisés pour le score.',
      age: 'Âge',
      sex: 'Sexe à la naissance',
      sexOptions: {
        female: 'Femme',
        male: 'Homme',
        intersex: 'Intersexe',
        preferNot: 'Préfère ne pas répondre',
      },
    },
    select: { placeholder: 'Sélectionner...' },
    diet: {
      help: 'Petit bilan alimentaire. Nous convertissons ces réponses en score (0–100).',
      produce: { label: 'Fruits et légumes par jour', opt0: '0–1 portions', opt1: '2–3 portions', opt2: '4+ portions' },
      grains: { label: 'Céréales complètes par jour', opt0: '0–1 portions', opt1: '2–3 portions', opt2: '4+ portions' },
      sugary: { label: 'Boissons sucrées par semaine', opt0: '0–1 boissons', opt1: '2–6 boissons', opt2: '7+ boissons' },
      meat: { label: 'Viande rouge ou transformée par semaine', opt0: '0–1 portions', opt1: '2–6 portions', opt2: '7+ portions' },
      protein: { label: 'Poisson ou protéines végétales par semaine', opt0: '0–1 portions', opt1: '2–3 portions', opt2: '4+ portions' },
      footnote: 'Nous pourrons affiner avec un questionnaire AHA plus long.',
    },
    activity: {
      help: 'Minutes modérées + 2× minutes vigoureuses par semaine.',
      moderate: 'Minutes modérées/sem',
      vigorous: 'Minutes vigoureuses/sem',
      footnote: 'Le score AHA plafonne à 150+ minutes équivalentes.',
    },
    nicotine: {
      help: 'Inclut cigarettes, vapotage et fumée secondaire.',
      status: 'Statut',
      options: {
        never: 'Jamais fumé',
        former5: 'Ancien fumeur, >5 ans',
        former1to5: 'Ancien fumeur, 1–5 ans',
        former1: 'Ancien fumeur, <1 an',
        vaping: 'Vapotage actuel / nicotine inhalée (sans cigarettes)',
        current: 'Fumeur actuel',
      },
      secondhand: 'Exposition régulière à la fumée secondaire en intérieur',
      footnote: 'La fumée secondaire réduit le score de 20 points.',
    },
    sleep: { help: 'Heures moyennes de sommeil par nuit (adulte).', hours: 'Heures/nuit' },
    bmi: {
      help: 'Entrez poids et taille. Nous calculons l’IMC automatiquement.',
      unitImperial: 'Impérial (lb, in)',
      unitMetric: 'Métrique (kg, cm)',
      weightLb: 'Poids (lb)',
      heightIn: 'Taille (in)',
      weightKg: 'Poids (kg)',
      heightCm: 'Taille (cm)',
      calculated: 'IMC calculé',
      footnote: 'L’IMC est un facteur. Demandez un avis clinique pour le contexte.',
    },
    lipids: {
      help: 'La plupart des analyses indiquent le cholestérol non-HDL (mg/dL).',
      nonHdl: 'Non-HDL (mg/dL)',
      meds: 'Sous traitement hypolipémiant',
    },
    glucose: {
      help: 'Utilisez l’HbA1c (%) si disponible ; le score dépend du statut diabétique.',
      noDiabetes: 'Pas de diagnostic de diabète',
      diabetes: 'Diagnostic de diabète',
      a1c: 'HbA1c (%)',
      footnote: 'Si HbA1c ≥7,0% et diabète, choisissez le mode diabète.',
    },
    pressure: {
      help: 'Utilisez votre tension au repos la plus récente (mmHg).',
      systolic: 'Systolique',
      diastolic: 'Diastolique',
      meds: 'Sous traitement antihypertenseur',
    },
    footer: {
      disclaimer:
        'Réservé aux adultes. Cet outil est informatif et ne remplace pas un avis médical.',
    },
    modal: { exit: 'Quitter', close: 'Fermer' },
    placeholders: {
      age: 'ex. 42',
      moderate: 'ex. 120',
      vigorous: 'ex. 30',
      sleep: 'ex. 7,5',
      weightLb: 'ex. 180',
      heightIn: 'ex. 70',
      weightKg: 'ex. 82',
      heightCm: 'ex. 178',
      bmi: '--',
      nonHdl: 'ex. 140',
      a1c: 'ex. 6,8',
      systolic: 'ex. 118',
      diastolic: 'ex. 76',
    },
  },
  es: {
    title: 'B-Healthy - Revisa la salud de tu corazón',
    language: { label: 'Idioma' },
    nav: {
      back: 'Volver al menú',
      signOut: 'Cerrar sesión',
      home: 'Inicio',
      profile: 'Perfil',
      sleep: 'Sueño',
      move: 'Movimiento',
      explore: 'Explorar',
      assess: 'Evaluar',
    },
    auth: {
      title: 'Bienvenido a B-Healthy',
      subtitle: 'Inicia sesión para continuar o crea un perfil para comenzar.',
      signIn: 'Iniciar sesión',
      signUp: 'Crear cuenta',
      email: 'Correo electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      profileType: 'Tipo de perfil',
      createAccount: 'Crear cuenta',
    },
    roles: {
      individual: 'Perfil individual',
      facility: 'Perfil de centro de salud',
      doctor: 'Perfil de profesional médico',
    },
    register: {
      title: 'Completa tu perfil',
      subtitle: 'Comparte algunos datos para personalizar la experiencia.',
      role: 'Tipo de perfil',
      save: 'Guardar perfil',
    },
    profile: {
      firstName: 'Nombre',
      lastName: 'Apellido',
      dob: 'Fecha de nacimiento',
      sex: 'Sexo',
      phone: 'Teléfono',
      city: 'Ciudad',
      country: 'País',
      email: 'Correo electrónico',
      specialty: 'Especialidad médica',
      facility: 'Centro de salud (opcional)',
      facilityName: 'Nombre del centro',
      photo: 'Foto de perfil (opcional)',
      logo: 'Logo del centro (opcional)',
    },
    hub: {
      title: '¿Qué te gustaría hacer?',
      subtitle: 'Elige una opción para continuar.',
      assess: 'Evaluar salud',
      meds: 'Revisar medicación',
      book: 'Reservar cita',
      activityTitle: 'Actividad diaria',
      activitySub: 'Registra tus pasos diarios.',
      stepsToday: 'Pasos de hoy',
      stepsGoal: 'Meta diaria',
      saveSteps: 'Guardar',
      stepsEmpty: 'Aún no hay pasos registrados.',
      stepsUnit: 'pasos',
      stepsGoalLabel: 'de la meta',
      minutesHint: '150 min/semana',
      trendTitle: 'Tendencia de 7 días',
      trendEmpty: 'Aún no hay datos de tendencia.',
      trendSummary: '{today} pasos hoy · {diff}% vs ayer',
      trendNoYesterday: '{today} pasos hoy',
      deviceTitle: 'Conectar un dispositivo',
      deviceHint: 'Apple Health, Google Fit o Fitbit (próximamente).',
      deviceComingSoon: 'La sincronización llegará pronto.',
      cvhTitle: 'Tendencia de puntaje CVH',
      cvhSub: 'Sigue tu puntaje de salud cardíaca en el tiempo.',
      cvhEmpty: 'Aún no hay puntajes CVH. Realiza tu primera evaluación.',
      cvhLatest: 'Último puntaje: {score} · {date}',
      cvhChange: 'Cambio desde el último control: {diff}',
      cvhRun: 'Iniciar evaluación',
      viewActivity: 'Ver actividad',
      viewCvh: 'Tendencia CVH',
      askTitle: 'Consultas',
      askSub: 'Pregunta sobre prevención CVH o medicamentos.',
      askTopicLabel: 'Tema',
      askTopicCvh: 'Prevención CVH',
      askTopicMeds: 'Guía de medicamentos',
      askQuestionLabel: 'Tu pregunta',
      askPlaceholder: 'p. ej., ¿Cómo mejorar mi presión arterial?',
      askSubmit: 'Obtener guía',
      askResponseTitle: 'Guía',
      askDisclaimer: 'Estas recomendaciones son generales y no sustituyen consejo médico.',
      askCvhIntro: 'Aquí tienes consejos generales de prevención CVH:',
      askMedsIntro: 'Aquí tienes consejos generales sobre medicamentos:',
      askCvhDiet: 'Prioriza verduras, frutas, granos integrales y limita sal y azúcar.',
      askCvhActivity: 'Busca 150 minutos semanales de actividad moderada y evita sedentarismo.',
      askCvhSleep: 'Apunta a 7–9 horas de sueño con horario estable.',
      askCvhNicotine: 'Evita tabaco o vapeo; dejarlo mejora mucho la salud cardíaca.',
      askCvhStress: 'Reduce el estrés con pausas, respiración o caminatas.',
      askCvhBp: 'Controla la presión y reduce sodio si está elevada.',
      askCvhGeneral1: 'Dieta equilibrada, actividad diaria e hidratación ayudan.',
      askCvhGeneral2: 'Sigue tu puntaje CVH cada mes para ver avances.',
      askMedsAdherence: 'Toma los medicamentos como se prescriben; no los suspendas sin consejo.',
      askMedsMissed: 'Si olvidas una dosis, sigue la etiqueta o consulta al farmacéutico.',
      askMedsSideEffects: 'Reporta efectos adversos persistentes o graves.',
      askMedsInteractions: 'Consulta antes de combinar medicamentos, suplementos o alcohol.',
      askMedsGeneral1: 'Usa recordatorios y el seguimiento para mantener constancia.',
      askUrgent:
        'Si tienes síntomas graves (dolor en el pecho, desmayo, falta de aire intensa), busca atención urgente.',
      remindersTitle: 'Recordatorios',
      medsReminder: 'Medicaciones',
      medsEmpty: 'Aún no hay medicaciones.',
      appointmentsReminder: 'Próximas citas',
      appointmentsEmpty: 'No hay citas próximas.',
    },
    sleep: {
      title: 'Seguimiento del sueño',
      subhead: 'Registra tu sueño y recibe consejos.',
      hours: 'Horas dormidas',
      goal: 'Meta de sueño (horas)',
      save: 'Guardar',
      empty: 'No hay datos de sueño.',
      trendTitle: 'Tendencia de 7 días',
      trendEmpty: 'Aún no hay datos de tendencia.',
      summaryGood: '¡Buen sueño! Mantén tu rutina.',
      summaryLow: 'Apunta a 7–9 horas y un horario constante.',
      deviceTitle: 'Conectar un dispositivo',
      deviceHint: 'Apple Health o Google Fit (próximamente).',
      deviceComingSoon: 'La sincronización de sueño llegará pronto.',
    },
    move: {
      dashboardTitle: 'Tu salud cardiovascular',
      heroTitle: 'Tu salud cardiovascular',
      cvhScore: 'Puntaje CVH',
      stepsStat: 'Pasos',
      minutesStat: 'Minutos',
      distanceStat: 'Distancia',
      paLabel: 'AF',
      bpLabel: 'PA',
      cvhEmpty: 'Sin puntaje por ahora',
      paValue: 'AF · {minutes} min/sem',
      recommendationsTitle: 'Recomendaciones',
      recommendationsSub: 'Para mejorar',
      targetsTitle: 'Metas personales',
      targetsSub: 'Mis metas',
      badgesTitle: 'Insignias',
      badgeStreak: 'Constancia',
      badgeHeart: 'Cuidado del corazón',
      badgeSpark: 'Energía',
      updateTitle: 'Actualizar actividad de hoy',
      updateSubhead: 'Registra tu actividad y mantén la racha.',
      title: 'Seguimiento de movimiento',
      subhead: 'Registra tu actividad y alcanza tus metas.',
      stepsToday: 'Pasos de hoy',
      stepsGoal: 'Meta diaria',
      save: 'Guardar',
      empty: 'No hay datos de actividad.',
      trendTitle: 'Tendencia de 7 días',
      trendEmpty: 'Aún no hay datos de tendencia.',
      summaryMet: '¡Bien hecho — meta alcanzada!',
      summaryKeep: 'Sigue moviéndote para lograr tu meta.',
      whoTip: 'La OMS recomienda 150 minutos de actividad moderada por semana.',
      deviceTitle: 'Conectar un dispositivo',
      deviceHint: 'Apple Health, Google Fit o Fitbit (próximamente).',
      deviceComingSoon: 'La sincronización llegará pronto.',
      recommendGoal: 'Agrega {diff} pasos para alcanzar tu meta diaria.',
      recommendGoalMet: 'Excelente, meta diaria cumplida.',
      recommendMove: 'Añade dos caminatas cortas para moverte más.',
      recommendBreaks: 'Haz pausas activas cada hora.',
      recommendStrength: 'Incluye fuerza dos veces por semana.',
      targetSteps: '{goal} pasos por día',
      targetStepsDefault: '10,000 pasos por día',
      targetFruits: '3 porciones de frutas y verduras al día',
      targetWater: '2 litros de agua',
      targetStrength: '12 minutos de ejercicios de fortalecimiento',
    },
    explore: {
      title: 'Explora funciones',
      subhead: 'Salta a cualquier sección de B-Healthy.',
    },
    meds: {
      guardianTitle: 'Guardia del tratamiento',
      setupTitle: 'Configurar medicamentos',
      setupTrack: 'Registra todos tus medicamentos en un solo lugar.',
      setupSchedule: 'Define un horario y recibe recordatorios.',
      setupPrivacy: 'Tu información de tratamiento está cifrada y no puede ser leída.',
      setupButton: 'Configurar medicamentos',
      privacyNote:
        'Tu información de tratamiento está cifrada y no puede ser leída por nadie, incluido B-Healthy.',
      title: 'Revisar medicación',
      current: 'Medicaciones actuales',
      empty: 'Aún no hay medicaciones.',
      addTitle: 'Agregar medicación',
      name: 'Nombre del medicamento',
      dosage: 'Dosis',
      posology: 'Posología',
      dosesPerDay: 'Tomas por día',
      nextVisit: 'Fecha de próxima visita (opcional)',
      notes: 'Notas',
      add: 'Guardar medicación',
      addedBy: 'Añadido por',
      nextVisitShort: 'Próxima visita:',
      reminderPending: 'Recordatorio: tomas pendientes hoy para',
      reminderDone: 'Todas las tomas programadas están completas hoy.',
      dosesStatus: '{taken} de {total} tomas realizadas hoy',
      markAll: 'Marcar todo',
      noSchedule: 'Agrega tomas por día para activar recordatorios.',
      calendarTitle: 'Confirmación diaria',
    },
    appointments: {
      title: 'Reservar cita',
      greeting: '¿Cómo te sientes?',
      takeAppointment: 'Reservar cita',
      searchLabel: 'Buscar',
      searchPlaceholder: 'Buscar médicos, especialidades o ciudad',
      modeInPerson: 'En consulta',
      modeInPersonHint: 'Consulta presencial',
      modeRemote: 'A distancia',
      modeRemoteHint: 'Consulta en video desde casa',
      suggestions: 'Sugerencias',
      suggestionCardio: 'Chequeo cardíaco',
      suggestionLifestyle: 'Coaching de estilo de vida',
      suggestionCtaAssessment: 'Iniciar evaluación',
      suggestionCtaAdvice: 'Ver consejos',
      bookTitle: 'Elige un médico y un horario',
      doctor: 'Médico',
      book: 'Reservar',
      noSlots: 'No hay horarios disponibles para este médico.',
      upcoming: 'Tus próximas citas',
      none: 'No hay citas próximas.',
      doctorFallback: 'Médico',
    },
    doctor: {
      title: 'Panel del médico',
      overview: 'Resumen',
      totalPatients: 'Pacientes seguidos',
      facilityCount: 'Centros',
      availability: 'Agregar disponibilidad',
      facility: 'Centro',
      appointmentType: 'Tipo de cita',
      typeInPerson: 'En consulta',
      typeRemote: 'A distancia',
      hours: 'Horario: 09:00–12:30 y 13:30–17:00',
      scheduleDate: 'Fecha',
      slotLength: 'Duración del turno (minutos)',
      generate: 'Generar turnos del día',
      start: 'Inicio',
      duration: 'Duración (minutos)',
      addSlot: 'Agregar horario',
      upcoming: 'Citas próximas',
      none: 'No hay citas próximas.',
      patients: 'Todos los pacientes',
      selectPatient: 'Selecciona un paciente',
      diagnosis: 'Agregar diagnóstico',
      saveDiagnosis: 'Guardar diagnóstico',
      medication: 'Medicamento',
      dosage: 'Dosis',
      posology: 'Posología',
      prescribe: 'Prescribir medicamento',
      missed: 'Citas perdidas',
      noneMissed: 'No hay citas perdidas.',
      lost: 'Perdidos en seguimiento',
      noneLost: 'No hay pacientes perdidos en seguimiento.',
      lastVisit: 'última visita',
      patientFallback: 'Paciente',
      statusOpen: 'libre',
      statusBooked: 'reservado',
      statusBlocked: 'ocupado',
      markBusy: 'Marcar ocupado',
      reopen: 'Reabrir',
    },
    facility: {
      title: 'Panel del centro',
      staff: 'Lista de personal',
      none: 'Aún no hay personal.',
      addStaff: 'Agregar personal',
      staffName: 'Nombre',
      staffSpecialty: 'Especialidad',
      staffEmail: 'Correo',
      staffContract: 'Estado del contrato',
      add: 'Agregar',
    },
    messages: {
      supabaseMissing:
        'Supabase aún no está configurado. Agrega tu URL y tu clave anónima en app.js.',
      signUpCheckEmail: 'Revisa tu correo para confirmar la cuenta y luego inicia sesión.',
      signUpSuccess: 'Cuenta creada. Completa tu perfil.',
      signOut: 'Sesión cerrada.',
      profileSaved: 'Perfil guardado.',
      saved: 'Guardado.',
      passwordMismatch: 'Las contraseñas no coinciden.',
      selectRole: 'Elige un tipo de perfil.',
      individualOnly: 'Esta app es solo para cuentas individuales. Usa la app de centros.',
      facilityRequired: 'Selecciona un centro para citas presenciales.',
      scheduleCreated: 'Turnos generados para el día.',
      scheduleEmpty: 'Todos los turnos ya existen para ese día.',
      missingPatient: 'Primero selecciona un paciente.',
      slotBooked: 'Cita reservada.',
      slotTaken: 'Ese horario ya no está disponible.',
      askEmpty: 'Escribe una pregunta para obtener orientación.',
    },
    yes: 'Sí',
    no: 'No',
    hero: {
      title: 'Revisa la salud de tu corazón',
      subhead:
        'Un chequeo privado y sencillo de ocho métricas clave de salud cardiovascular.',
    },
    install: {
      summary: 'Instalar esta app (opcional)',
      desktop:
        'Escritorio (Chrome/Edge): haz clic en el icono de instalación en la barra de direcciones, o usa el menú.',
      android: 'Android (Chrome): Menú -> Instalar app o Agregar a la pantalla de inicio.',
      ios: 'iPhone/iPad (Safari): Compartir -> Agregar a pantalla de inicio.',
    },
    score: {
      heading: 'Salud cardiovascular general',
      fillForm: 'Completa el formulario y luego pulsa Ver resultados.',
      completeSections: 'Completa todas las secciones para ver tu puntaje.',
      high: 'Salud cardiovascular alta',
      moderate: 'Salud cardiovascular moderada',
      low: 'Salud cardiovascular baja',
      legend: 'Baja <50 · Moderada 50–79 · Alta ≥80',
      modalTitle: 'Tu puntaje de salud cardiovascular',
    },
    actions: {
      reset: 'Restablecer',
      getResults: 'Ver resultados',
      remove: 'Quitar',
      hintDefault: 'Completa todos los campos para habilitar resultados.',
      ready: 'Listo cuando lo estés.',
      needDemographics: 'Agrega edad y sexo para habilitar resultados.',
      needMetrics: 'Completa todas las preguntas de salud para habilitar resultados.',
    },
    advice: {
      title: 'Consejos personalizados',
      summaryHigh: 'Rango alto. Mantén tus mejores hábitos.',
      summaryModerate: 'Rango moderado. Mejorar algunas áreas puede subir tu puntaje.',
      summaryLow: 'Rango bajo. Podría ser útil hablarlo con un profesional de salud.',
      summaryDefault: 'Tu salud cardiovascular va por buen camino.',
      fallback1: 'Mantén una dieta equilibrada y buena hidratación.',
      fallback2: 'Sostén actividad regular, buen sueño y manejo del estrés.',
      fallback3: 'Mantente libre de nicotina y haz controles periódicos.',
      clinicianDefault:
        'Si tienes síntomas o inquietudes, considera hablar de tus resultados con un profesional de salud.',
      clinicianPrefix: 'Considera hablar con un profesional de salud si aplica:',
      items: {
        diet: 'Aumenta frutas, verduras y granos integrales, y elige agua.',
        activity: 'Apunta a al menos 150 minutos de actividad moderada por semana.',
        nicotine: 'Dejar la nicotina es uno de los mayores beneficios para el corazón.',
        sleep: 'Apunta a 7 a 9 horas de sueño por noche.',
        bmi: 'Incluso una baja de peso moderada puede ayudar al corazón.',
        lipids: 'Prefiere grasas insaturadas y revisa tus lípidos con un clínico.',
        glucose: 'Limita azúcares refinados y sigue tu plan de diabetes o prediabetes.',
        pressure: 'Reduce sodio, mantente activo y maneja el estrés.',
      },
    },
    flags: {
      overallLow: 'puntaje general en rango bajo',
      highBp: 'presión arterial en rango alto',
      glucoseAboveNormal: 'azúcar en sangre por encima de lo normal',
      glucoseAboveTarget: 'azúcar en sangre por encima de la meta',
      nonHdlHigh: 'colesterol no-HDL alto',
      bmiObesity: 'IMC en rango de obesidad',
      nicotineUse: 'uso de nicotina actual o reciente',
      secondhand: 'exposición frecuente al humo ajeno',
    },
    pills: { stats: 'Datos', behavior: 'Conducta', factor: 'Factor' },
    metrics: {
      about: 'Sobre ti',
      diet: 'Calidad de la dieta',
      activity: 'Actividad física',
      nicotine: 'Exposición a la nicotina',
      sleep: 'Sueño',
      bmi: 'Índice de masa corporal',
      lipids: 'Lípidos en sangre (no-HDL)',
      glucose: 'Glucosa en sangre',
      pressure: 'Presión arterial',
    },
    about: {
      help: 'La edad y el sexo ayudan solo con estadísticas agregadas. No se usan en el puntaje.',
      age: 'Edad',
      sex: 'Sexo al nacer',
      sexOptions: {
        female: 'Mujer',
        male: 'Hombre',
        intersex: 'Intersexual',
        preferNot: 'Prefiero no decir',
      },
    },
    select: { placeholder: 'Seleccionar...' },
    diet: {
      help: 'Chequeo rápido de dieta. Convertimos estas respuestas en un puntaje (0–100).',
      produce: { label: 'Frutas y verduras por día', opt0: '0–1 porciones', opt1: '2–3 porciones', opt2: '4+ porciones' },
      grains: { label: 'Granos integrales por día', opt0: '0–1 porciones', opt1: '2–3 porciones', opt2: '4+ porciones' },
      sugary: { label: 'Bebidas azucaradas por semana', opt0: '0–1 bebidas', opt1: '2–6 bebidas', opt2: '7+ bebidas' },
      meat: { label: 'Carne roja o procesada por semana', opt0: '0–1 porciones', opt1: '2–6 porciones', opt2: '7+ porciones' },
      protein: { label: 'Pescado o proteínas vegetales por semana', opt0: '0–1 porciones', opt1: '2–3 porciones', opt2: '4+ porciones' },
      footnote: 'Luego podemos refinar con un cuestionario AHA más largo.',
    },
    activity: {
      help: 'Minutos moderados + 2× minutos vigorosos por semana.',
      moderate: 'Minutos moderados/sem',
      vigorous: 'Minutos vigorosos/sem',
      footnote: 'El puntaje AHA se mantiene en 150+ minutos equivalentes.',
    },
    nicotine: {
      help: 'Incluye cigarrillos, vapeo y humo ajeno.',
      status: 'Estado',
      options: {
        never: 'Nunca fumó',
        former5: 'Exfumador, >5 años',
        former1to5: 'Exfumador, 1–5 años',
        former1: 'Exfumador, <1 año',
        vaping: 'Vapeo actual / nicotina inhalada (sin cigarrillos)',
        current: 'Fumador actual',
      },
      secondhand: 'Exposición regular al humo ajeno en interiores',
      footnote: 'El humo ajeno reduce el puntaje en 20 puntos.',
    },
    sleep: { help: 'Horas promedio de sueño por noche (adultos).', hours: 'Horas/noche' },
    bmi: {
      help: 'Ingresa peso y estatura. Calculamos el IMC automáticamente.',
      unitImperial: 'Imperial (lb, in)',
      unitMetric: 'Métrico (kg, cm)',
      weightLb: 'Peso (lb)',
      heightIn: 'Estatura (in)',
      weightKg: 'Peso (kg)',
      heightCm: 'Estatura (cm)',
      calculated: 'IMC calculado',
      footnote: 'El IMC es un factor. Consulta contexto clínico.',
    },
    lipids: {
      help: 'La mayoría de laboratorios reportan colesterol no-HDL (mg/dL).',
      nonHdl: 'No-HDL (mg/dL)',
      meds: 'En medicación para colesterol',
    },
    glucose: {
      help: 'Usa HbA1c (%) si está disponible; el puntaje depende del diagnóstico.',
      noDiabetes: 'Sin diagnóstico de diabetes',
      diabetes: 'Diagnóstico de diabetes',
      a1c: 'HbA1c (%)',
      footnote: 'Si HbA1c ≥7,0% y tienes diabetes, elige modo diabetes.',
    },
    pressure: {
      help: 'Usa tu presión arterial en reposo más reciente (mmHg).',
      systolic: 'Sistólica',
      diastolic: 'Diastólica',
      meds: 'En medicación para la presión arterial',
    },
    footer: {
      disclaimer:
        'Solo para adultos. Esta herramienta es informativa y no reemplaza el consejo médico.',
    },
    modal: { exit: 'Salir', close: 'Cerrar' },
    placeholders: {
      age: 'ej. 42',
      moderate: 'ej. 120',
      vigorous: 'ej. 30',
      sleep: 'ej. 7.5',
      weightLb: 'ej. 180',
      heightIn: 'ej. 70',
      weightKg: 'ej. 82',
      heightCm: 'ej. 178',
      bmi: '--',
      nonHdl: 'ej. 140',
      a1c: 'ej. 6.8',
      systolic: 'ej. 118',
      diastolic: 'ej. 76',
    },
  },
};

function getNestedValue(source, key) {
  return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), source);
}

function t(key) {
  const value =
    getNestedValue(translations[currentLang], key) ?? getNestedValue(translations.en, key);
  return value ?? key;
}

function tObj(key) {
  const value =
    getNestedValue(translations[currentLang], key) ?? getNestedValue(translations.en, key);
  return value && typeof value === 'object' ? value : {};
}

function formatMessage(template, params = {}) {
  if (!template) return '';
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = params[key];
    return value === undefined || value === null ? '' : String(value);
  });
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t('title');

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key) {
      element.setAttribute('placeholder', t(key));
    }
  });
}

function getLabelMap() {
  return [
    { min: 80, text: t('score.high') },
    { min: 50, text: t('score.moderate') },
    { min: 0, text: t('score.low') },
  ];
}

function getMetricAdvice() {
  const items = tObj('advice.items');
  return {
    diet: items.diet ?? '',
    activity: items.activity ?? '',
    nicotine: items.nicotine ?? '',
    sleep: items.sleep ?? '',
    bmi: items.bmi ?? '',
    lipids: items.lipids ?? '',
    glucose: items.glucose ?? '',
    pressure: items.pressure ?? '',
  };
}

function prepareRegisterView() {
  ensureIndividualFieldsVisible();
  if (currentProfile) {
    populateProfileForm(currentProfile);
  }
}

function prepareSleepView() {
  const data = loadSleepData();
  if (sleepHoursInput) sleepHoursInput.value = data?.hours ?? '';
  if (sleepGoalInput) sleepGoalInput.value = data?.goal ?? '';
  if (sleepSummary) sleepSummary.textContent = data?.hours ? '' : t('sleep.empty');
  const history = loadSleepHistory();
  if (sleepTrend && sleepTrendSummary) {
    renderTrendGeneric(
      sleepTrend,
      sleepTrendSummary,
      history,
      'h',
      '{today}h',
      t('sleep.trendEmpty')
    );
  }
}

function prepareMoveView() {
  const data = loadMoveData();
  if (moveStepsToday) moveStepsToday.value = data?.today ?? '';
  if (moveStepsGoal) moveStepsGoal.value = data?.goal ?? '';
  if (moveSummary) moveSummary.textContent = data?.today ? '' : t('move.empty');
  updateMoveDashboard(data);
  const history = loadMoveHistory();
  if (moveTrend && moveTrendSummary) {
    renderTrendGeneric(
      moveTrend,
      moveTrendSummary,
      history,
      t('hub.stepsUnit'),
      t('hub.trendNoYesterday'),
      t('move.trendEmpty')
    );
  }
}

async function openMedsView() {
  showView('meds');
  await loadMedications();
}

async function openAppointmentsView() {
  showView('appointments');
  if (appointmentSearch) {
    appointmentSearch.value = '';
  }
  setAppointmentMode('in_person');
  await loadFacilities();
  await loadDoctors();
  await loadPatientAppointments();
}

const views = {
  auth: authView,
  register: registerView,
  hub: hubView,
  assessment: assessmentView,
  meds: medsView,
  appointments: appointmentsView,
  sleep: document.getElementById('sleepView'),
  move: document.getElementById('moveView'),
  explore: document.getElementById('exploreView'),
};

function showView(viewKey) {
  Object.values(views).forEach((view) => view && view.classList.add('hidden'));
  const view = views[viewKey];
  if (view) {
    view.classList.remove('hidden');
  }
  updateTopBar(viewKey);
  updateBottomNav(viewKey);
  if (viewKey === 'hub' && currentProfile?.role === 'individual') {
    loadHubSummary();
  }
  if (viewKey === 'register') {
    prepareRegisterView();
  }
  if (viewKey === 'assessment') {
    applyProfileToAssessment();
    updateScore();
  }
  if (viewKey === 'sleep') {
    prepareSleepView();
  }
  if (viewKey === 'move') {
    prepareMoveView();
  }
}

function scrollToTarget(targetId, fallbackId) {
  const target = document.getElementById(targetId);
  const fallback = fallbackId ? document.getElementById(fallbackId) : null;
  const destination =
    target && !target.classList.contains('hidden') ? target : fallback || target;
  if (destination) {
    destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function openAssessmentFromSuggestion(targetId, fallbackId) {
  showView('assessment');
  requestAnimationFrame(() => {
    scrollToTarget(targetId, fallbackId);
  });
}

function updateTopBar(viewKey) {
  if (!topBar) return;
  const authed = Boolean(currentUser);
  topBar.classList.toggle('hidden', !authed || viewKey === 'auth');
  const showBack =
    currentProfile?.role === 'individual' &&
    ['assessment', 'meds', 'appointments'].includes(viewKey);
  if (backToHubBtn) {
    backToHubBtn.classList.toggle('hidden', !showBack);
  }
  if (homeBtn) {
    const showHome = authed && currentProfile?.role === 'individual' && viewKey !== 'auth';
    homeBtn.classList.toggle('hidden', !showHome);
  }
  if (signOutBtn) {
    signOutBtn.classList.toggle('hidden', !authed);
  }
}

function updateBottomNav(viewKey) {
  if (!bottomNav) return;
  const authed = Boolean(currentUser);
  bottomNav.classList.toggle('hidden', !authed || viewKey === 'auth');
  navButtons.forEach((button) => {
    const target = button.getAttribute('data-view');
    button.classList.toggle('active', target === viewKey);
  });
}

function setAuthMode(mode) {
  const isSignIn = mode === 'signin';
  signInForm.classList.toggle('hidden', !isSignIn);
  signUpForm.classList.toggle('hidden', isSignIn);
  tabSignIn.classList.toggle('active', isSignIn);
  tabSignUp.classList.toggle('active', !isSignIn);
}

function setMessage(element, message, isError = false) {
  if (!element) return;
  element.textContent = message ?? '';
  element.style.color = isError ? '#b42318' : '';
}

function setPendingRole(role) {
  pendingRole = role || null;
  try {
    if (pendingRole) {
      sessionStorage.setItem('pendingRole', pendingRole);
    } else {
      sessionStorage.removeItem('pendingRole');
    }
  } catch (error) {
    // ignore
  }
}

function resetImagePreview(previewEl) {
  if (!previewEl) return;
  const oldUrl = previewEl.dataset.objectUrl;
  if (oldUrl) {
    URL.revokeObjectURL(oldUrl);
  }
  previewEl.dataset.objectUrl = '';
  previewEl.removeAttribute('src');
  previewEl.classList.add('hidden');
}

function updateImagePreview(file, previewEl) {
  resetImagePreview(previewEl);
  if (!file || !previewEl) return;
  const objectUrl = URL.createObjectURL(file);
  previewEl.src = objectUrl;
  previewEl.dataset.objectUrl = objectUrl;
  previewEl.classList.remove('hidden');
}

function getFileExtension(file) {
  const name = file?.name || '';
  const parts = name.split('.');
  if (parts.length > 1) {
    return parts.pop().toLowerCase();
  }
  const mime = file?.type || '';
  const mimeParts = mime.split('/');
  if (mimeParts.length > 1) {
    return mimeParts.pop().toLowerCase();
  }
  return 'jpg';
}

async function uploadProfileAsset(file, folder, baseName) {
  if (!file || !supabaseClient || !currentUser) {
    return { url: null, error: null };
  }
  const extension = getFileExtension(file);
  const path = `${folder}/${currentUser.id}/${baseName}.${extension}`;
  const { error } = await supabaseClient.storage.from(STORAGE_BUCKET).upload(path, file, {
    upsert: true,
    cacheControl: '3600',
    contentType: file.type || undefined,
  });
  if (error) {
    return { url: null, error };
  }
  const { data } = supabaseClient.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return { url: data?.publicUrl || null, error: null };
}

function loadPendingRole() {
  try {
    pendingRole = sessionStorage.getItem('pendingRole');
  } catch (error) {
    pendingRole = null;
  }
}

function ensureIndividualFieldsVisible() {
  if (individualFields) {
    individualFields.classList.remove('hidden');
  }
}

function getProfileDisplayName(profile) {
  if (!profile) return '';
  if (profile.role === 'facility') return profile.facility_name || profile.email || '';
  const name = [profile.first_name, profile.last_name].filter(Boolean).join(' ');
  return name || profile.email || '';
}

function getProfileAvatarUrl(profile) {
  if (!profile) return '';
  if (profile.role === 'facility') {
    return profile.facility_logo_url || '';
  }
  return profile.profile_photo_url || '';
}

function updateAvatar() {
  if (!userAvatar) return;
  const avatarUrl = getProfileAvatarUrl(currentProfile);
  if (avatarUrl) {
    userAvatar.src = avatarUrl;
    userAvatar.classList.remove('hidden');
  } else {
    userAvatar.removeAttribute('src');
    userAvatar.classList.add('hidden');
  }
}

function getRoleLabel(role) {
  if (!role) return '';
  if (role === 'individual') return t('roles.individual');
  if (role === 'doctor') return t('roles.doctor');
  if (role === 'facility') return t('roles.facility');
  return role;
}

function renderFacilityOptions(selectEl) {
  if (!selectEl) return;
  selectEl.innerHTML = '<option value=\"\">' + t('select.placeholder') + '</option>';
  cachedFacilities.forEach((facility) => {
    const option = document.createElement('option');
    option.value = facility.id;
    const name = facility.facility_name || facility.email || facility.id;
    const location = [facility.city, facility.country].filter(Boolean).join(', ');
    option.textContent = location ? `${name} · ${location}` : name;
    selectEl.appendChild(option);
  });
}

async function loadFacilities() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('id, facility_name, city, country, email')
    .eq('role', 'facility')
    .order('facility_name', { ascending: true });
  if (error) {
    return;
  }
  cachedFacilities = data || [];
  renderFacilityOptions(doctorFacility);
  renderFacilityOptions(doctorFacilitySelect);
}

function getFacilityNameById(id) {
  if (!id) return '';
  const facility = cachedFacilities.find((item) => item.id === id);
  return facility?.facility_name || facility?.email || '';
}

function updateDoctorSummary() {
  if (doctorPatientCount) {
    const uniquePatients = new Set(
      cachedAppointments.map((appt) => appt.patient_id).filter(Boolean)
    );
    doctorPatientCount.textContent = uniquePatients.size.toString();
  }
  if (doctorFacilityCount) {
    doctorFacilityCount.textContent = doctorFacilityTotal.toString();
  }
}

async function loadDoctorStats() {
  if (!currentProfile || !supabaseClient) return;
  const facilityIds = new Set();
  if (currentProfile.facility_id) {
    facilityIds.add(currentProfile.facility_id);
  }
  const { data, error } = await supabaseClient
    .from('facility_staff')
    .select('facility_id')
    .eq('doctor_id', currentProfile.id);
  if (!error && data) {
    data.forEach((row) => {
      if (row.facility_id) facilityIds.add(row.facility_id);
    });
  }
  doctorFacilityTotal = facilityIds.size;
  updateDoctorSummary();
}

function updateGreeting() {
  if (!userGreeting) return;
  if (!currentProfile) {
    userGreeting.textContent = '';
    updateAvatar();
    return;
  }
  const name = getProfileDisplayName(currentProfile);
  const role = getRoleLabel(currentProfile.role);
  userGreeting.textContent = name ? `${name} · ${role}` : role;
  updateAvatar();
}

function calculateAgeFromDob(dob) {
  if (!dob) return null;
  const birthDate = new Date(dob);
  if (Number.isNaN(birthDate.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
}

function applyProfileToAssessment() {
  if (!currentProfile) return;
  if (currentProfile.date_of_birth && !ageInput.value) {
    const age = calculateAgeFromDob(currentProfile.date_of_birth);
    if (age !== null) {
      ageInput.value = age;
    }
  }
  if (currentProfile.sex && !sexSelect.value) {
    sexSelect.value = currentProfile.sex;
  }
}

async function routeAfterLogin() {
  if (!currentProfile) {
    showView('register');
    return;
  }
  updateGreeting();
  if (currentProfile.role !== 'individual') {
    await supabaseClient.auth.signOut();
    currentUser = null;
    currentProfile = null;
    updateGreeting();
    showView('auth');
    setMessage(signInMessage, t('messages.individualOnly'), true);
    return;
  }
  showView('hub');
}

function goToHome() {
  routeAfterLogin();
}

function setAppointmentMode(mode) {
  appointmentMode = mode;
  if (modeInPerson) {
    modeInPerson.classList.toggle('active', mode === 'in_person');
  }
  if (modeRemote) {
    modeRemote.classList.toggle('active', mode === 'remote');
  }
}

function getDoctorSearchText(doctor) {
  return [doctor.first_name, doctor.last_name, doctor.specialty, doctor.city, doctor.country]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function renderDoctorOptions(doctors) {
  if (!doctorSelect) return;
  doctorSelect.innerHTML = '<option value=\"\">' + t('select.placeholder') + '</option>';
  doctors.forEach((doc) => {
    const option = document.createElement('option');
    option.value = doc.id;
    const name = [doc.first_name, doc.last_name].filter(Boolean).join(' ');
    option.textContent = doc.specialty ? `${name} · ${doc.specialty}` : name;
    doctorSelect.appendChild(option);
  });
}

function filterDoctors() {
  if (!appointmentSearch) {
    renderDoctorOptions(cachedDoctors);
    return;
  }
  const term = appointmentSearch.value.trim().toLowerCase();
  const filtered = term
    ? cachedDoctors.filter((doctor) => getDoctorSearchText(doctor).includes(term))
    : cachedDoctors;
  renderDoctorOptions(filtered);
  if (doctorSelect && doctorSelect.value) {
    const exists = filtered.some((doctor) => doctor.id === doctorSelect.value);
    if (!exists) {
      doctorSelect.value = '';
      renderSlots([]);
    }
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  if (langSelect) {
    langSelect.value = lang;
  }
  try {
    localStorage.setItem('myheartLang', lang);
  } catch (error) {
    // Ignore storage errors in private mode.
  }
  applyTranslations();
  filterDoctors();
  updateGreeting();
  updateScore();

  if (currentProfile?.role === 'individual' && hubView && !hubView.classList.contains('hidden')) {
    loadHubSummary();
  }

  const { complete, score, metrics } = calculateScore();
  if (complete && hasSubmitted) {
    renderAdvice(score, metrics);
    if (!resultModal.classList.contains('hidden')) {
      openModal(score);
    }
  }
}

const colorStops = [
  { value: 0, color: [219, 58, 58] },
  { value: 50, color: [243, 213, 78] },
  { value: 100, color: [46, 171, 99] },
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function interpolateColor(value) {
  const clamped = Math.max(0, Math.min(100, value));
  let lower = colorStops[0];
  let upper = colorStops[colorStops.length - 1];

  for (let i = 0; i < colorStops.length - 1; i += 1) {
    const current = colorStops[i];
    const next = colorStops[i + 1];
    if (clamped >= current.value && clamped <= next.value) {
      lower = current;
      upper = next;
      break;
    }
  }

  const range = upper.value - lower.value || 1;
  const t = (clamped - lower.value) / range;
  const r = Math.round(lerp(lower.color[0], upper.color[0], t));
  const g = Math.round(lerp(lower.color[1], upper.color[1], t));
  const b = Math.round(lerp(lower.color[2], upper.color[2], t));
  return `rgb(${r}, ${g}, ${b})`;
}

function parseNumber(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function getBmiUnit() {
  const selected = document.querySelector('input[name="bmiUnit"]:checked');
  return selected ? selected.value : 'imperial';
}

function calculateBmiValue() {
  const unit = getBmiUnit();
  if (unit === 'metric') {
    const weight = parseNumber(weightKg.value);
    const height = parseNumber(heightCm.value);
    if (weight === null || height === null || weight <= 0 || height <= 0) return null;
    const meters = height / 100;
    if (meters <= 0) return null;
    return weight / (meters * meters);
  }

  const weight = parseNumber(weightLb.value);
  const height = parseNumber(heightIn.value);
  if (weight === null || height === null || weight <= 0 || height <= 0) return null;
  return (703 * weight) / (height * height);
}

function updateBmiDisplay() {
  const bmi = calculateBmiValue();
  bmiResult.value = bmi === null ? t('placeholders.bmi') : bmi.toFixed(1);
}

function updateBmiUnitFields() {
  const unit = getBmiUnit();
  const showImperial = unit === 'imperial';
  bmiImperialFields.classList.toggle('hidden', !showImperial);
  bmiMetricFields.classList.toggle('hidden', showImperial);
  updateBmiDisplay();
}

function getRadioScore(name) {
  const selected = form.querySelector(`input[name="${name}"]:checked`);
  if (!selected) return null;
  return Number(selected.value);
}

function scoreDiet() {
  const produce = getRadioScore('dietProduce');
  const grains = getRadioScore('dietGrains');
  const sugary = getRadioScore('dietSugary');
  const meat = getRadioScore('dietMeat');
  const protein = getRadioScore('dietProtein');

  const values = [produce, grains, sugary, meat, protein];
  if (values.some((value) => value === null)) return null;
  return values.reduce((sum, value) => sum + value, 0);
}

function scoreActivity() {
  const hasValue = activityModerate.value !== '' || activityVigorous.value !== '';
  if (!hasValue) return null;

  const moderate = Math.max(0, parseNumber(activityModerate.value) ?? 0);
  const vigorous = Math.max(0, parseNumber(activityVigorous.value) ?? 0);
  const total = moderate + vigorous * 2;

  if (total <= 0) return 0;
  if (total < 30) return 20;
  if (total < 60) return 40;
  if (total < 90) return 60;
  if (total < 120) return 80;
  if (total < 150) return 90;
  return 100;
}

function scoreNicotine() {
  if (!nicotineStatus.value) return null;
  let score = Number(nicotineStatus.value);
  if (nicotineSecondhand.checked) {
    score = Math.max(0, score - 20);
  }
  return score;
}

function scoreSleep() {
  if (sleepHours.value === '') return null;
  const hours = parseNumber(sleepHours.value);
  if (hours === null || hours < 0 || hours > 24) return null;

  if (hours < 4) return 0;
  if (hours < 5) return 20;
  if (hours < 6) return 40;
  if (hours < 7) return 70;
  if (hours < 9) return 100;
  if (hours < 10) return 90;
  return 40;
}

function scoreBmi() {
  const bmi = calculateBmiValue();
  if (bmi === null) return null;

  if (bmi < 25) return 100;
  if (bmi < 30) return 70;
  if (bmi < 35) return 30;
  if (bmi < 40) return 15;
  return 0;
}

function scoreLipids() {
  if (lipidsNonHDL.value === '') return null;
  const nonHdl = parseNumber(lipidsNonHDL.value);
  if (nonHdl === null || nonHdl < 0) return null;

  let score = 0;
  if (nonHdl < 130) score = 100;
  else if (nonHdl < 160) score = 60;
  else if (nonHdl < 190) score = 40;
  else if (nonHdl < 220) score = 20;
  else score = 0;

  if (lipidsMeds.checked && score > 0) {
    score = Math.max(0, score - 20);
  }

  return score;
}

function getGlucoseMode() {
  const selected = document.querySelector('input[name="glucoseMode"]:checked');
  return selected ? selected.value : null;
}

function scoreGlucose() {
  const mode = getGlucoseMode();
  if (!mode) return null;

  if (glucoseA1c.value === '') return null;
  const a1c = parseNumber(glucoseA1c.value);
  if (a1c === null || a1c < 0) return null;

  if (mode === 'no-diabetes') {
    if (a1c < 5.7) return 100;
    if (a1c < 7) return 60;
    return null;
  }

  if (a1c < 7) return 40;
  if (a1c < 8) return 30;
  if (a1c < 9) return 20;
  if (a1c < 10) return 10;
  return 0;
}

function scoreBloodPressure() {
  const hasValue = bpSystolic.value !== '' || bpDiastolic.value !== '';
  if (!hasValue) return null;
  const systolic = parseNumber(bpSystolic.value) ?? 0;
  const diastolic = parseNumber(bpDiastolic.value) ?? 0;
  if (systolic < 0 || diastolic < 0) return null;

  let score = 100;
  if (systolic >= 160 || diastolic >= 100) score = 0;
  else if (systolic >= 140 || diastolic >= 90) score = 25;
  else if (systolic >= 130 || diastolic >= 80) score = 50;
  else if (systolic >= 120 && diastolic < 80) score = 75;
  else score = 100;

  if (bpMeds.checked && score > 0) {
    score = Math.max(0, score - 20);
  }

  return score;
}

function isDemographicsComplete() {
  const age = parseNumber(ageInput.value);
  if (age === null || age < 18) return false;
  if (!sexSelect.value) return false;
  return true;
}

function calculateScore() {
  const adviceItems = getMetricAdvice();
  const metrics = [
    { id: 'diet', label: t('metrics.diet'), score: scoreDiet(), advice: adviceItems.diet },
    { id: 'activity', label: t('metrics.activity'), score: scoreActivity(), advice: adviceItems.activity },
    { id: 'nicotine', label: t('metrics.nicotine'), score: scoreNicotine(), advice: adviceItems.nicotine },
    { id: 'sleep', label: t('metrics.sleep'), score: scoreSleep(), advice: adviceItems.sleep },
    { id: 'bmi', label: t('metrics.bmi'), score: scoreBmi(), advice: adviceItems.bmi },
    { id: 'lipids', label: t('metrics.lipids'), score: scoreLipids(), advice: adviceItems.lipids },
    { id: 'glucose', label: t('metrics.glucose'), score: scoreGlucose(), advice: adviceItems.glucose },
    { id: 'pressure', label: t('metrics.pressure'), score: scoreBloodPressure(), advice: adviceItems.pressure },
  ];

  const filledCount = metrics.filter((metric) => metric.score !== null).length;
  if (filledCount !== metrics.length) {
    return { complete: false, score: null, metrics };
  }

  const total = metrics.reduce((sum, metric) => sum + metric.score, 0);
  const average = Math.round(total / metrics.length);
  return { complete: true, score: average, metrics };
}

function updateScoreDisplay(score) {
  if (score === null) {
    scoreValue.textContent = '--';
    scoreValue.style.color = '';
    if (scoreUnit) scoreUnit.textContent = '';
    scoreIndicator.style.left = '0%';
    scoreIndicator.style.background = '#c7ddd5';
    return;
  }

  const color = interpolateColor(score);
  scoreValue.textContent = `${score}`;
  if (scoreUnit) scoreUnit.textContent = '/100';
  scoreLabel.textContent = getLabelMap().find((entry) => score >= entry.min).text;
  scoreIndicator.style.left = `${score}%`;
  scoreIndicator.style.background = color;
  scoreValue.style.color = color;
}

function updateResultsButton(complete, demographicsComplete) {
  const ready = complete && demographicsComplete;
  getResultsBtn.disabled = !ready;
  if (ready) {
    resultsHint.textContent = t('actions.ready');
    return;
  }

  if (!demographicsComplete) {
    resultsHint.textContent = t('actions.needDemographics');
  } else {
    resultsHint.textContent = t('actions.needMetrics');
  }
}

function getClinicianFlags(score) {
  const flags = [];
  if (score !== null && score < 50) {
    flags.push(t('flags.overallLow'));
  }

  const systolic = parseNumber(bpSystolic.value);
  const diastolic = parseNumber(bpDiastolic.value);
  if (systolic !== null && diastolic !== null && (systolic >= 140 || diastolic >= 90)) {
    flags.push(t('flags.highBp'));
  }

  const a1c = parseNumber(glucoseA1c.value);
  const glucoseMode = getGlucoseMode();
  if (a1c !== null && glucoseMode === 'no-diabetes' && a1c >= 5.7) {
    flags.push(t('flags.glucoseAboveNormal'));
  }
  if (a1c !== null && glucoseMode === 'diabetes' && a1c >= 7) {
    flags.push(t('flags.glucoseAboveTarget'));
  }

  const nonHdl = parseNumber(lipidsNonHDL.value);
  if (nonHdl !== null && nonHdl >= 190) {
    flags.push(t('flags.nonHdlHigh'));
  }

  const bmi = calculateBmiValue();
  if (bmi !== null && bmi >= 30) {
    flags.push(t('flags.bmiObesity'));
  }

  if (nicotineStatus.value === '0' || nicotineStatus.value === '25') {
    flags.push(t('flags.nicotineUse'));
  }
  if (nicotineSecondhand.checked) {
    flags.push(t('flags.secondhand'));
  }

  return flags;
}

function buildAdvice(score, metrics) {
  const focusAreas = metrics
    .filter((metric) => metric.score !== null && metric.score < 80)
    .sort((a, b) => a.score - b.score);

  const listItems = focusAreas.length
    ? focusAreas.slice(0, 3).map((metric) => `${metric.label}: ${metric.advice}`)
    : [t('advice.fallback1'), t('advice.fallback2'), t('advice.fallback3')];

  let summary = t('advice.summaryDefault');
  if (score !== null) {
    if (score >= 80) {
      summary = t('advice.summaryHigh');
    } else if (score >= 50) {
      summary = t('advice.summaryModerate');
    } else {
      summary = t('advice.summaryLow');
    }
  }

  const flags = getClinicianFlags(score);
  const clinicianText = flags.length
    ? `${t('advice.clinicianPrefix')} ${flags.join(', ')}.`
    : t('advice.clinicianDefault');

  return { summary, listItems, clinicianText };
}

function renderAdvice(score, metrics) {
  const { summary, listItems, clinicianText } = buildAdvice(score, metrics);

  adviceSummary.textContent = summary;
  adviceList.innerHTML = '';
  listItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    adviceList.appendChild(li);
  });
  adviceClinician.textContent = clinicianText;
  adviceClinician.classList.toggle('hidden', !clinicianText);

  modalAdviceSummary.textContent = summary;
  modalAdviceList.innerHTML = '';
  listItems.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    modalAdviceList.appendChild(li);
  });
  modalAdviceClinician.textContent = clinicianText;
  modalAdviceClinician.classList.toggle('hidden', !clinicianText);
}

function updateScore() {
  updateBmiDisplay();
  const { complete, score, metrics } = calculateScore();
  const demographicsComplete = isDemographicsComplete();
  updateResultsButton(complete, demographicsComplete);

  if (!hasSubmitted) {
    scoreLabel.textContent = t('score.fillForm');
    updateScoreDisplay(null);
    advicePanel.classList.add('hidden');
    return;
  }

  if (!complete) {
    scoreLabel.textContent = t('score.completeSections');
    updateScoreDisplay(null);
    advicePanel.classList.add('hidden');
    return;
  }

  updateScoreDisplay(score);
  advicePanel.classList.remove('hidden');
  renderAdvice(score, metrics);
}

function openModal(score) {
  const color = interpolateColor(score);
  modalScore.textContent = `${score} / 100`;
  modalScore.style.color = color;
  modalLabel.textContent = getLabelMap().find((entry) => score >= entry.min).text;
  modalIndicator.style.left = `${score}%`;
  modalIndicator.style.background = color;
  resultModal.classList.remove('hidden');
}

function closeResults() {
  resultModal.classList.add('hidden');
}

async function initAuth() {
  loadPendingRole();
  if (!supabaseClient) {
    setMessage(signInMessage, t('messages.supabaseMissing'), true);
    setMessage(signUpMessage, t('messages.supabaseMissing'), true);
    showView('auth');
    return;
  }

  const { data } = await supabaseClient.auth.getSession();
  await handleSession(data?.session ?? null);
  supabaseClient.auth.onAuthStateChange((_event, session) => {
    handleSession(session);
  });
}

async function handleSession(session) {
  currentUser = session?.user ?? null;
  currentProfile = null;
  if (!currentUser) {
    updateGreeting();
    showView('auth');
    return;
  }
  await loadProfile();
}

async function loadProfile() {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', currentUser.id)
    .maybeSingle();

  if (error) {
    setMessage(signInMessage, error.message, true);
    showView('auth');
    return;
  }

  if (!data) {
    const metaProfile = currentUser?.user_metadata?.profile;
    if (metaProfile && metaProfile.role) {
      const profileData = {
        id: currentUser.id,
        email: currentUser.email,
        ...metaProfile,
      };
      const { error: insertError } = await supabaseClient.from('profiles').insert(profileData);
      if (!insertError) {
        currentProfile = profileData;
        await routeAfterLogin();
        return;
      }
    }

    ensureIndividualFieldsVisible();
    const email = currentUser.email || '';
    if (individualEmail) individualEmail.value = email;
    showView('register');
    return;
  }

  currentProfile = data;
  await routeAfterLogin();
}

async function saveProfile(profileData, assets = {}) {
  let nextProfile = { ...profileData };

  if (currentProfile?.profile_photo_url && !nextProfile.profile_photo_url) {
    nextProfile.profile_photo_url = currentProfile.profile_photo_url;
  }
  if (currentProfile?.facility_logo_url && !nextProfile.facility_logo_url) {
    nextProfile.facility_logo_url = currentProfile.facility_logo_url;
  }

  if (assets.profilePhotoFile) {
    const { url, error } = await uploadProfileAsset(assets.profilePhotoFile, 'profiles', 'photo');
    if (error) {
      setMessage(registerMessage, error.message, true);
      return false;
    }
    if (url) {
      nextProfile.profile_photo_url = url;
    }
  }

  const { error } = await supabaseClient.from('profiles').upsert(nextProfile, {
    onConflict: 'id',
  });
  if (error) {
    setMessage(registerMessage, error.message, true);
    return false;
  }
  await supabaseClient.auth.updateUser({
    data: {
      role: nextProfile.role,
      profile: {
        role: nextProfile.role,
        first_name: nextProfile.first_name || null,
        last_name: nextProfile.last_name || null,
        facility_name: nextProfile.facility_name || null,
        specialty: nextProfile.specialty || null,
        facility_id: nextProfile.facility_id || null,
        date_of_birth: nextProfile.date_of_birth || null,
        sex: nextProfile.sex || null,
        phone: nextProfile.phone || null,
        city: nextProfile.city || null,
        country: nextProfile.country || null,
        profile_photo_url: nextProfile.profile_photo_url || null,
        facility_logo_url: nextProfile.facility_logo_url || null,
      },
    },
  });
  currentProfile = nextProfile;
  pendingIndividualPhotoFile = null;
  if (individualPhoto) individualPhoto.value = '';
  resetImagePreview(individualPhotoPreview);
  setPendingRole(null);
  setMessage(registerMessage, t('messages.profileSaved'));
  await routeAfterLogin();
  return true;
}

async function loadMedications() {
  if (!currentProfile) return;
  const { data, error } = await supabaseClient
    .from('medications')
    .select('*')
    .eq('patient_id', currentProfile.id)
    .order('created_at', { ascending: false });
  if (error) {
    setMessage(medMessage, error.message, true);
    return;
  }
  const logsRange = await loadMedicationLogsForRange(7);
  const todayKey = getLocalDateKey();
  const todayMap = new Map();
  logsRange.forEach((dateMap, medId) => {
    const value = dateMap.get(todayKey);
    if (value !== undefined) {
      todayMap.set(medId, value);
    }
  });
  renderMedications(data || [], todayMap, logsRange);
  updateMedicationReminder(data || [], todayMap);
}

async function loadMedicationLogsForDate(dateKey) {
  if (!currentProfile || !supabaseClient) return new Map();
  const { data, error } = await supabaseClient
    .from('medication_logs')
    .select('medication_id, doses_taken')
    .eq('patient_id', currentProfile.id)
    .eq('log_date', dateKey);
  if (error || !data) {
    return new Map();
  }
  const map = new Map();
  data.forEach((row) => {
    if (row.medication_id) {
      map.set(row.medication_id, row.doses_taken ?? 0);
    }
  });
  return map;
}

async function loadMedicationLogsForRange(days = 7) {
  if (!currentProfile || !supabaseClient) return new Map();
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - (days - 1));
  const startKey = getLocalDateKey(startDate);
  const { data, error } = await supabaseClient
    .from('medication_logs')
    .select('medication_id, log_date, doses_taken')
    .eq('patient_id', currentProfile.id)
    .gte('log_date', startKey);
  if (error || !data) {
    return new Map();
  }
  const map = new Map();
  data.forEach((row) => {
    if (!row.medication_id || !row.log_date) return;
    if (!map.has(row.medication_id)) {
      map.set(row.medication_id, new Map());
    }
    map.get(row.medication_id).set(row.log_date, row.doses_taken ?? 0);
  });
  return map;
}

async function saveMedicationLogForDate(medicationId, dateKey, dosesTaken) {
  if (!currentProfile || !supabaseClient) return false;
  const payload = {
    medication_id: medicationId,
    patient_id: currentProfile.id,
    log_date: dateKey,
    doses_taken: dosesTaken,
  };
  const { error } = await supabaseClient
    .from('medication_logs')
    .upsert(payload, { onConflict: 'medication_id,patient_id,log_date' });
  if (error) {
    setMessage(medMessage, error.message, true);
    return false;
  }
  return true;
}

function updateMedicationReminder(items, logsMap) {
  if (!medReminderMessage) return;
  if (!items.length) {
    medReminderMessage.classList.add('hidden');
    return;
  }
  const withSchedule = items.filter((item) => Number.isFinite(item.doses_per_day));
  if (withSchedule.length === 0) {
    medReminderMessage.textContent = t('meds.noSchedule');
    medReminderMessage.classList.remove('hidden');
    medReminderMessage.classList.remove('success');
    return;
  }
  const pending = withSchedule.filter((item) => {
    const total = item.doses_per_day ?? 0;
    const taken = logsMap.get(item.id) ?? 0;
    return total > 0 && taken < total;
  });
  if (pending.length === 0) {
    medReminderMessage.textContent = t('meds.reminderDone');
    medReminderMessage.classList.remove('hidden');
    medReminderMessage.classList.add('success');
    return;
  }
  const names = pending.map((item) => item.name).filter(Boolean).join(', ');
  medReminderMessage.textContent = `${t('meds.reminderPending')} ${names}`;
  medReminderMessage.classList.remove('hidden');
  medReminderMessage.classList.remove('success');
}

function renderMedications(items, logsMap, logsRange) {
  if (!medList || !medEmpty) return;
  medList.innerHTML = '';
  if (!items.length) {
    medEmpty.classList.remove('hidden');
    return;
  }
  medEmpty.classList.add('hidden');
  items.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list-item med-item';
    const title = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = item.name;
    const detail = document.createElement('div');
    detail.className = 'muted';
    const parts = [item.dosage, item.posology, item.notes].filter(Boolean);
    if (item.next_visit) {
      parts.push(`${t('meds.nextVisitShort')} ${new Date(item.next_visit).toLocaleDateString()}`);
    }
    detail.textContent = parts.join(' · ');
    title.appendChild(name);
    if (detail.textContent) title.appendChild(detail);

    const meta = document.createElement('div');
    meta.className = 'muted';
    const addedBy = item.added_by_name ? `${item.added_by_name}` : '';
    const role = item.added_by_role ? ` (${item.added_by_role})` : '';
    meta.textContent = addedBy ? `${t('meds.addedBy')} ${addedBy}${role}` : '';
    li.appendChild(title);

    const dosesPerDay = Number.isFinite(item.doses_per_day) ? item.doses_per_day : null;
    if (dosesPerDay && dosesPerDay > 0) {
      const tracker = document.createElement('div');
      tracker.className = 'dose-tracker';
      const status = document.createElement('p');
      status.className = 'muted';
      let takenCount = logsMap.get(item.id) ?? 0;
      status.textContent = formatMessage(t('meds.dosesStatus'), {
        taken: takenCount,
        total: dosesPerDay,
      });

      const chips = document.createElement('div');
      chips.className = 'dose-chips';
      const updateChips = () => {
        chips.querySelectorAll('.dose-chip').forEach((chip, index) => {
          const doseNumber = index + 1;
          chip.classList.toggle('is-done', doseNumber <= takenCount);
        });
        status.textContent = formatMessage(t('meds.dosesStatus'), {
          taken: takenCount,
          total: dosesPerDay,
        });
      };

      for (let i = 1; i <= dosesPerDay; i += 1) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'dose-chip';
        chip.textContent = i.toString();
        chip.addEventListener('click', async () => {
          const nextTaken = i <= takenCount ? i - 1 : i;
          const saved = await saveMedicationLogForDate(item.id, getLocalDateKey(), nextTaken);
          if (saved) {
            takenCount = nextTaken;
            logsMap.set(item.id, nextTaken);
            updateChips();
            updateMedicationReminder(items, logsMap);
          }
        });
        chips.appendChild(chip);
      }

      const markAll = document.createElement('button');
      markAll.type = 'button';
      markAll.className = 'ghost small';
      markAll.textContent = t('meds.markAll');
      markAll.addEventListener('click', async () => {
        const saved = await saveMedicationLogForDate(item.id, getLocalDateKey(), dosesPerDay);
        if (saved) {
          takenCount = dosesPerDay;
          logsMap.set(item.id, dosesPerDay);
          updateChips();
          updateMedicationReminder(items, logsMap);
        }
      });

      tracker.appendChild(status);
      tracker.appendChild(chips);
      tracker.appendChild(markAll);

      const calendar = document.createElement('div');
      calendar.className = 'med-calendar';
      const calendarTitle = document.createElement('p');
      calendarTitle.className = 'muted';
      calendarTitle.textContent = t('meds.calendarTitle');
      const calendarGrid = document.createElement('div');
      calendarGrid.className = 'med-calendar-grid';
      const calendarDates = [];
      for (let i = 6; i >= 0; i -= 1) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const key = getLocalDateKey(date);
        calendarDates.push({ key, label: date.toLocaleDateString(undefined, { weekday: 'short' }) });
      }
      const medLogMap = logsRange?.get(item.id) || new Map();
      calendarDates.forEach((entry) => {
        const day = document.createElement('button');
        day.type = 'button';
        day.className = 'med-day';
        const taken = medLogMap.get(entry.key) ?? 0;
        const complete = taken >= dosesPerDay;
        if (complete) {
          day.classList.add('complete');
        } else if (taken > 0) {
          day.classList.add('partial');
        }
        day.textContent = entry.label;
        day.addEventListener('click', async () => {
          const nextTaken = complete ? 0 : dosesPerDay;
          const saved = await saveMedicationLogForDate(item.id, entry.key, nextTaken);
          if (saved) {
            medLogMap.set(entry.key, nextTaken);
            if (entry.key === getLocalDateKey()) {
              takenCount = nextTaken;
              logsMap.set(item.id, nextTaken);
              updateChips();
              updateMedicationReminder(items, logsMap);
            }
            day.classList.toggle('complete', nextTaken >= dosesPerDay);
            day.classList.toggle('partial', nextTaken > 0 && nextTaken < dosesPerDay);
          }
        });
        calendarGrid.appendChild(day);
      });
      calendar.appendChild(calendarTitle);
      calendar.appendChild(calendarGrid);
      tracker.appendChild(calendar);
      li.appendChild(tracker);
      updateChips();
    }

    li.appendChild(meta);
    medList.appendChild(li);
  });
}

async function loadDoctors() {
  const { data, error } = await supabaseClient
    .from('profiles')
    .select('id, first_name, last_name, specialty, city, country')
    .eq('role', 'doctor')
    .order('first_name', { ascending: true });
  if (error) {
    setMessage(bookingMessage, error.message, true);
    return [];
  }
  cachedDoctors = data || [];
  filterDoctors();
  return cachedDoctors;
}

async function loadAvailability(doctorId) {
  if (!doctorId) {
    renderSlots([]);
    return;
  }
  const nowIso = new Date().toISOString();
  let query = supabaseClient
    .from('availability_slots')
    .select('*')
    .eq('doctor_id', doctorId)
    .eq('status', 'open')
    .gte('start_time', nowIso)
    .order('start_time', { ascending: true });

  if (appointmentMode === 'in_person') {
    query = query.not('facility_id', 'is', null);
  }
  if (appointmentMode === 'remote') {
    query = query.is('facility_id', null);
  }

  const { data, error } = await query;
  if (error) {
    setMessage(bookingMessage, error.message, true);
    return;
  }
  renderSlots(data || []);
}

function renderSlots(slots) {
  if (!slotList || !slotEmpty) return;
  slotList.innerHTML = '';
  if (!slots.length) {
    slotEmpty.classList.remove('hidden');
    return;
  }
  slotEmpty.classList.add('hidden');
  slots.forEach((slot) => {
    const li = document.createElement('div');
    li.className = 'list-item';
    const label = document.createElement('div');
    const facilityName = slot.facility_id ? getFacilityNameById(slot.facility_id) : '';
    label.textContent = facilityName
      ? `${formatDateTime(slot.start_time, slot.end_time)} · ${facilityName}`
      : formatDateTime(slot.start_time, slot.end_time);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'primary';
    button.textContent = t('appointments.book');
    button.addEventListener('click', () => bookSlot(slot));
    li.appendChild(label);
    li.appendChild(button);
    slotList.appendChild(li);
  });
}

async function bookSlot(slot) {
  if (!currentProfile) return;
  setMessage(bookingMessage, '');
  const { data: updated, error: updateError } = await supabaseClient
    .from('availability_slots')
    .update({ status: 'booked', booked_by: currentProfile.id })
    .eq('id', slot.id)
    .eq('status', 'open')
    .select();

  if (updateError) {
    setMessage(bookingMessage, updateError.message, true);
    return;
  }
  if (!updated || updated.length === 0) {
    setMessage(bookingMessage, t('messages.slotTaken'), true);
    return;
  }

  const { error } = await supabaseClient.from('appointments').insert({
    patient_id: currentProfile.id,
    doctor_id: slot.doctor_id,
    facility_id: slot.facility_id || null,
    start_time: slot.start_time,
    end_time: slot.end_time,
    status: 'scheduled',
  });
  if (error) {
    setMessage(bookingMessage, error.message, true);
    return;
  }
  setMessage(bookingMessage, t('messages.slotBooked'));
  await loadAvailability(slot.doctor_id);
  await loadPatientAppointments();
}

async function loadPatientAppointments() {
  if (!currentProfile) return;
  const { data, error } = await fetchUpcomingAppointments();
  if (error) {
    setMessage(bookingMessage, error.message, true);
    return;
  }
  cachedPatientAppointments = data || [];
  renderPatientAppointments(cachedPatientAppointments);
  renderHubAppointments(cachedPatientAppointments);
}

function renderPatientAppointments(items) {
  if (!patientAppointments || !patientAppointmentsEmpty) return;
  patientAppointments.innerHTML = '';
  if (!items.length) {
    patientAppointmentsEmpty.classList.remove('hidden');
    return;
  }
  patientAppointmentsEmpty.classList.add('hidden');
  items.forEach((appt) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const nameParts = [appt.doctor?.first_name, appt.doctor?.last_name].filter(Boolean);
    const docName = nameParts.join(' ') || 'Doctor';
    const label = document.createElement('div');
    label.textContent = `${docName || t('appointments.doctorFallback')} · ${formatDateTime(
      appt.start_time,
      appt.end_time
    )}`;
    li.appendChild(label);
    patientAppointments.appendChild(li);
  });
}

async function fetchUpcomingAppointments() {
  if (!currentProfile || !supabaseClient) {
    return { data: [], error: null };
  }
  const nowIso = new Date().toISOString();
  const { data, error } = await supabaseClient
    .from('appointments')
    .select('*, doctor:profiles!appointments_doctor_id_fkey(first_name,last_name,specialty)')
    .eq('patient_id', currentProfile.id)
    .gte('start_time', nowIso)
    .order('start_time', { ascending: true });
  return { data: data || [], error };
}

async function refreshDoctorDashboard() {
  await Promise.all([loadDoctorAvailability(), loadDoctorAppointments()]);
}

async function loadDoctorAvailability() {
  if (!currentProfile) return;
  const nowIso = new Date().toISOString();
  const { data, error } = await supabaseClient
    .from('availability_slots')
    .select('*')
    .eq('doctor_id', currentProfile.id)
    .gte('start_time', nowIso)
    .order('start_time', { ascending: true });
  if (error) {
    setMessage(availabilityMessage, error.message, true);
    return;
  }
  renderDoctorAvailability(data || []);
}

function renderDoctorAvailability(slots) {
  if (!availabilityList) return;
  availabilityList.innerHTML = '';
  slots.forEach((slot) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const label = document.createElement('div');
    const typeLabel = slot.facility_id ? t('doctor.typeInPerson') : t('doctor.typeRemote');
    const facilityName = slot.facility_id ? getFacilityNameById(slot.facility_id) : '';
    const facilityText = facilityName ? ` · ${facilityName}` : '';
    const statusLabel = (() => {
      if (slot.status === 'booked') return t('doctor.statusBooked');
      if (slot.status === 'blocked') return t('doctor.statusBlocked');
      return t('doctor.statusOpen');
    })();
    label.textContent = `${formatDateTime(slot.start_time, slot.end_time)} · ${typeLabel}${facilityText} · ${statusLabel}`;

    let actionBtn = null;
    if (slot.status === 'open') {
      actionBtn = document.createElement('button');
      actionBtn.type = 'button';
      actionBtn.className = 'ghost';
      actionBtn.textContent = t('doctor.markBusy');
      actionBtn.addEventListener('click', async () => {
        await supabaseClient.from('availability_slots').update({ status: 'blocked' }).eq('id', slot.id);
        loadDoctorAvailability();
      });
    } else if (slot.status === 'blocked') {
      actionBtn = document.createElement('button');
      actionBtn.type = 'button';
      actionBtn.className = 'ghost';
      actionBtn.textContent = t('doctor.reopen');
      actionBtn.addEventListener('click', async () => {
        await supabaseClient.from('availability_slots').update({ status: 'open' }).eq('id', slot.id);
        loadDoctorAvailability();
      });
    }
    li.appendChild(label);
    if (actionBtn) {
      li.appendChild(actionBtn);
    }
    availabilityList.appendChild(li);
  });
}

async function loadDoctorAppointments() {
  if (!currentProfile) return;
  const { data, error } = await supabaseClient
    .from('appointments')
    .select('*, patient:profiles!appointments_patient_id_fkey(id, first_name, last_name, email)')
    .eq('doctor_id', currentProfile.id)
    .order('start_time', { ascending: true });
  if (error) {
    return;
  }
  cachedAppointments = data || [];
  renderDoctorAppointments(cachedAppointments);
  renderDoctorPatients(cachedAppointments);
  renderDoctorMissed(cachedAppointments);
  renderDoctorLost(cachedAppointments);
  updateDoctorSummary();
}

function renderDoctorAppointments(items) {
  if (!doctorUpcoming || !doctorUpcomingEmpty) return;
  const now = new Date();
  const upcoming = items.filter(
    (appt) => new Date(appt.start_time) >= now && appt.status === 'scheduled'
  );
  doctorUpcoming.innerHTML = '';
  if (!upcoming.length) {
    doctorUpcomingEmpty.classList.remove('hidden');
    return;
  }
  doctorUpcomingEmpty.classList.add('hidden');
  upcoming.forEach((appt) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const name = [appt.patient?.first_name, appt.patient?.last_name]
      .filter(Boolean)
      .join(' ');
    const label = document.createElement('div');
    label.textContent = `${name || t('doctor.patientFallback')} · ${formatDateTime(
      appt.start_time,
      appt.end_time
    )}`;
    const status = createStatusSelect(appt);
    li.appendChild(label);
    li.appendChild(status);
    doctorUpcoming.appendChild(li);
  });
}

function createStatusSelect(appt) {
  const select = document.createElement('select');
  ['scheduled', 'completed', 'missed', 'no_show', 'cancelled'].forEach((status) => {
    const option = document.createElement('option');
    option.value = status;
    option.textContent = status.replace('_', ' ');
    select.appendChild(option);
  });
  select.value = appt.status;
  select.addEventListener('change', async () => {
    await supabaseClient
      .from('appointments')
      .update({ status: select.value })
      .eq('id', appt.id);
    loadDoctorAppointments();
  });
  return select;
}

function renderDoctorPatients(items) {
  if (!doctorPatientSelect) return;
  const patientMap = new Map();
  items.forEach((appt) => {
    if (appt.patient?.id) {
      patientMap.set(appt.patient.id, appt.patient);
    }
  });
  doctorPatientSelect.innerHTML = '<option value=\"\">' + t('select.placeholder') + '</option>';
  patientMap.forEach((patient, id) => {
    const option = document.createElement('option');
    option.value = id;
    const name = [patient.first_name, patient.last_name].filter(Boolean).join(' ');
    option.textContent = name || patient.email || id;
    doctorPatientSelect.appendChild(option);
  });
}

function renderDoctorMissed(items) {
  if (!doctorMissed || !doctorMissedEmpty) return;
  const missed = items.filter((appt) => ['missed', 'no_show'].includes(appt.status));
  doctorMissed.innerHTML = '';
  if (!missed.length) {
    doctorMissedEmpty.classList.remove('hidden');
    return;
  }
  doctorMissedEmpty.classList.add('hidden');
  missed.forEach((appt) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const name = [appt.patient?.first_name, appt.patient?.last_name].filter(Boolean).join(' ');
    li.textContent = `${name || t('doctor.patientFallback')} · ${formatDateTime(
      appt.start_time,
      appt.end_time
    )}`;
    doctorMissed.appendChild(li);
  });
}

function renderDoctorLost(items) {
  if (!doctorLost || !doctorLostEmpty) return;
  const now = new Date();
  const threshold = new Date(now);
  threshold.setDate(threshold.getDate() - 90);

  const patientStats = new Map();
  items.forEach((appt) => {
    if (!appt.patient?.id) return;
    const patientId = appt.patient.id;
    const start = new Date(appt.start_time);
    const stat = patientStats.get(patientId) || {
      patient: appt.patient,
      last: start,
      hasUpcoming: false,
    };
    if (start > stat.last) stat.last = start;
    if (appt.status === 'scheduled' && start >= now) {
      stat.hasUpcoming = true;
    }
    patientStats.set(patientId, stat);
  });

  const lost = Array.from(patientStats.values()).filter(
    (stat) => stat.last < threshold && !stat.hasUpcoming
  );

  doctorLost.innerHTML = '';
  if (!lost.length) {
    doctorLostEmpty.classList.remove('hidden');
    return;
  }
  doctorLostEmpty.classList.add('hidden');
  lost.forEach((stat) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const name = [stat.patient?.first_name, stat.patient?.last_name].filter(Boolean).join(' ');
    li.textContent = `${name || t('doctor.patientFallback')} · ${t('doctor.lastVisit')} ${stat.last.toLocaleDateString()}`;
    doctorLost.appendChild(li);
  });
}

async function loadFacilityStaff() {
  if (!currentProfile) return;
  const { data, error } = await supabaseClient
    .from('facility_staff')
    .select('*')
    .eq('facility_id', currentProfile.id)
    .order('created_at', { ascending: false });
  if (error) {
    setMessage(staffMessage, error.message, true);
    return;
  }
  renderFacilityStaff(data || []);
}

function renderFacilityStaff(items) {
  if (!staffList || !staffEmpty) return;
  staffList.innerHTML = '';
  if (!items.length) {
    staffEmpty.classList.remove('hidden');
    return;
  }
  staffEmpty.classList.add('hidden');
  items.forEach((staff) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const label = document.createElement('div');
    label.textContent = `${staff.doctor_name} · ${staff.specialty || ''}`;
    const meta = document.createElement('div');
    meta.className = 'muted';
    meta.textContent = `${staff.email}${staff.contract_status ? ' · ' + staff.contract_status : ''}`;
    li.appendChild(label);
    li.appendChild(meta);
    staffList.appendChild(li);
  });
}

function formatDateTime(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  if (Number.isNaN(startDate.getTime())) return '';
  const date = startDate.toLocaleDateString();
  const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${date} ${startTime}–${endTime}`;
}

function buildLocalDate(dateStr, hour, minute) {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split('-').map((value) => Number.parseInt(value, 10));
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day, hour, minute, 0, 0);
}

function buildDailySlots(dateStr, durationMinutes) {
  const duration = Math.max(5, Number.parseInt(durationMinutes, 10) || 30);
  const segments = [
    { start: { h: 9, m: 0 }, end: { h: 12, m: 30 } },
    { start: { h: 13, m: 30 }, end: { h: 17, m: 0 } },
  ];
  const slots = [];
  segments.forEach((segment) => {
    let cursor = buildLocalDate(dateStr, segment.start.h, segment.start.m);
    const end = buildLocalDate(dateStr, segment.end.h, segment.end.m);
    if (!cursor || !end) return;
    while (cursor.getTime() + duration * 60000 <= end.getTime()) {
      const slotStart = new Date(cursor);
      const slotEnd = new Date(cursor.getTime() + duration * 60000);
      slots.push({ start: slotStart, end: slotEnd });
      cursor = slotEnd;
    }
  });
  return slots;
}

async function generateDaySchedule() {
  if (!currentProfile || !supabaseClient) return;
  const dateValue = scheduleDate?.value;
  const duration = scheduleDuration?.value || 30;
  if (!dateValue) return;

  const type = availabilityType?.value || 'in_person';
  const facilityId = doctorFacilitySelect?.value || currentProfile.facility_id || null;
  if (type === 'in_person' && !facilityId) {
    setMessage(scheduleMessage, t('messages.facilityRequired'), true);
    return;
  }

  const slots = buildDailySlots(dateValue, duration);
  if (slots.length === 0) {
    setMessage(scheduleMessage, t('messages.scheduleEmpty'));
    return;
  }

  const dayStart = buildLocalDate(dateValue, 0, 0);
  const dayEnd = buildLocalDate(dateValue, 23, 59);
  const { data: existing, error } = await supabaseClient
    .from('availability_slots')
    .select('start_time')
    .eq('doctor_id', currentProfile.id)
    .gte('start_time', dayStart.toISOString())
    .lte('start_time', dayEnd.toISOString());
  if (error) {
    setMessage(scheduleMessage, error.message, true);
    return;
  }

  const existingStarts = new Set(
    (existing || []).map((slot) => new Date(slot.start_time).getTime())
  );
  const newSlots = slots.filter((slot) => !existingStarts.has(slot.start.getTime()));
  if (newSlots.length === 0) {
    setMessage(scheduleMessage, t('messages.scheduleEmpty'));
    return;
  }

  const rows = newSlots.map((slot) => ({
    doctor_id: currentProfile.id,
    start_time: slot.start.toISOString(),
    end_time: slot.end.toISOString(),
    status: 'open',
    facility_id: type === 'in_person' ? facilityId : null,
  }));
  const { error: insertError } = await supabaseClient.from('availability_slots').insert(rows);
  if (insertError) {
    setMessage(scheduleMessage, insertError.message, true);
    return;
  }
  setMessage(scheduleMessage, t('messages.scheduleCreated'));
  await loadDoctorAvailability();
}

function getStepsKey() {
  if (currentUser?.id) {
    return `bhealthy_steps_${currentUser.id}`;
  }
  return 'bhealthy_steps_guest';
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getStepsHistoryKey() {
  if (currentUser?.id) {
    return `bhealthy_steps_history_${currentUser.id}`;
  }
  return 'bhealthy_steps_history_guest';
}

function loadStepsHistory() {
  try {
    const raw = localStorage.getItem(getStepsHistoryKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveStepsHistory(history) {
  try {
    localStorage.setItem(getStepsHistoryKey(), JSON.stringify(history));
  } catch (error) {
    // ignore storage errors
  }
}

function updateStepsHistory(todaySteps) {
  if (!Number.isFinite(todaySteps)) return loadStepsHistory();
  const todayKey = getLocalDateKey();
  const history = loadStepsHistory().filter((entry) => entry?.date);
  const existing = history.find((entry) => entry.date === todayKey);
  if (existing) {
    existing.steps = todaySteps;
  } else {
    history.push({ date: todayKey, steps: todaySteps });
  }
  history.sort((a, b) => a.date.localeCompare(b.date));
  const trimmed = history.slice(-7);
  saveStepsHistory(trimmed);
  return trimmed;
}

function renderStepsTrend(history) {
  if (!stepsTrend || !stepsTrendSummary) return;
  stepsTrend.innerHTML = '';
  if (!history || history.length === 0) {
    stepsTrendSummary.textContent = t('hub.trendEmpty');
    return;
  }
  const maxSteps = Math.max(...history.map((entry) => entry.steps || 0), 1);
  history.forEach((entry) => {
    const bar = document.createElement('div');
    bar.className = 'trend-bar';
    const height = Math.max(6, Math.round((entry.steps / maxSteps) * 100));
    bar.style.height = `${height}%`;
    bar.title = `${entry.date}: ${entry.steps} ${t('hub.stepsUnit')}`;
    const label = document.createElement('span');
    label.className = 'trend-label';
    label.textContent = entry.date.slice(5);
    bar.appendChild(label);
    stepsTrend.appendChild(bar);
  });
  const todayKey = getLocalDateKey();
  const todayEntry = history.find((entry) => entry.date === todayKey);
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterdayKey = getLocalDateKey(yesterdayDate);
  const yesterdayEntry = history.find((entry) => entry.date === yesterdayKey);
  if (!todayEntry) {
    stepsTrendSummary.textContent = t('hub.trendEmpty');
    return;
  }
  if (!yesterdayEntry || !Number.isFinite(yesterdayEntry.steps) || yesterdayEntry.steps === 0) {
    stepsTrendSummary.textContent = formatMessage(t('hub.trendNoYesterday'), {
      today: todayEntry.steps,
    });
    return;
  }
  const diff = Math.round(((todayEntry.steps - yesterdayEntry.steps) / yesterdayEntry.steps) * 100);
  const diffLabel = diff > 0 ? `+${diff}` : `${diff}`;
  stepsTrendSummary.textContent = formatMessage(t('hub.trendSummary'), {
    today: todayEntry.steps,
    diff: diffLabel,
  });
}

function renderTrendGeneric(container, summaryEl, history, unitLabel, summaryTemplate, emptyText) {
  if (!container || !summaryEl) return;
  container.innerHTML = '';
  if (!history || history.length === 0) {
    summaryEl.textContent = emptyText;
    return;
  }
  const maxValue = Math.max(...history.map((entry) => entry.value || 0), 1);
  history.forEach((entry) => {
    const bar = document.createElement('div');
    bar.className = 'trend-bar';
    const height = Math.max(6, Math.round((entry.value / maxValue) * 100));
    bar.style.height = `${height}%`;
    bar.title = `${entry.date}: ${entry.value} ${unitLabel}`;
    const label = document.createElement('span');
    label.className = 'trend-label';
    label.textContent = entry.date.slice(5);
    bar.appendChild(label);
    container.appendChild(bar);
  });
  const todayKey = getLocalDateKey();
  const todayEntry = history.find((entry) => entry.date === todayKey);
  if (!todayEntry) {
    summaryEl.textContent = emptyText;
    return;
  }
  summaryEl.textContent = formatMessage(summaryTemplate, { today: todayEntry.value });
}

function getSleepKey() {
  if (currentUser?.id) {
    return `bhealthy_sleep_${currentUser.id}`;
  }
  return 'bhealthy_sleep_guest';
}

function getSleepHistoryKey() {
  if (currentUser?.id) {
    return `bhealthy_sleep_history_${currentUser.id}`;
  }
  return 'bhealthy_sleep_history_guest';
}

function loadSleepData() {
  try {
    const raw = localStorage.getItem(getSleepKey());
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function loadSleepHistory() {
  try {
    const raw = localStorage.getItem(getSleepHistoryKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveSleepHistory(history) {
  try {
    localStorage.setItem(getSleepHistoryKey(), JSON.stringify(history));
  } catch (error) {
    // ignore
  }
}

function updateSleepHistory(hours) {
  if (!Number.isFinite(hours)) return loadSleepHistory();
  const todayKey = getLocalDateKey();
  const history = loadSleepHistory().filter((entry) => entry?.date);
  const existing = history.find((entry) => entry.date === todayKey);
  if (existing) {
    existing.value = hours;
  } else {
    history.push({ date: todayKey, value: hours });
  }
  history.sort((a, b) => a.date.localeCompare(b.date));
  const trimmed = history.slice(-7);
  saveSleepHistory(trimmed);
  return trimmed;
}

function loadMoveData() {
  return loadStepsData();
}

function loadMoveHistory() {
  const history = loadStepsHistory();
  return history.map((entry) => ({ date: entry.date, value: entry.steps || 0 }));
}

function renderListItems(listEl, items) {
  if (!listEl) return;
  listEl.innerHTML = '';
  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listEl.appendChild(li);
  });
}

function estimateMinutesFromSteps(steps) {
  if (!Number.isFinite(steps) || steps <= 0) return 0;
  return Math.max(1, Math.round(steps / 100));
}

function estimateDistanceFromSteps(steps) {
  if (!Number.isFinite(steps) || steps <= 0) return 0;
  return Math.round(steps * 0.0008 * 10) / 10;
}

function getWeeklyMinutesFromHistory() {
  const history = loadMoveHistory();
  if (!history.length) return 0;
  const totalSteps = history.reduce((sum, entry) => sum + (entry.value || 0), 0);
  return estimateMinutesFromSteps(totalSteps);
}

function updateMoveDashboard(data) {
  const steps = Number(data?.today) || 0;
  const goal = Number(data?.goal) || 0;
  const minutes = estimateMinutesFromSteps(steps);
  const distance = estimateDistanceFromSteps(steps);

  if (moveStepsValue) {
    moveStepsValue.textContent = steps ? steps.toLocaleString() : '--';
  }
  if (moveMinutesValue) {
    moveMinutesValue.textContent = minutes ? minutes.toLocaleString() : '--';
  }
  if (moveDistanceValue) {
    moveDistanceValue.textContent = distance ? `${distance}` : '--';
  }

  if (moveCvhScore) {
    moveCvhScore.textContent = latestCvhScore !== null ? `${latestCvhScore}/100` : '--';
  }
  if (moveCvhLabel) {
    if (latestCvhScore === null) {
      moveCvhLabel.textContent = t('move.cvhEmpty');
    } else {
      moveCvhLabel.textContent = getLabelMap().find((entry) => latestCvhScore >= entry.min).text;
    }
  }

  const weeklyMinutes = getWeeklyMinutesFromHistory();
  if (movePAValue) {
    movePAValue.textContent = formatMessage(t('move.paValue'), {
      minutes: weeklyMinutes ? weeklyMinutes : '--',
    });
  }

  const systolic = parseNumber(bpSystolic?.value);
  const diastolic = parseNumber(bpDiastolic?.value);
  if (moveBPValue) {
    moveBPValue.textContent =
      systolic !== null && diastolic !== null ? `${systolic}/${diastolic}` : '--/--';
  }

  const recommendations = [];
  if (goal && steps && steps < goal) {
    recommendations.push(
      formatMessage(t('move.recommendGoal'), { diff: (goal - steps).toLocaleString() })
    );
  } else if (goal && steps >= goal) {
    recommendations.push(t('move.recommendGoalMet'));
  }
  if (!steps || steps < 7000) {
    recommendations.push(t('move.recommendMove'));
  }
  recommendations.push(t('move.recommendBreaks'));
  recommendations.push(t('move.recommendStrength'));
  renderListItems(moveRecommendationsList, recommendations);

  const targets = [];
  if (goal) {
    targets.push(formatMessage(t('move.targetSteps'), { goal: goal.toLocaleString() }));
  } else {
    targets.push(t('move.targetStepsDefault'));
  }
  targets.push(t('move.targetFruits'));
  targets.push(t('move.targetWater'));
  targets.push(t('move.targetStrength'));
  renderListItems(moveTargetsList, targets);
}

function refreshMoveDashboardIfVisible() {
  if (views.move && !views.move.classList.contains('hidden')) {
    updateMoveDashboard(loadMoveData());
  }
}

function getCvhScoresKey() {
  if (currentUser?.id) {
    return `bhealthy_cvh_scores_${currentUser.id}`;
  }
  return 'bhealthy_cvh_scores_guest';
}

function loadLocalCvhScores() {
  try {
    const raw = localStorage.getItem(getCvhScoresKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveLocalCvhScore(score, createdAt) {
  const history = loadLocalCvhScores();
  history.push({ score, created_at: createdAt });
  history.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
  const trimmed = history.slice(-10);
  try {
    localStorage.setItem(getCvhScoresKey(), JSON.stringify(trimmed));
  } catch (error) {
    // ignore storage errors
  }
  return trimmed;
}

async function loadCvhScores() {
  if (!supabaseClient || !currentProfile) {
    renderCvhTrend(loadLocalCvhScores());
    return;
  }
  const { data, error } = await supabaseClient
    .from('cvh_scores')
    .select('score, created_at')
    .eq('patient_id', currentProfile.id)
    .order('created_at', { ascending: false })
    .limit(10);
  if (error) {
    renderCvhTrend(loadLocalCvhScores());
    return;
  }
  renderCvhTrend(data || []);
}

async function saveCvhScore(score) {
  const createdAt = new Date().toISOString();
  if (!supabaseClient || !currentProfile) {
    const history = saveLocalCvhScore(score, createdAt);
    renderCvhTrend(history);
    return;
  }
  const { error } = await supabaseClient.from('cvh_scores').insert({
    patient_id: currentProfile.id,
    score,
    created_at: createdAt,
  });
  if (error) {
    const history = saveLocalCvhScore(score, createdAt);
    renderCvhTrend(history);
    return;
  }
  await loadCvhScores();
}

function renderCvhTrend(items) {
  if (!cvhTrend || !cvhTrendSummary || !cvhTrendEmpty) return;
  cvhTrend.innerHTML = '';
  if (!items || items.length === 0) {
    latestCvhScore = null;
    cvhTrendSummary.textContent = '';
    cvhTrendEmpty.classList.remove('hidden');
    refreshMoveDashboardIfVisible();
    refreshHubCvhActivityIfVisible();
    return;
  }
  const ordered = [...items].sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  cvhTrendEmpty.classList.add('hidden');
  ordered.forEach((entry) => {
    const bar = document.createElement('div');
    bar.className = 'trend-bar';
    const score = Number(entry.score) || 0;
    bar.style.height = `${Math.max(8, Math.min(100, score))}%`;
    bar.style.background = interpolateColor(score);
    bar.title = `${score} · ${new Date(entry.created_at).toLocaleDateString()}`;
    const label = document.createElement('span');
    label.className = 'trend-label';
    label.textContent = String(score);
    bar.appendChild(label);
    cvhTrend.appendChild(bar);
  });
  const latest = ordered[ordered.length - 1];
  latestCvhScore = Number(latest.score);
  const previous = ordered.length > 1 ? ordered[ordered.length - 2] : null;
  cvhTrendSummary.textContent = formatMessage(t('hub.cvhLatest'), {
    score: latest.score,
    date: new Date(latest.created_at).toLocaleDateString(),
  });
  if (previous && previous.score !== null && previous.score !== undefined) {
    const diff = Math.round(latest.score - previous.score);
    const diffLabel = diff > 0 ? `+${diff}` : `${diff}`;
    const changeLine = formatMessage(t('hub.cvhChange'), { diff: diffLabel });
    cvhTrendSummary.textContent = `${cvhTrendSummary.textContent} · ${changeLine}`;
  }
  refreshMoveDashboardIfVisible();
  refreshHubCvhActivityIfVisible();
}

function buildAskResponse(topic, question) {
  const q = (question || '').toLowerCase();
  const bullets = [];
  const urgentKeywords = ['chest pain', 'faint', 'fainting', 'shortness of breath', 'severe'];
  const hasUrgent = urgentKeywords.some((word) => q.includes(word));

  if (topic === 'meds') {
    bullets.push(t('hub.askMedsAdherence'));
    if (q.includes('miss') || q.includes('forgot') || q.includes('oubli') || q.includes('olvid')) {
      bullets.push(t('hub.askMedsMissed'));
    }
    if (q.includes('side effect') || q.includes('adverse') || q.includes('effet') || q.includes('efecto')) {
      bullets.push(t('hub.askMedsSideEffects'));
    }
    if (q.includes('interact') || q.includes('alcohol') || q.includes('supplement') || q.includes('alcool')) {
      bullets.push(t('hub.askMedsInteractions'));
    }
    if (bullets.length < 2) {
      bullets.push(t('hub.askMedsGeneral1'));
    }
    if (hasUrgent) {
      bullets.push(t('hub.askUrgent'));
    }
    return { intro: t('hub.askMedsIntro'), bullets };
  }

  if (q.includes('diet') || q.includes('food') || q.includes('salt') || q.includes('sugar') || q.includes('alimentation')) {
    bullets.push(t('hub.askCvhDiet'));
  }
  if (q.includes('exercise') || q.includes('activity') || q.includes('walk') || q.includes('activité')) {
    bullets.push(t('hub.askCvhActivity'));
  }
  if (q.includes('sleep') || q.includes('sommeil') || q.includes('sueño')) {
    bullets.push(t('hub.askCvhSleep'));
  }
  if (q.includes('smoke') || q.includes('tobacco') || q.includes('nicotine') || q.includes('tabac')) {
    bullets.push(t('hub.askCvhNicotine'));
  }
  if (q.includes('stress') || q.includes('anx')) {
    bullets.push(t('hub.askCvhStress'));
  }
  if (q.includes('blood pressure') || q.includes('bp') || q.includes('tension')) {
    bullets.push(t('hub.askCvhBp'));
  }
  if (bullets.length === 0) {
    bullets.push(t('hub.askCvhGeneral1'));
    bullets.push(t('hub.askCvhGeneral2'));
  }
  if (hasUrgent) {
    bullets.push(t('hub.askUrgent'));
  }
  return { intro: t('hub.askCvhIntro'), bullets };
}

function loadStepsData() {
  try {
    const raw = localStorage.getItem(getStepsKey());
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function renderStepsSummary(data) {
  if (!stepsSummary) return;
  if (!data || (!data.today && !data.goal)) {
    stepsSummary.textContent = t('hub.stepsEmpty');
    return;
  }
  const today = data.today ?? 0;
  if (data.goal) {
    const percent = Math.min(100, Math.round((today / data.goal) * 100));
    stepsSummary.textContent = `${today} ${t('hub.stepsUnit')} · ${percent}% ${t(
      'hub.stepsGoalLabel'
    )}`;
  } else {
    stepsSummary.textContent = `${today} ${t('hub.stepsUnit')}`;
  }
}

function updateHubCvhActivity() {
  if (
    !hubCvhScore &&
    !hubStepsValue &&
    !hubMinutesValue &&
    !hubDistanceValue &&
    !hubPAValue &&
    !hubBPValue
  ) {
    return;
  }
  const data = loadStepsData();
  const steps = Number(data?.today) || 0;
  const minutes = estimateMinutesFromSteps(steps);
  const distance = estimateDistanceFromSteps(steps);

  if (hubStepsValue) {
    hubStepsValue.textContent = steps ? steps.toLocaleString() : '--';
  }
  if (hubMinutesValue) {
    hubMinutesValue.textContent = minutes ? minutes.toLocaleString() : '--';
  }
  if (hubDistanceValue) {
    hubDistanceValue.textContent = distance ? `${distance}` : '--';
  }

  if (hubCvhScore) {
    hubCvhScore.textContent = latestCvhScore !== null ? `${latestCvhScore}/100` : '--';
  }
  if (hubCvhLabel) {
    if (latestCvhScore === null) {
      hubCvhLabel.textContent = t('move.cvhEmpty');
    } else {
      hubCvhLabel.textContent = getLabelMap().find((entry) => latestCvhScore >= entry.min).text;
    }
  }

  const weeklyMinutes = getWeeklyMinutesFromHistory();
  if (hubPAValue) {
    hubPAValue.textContent = formatMessage(t('move.paValue'), {
      minutes: weeklyMinutes ? weeklyMinutes : '--',
    });
  }

  const systolic = parseNumber(bpSystolic?.value);
  const diastolic = parseNumber(bpDiastolic?.value);
  if (hubBPValue) {
    const label = t('move.bpLabel');
    hubBPValue.textContent =
      systolic !== null && diastolic !== null
        ? `${label} ${systolic}/${diastolic}`
        : `${label} --/--`;
  }
}

function refreshHubCvhActivityIfVisible() {
  if (hubView && !hubView.classList.contains('hidden')) {
    updateHubCvhActivity();
  }
}

function loadHubSteps() {
  const data = loadStepsData();
  if (stepsToday) stepsToday.value = data?.today ?? '';
  if (stepsGoal) stepsGoal.value = data?.goal ?? '';
  renderStepsSummary(data);
  renderStepsTrend(loadStepsHistory());
  updateHubCvhActivity();
}

async function loadHubMedications() {
  if (!currentProfile) return;
  const { data, error } = await supabaseClient
    .from('medications')
    .select('*')
    .eq('patient_id', currentProfile.id)
    .order('created_at', { ascending: false })
    .limit(3);
  if (error) {
    return;
  }
  if (!hubMedList || !hubMedEmpty) return;
  hubMedList.innerHTML = '';
  if (!data || data.length === 0) {
    hubMedEmpty.classList.remove('hidden');
    return;
  }
  hubMedEmpty.classList.add('hidden');
  data.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const label = document.createElement('div');
    const name = document.createElement('strong');
    name.textContent = item.name;
    const detail = document.createElement('div');
    detail.className = 'muted';
    const parts = [item.dosage, item.posology].filter(Boolean);
    if (item.next_visit) {
      parts.push(`${t('meds.nextVisitShort')} ${new Date(item.next_visit).toLocaleDateString()}`);
    }
    detail.textContent = parts.join(' · ');
    label.appendChild(name);
    if (detail.textContent) label.appendChild(detail);
    li.appendChild(label);
    hubMedList.appendChild(li);
  });
}

async function loadHubAppointments() {
  if (!currentProfile) return;
  const { data } = await fetchUpcomingAppointments();
  cachedPatientAppointments = data || [];
  renderHubAppointments(cachedPatientAppointments);
}

function renderHubAppointments(items) {
  if (!hubAppointmentList || !hubAppointmentEmpty) return;
  const upcoming = items.slice(0, 3);
  hubAppointmentList.innerHTML = '';
  if (upcoming.length === 0) {
    hubAppointmentEmpty.classList.remove('hidden');
    return;
  }
  hubAppointmentEmpty.classList.add('hidden');
  upcoming.forEach((appt) => {
    const li = document.createElement('li');
    li.className = 'list-item';
    const nameParts = [appt.doctor?.first_name, appt.doctor?.last_name].filter(Boolean);
    const docName = nameParts.join(' ') || t('appointments.doctorFallback');
    li.textContent = `${docName} · ${formatDateTime(appt.start_time, appt.end_time)}`;
    hubAppointmentList.appendChild(li);
  });
}

async function loadHubSummary() {
  loadHubSteps();
  if (!supabaseClient) {
    updateHubCvhActivity();
    return;
  }
  await Promise.all([loadHubMedications(), loadHubAppointments()]);
  await loadCvhScores();
  updateHubCvhActivity();
}

function populateProfileForm(profile) {
  if (!profile) return;
  if (individualFirstName) individualFirstName.value = profile.first_name || '';
  if (individualLastName) individualLastName.value = profile.last_name || '';
  if (individualDob) individualDob.value = profile.date_of_birth || '';
  if (individualSex) individualSex.value = profile.sex || '';
  if (individualPhone) individualPhone.value = profile.phone || '';
  if (individualCity) individualCity.value = profile.city || '';
  if (individualCountry) individualCountry.value = profile.country || '';
  if (individualEmail) individualEmail.value = profile.email || currentUser?.email || '';
}

form.addEventListener('input', updateScore);
form.addEventListener('change', updateScore);

document.querySelectorAll('input[name="glucoseMode"]').forEach((input) => {
  input.addEventListener('change', updateScore);
});

bmiUnitInputs.forEach((input) => {
  input.addEventListener('change', () => {
    updateBmiUnitFields();
    updateScore();
  });
});

[weightLb, heightIn, weightKg, heightCm].forEach((input) => {
  if (!input) return;
  input.addEventListener('input', () => {
    updateBmiDisplay();
    updateScore();
  });
});

if (tabSignIn) {
  tabSignIn.addEventListener('click', () => setAuthMode('signin'));
}
if (tabSignUp) {
  tabSignUp.addEventListener('click', () => setAuthMode('signup'));
}

if (signInForm) {
  signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage(signInMessage, '');
    if (!supabaseClient) {
      setMessage(signInMessage, t('messages.supabaseMissing'), true);
      return;
    }
    const { error } = await supabaseClient.auth.signInWithPassword({
      email: signInEmail.value.trim(),
      password: signInPassword.value,
    });
    if (error) {
      setMessage(signInMessage, error.message, true);
    }
  });
}

if (signUpForm) {
  signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage(signUpMessage, '');
    if (!supabaseClient) {
      setMessage(signUpMessage, t('messages.supabaseMissing'), true);
      return;
    }
    if (signUpPassword.value !== signUpPasswordConfirm.value) {
      setMessage(signUpMessage, t('messages.passwordMismatch'), true);
      return;
    }
    setPendingRole('individual');
    const email = signUpEmail.value.trim();
    const password = signUpPassword.value;
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'individual',
        },
      },
    });
    if (error) {
      setMessage(signUpMessage, error.message, true);
      return;
    }
    if (data?.session) {
      setMessage(signUpMessage, t('messages.signUpSuccess'));
      handleSession(data.session);
      return;
    }
    const { data: signInData, error: signInError } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) {
      const msg = signInError.message.toLowerCase();
      if (msg.includes('confirm') || msg.includes('verification') || msg.includes('email')) {
        setMessage(signUpMessage, t('messages.signUpCheckEmail'));
      } else {
        setMessage(signUpMessage, signInError.message, true);
      }
      return;
    }
    setMessage(signUpMessage, t('messages.signUpSuccess'));
    handleSession(signInData.session);
  });
}

if (individualPhoto) {
  individualPhoto.addEventListener('change', (event) => {
    const file = event.target.files?.[0] || null;
    pendingIndividualPhotoFile = file;
    updateImagePreview(file, individualPhotoPreview);
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!currentUser) return;
    const role = 'individual';
    const base = {
      id: currentUser.id,
      role,
      email: currentUser.email,
    };
    const profileData = {
      ...base,
      first_name: individualFirstName.value.trim(),
      last_name: individualLastName.value.trim(),
      date_of_birth: individualDob.value || null,
      sex: individualSex.value || null,
      phone: individualPhone.value.trim(),
      city: individualCity.value.trim(),
      country: individualCountry.value.trim(),
    };
    await saveProfile(profileData, {
      profilePhotoFile: pendingIndividualPhotoFile,
    });
  });
}

if (signOutBtn) {
  signOutBtn.addEventListener('click', async () => {
    if (!supabaseClient) return;
    await supabaseClient.auth.signOut();
    setMessage(signInMessage, t('messages.signOut'));
  });
}

if (hubAssess) {
  hubAssess.addEventListener('click', () => showView('assessment'));
}
if (hubMeds) {
  hubMeds.addEventListener('click', () => {
    openMedsView();
  });
}
if (hubBook) {
  hubBook.addEventListener('click', () => {
    openAppointmentsView();
  });
}
if (hubOpenMove) {
  hubOpenMove.addEventListener('click', () => showView('move'));
}
if (hubOpenAssessment) {
  hubOpenAssessment.addEventListener('click', () => {
    showView('assessment');
    requestAnimationFrame(() => {
      scrollToTarget('scoreValue', 'assessment');
    });
  });
}

if (navButtons && navButtons.length) {
  navButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const target = event.currentTarget.getAttribute('data-view');
      if (!target) return;
      showView(target);
    });
  });
}

if (exploreButtons && exploreButtons.length) {
  exploreButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dest = button.getAttribute('data-explore');
      if (!dest) return;
      if (dest === 'ask') {
        showView('hub');
        requestAnimationFrame(() => {
          scrollToTarget('askForm', 'hubView');
        });
        return;
      }
      if (dest === 'meds') {
        openMedsView();
        return;
      }
      if (dest === 'appointments') {
        openAppointmentsView();
        return;
      }
      showView(dest);
    });
  });
}

if (suggestionCardio) {
  suggestionCardio.addEventListener('click', () => {
    openAssessmentFromSuggestion('assessment', 'scoreValue');
  });
}

if (suggestionLifestyle) {
  suggestionLifestyle.addEventListener('click', () => {
    openAssessmentFromSuggestion('advicePanel', 'scoreValue');
  });
}

if (modeInPerson) {
  modeInPerson.addEventListener('click', () => {
    setAppointmentMode('in_person');
    if (doctorSelect?.value) {
      loadAvailability(doctorSelect.value);
    }
  });
}
if (modeRemote) {
  modeRemote.addEventListener('click', () => {
    setAppointmentMode('remote');
    if (doctorSelect?.value) {
      loadAvailability(doctorSelect.value);
    }
  });
}
if (appointmentSearch) {
  appointmentSearch.addEventListener('input', filterDoctors);
}

if (backToHubBtn) {
  backToHubBtn.addEventListener('click', () => showView('hub'));
}
if (homeBtn) {
  homeBtn.addEventListener('click', () => showView('hub'));
}
if (backToHubFromMeds) {
  backToHubFromMeds.addEventListener('click', () => showView('hub'));
}
if (backToHubFromAppointments) {
  backToHubFromAppointments.addEventListener('click', () => showView('hub'));
}
if (medSetupBtn) {
  medSetupBtn.addEventListener('click', () => {
    if (medSetupSection) {
      medSetupSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

if (medForm) {
  medForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!currentProfile) return;
    const { error } = await supabaseClient.from('medications').insert({
      patient_id: currentProfile.id,
      added_by: currentProfile.id,
      added_by_name: getProfileDisplayName(currentProfile),
      added_by_role: currentProfile.role,
      name: medName.value.trim(),
      dosage: medDosage.value.trim(),
      posology: medPosology.value.trim(),
      doses_per_day: medDosesPerDay?.value ? Number.parseInt(medDosesPerDay.value, 10) : null,
      notes: medNotes.value.trim(),
      next_visit: medNextVisit.value || null,
    });
    if (error) {
      setMessage(medMessage, error.message, true);
      return;
    }
    medForm.reset();
    await loadMedications();
    await loadHubMedications();
  });
}

if (doctorSelect) {
  doctorSelect.addEventListener('change', (event) => {
    loadAvailability(event.target.value);
  });
}

if (availabilityForm) {
  availabilityForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!currentProfile) return;
    const type = availabilityType?.value || 'in_person';
    const facilityId = doctorFacilitySelect?.value || currentProfile.facility_id || null;
    if (type === 'in_person' && !facilityId) {
      setMessage(availabilityMessage, t('messages.facilityRequired'), true);
      return;
    }
    const start = new Date(availabilityStart.value);
    const minutes = Number.parseInt(availabilityDuration.value, 10) || 30;
    if (Number.isNaN(start.getTime())) return;
    const end = new Date(start.getTime() + minutes * 60000);
    const { error } = await supabaseClient.from('availability_slots').insert({
      doctor_id: currentProfile.id,
      start_time: start.toISOString(),
      end_time: end.toISOString(),
      status: 'open',
      facility_id: type === 'in_person' ? facilityId : null,
    });
    if (error) {
      setMessage(availabilityMessage, error.message, true);
      return;
    }
    availabilityForm.reset();
    await loadDoctorAvailability();
  });
}

if (generateScheduleBtn) {
  generateScheduleBtn.addEventListener('click', () => {
    generateDaySchedule();
  });
}

if (doctorFacilitySelect) {
  doctorFacilitySelect.addEventListener('change', async () => {
    if (!currentProfile || currentProfile.role !== 'doctor') return;
    const facilityId = doctorFacilitySelect.value || null;
    const { error } = await supabaseClient
      .from('profiles')
      .update({ facility_id: facilityId })
      .eq('id', currentProfile.id);
    if (!error) {
      currentProfile = { ...currentProfile, facility_id: facilityId };
      await loadDoctorStats();
    }
  });
}

if (doctorPatientSelect) {
  doctorPatientSelect.addEventListener('change', () => {
    const patientId = doctorPatientSelect.value;
    if (!patientId) {
      patientInfo.textContent = '';
      return;
    }
    const patient = cachedAppointments.find((appt) => appt.patient?.id === patientId)?.patient;
    if (patient) {
      const name = [patient.first_name, patient.last_name].filter(Boolean).join(' ');
      patientInfo.textContent = `${name || patient.email}`;
    }
  });
}

if (diagnosisForm) {
  diagnosisForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const patientId = doctorPatientSelect.value;
    if (!patientId) {
      setMessage(diagnosisMessage, t('messages.missingPatient'), true);
      return;
    }
    if (!diagnosisText.value.trim()) return;
    const { error } = await supabaseClient.from('diagnoses').insert({
      patient_id: patientId,
      doctor_id: currentProfile.id,
      summary: diagnosisText.value.trim(),
    });
    if (error) {
      setMessage(diagnosisMessage, error.message, true);
      return;
    }
    diagnosisForm.reset();
    setMessage(diagnosisMessage, t('messages.saved'));
  });
}

if (prescriptionForm) {
  prescriptionForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const patientId = doctorPatientSelect.value;
    if (!patientId) {
      setMessage(prescriptionMessage, t('messages.missingPatient'), true);
      return;
    }
    if (!prescriptionName.value.trim()) return;
    const { error } = await supabaseClient.from('medications').insert({
      patient_id: patientId,
      added_by: currentProfile.id,
      added_by_name: getProfileDisplayName(currentProfile),
      added_by_role: currentProfile.role,
      name: prescriptionName.value.trim(),
      dosage: prescriptionDosage.value.trim(),
      posology: prescriptionPosology.value.trim(),
    });
    if (error) {
      setMessage(prescriptionMessage, error.message, true);
      return;
    }
    prescriptionForm.reset();
    setMessage(prescriptionMessage, t('messages.saved'));
  });
}

if (staffForm) {
  staffForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!currentProfile) return;
    const { error } = await supabaseClient.from('facility_staff').insert({
      facility_id: currentProfile.id,
      doctor_name: staffName.value.trim(),
      specialty: staffSpecialty.value.trim(),
      email: staffEmail.value.trim(),
      contract_status: staffContract.value.trim(),
    });
    if (error) {
      setMessage(staffMessage, error.message, true);
      return;
    }
    staffForm.reset();
    loadFacilityStaff();
  });
}

if (stepsForm) {
  stepsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const today = stepsToday?.value ? Number.parseInt(stepsToday.value, 10) : null;
    const goal = stepsGoal?.value ? Number.parseInt(stepsGoal.value, 10) : null;
    const data = {
      today: Number.isFinite(today) ? today : null,
      goal: Number.isFinite(goal) ? goal : null,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(getStepsKey(), JSON.stringify(data));
    } catch (error) {
      // ignore storage errors
    }
    setMessage(stepsMessage, t('messages.saved'));
    renderStepsSummary(data);
    const history = updateStepsHistory(data.today ?? null);
    renderStepsTrend(history);
  });
}

if (deviceButtons && deviceButtons.length) {
  deviceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const container = button.closest('.device-connect');
      const messageEl = container ? container.querySelector('.form-message') : null;
      setMessage(messageEl || stepsConnectMessage, t('hub.deviceComingSoon'));
    });
  });
}

if (sleepForm) {
  sleepForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const hours = sleepHoursInput?.value ? Number.parseFloat(sleepHoursInput.value) : null;
    const goal = sleepGoalInput?.value ? Number.parseFloat(sleepGoalInput.value) : null;
    const payload = {
      hours: Number.isFinite(hours) ? hours : null,
      goal: Number.isFinite(goal) ? goal : null,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(getSleepKey(), JSON.stringify(payload));
    } catch (error) {
      // ignore
    }
    setMessage(sleepMessage, t('messages.saved'));
    if (sleepSummary) {
      if (!payload.hours) {
        sleepSummary.textContent = t('sleep.empty');
      } else if (payload.hours >= 7) {
        sleepSummary.textContent = t('sleep.summaryGood');
      } else {
        sleepSummary.textContent = t('sleep.summaryLow');
      }
    }
    const history = updateSleepHistory(payload.hours ?? null);
    if (sleepTrend && sleepTrendSummary) {
      renderTrendGeneric(
        sleepTrend,
        sleepTrendSummary,
        history,
        'h',
        '{today}h',
        t('sleep.trendEmpty')
      );
    }
  });
}

if (moveForm) {
  moveForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const today = moveStepsToday?.value ? Number.parseInt(moveStepsToday.value, 10) : null;
    const goal = moveStepsGoal?.value ? Number.parseInt(moveStepsGoal.value, 10) : null;
    const data = {
      today: Number.isFinite(today) ? today : null,
      goal: Number.isFinite(goal) ? goal : null,
      updatedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(getStepsKey(), JSON.stringify(data));
    } catch (error) {
      // ignore
    }
    setMessage(moveMessage, t('messages.saved'));
    if (moveSummary) {
      if (!data.today) {
        moveSummary.textContent = t('move.empty');
      } else if (data.goal && data.today >= data.goal) {
        moveSummary.textContent = t('move.summaryMet');
      } else {
        moveSummary.textContent = `${t('move.summaryKeep')} ${t('move.whoTip')}`;
      }
    }
    updateMoveDashboard(data);
    const history = updateStepsHistory(data.today ?? null).map((entry) => ({
      date: entry.date,
      value: entry.steps ?? 0,
    }));
    if (moveTrend && moveTrendSummary) {
      renderTrendGeneric(
        moveTrend,
        moveTrendSummary,
        history,
        t('hub.stepsUnit'),
        t('hub.trendNoYesterday'),
        t('move.trendEmpty')
      );
    }
  });
}

if (sleepConnectMessage) {
  document.querySelectorAll('#sleepView [data-device]').forEach((button) => {
    button.addEventListener('click', () => {
      setMessage(sleepConnectMessage, t('sleep.deviceComingSoon'));
    });
  });
}

if (moveConnectMessage) {
  document.querySelectorAll('#moveView [data-device]').forEach((button) => {
    button.addEventListener('click', () => {
      setMessage(moveConnectMessage, t('move.deviceComingSoon'));
    });
  });
}

if (cvhRunAssessment) {
  cvhRunAssessment.addEventListener('click', () => {
    showView('assessment');
    requestAnimationFrame(() => {
      scrollToTarget('assessment', 'scoreValue');
    });
  });
}

if (askForm) {
  askForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!askQuestion || !askResponseBody || !askResponse) return;
    const question = askQuestion.value.trim();
    if (!question) {
      setMessage(askMessage, t('messages.askEmpty'), true);
      askResponse.classList.add('hidden');
      return;
    }
    setMessage(askMessage, '');
    const topic = askTopic?.value || 'cvh';
    const { intro, bullets } = buildAskResponse(topic, question);
    const listItems = bullets.map((item) => `<li>${item}</li>`).join('');
    askResponseBody.innerHTML = `<p>${intro}</p><ul>${listItems}</ul>`;
    askResponse.classList.remove('hidden');
  });
}

getResultsBtn.addEventListener('click', async () => {
  const { complete, score, metrics } = calculateScore();
  const demographicsComplete = isDemographicsComplete();
  if (!complete || !demographicsComplete) {
    updateScore();
    return;
  }
  hasSubmitted = true;
  updateScoreDisplay(score);
  advicePanel.classList.remove('hidden');
  renderAdvice(score, metrics);
  openModal(score);
  await saveCvhScore(score);
});

closeModal.addEventListener('click', closeResults);
if (exitToHub) {
  exitToHub.addEventListener('click', () => {
    closeResults();
    hasSubmitted = false;
    goToHome();
  });
}
resultModal.addEventListener('click', (event) => {
  if (event.target === resultModal) closeResults();
});

resetBtn.addEventListener('click', () => {
  form.reset();
  hasSubmitted = false;
  closeResults();
  updateBmiUnitFields();
  updateScore();
});

const storedLang = (() => {
  try {
    return localStorage.getItem('myheartLang');
  } catch (error) {
    return null;
  }
})();

if (storedLang && translations[storedLang]) {
  currentLang = storedLang;
}

if (langSelect) {
  langSelect.value = currentLang;
  langSelect.addEventListener('change', (event) => {
    setLanguage(event.target.value);
  });
}

applyTranslations();
updateBmiUnitFields();
updateScore();
setAuthMode('signin');
showView('auth');
initAuth();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

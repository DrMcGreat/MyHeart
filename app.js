const form = document.getElementById('assessment');
const scoreValue = document.getElementById('scoreValue');
const scoreLabel = document.getElementById('scoreLabel');
const scoreIndicator = document.getElementById('scoreIndicator');
const modalIndicator = document.getElementById('modalIndicator');
const modalScore = document.getElementById('modalScore');
const modalLabel = document.getElementById('modalLabel');
const resultModal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');
const resetBtn = document.getElementById('resetBtn');
const getResultsBtn = document.getElementById('getResultsBtn');
const resultsHint = document.getElementById('resultsHint');

const ageInput = document.getElementById('age');
const sexSelect = document.getElementById('sex');

const activityModerate = document.getElementById('activityModerate');
const activityVigorous = document.getElementById('activityVigorous');
const nicotineStatus = document.getElementById('nicotineStatus');
const nicotineSecondhand = document.getElementById('nicotineSecondhand');
const sleepHours = document.getElementById('sleepHours');
const bmiValue = document.getElementById('bmiValue');
const lipidsNonHDL = document.getElementById('lipidsNonHDL');
const lipidsMeds = document.getElementById('lipidsMeds');
const glucoseA1c = document.getElementById('glucoseA1c');
const bpSystolic = document.getElementById('bpSystolic');
const bpDiastolic = document.getElementById('bpDiastolic');
const bpMeds = document.getElementById('bpMeds');

let hasSubmitted = false;

const labelMap = [
  { min: 80, text: 'High cardiovascular health' },
  { min: 50, text: 'Moderate cardiovascular health' },
  { min: 0, text: 'Low cardiovascular health' },
];

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
  if (bmiValue.value === '') return null;
  const bmi = parseNumber(bmiValue.value);
  if (bmi === null || bmi <= 0) return null;

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
  const metrics = [
    scoreDiet(),
    scoreActivity(),
    scoreNicotine(),
    scoreSleep(),
    scoreBmi(),
    scoreLipids(),
    scoreGlucose(),
    scoreBloodPressure(),
  ];

  const filledCount = metrics.filter((value) => value !== null).length;
  if (filledCount !== metrics.length) {
    return { complete: false, score: null };
  }

  const total = metrics.reduce((sum, value) => sum + value, 0);
  const average = Math.round(total / metrics.length);
  return { complete: true, score: average };
}

function updateScoreDisplay(score) {
  if (score === null) {
    scoreValue.textContent = '--';
    scoreValue.style.color = '';
    scoreIndicator.style.left = '0%';
    scoreIndicator.style.background = '#c7ddd5';
    return;
  }

  const color = interpolateColor(score);
  scoreValue.textContent = `${score} / 100`;
  scoreLabel.textContent = labelMap.find((entry) => score >= entry.min).text;
  scoreIndicator.style.left = `${score}%`;
  scoreIndicator.style.background = color;
  scoreValue.style.color = color;
}

function updateResultsButton(complete, demographicsComplete) {
  const ready = complete && demographicsComplete;
  getResultsBtn.disabled = !ready;
  if (ready) {
    resultsHint.textContent = 'Ready when you are.';
    return;
  }

  if (!demographicsComplete) {
    resultsHint.textContent = 'Add age and sex to enable results.';
  } else {
    resultsHint.textContent = 'Complete all health questions to enable results.';
  }
}

function updateScore() {
  const { complete, score } = calculateScore();
  const demographicsComplete = isDemographicsComplete();
  updateResultsButton(complete, demographicsComplete);

  if (!hasSubmitted) {
    scoreLabel.textContent = 'Fill out the form, then click Get Results.';
    updateScoreDisplay(null);
    return;
  }

  if (!complete) {
    scoreLabel.textContent = 'Complete all sections to see your score.';
    updateScoreDisplay(null);
    return;
  }

  updateScoreDisplay(score);
}

function openModal(score) {
  const color = interpolateColor(score);
  modalScore.textContent = `${score} / 100`;
  modalScore.style.color = color;
  modalLabel.textContent = labelMap.find((entry) => score >= entry.min).text;
  modalIndicator.style.left = `${score}%`;
  modalIndicator.style.background = color;
  resultModal.classList.remove('hidden');
}

function closeResults() {
  resultModal.classList.add('hidden');
}

form.addEventListener('input', updateScore);
form.addEventListener('change', updateScore);

document.querySelectorAll('input[name="glucoseMode"]').forEach((input) => {
  input.addEventListener('change', updateScore);
});

getResultsBtn.addEventListener('click', () => {
  const { complete, score } = calculateScore();
  const demographicsComplete = isDemographicsComplete();
  if (!complete || !demographicsComplete) {
    updateScore();
    return;
  }
  hasSubmitted = true;
  updateScoreDisplay(score);
  openModal(score);
});

closeModal.addEventListener('click', closeResults);
resultModal.addEventListener('click', (event) => {
  if (event.target === resultModal) closeResults();
});

resetBtn.addEventListener('click', () => {
  form.reset();
  hasSubmitted = false;
  closeResults();
  updateScore();
});

updateScore();

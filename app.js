const form = document.getElementById('assessment');
const scoreValue = document.getElementById('scoreValue');
const scoreLabel = document.getElementById('scoreLabel');
const scoreIndicator = document.getElementById('scoreIndicator');
const modalIndicator = document.getElementById('modalIndicator');
const modalScore = document.getElementById('modalScore');
const modalLabel = document.getElementById('modalLabel');
const resultModal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');
const splash = document.getElementById('splash');
const mainApp = document.getElementById('mainApp');
const startAssessBtn = document.getElementById('startAssessBtn');
const resetBtn = document.getElementById('resetBtn');
const getResultsBtn = document.getElementById('getResultsBtn');
const resultsHint = document.getElementById('resultsHint');
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
const bmiUnitInputs = document.querySelectorAll('input[name="bmiUnit"]');
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

const labelMap = [
  { min: 80, text: 'High cardiovascular health' },
  { min: 50, text: 'Moderate cardiovascular health' },
  { min: 0, text: 'Low cardiovascular health' },
];

const metricAdvice = {
  diet: 'Increase fruits, vegetables, whole grains, and choose water over sugary drinks.',
  activity: 'Aim for at least 150 minutes of moderate activity per week.',
  nicotine: 'Quitting nicotine is one of the biggest improvements for heart health.',
  sleep: 'Target 7 to 9 hours of sleep most nights.',
  bmi: 'Even modest weight loss can improve cardiovascular health.',
  lipids: 'Favor unsaturated fats and review cholesterol numbers with a clinician.',
  glucose: 'Limit refined carbs and follow your diabetes or prediabetes plan.',
  pressure: 'Reduce sodium, stay active, and manage stress to support healthy BP.',
};

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
  if (bmi === null) {
    bmiResult.value = '';
    return;
  }
  bmiResult.value = bmi.toFixed(1);
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
  const metrics = [
    { id: 'diet', label: 'Diet', score: scoreDiet(), advice: metricAdvice.diet },
    { id: 'activity', label: 'Physical activity', score: scoreActivity(), advice: metricAdvice.activity },
    { id: 'nicotine', label: 'Nicotine', score: scoreNicotine(), advice: metricAdvice.nicotine },
    { id: 'sleep', label: 'Sleep', score: scoreSleep(), advice: metricAdvice.sleep },
    { id: 'bmi', label: 'Weight', score: scoreBmi(), advice: metricAdvice.bmi },
    { id: 'lipids', label: 'Cholesterol', score: scoreLipids(), advice: metricAdvice.lipids },
    { id: 'glucose', label: 'Blood sugar', score: scoreGlucose(), advice: metricAdvice.glucose },
    { id: 'pressure', label: 'Blood pressure', score: scoreBloodPressure(), advice: metricAdvice.pressure },
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

function getClinicianFlags(score) {
  const flags = [];
  if (score !== null && score < 50) {
    flags.push('overall score in the low range');
  }

  const systolic = parseNumber(bpSystolic.value);
  const diastolic = parseNumber(bpDiastolic.value);
  if (systolic !== null && diastolic !== null && (systolic >= 140 || diastolic >= 90)) {
    flags.push('blood pressure in a high range');
  }

  const a1c = parseNumber(glucoseA1c.value);
  const glucoseMode = getGlucoseMode();
  if (a1c !== null && glucoseMode === 'no-diabetes' && a1c >= 5.7) {
    flags.push('blood sugar above normal');
  }
  if (a1c !== null && glucoseMode === 'diabetes' && a1c >= 7) {
    flags.push('blood sugar above target');
  }

  const nonHdl = parseNumber(lipidsNonHDL.value);
  if (nonHdl !== null && nonHdl >= 190) {
    flags.push('non-HDL cholesterol high');
  }

  const bmi = calculateBmiValue();
  if (bmi !== null && bmi >= 30) {
    flags.push('BMI in the obesity range');
  }

  if (nicotineStatus.value === '0' || nicotineStatus.value === '25') {
    flags.push('nicotine use or recent use');
  }
  if (nicotineSecondhand.checked) {
    flags.push('frequent secondhand smoke exposure');
  }

  return flags;
}

function buildAdvice(score, metrics) {
  const focusAreas = metrics
    .filter((metric) => metric.score !== null && metric.score < 80)
    .sort((a, b) => a.score - b.score);

  const listItems = focusAreas.length
    ? focusAreas.slice(0, 3).map((metric) => `${metric.label}: ${metric.advice}`)
    : [
        'Maintain balanced meals and hydration to keep your diet score high.',
        'Keep regular activity, sleep, and stress management routines.',
        'Stay nicotine-free and keep up routine checkups.',
      ];

  let summary = 'Your cardiovascular health is trending well.';
  if (score !== null) {
    if (score >= 80) {
      summary = 'High range. Keep your strongest habits steady.';
    } else if (score >= 50) {
      summary = 'Moderate range. Improving a few areas can lift your score.';
    } else {
      summary = 'Low range. It may be worth discussing this with a healthcare professional.';
    }
  }

  const flags = getClinicianFlags(score);
  const clinicianText = flags.length
    ? `Consider discussing with a healthcare professional if any apply: ${flags.join(', ')}.`
    : 'If you have symptoms or concerns, consider discussing your results with a healthcare professional.';

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
    scoreLabel.textContent = 'Fill out the form, then click Get Results.';
    updateScoreDisplay(null);
    advicePanel.classList.add('hidden');
    return;
  }

  if (!complete) {
    scoreLabel.textContent = 'Complete all sections to see your score.';
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

bmiUnitInputs.forEach((input) => {
  input.addEventListener('change', () => {
    updateBmiUnitFields();
    updateScore();
  });
});

function showMainApp() {
  if (!splash || !mainApp) return;
  splash.classList.add('hidden');
  mainApp.classList.remove('hidden');
  mainApp.scrollIntoView({ behavior: 'smooth' });
}

if (startAssessBtn) {
  startAssessBtn.addEventListener('click', showMainApp);
}

getResultsBtn.addEventListener('click', () => {
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
});

closeModal.addEventListener('click', closeResults);
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

updateBmiUnitFields();
updateScore();

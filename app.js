const form = document.getElementById('assessment');
const scoreValue = document.getElementById('scoreValue');
const scoreLabel = document.getElementById('scoreLabel');
const scoreIndicator = document.getElementById('scoreIndicator');
const modalIndicator = document.getElementById('modalIndicator');
const modalScore = document.getElementById('modalScore');
const modalLabel = document.getElementById('modalLabel');
const resultModal = document.getElementById('resultModal');
const closeModal = document.getElementById('closeModal');
const exitToSplash = document.getElementById('exitToSplash');
const splash = document.getElementById('splash');
const mainApp = document.getElementById('mainApp');
const startAssessBtn = document.getElementById('startAssessBtn');
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
let currentLang = 'en';

const translations = {
  en: {
    title: 'MyHeart - Check you heart health',
    language: { label: 'Language' },
    hero: {
      title: 'Check you heart health',
      subhead:
        'A simple, private check-in on eight key cardiovascular health metrics. No profiles, no saving data.',
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
    splash: { assess: 'Assess' },
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
    title: 'MyHeart - Vérifiez la santé de votre cœur',
    language: { label: 'Langue' },
    hero: {
      title: 'Vérifiez la santé de votre cœur',
      subhead:
        'Un bref auto-bilan privé de huit indicateurs clés de santé cardiovasculaire. Sans compte, aucune donnée enregistrée.',
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
    splash: { assess: 'Évaluer' },
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
    title: 'MyHeart - Revisa la salud de tu corazón',
    language: { label: 'Idioma' },
    hero: {
      title: 'Revisa la salud de tu corazón',
      subhead:
        'Un chequeo privado y sencillo de ocho métricas clave de salud cardiovascular. Sin cuentas, sin guardar datos.',
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
    splash: { assess: 'Evaluar' },
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
  updateScore();

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
    scoreIndicator.style.left = '0%';
    scoreIndicator.style.background = '#c7ddd5';
    return;
  }

  const color = interpolateColor(score);
  scoreValue.textContent = `${score} / 100`;
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

function showMainApp() {
  if (!splash || !mainApp) return;
  splash.classList.add('hidden');
  mainApp.classList.remove('hidden');
  mainApp.scrollIntoView({ behavior: 'smooth' });
}

function showSplash() {
  if (!splash || !mainApp) return;
  hasSubmitted = false;
  closeResults();
  mainApp.classList.add('hidden');
  splash.classList.remove('hidden');
  if (window.location.hash === '#mainApp') {
    history.replaceState('', document.title, window.location.pathname + window.location.search);
  }
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
if (exitToSplash) {
  exitToSplash.addEventListener('click', showSplash);
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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

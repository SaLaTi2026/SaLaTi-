/* =========================================================
   SALATI - Application Musulmane PWA
   Heures de prières, Adhan, Qibla, Calendrier Hégirien, Douaas
   ========================================================= */

'use strict';

// ============ CONSTANTES HIJRI ============
const HIJRI_MONTHS_AR = [
  'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني',
  'جمادى الأولى', 'جمادى الثانية', 'رجب', 'شعبان',
  'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
];

// Coordonnées de la Kaaba (Mecque)
const KAABA = {
  lat: 21.4225,
  lng: 39.8262
};


// ============ TRADUCTIONS ============
const I18N = {
  fr: {
    appName: 'Salati',
    nextPrayer: 'Prochaine prière',
    prayers: 'Prières', qibla: 'Qibla', calendar: 'Hégirien', duas: 'Douaas',
    adhanSettings: "Voix de l'Adhan",
    adhanSub: "Choisissez le muezzin qui récite l'appel à la prière.",
    testAdhan: '▶ Tester l\'Adhan',
    muteMode: '🔇 Mode silence',
    calcMethod: 'Méthode de calcul',
    direction: 'Direction Qibla', distance: 'Distance Kaaba',
    cardinalN: 'Nord', cardinalS: 'Sud', cardinalE: 'Est', cardinalW: 'Ouest',
    heading: 'Orientation téléphone',
    qiblaStatusInit: 'Appuyez sur "Activer" pour utiliser la boussole',
    activateCompass: '🧭 Activer la boussole',
    hijriAdjust: 'Ajustement du calendrier Hégirien',
    hijriAdjustSub: 'Ajustez de ±1 ou ±2 jours selon l\'observation lunaire locale.',
    days: 'jours', reset: '↺ Réinitialiser',
    islamicDates: 'Dates islamiques importantes',
    today: "Aujourd'hui", importantDate: 'Date importante',
    settings: 'Paramètres', location: 'Localisation',
    detectGPS: 'Détecter ma position (GPS)', searchCity: '🔍 Rechercher',
    notifications: 'Notifications',
    enableNotif: "Activer les notifications d'Adhan",
    requestPermission: '🔔 Autoriser les notifications',
    prayerAdjust: 'Ajustement heures de prière (min)',
    about: 'À propos',
    all: 'Toutes', daily: 'Quotidiennes',
    prayerDuas: 'Prières', protection: 'Protection',
    fajr: 'Fajr', sunrise: 'Shouroûq', dhuhr: 'Dhohr',
    asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha',
    aligned: '✓ Vous êtes face à la Qibla',
    facingQibla: 'Tournez jusqu\'à aligner l\'aiguille vers le haut',
    notifOk: '✓ Notifications activées', notifKo: 'Notifications refusées',
    locationOk: '✓ Localisation obtenue', locationKo: 'Impossible d\'obtenir la localisation',
    locationNeeded: 'Activez la localisation pour les heures exactes',
    loadError: 'Erreur de chargement. Vérifiez votre connexion.',
    prayerTime: 'Il est temps de prier',
    compassNotSupported: 'Votre appareil ne supporte pas la boussole',
    compassPermissionDenied: 'Permission refusée pour la boussole'
  },
  en: {
    appName: 'Salati',
    nextPrayer: 'Next prayer',
    prayers: 'Prayers', qibla: 'Qibla', calendar: 'Hijri', duas: 'Duas',
    adhanSettings: 'Adhan voice',
    adhanSub: 'Choose the muezzin who recites the call to prayer.',
    testAdhan: '▶ Test Adhan',
    muteMode: '🔇 Mute mode',
    calcMethod: 'Calculation method',
    direction: 'Qibla direction', distance: 'Kaaba distance',
    cardinalN: 'North', cardinalS: 'South', cardinalE: 'East', cardinalW: 'West',
    heading: 'Phone heading',
    qiblaStatusInit: 'Tap "Activate" to use the compass',
    activateCompass: '🧭 Activate compass',
    hijriAdjust: 'Hijri calendar adjustment',
    hijriAdjustSub: 'Adjust by ±1 or ±2 days according to local moon sighting.',
    days: 'days', reset: '↺ Reset',
    islamicDates: 'Important Islamic dates',
    today: 'Today', importantDate: 'Important date',
    settings: 'Settings', location: 'Location',
    detectGPS: 'Detect my location (GPS)', searchCity: '🔍 Search',
    notifications: 'Notifications',
    enableNotif: 'Enable Adhan notifications',
    requestPermission: '🔔 Allow notifications',
    prayerAdjust: 'Prayer time adjustment (min)',
    about: 'About',
    all: 'All', daily: 'Daily',
    prayerDuas: 'Prayer', protection: 'Protection',
    fajr: 'Fajr', sunrise: 'Sunrise', dhuhr: 'Dhuhr',
    asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha',
    aligned: '✓ You are facing the Qibla',
    facingQibla: 'Rotate until the needle points up',
    notifOk: '✓ Notifications enabled', notifKo: 'Notifications denied',
    locationOk: '✓ Location acquired', locationKo: 'Unable to get location',
    locationNeeded: 'Enable location for accurate times',
    loadError: 'Loading error. Check your connection.',
    prayerTime: 'Time to pray',
    compassNotSupported: 'Your device does not support the compass',
    compassPermissionDenied: 'Compass permission denied'
  },
  ar: {
    appName: 'صلاتي',
    nextPrayer: 'الصلاة القادمة',
    prayers: 'الصلوات', qibla: 'القبلة', calendar: 'هجري', duas: 'أدعية',
    adhanSettings: 'صوت الأذان',
    adhanSub: 'اختر المؤذن الذي ترغب في الاستماع إليه.',
    testAdhan: '▶ تجربة الأذان',
    muteAdhan: '🔇 وضع الصمت',
    calcMethod: 'طريقة الحساب',
    direction: 'اتجاه القبلة', distance: 'المسافة إلى الكعبة',
    heading: 'اتجاه الهاتف',
    qiblaStatusInit: 'اضغط "تفعيل" لاستخدام البوصلة',
    activateCompass: '🧭 تفعيل البوصلة',
    hijriAdjust: 'تعديل التقويم الهجري',
    hijriAdjustSub: 'اضبط بـ ±1 أو ±2 يوم حسب رؤية الهلال المحلية.',
    days: 'أيام', reset: '↺ إعادة تعيين',
    islamicDates: 'تواريخ إسلامية مهمة',
    today: 'اليوم', importantDate: 'تاريخ مهم',
    settings: 'الإعدادات', location: 'الموقع',
    muteMode: 'وضع الصمت (بدون صوت)',
    detectGPS: 'تحديد موقعي (GPS)', searchCity: '🔍 بحث',
    notifications: 'الإشعارات',
    enableNotif: 'تفعيل إشعارات الأذان',
    requestPermission: '🔔 السماح بالإشعارات',
    prayerAdjust: 'تعديل أوقات الصلاة (دقيقة)',
    about: 'حول التطبيق',
    all: 'الكل', daily: 'يومية',
    prayerDuas: 'الصلاة', protection: 'الحماية',
    fajr: 'الفجر', sunrise: 'الشروق', dhuhr: 'الظهر',
    asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء',
    aligned: '✓ أنت متجه نحو القبلة',
    facingQibla: 'استدر حتى يشير السهم إلى الأعلى',
    notifOk: '✓ تم تفعيل الإشعارات', notifKo: 'تم رفض الإشعارات',
    locationOk: '✓ تم تحديد الموقع', locationKo: 'تعذر تحديد الموقع',
    locationNeeded: 'فعّل الموقع للحصول على أوقات دقيقة',
    loadError: 'خطأ في التحميل. تحقق من اتصالك.',
    prayerTime: 'حان وقت الصلاة',
    compassNotSupported: 'جهازك لا يدعم البوصلة',
    compassPermissionDenied: 'تم رفض إذن البوصلة',
    cardinalN: 'الشمال', cardinalS: 'الجنوب', cardinalE: 'الشرق', cardinalW: 'الغرب'
  },
  es: {
    appName: 'Salati',
    nextPrayer: 'Próxima oración',
    prayers: 'Oraciones', qibla: 'Qibla', calendar: 'Hégira', duas: 'Súplicas',
    adhanSettings: 'Voz del Adhan',
    adhanSub: 'Elija el muecín.',
    testAdhan: '▶ Probar Adhan',
    muteMode: '🔇 Modo silencio',
    calcMethod: 'Método de cálculo',
    direction: 'Dirección Qibla', distance: 'Distancia Kaaba',
    heading: 'Orientación',
    qiblaStatusInit: 'Pulse "Activar" para usar la brújula',
    activateCompass: '🧭 Activar brújula',
    hijriAdjust: 'Ajuste calendario Hégira',
    hijriAdjustSub: 'Ajuste ±1 o ±2 días según observación lunar.',
    days: 'días', reset: '↺ Reiniciar',
    islamicDates: 'Fechas islámicas',
    today: 'Hoy', importantDate: 'Fecha importante',
    settings: 'Ajustes', location: 'Ubicación',
    detectGPS: 'Detectar mi posición', searchCity: '🔍 Buscar',
    notifications: 'Notificaciones',
    enableNotif: 'Activar notificaciones',
    requestPermission: '🔔 Permitir notificaciones',
    prayerAdjust: 'Ajuste de horarios (min)',
    about: 'Acerca de',
    all: 'Todas', daily: 'Diarias',
    prayerDuas: 'Oración', protection: 'Protección',
    fajr: 'Fajr', sunrise: 'Shuruq', dhuhr: 'Dhuhr',
    asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha',
    aligned: '✓ Está frente a la Qibla',
    facingQibla: 'Gire hasta alinear la aguja',
    notifOk: '✓ Notificaciones activas', notifKo: 'Notificaciones denegadas',
    locationOk: '✓ Ubicación obtenida', locationKo: 'No se pudo obtener ubicación',
    locationNeeded: 'Active la ubicación para horarios exactos',
    loadError: 'Error de carga.',
    prayerTime: 'Hora de orar',
    compassNotSupported: 'Dispositivo no compatible con brújula',
    compassPermissionDenied: 'Permiso denegado',
    cardinalN: 'Norte', cardinalS: 'Sur', cardinalE: 'Este', cardinalW: 'Oeste'
  },
  tr: {
    appName: 'Salati',
    nextPrayer: 'Sonraki namaz',
    prayers: 'Namazlar', qibla: 'Kıble', calendar: 'Hicri', duas: 'Dualar',
    adhanSettings: 'Ezan sesi',
    adhanSub: 'Müezzini seçin.',
    testAdhan: '▶ Ezanı dene',
    muteMode: '🔇 Sessiz mod',
    calcMethod: 'Hesaplama yöntemi',
    direction: 'Kıble yönü', distance: 'Kâbe mesafesi',
    heading: 'Telefon yönü',
    qiblaStatusInit: 'Pusulayı kullanmak için "Etkinleştir"e dokunun',
    activateCompass: '🧭 Pusulayı etkinleştir',
    hijriAdjust: 'Hicri takvim ayarı',
    hijriAdjustSub: 'Yerel hilâl gözlemine göre ±1 veya ±2 gün ayarlayın.',
    days: 'gün', reset: '↺ Sıfırla',
    islamicDates: 'Önemli İslami günler',
    today: 'Bugün', importantDate: 'Önemli gün',
    settings: 'Ayarlar', location: 'Konum',
    detectGPS: 'Konumumu tespit et', searchCity: '🔍 Ara',
    notifications: 'Bildirimler',
    enableNotif: 'Ezan bildirimlerini aç',
    requestPermission: '🔔 Bildirimlere izin ver',
    prayerAdjust: 'Namaz vakti ayarı (dk)',
    about: 'Hakkında',
    all: 'Tümü', daily: 'Günlük',
    prayerDuas: 'Namaz', protection: 'Korunma',
    fajr: 'İmsak', sunrise: 'Güneş', dhuhr: 'Öğle',
    asr: 'İkindi', maghrib: 'Akşam', isha: 'Yatsı',
    aligned: '✓ Kıbleye dönüksünüz',
    facingQibla: 'Oku yukarı hizalayana kadar dönün',
    notifOk: '✓ Bildirimler açık', notifKo: 'Bildirimler reddedildi',
    locationOk: '✓ Konum alındı', locationKo: 'Konum alınamadı',
    locationNeeded: 'Doğru vakitler için konumu açın',
    loadError: 'Yükleme hatası.',
    prayerTime: 'Namaz vakti',
    compassNotSupported: 'Cihazınız pusulayı desteklemiyor',
    compassPermissionDenied: 'İzin reddedildi',
    cardinalN: 'Kuzey', cardinalS: 'Güney', cardinalE: 'Doğu', cardinalW: 'Batı'
  }
};

// ============ DONNÉES DOUAAS ============
const DUAS = [
  {
    id: 1, cat: 'daily', title: 'Au réveil',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    translit: 'Alhamdulillâhil-ladhî ahyânâ ba\'da mâ amâtanâ wa ilayhin-nushûr',
    translation: 'Louange à Allah qui nous a redonné la vie après nous avoir fait mourir, et c\'est vers Lui qu\'aura lieu la résurrection.'
  },
  {
    id: 2, cat: 'daily', title: 'Avant de dormir',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    translit: 'Bismika-llâhumma amûtu wa ahyâ',
    translation: 'Ô Allah, en Ton Nom je meurs et je vis.'
  },
  {
    id: 3, cat: 'daily', title: 'Avant de manger',
    arabic: 'بِسْمِ اللَّهِ',
    translit: 'Bismillâh',
    translation: 'Au nom d\'Allah.'
  },
  {
    id: 4, cat: 'daily', title: 'Après le repas',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    translit: 'Alhamdulillâhil-ladhî at\'amanî hâdhâ wa razaqanîhi min ghayri hawlim minnî wa lâ quwwah',
    translation: 'Louange à Allah qui m\'a nourri et qui me l\'a procuré sans pouvoir ni force de ma part.'
  },
  {
    id: 5, cat: 'prayer', title: 'Après l\'Adhan',
    arabic: 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ',
    translit: 'Allâhumma rabba hâdhihi-d-da\'wati-t-tâmmah, was-salâti-l-qâ\'imah, âti Muhammadan-l-wasîlata wal-fadîlah',
    translation: 'Ô Allah, Seigneur de cet appel parfait et de la prière qui va être accomplie, accorde à Muhammad le droit d\'intercession et la faveur (d\'être élevé à une station éminente).'
  },
  {
    id: 6, cat: 'prayer', title: 'Avant la prière (Istiftah)',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
    translit: 'Subhânaka-llâhumma wa bihamdik, wa tabâraka-smuk, wa ta\'âlâ jadduk, wa lâ ilâha ghayruk',
    translation: 'Gloire à Toi ô Allah, et à Toi la louange. Béni soit Ton Nom. Exaltée soit Ta Grandeur. Nul n\'est digne d\'adoration en dehors de Toi.'
  },
  {
    id: 7, cat: 'protection', title: 'Protection matin et soir',
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ',
    translit: 'Bismillâhil-ladhî lâ yadurru ma\'a-smihî shay\'un fil-ardi wa lâ fis-samâ\', wa huwas-samî\'ul-\'alîm',
    translation: 'Au nom d\'Allah, par le Nom duquel rien sur terre ni au ciel ne peut nuire. Il est l\'Audient, l\'Omniscient. (À dire 3 fois matin et soir.)'
  },
  {
    id: 8, cat: 'protection', title: 'Ayat al-Kursi',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    translit: 'Allâhu lâ ilâha illâ huwal-hayyul-qayyûm, lâ ta\'khudhuhu sinatun wa lâ nawm...',
    translation: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent... (Al-Baqara 2:255, verset de protection majeure)'
  },
  {
    id: 9, cat: 'daily', title: 'En entrant aux toilettes',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ',
    translit: 'Allâhumma innî a\'ûdhu bika mina-l-khubthi wa-l-khabâ\'ith',
    translation: 'Ô Allah, je cherche refuge auprès de Toi contre les démons mâles et femelles.'
  },
  {
    id: 10, cat: 'daily', title: 'En sortant des toilettes',
    arabic: 'غُفْرَانَكَ',
    translit: 'Ghufrânak',
    translation: 'Je demande Ton pardon, ô Allah.'
  },
  {
    id: 11, cat: 'daily', title: 'En sortant de la maison',
    arabic: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    translit: 'Bismillâh, tawakkaltu \'ala-llâh, wa lâ hawla wa lâ quwwata illâ billâh',
    translation: 'Au nom d\'Allah, je place ma confiance en Allah, et il n\'y a de force ni de puissance qu\'en Allah.'
  },
  {
    id: 12, cat: 'protection', title: 'Sayyid al-Istighfar',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ',
    translit: 'Allâhumma anta rabbî lâ ilâha illâ ant, khalaqtanî wa ana \'abduk...',
    translation: 'Ô Allah, Tu es mon Seigneur, nul n\'est digne d\'adoration en dehors de Toi. Tu m\'as créé et je suis Ton serviteur... (Maître des formules de pardon)'
  }
];

// ============ DATES ISLAMIQUES IMPORTANTES ============
const ISLAMIC_EVENTS = [
  { month: 1, day: 1,  name: 'Nouvel an Hégirien', name_ar: 'رأس السنة الهجرية' },
  { month: 1, day: 10, name: 'Jour de Achoura', name_ar: 'عاشوراء' },
  { month: 3, day: 12, name: 'Mawlid (Naissance du Prophète ﷺ)', name_ar: 'المولد النبوي' },
  { month: 7, day: 27, name: 'Laylat al-Isra wal-Mi\'raj', name_ar: 'ليلة الإسراء والمعراج' },
  { month: 8, day: 15, name: 'Laylat al-Bara\'ah', name_ar: 'ليلة البراءة' },
  { month: 9, day: 1,  name: 'Début du Ramadan', name_ar: 'بداية رمضان' },
  { month: 9, day: 27, name: 'Laylat al-Qadr (probable)', name_ar: 'ليلة القدر' },
  { month: 10, day: 1, name: 'Aïd al-Fitr', name_ar: 'عيد الفطر' },
  { month: 12, day: 9, name: 'Jour d\'Arafat', name_ar: 'يوم عرفة' },
  { month: 12, day: 10, name: 'Aïd al-Adha', name_ar: 'عيد الأضحى' }
];

// ============ SOURCES AUDIO ADHAN (streaming) ============
const ADHAN_SOURCES = {
  morocco: 'https://www.islamcan.com/audio/adhan/azan9.mp3',
  mecca:   'https://www.islamcan.com/audio/adhan/azan2.mp3',
  madina:  'https://www.islamcan.com/audio/adhan/azan3.mp3',
  egypt:   'https://www.islamcan.com/audio/adhan/azan18.mp3',
  turkey:  'https://www.islamcan.com/audio/adhan/azan11.mp3',
  alaqsa:  'https://www.islamcan.com/audio/adhan/azan13.mp3',
  none:    ''
};

// ============ ÉTAT GLOBAL ============
const state = {
  lang: localStorage.getItem('salati_lang') || 'fr',
  location: JSON.parse(localStorage.getItem('salati_location') || 'null'),
  method: parseInt(localStorage.getItem('salati_method')) || 21, // Maroc par défaut
  adhan: localStorage.getItem('salati_adhan') || 'morocco',
  muteMode: localStorage.getItem('salati_muteMode') === 'true',
  hijriAdjust: parseInt(localStorage.getItem('salati_hijri_adjust')) || 0,
  prayerTimes: null,
  hijriToday: null,
  calendarMonth: null, // {year, month} pour calendrier
  notifEnabled: localStorage.getItem('salati_notif') === 'true',
  prayerAlerts: JSON.parse(localStorage.getItem('salati_alerts') || '{"Fajr":true,"Dhuhr":true,"Asr":true,"Maghrib":true,"Isha":true}'),
  prayerAdjusts: JSON.parse(localStorage.getItem('salati_adjusts') || '{"Fajr":0,"Dhuhr":0,"Asr":0,"Maghrib":0,"Isha":0}'),
  compassActive: false,
  currentHeading: 0,
  qiblaAngle: null,
  nextPrayer: null
};

// ============ HELPERS ============
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

function t(key) {
  return (I18N[state.lang] && I18N[state.lang][key]) || I18N.fr[key] || key;
}

function toast(msg, type = '') {
  const el = $('#toast');
  el.textContent = msg;
  el.className = `toast ${type}`;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 3200);
}

function pad(n) { return String(n).padStart(2, '0'); }

function fmtTime(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

// ============ CALCUL HÉGIRIEN (Algorithme Umm al-Qura) ============
// Conversion grégorienne -> hégirienne sans API externe
function gregorianToHijri(date) {
  // Algorithme Kuwaiti / Umm al-Qura approximation
  const jd = gregorianToJulian(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const adjusted = jd - state.hijriAdjust;
  return julianToHijri(adjusted);
}

function gregorianToJulian(year, month, day) {
  if (month < 3) { year -= 1; month += 12; }
  const a = Math.floor(year / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (year + 4716))
       + Math.floor(30.6001 * (month + 1))
       + day + b - 1524;
}

function julianToHijri(jd) {
  // Algorithme arithmétique standard
  const l = jd - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l1 = l - 10631 * n + 354;
  const j = Math.floor((10985 - l1) / 5316) * Math.floor((50 * l1) / 17719)
          + Math.floor(l1 / 5670) * Math.floor((43 * l1) / 15238);
  const l2 = l1 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50)
            - Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor((24 * l2) / 709);
  const day = l2 - Math.floor((709 * month) / 24);
  const year = 30 * n + j - 30;
  return { year, month, day };
}

function hijriToJulian(year, month, day) {
  return Math.floor((11 * year + 3) / 30)
       + 354 * year + 30 * month
       - Math.floor((month - 1) / 2) + day + 1948440 - 385;
}

function julianToGregorian(jd) {
  const a = jd + 32044;
  const b = Math.floor((4 * a + 3) / 146097);
  const c = a - Math.floor((146097 * b) / 4);
  const d = Math.floor((4 * c + 3) / 1461);
  const e = c - Math.floor((1461 * d) / 4);
  const m = Math.floor((5 * e + 2) / 153);
  const day = e - Math.floor((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * Math.floor(m / 10);
  const year = 100 * b + d - 4800 + Math.floor(m / 10);
  return new Date(year, month - 1, day);
}

const HIJRI_MONTHS = [
  'Mouharram', 'Safar', 'Rabî\' al-Awwal', 'Rabî\' ath-Thânî',
  'Joumâdâ al-Oûlâ', 'Joumâdâ ath-Thânî', 'Rajab', 'Cha\'bân',
  'Ramadan', 'Chawwâl', 'Dhû al-Qa\'dah', 'Dhû al-Hijjah'
];

// ============ VILLE DICTIONNAIRE ARABE (COMPLET) ============
const CITY_NAMES_AR = {
  // Maroc
  'marrakech': 'مراكش',
  'casablanca': 'الدار البيضاء',
  'fes': 'فاس',
  'tangier': 'طنجة',
  'tanger': 'طنجة',
  'rabat': 'الرباط',
  'meknes': 'مكناس',
  'agadir': 'أكادير',
  'essaouira': 'الصويرة',
  'oujda': 'وجدة',
  'taroudant': 'تارودانت',
  'larache': 'العرائش',
  'tetouan': 'تطوان',
  
  // Égypte
  'cairo': 'القاهرة',
  'alexandria': 'الإسكندرية',
  'giza': 'الجيزة',
  'aswan': 'أسوان',
  'luxor': 'الأقصر',
  'assiut': 'أسيوط',
  'mansoura': 'المنصورة',
  'tanta': 'طنطا',
  'port said': 'بورسعيد',
  'suez': 'السويس',
  
  // Arabie Saoudite
  'mecca': 'مكة',
  'medina': 'المدينة',
  'riyadh': 'الرياض',
  'jeddah': 'جدة',
  'dammam': 'الدمام',
  'khobar': 'الخبر',
  'taif': 'الطائف',
  
  // EAU
  'dubai': 'دبي',
  'abu dhabi': 'أبو ظبي',
  'sharjah': 'الشارقة',
  'ajman': 'عجمان',
  'ras al khaimah': 'رأس الخيمة',
  
  // Autres Golfe
  'kuwait': 'الكويت',
  'doha': 'الدوحة',
  'qatar': 'قطر',
  'muscat': 'مسقط',
  'oman': 'عمان',
  'manama': 'المنامة',
  'bahrain': 'البحرين',
  
  // Levant
  'beirut': 'بيروت',
  'damascus': 'دمشق',
  'aleppo': 'حلب',
  'amman': 'عمّان',
  'jerusalem': 'القدس',
  'ramallah': 'رام الله',
  'bethlehem': 'بيت لحم',
  'nazareth': 'الناصرة',
  
  // Irak
  'baghdad': 'بغداد',
  'basra': 'البصرة',
  'mosul': 'الموصل',
  'najaf': 'النجف',
  'karbala': 'كربلاء',
  
  // Türkiye
  'istanbul': 'إسطنبول',
  'ankara': 'أنقرة',
  'izmir': 'إزمير',
  'antalya': 'أنطاليا',
  'adana': 'أضنة',
  'bursa': 'بورصة',
  'gaziantep': 'غازيانتب',
  
  // Yemen
  'sanaa': 'صنعاء',
  'aden': 'عدن',
  'taiz': 'تعز',
  
  // Soudan
  'khartoum': 'الخرطوم',
  
  // Algérie
  'algiers': 'الجزائر',
  'oran': 'وهران',
  'constantine': 'قسنطينة',
  
  // Tunisie
  'tunis': 'تونس',
  'sfax': 'صفاقس',
  'sousse': 'سوسة',
  
  // Libye
  'tripoli': 'طرابلس',
  'benghazi': 'بنغازي',
  
  // Europe
  'london': 'لندن',
  'paris': 'باريس',
  'madrid': 'مدريد',
  'berlin': 'برلين',
  'rome': 'روما',
  'vienna': 'فيينا',
  'brussels': 'بروكسل',
  'geneva': 'جنيف',
  
  // Amérique
  'new york': 'نيويورك',
  'toronto': 'تورونتو',
  'los angeles': 'لوس أنجلس',
  'chicago': 'شيكاغو',
  'mexico city': 'مكسيكو سيتي',
  
  // Asie
  'singapore': 'سنغافورة',
  'bangkok': 'بانكوك',
  'kuala lumpur': 'كوالالمبور',
  'jakarta': 'جاكرتا',
  'manila': 'مانيلا',
  'hong kong': 'هونج كونج',
  'shanghai': 'شنغهاي',
  'beijing': 'بكين',
  'tokyo': 'طوكيو',
  'seoul': 'سيول',
  'delhi': 'دلهي',
  'mumbai': 'بومباي',
  'sydney': 'سيدني'
};

// Popular cities for dropdown
const POPULAR_CITIES_AR = [
  // Maroc
  { ar: 'مراكش', en: 'Marrakech' },
  { ar: 'الدار البيضاء', en: 'Casablanca' },
  { ar: 'فاس', en: 'Fes' },
  { ar: 'طنجة', en: 'Tangier' },
  { ar: 'الرباط', en: 'Rabat' },
  { ar: 'مكناس', en: 'Meknes' },
  { ar: 'آسفي', en: 'Safi' },
  { ar: 'الصويرة', en: 'Essaouira' },
  // Égypte
  { ar: 'القاهرة', en: 'Cairo' },
  { ar: 'الإسكندرية', en: 'Alexandria' },
  { ar: 'الجيزة', en: 'Giza' },
  { ar: 'الأقصر', en: 'Luxor' },
  // Arabie Saoudite
  { ar: 'مكة', en: 'Mecca' },
  { ar: 'المدينة', en: 'Medina' },
  { ar: 'الرياض', en: 'Riyadh' },
  { ar: 'جدة', en: 'Jeddah' },
  { ar: 'الدمام', en: 'Dammam' },
  // Émirats
  { ar: 'دبي', en: 'Dubai' },
  { ar: 'أبو ظبي', en: 'Abu Dhabi' },
  { ar: 'الشارقة', en: 'Sharjah' },
  // Levant
  { ar: 'بيروت', en: 'Beirut' },
  { ar: 'دمشق', en: 'Damascus' },
  { ar: 'عمّان', en: 'Amman' },
  { ar: 'القدس', en: 'Jerusalem' },
  { ar: 'رام الله', en: 'Ramallah' },
  // Irak
  { ar: 'بغداد', en: 'Baghdad' },
  { ar: 'البصرة', en: 'Basra' },
  { ar: 'الموصل', en: 'Mosul' },
  // Turquie
  { ar: 'إسطنبول', en: 'Istanbul' },
  { ar: 'أنقرة', en: 'Ankara' },
  { ar: 'إزمير', en: 'Izmir' },
  // Europe
  { ar: 'لندن', en: 'London' },
  { ar: 'باريس', en: 'Paris' },
  { ar: 'برلين', en: 'Berlin' },
  { ar: 'مدريد', en: 'Madrid' },
  // Asie
  { ar: 'نيويورك', en: 'New York' },
  { ar: 'طوكيو', en: 'Tokyo' },
  { ar: 'دلهي', en: 'Delhi' },
  { ar: 'بانكوك', en: 'Bangkok' },
  { ar: 'كوالالمبور', en: 'Kuala Lumpur' },
  { ar: 'جاكرتا', en: 'Jakarta' }
];

const CITY_NAMES_ES = {
  'marrakech': 'Marrakech',
  'casablanca': 'Casablanca'
};

const CITY_NAMES_TR = {
  'marrakech': 'Marakeş',
  'cairo': 'Kahire',
  'istanbul': 'İstanbul'
};

function getLocalizedCityName(cityName, lang = state.lang) {
  if (!cityName) return cityName;
  const lower = cityName.toLowerCase();
  
  if (lang === 'ar') return CITY_NAMES_AR[lower] || cityName;
  if (lang === 'es') return CITY_NAMES_ES[lower] || cityName;
  if (lang === 'tr') return CITY_NAMES_TR[lower] || cityName;
  return cityName; // Default: French/English/original
}

// Get cardinal direction from angle (0-360)
function getCardinalDirection(angle) {
  const directions = ['cardinalN', 'cardinalE', 'cardinalS', 'cardinalW'];
  const index = Math.round(((angle % 360) / 90)) % 4;
  return t(directions[index]);
}

function calculateQibla(lat, lng) {
  const φ1 = lat * Math.PI / 180;
  const φ2 = KAABA.lat * Math.PI / 180;
  const Δλ = (KAABA.lng - lng) * Math.PI / 180;

  const y = Math.sin(Δλ);
  const x = Math.cos(φ1) * Math.tan(φ2) - Math.sin(φ1) * Math.cos(Δλ);
  let θ = Math.atan2(y, x) * 180 / Math.PI;
  return (θ + 360) % 360;
}

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2
          + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180)
          * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

// ============ HEURES DE PRIÈRE ============
async function fetchPrayerTimes(lat, lng, date = new Date()) {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const url = `https://api.aladhan.com/v1/timings/${d}-${m}-${y}?latitude=${lat}&longitude=${lng}&method=${state.method}`;

  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    return data.data;
  } catch (e) {
    console.error('Prayer API error:', e);
    // Fallback: calcul local simplifié
    return calculateLocalPrayerTimes(lat, lng, date);
  }
}

// Fallback en cas de panne réseau (calcul local approximatif)
function calculateLocalPrayerTimes(lat, lng, date) {
  // Calcul basé sur la position du soleil (approximation)
  const julianDay = gregorianToJulian(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const T = (julianDay - 2451545.0) / 36525;

  // Équation du temps et déclinaison solaire (simplifiées)
  const L = (280.460 + 36000.770 * T) % 360;
  const g = (357.528 + 35999.050 * T) % 360;
  const lambda = L + 1.915 * Math.sin(g * Math.PI / 180);
  const epsilon = 23.4393 - 0.01300 * T;
  const delta = Math.asin(Math.sin(epsilon * Math.PI / 180) * Math.sin(lambda * Math.PI / 180)) * 180 / Math.PI;
  const eqTime = (L - lambda) * 4;

  // Dhuhr = midi solaire
  const dhuhrUTC = 12 - lng / 15 - eqTime / 60;
  const tzOffset = -date.getTimezoneOffset() / 60;
  const dhuhr = dhuhrUTC + tzOffset;

  const latRad = lat * Math.PI / 180;
  const deltaRad = delta * Math.PI / 180;

  // Fonction pour calculer heure d'une prière selon l'angle
  const timeForAngle = (angle) => {
    const cosH = (Math.sin(-angle * Math.PI / 180) - Math.sin(latRad) * Math.sin(deltaRad))
               / (Math.cos(latRad) * Math.cos(deltaRad));
    if (cosH > 1 || cosH < -1) return null;
    return Math.acos(cosH) * 180 / Math.PI / 15;
  };

  const fajrH = timeForAngle(18) || 1.5;
  const ishaH = timeForAngle(17) || 1.5;
  const sunriseH = timeForAngle(0.833) || 1.5;

  const hToStr = (h) => {
    if (h < 0) h += 24;
    if (h >= 24) h -= 24;
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    return `${pad(hh)}:${pad(mm)}`;
  };

  // Asr (ombre = longueur objet)
  const asrAngle = Math.atan(1 + Math.tan(Math.abs(lat - delta) * Math.PI / 180)) * 180 / Math.PI;
  const asrH = timeForAngle(-asrAngle) || 3;

  return {
    timings: {
      Fajr: hToStr(dhuhr - fajrH),
      Sunrise: hToStr(dhuhr - sunriseH),
      Dhuhr: hToStr(dhuhr + 0.05),
      Asr: hToStr(dhuhr + asrH),
      Maghrib: hToStr(dhuhr + sunriseH),
      Isha: hToStr(dhuhr + ishaH)
    },
    date: {
      hijri: null,
      gregorian: { date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}` }
    },
    _fallback: true
  };
}

// ============ RENDU PRIÈRES ============
const PRAYER_LIST = [
  { key: 'Fajr',    icon: '🌅', ar: 'الفجر' },
  { key: 'Sunrise', icon: '🌄', ar: 'الشروق' },
  { key: 'Dhuhr',   icon: '☀️', ar: 'الظهر' },
  { key: 'Asr',     icon: '🌇', ar: 'العصر' },
  { key: 'Maghrib', icon: '🌆', ar: 'المغرب' },
  { key: 'Isha',    icon: '🌃', ar: 'العشاء' }
];

function getPrayerDate(prayerTime, baseDate = new Date()) {
  const [h, m] = prayerTime.split(':').map(n => parseInt(n));
  const d = new Date(baseDate);
  d.setHours(h, m, 0, 0);
  return d;
}

function applyAdjust(timeStr, mins) {
  const d = getPrayerDate(timeStr);
  d.setMinutes(d.getMinutes() + mins);
  return fmtTime(d);
}

function renderPrayers() {
  const list = $('#prayersList');
  if (!state.prayerTimes) {
    list.innerHTML = `<div class="card" style="text-align:center;padding:40px 20px;color:var(--muted)">
      <p>${t('locationNeeded')}</p>
    </div>`;
    return;
  }

  const now = new Date();
  const timings = state.prayerTimes.timings;
  const items = PRAYER_LIST.map(p => {
    let rawTime = (timings[p.key] || '').split(' ')[0];
    if (p.key !== 'Sunrise' && state.prayerAdjusts[p.key]) {
      rawTime = applyAdjust(rawTime, state.prayerAdjusts[p.key]);
    }
    const time = rawTime;
    const prayerDate = getPrayerDate(time, now);
    return { ...p, time, date: prayerDate };
  });

  // Trouver prochaine prière
  let nextIdx = items.findIndex(i => i.date > now && i.key !== 'Sunrise');
  if (nextIdx === -1) nextIdx = 0; // Demain Fajr

  state.nextPrayer = items[nextIdx === -1 ? 0 : nextIdx];

  // Function to format countdown
  function getCountdown(targetDate) {
    const now = new Date();
    const diff = Math.max(0, targetDate - now);
    if (diff === 0) return '';
    
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    if (hours > 0) {
      return `-${hours}H ${minutes}M ${seconds}S`;
    } else if (minutes > 0) {
      return `-${minutes}M ${seconds}S`;
    } else {
      return `-${seconds}S`;
    }
  }

  list.innerHTML = items.map((p, idx) => {
    const isNext = idx === nextIdx;
    const isPast = p.date < now && !isNext;
    const alertOn = state.prayerAlerts[p.key] !== false;
    const showBell = p.key !== 'Sunrise';
    const countdown = isNext ? getCountdown(p.date) : '';
    
    return `
      <div class="prayer-item ${isNext ? 'next' : ''} ${isPast ? 'past' : ''}" data-prayer-key="${p.key}">
        <div class="prayer-icon">${p.icon}</div>
        <div class="prayer-info">
          <span class="prayer-name">${t(p.key.toLowerCase())}</span>
          <span class="prayer-arabic">${p.ar}</span>
        </div>
        <div class="prayer-time">
          <div>${p.time}</div>
          ${countdown ? `<div class="countdown">${countdown}</div>` : ''}
        </div>
        ${showBell ? `<button class="prayer-bell ${alertOn ? 'on' : ''}" data-prayer="${p.key}" aria-label="Alerte">
          ${alertOn ? '🔔' : '🔕'}
        </button>` : '<div></div>'}
      </div>
    `;
  }).join('');

  // Attacher événements cloches
  $$('.prayer-bell').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.prayer;
      state.prayerAlerts[p] = !state.prayerAlerts[p];
      localStorage.setItem('salati_alerts', JSON.stringify(state.prayerAlerts));
      renderPrayers();
    });
  });

  updateNextPrayer();
}

function updateNextPrayer() {
  if (!state.nextPrayer) return;
  const now = new Date();
  let target = new Date(state.nextPrayer.date);
  // Si heure déjà passée aujourd'hui -> demain
  if (target < now) target.setDate(target.getDate() + 1);
  const diff = target - now;
  if (diff <= 0) return;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  $('#nextPrayerName').textContent = t(state.nextPrayer.key.toLowerCase());
  
  // Format countdown - SAME for all languages (minus on LEFT always)
  let countdown = '';
  if (h > 0) {
    countdown = `-${h}H ${m}M ${s}S`;
  } else if (m > 0) {
    countdown = `-${m}M ${s}S`;
  } else {
    countdown = `-${s}S`;
  }
  $('#countdown').textContent = countdown;
  
  // Update ALL countdown elements in prayer items
  const countdownEls = $$('.countdown');
  countdownEls.forEach(el => {
    el.textContent = countdown;
  });
}

// ============ HIJRI RENDU ============
function renderHijriToday() {
  const today = new Date();
  const h = gregorianToHijri(today);
  state.hijriToday = h;
  
  // ALWAYS use Arabic month names if language is Arabic
  let monthName;
  if (state.lang === 'ar') {
    monthName = HIJRI_MONTHS_AR[h.month - 1];
  } else {
    monthName = HIJRI_MONTHS[h.month - 1];
  }
  
  const hijriLabel = `${h.day} ${monthName} ${h.year}`;
  $('#hijriDate').textContent = hijriLabel;

  const greg = today.toLocaleDateString(state.lang === 'ar' ? 'ar' : state.lang, {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  $('#gregorianDate').textContent = greg;

  $('#hijriAdjustValue').textContent = (state.hijriAdjust > 0 ? '+' : '') + state.hijriAdjust;
}

// ============ CALENDAR GRID ============
function renderCalendar() {
  if (!state.calendarMonth) {
    const today = gregorianToHijri(new Date());
    state.calendarMonth = { year: today.year, month: today.month };
  }
  const { year, month } = state.calendarMonth;
  
  // Show Arabic month names if language is Arabic
  const monthName = state.lang === 'ar' ? 
    HIJRI_MONTHS_AR[month - 1] : 
    HIJRI_MONTHS[month - 1];
  $('#calHijriMonth').textContent = `${monthName} ${year}`;

  // Trouver premier jour hijri du mois -> julien -> grégorien
  const jd1 = hijriToJulian(year, month, 1);
  const firstGreg = julianToGregorian(jd1 + state.hijriAdjust);
  // Nombre de jours hijri du mois: 29 ou 30 -> on calcule via mois suivant
  const nextMonth = month === 12 ? { year: year + 1, month: 1 } : { year, month: month + 1 };
  const jdNext = hijriToJulian(nextMonth.year, nextMonth.month, 1);
  const daysInMonth = jdNext - jd1;

  // Premier jour semaine du mois
  const firstDayOfWeek = firstGreg.getDay(); // 0=Dim
  const todayHijri = gregorianToHijri(new Date());
  const gregMonthLabel = firstGreg.toLocaleDateString(state.lang === 'ar' ? 'ar' : state.lang, {
    month: 'long', year: 'numeric'
  });
  $('#calGregMonth').textContent = gregMonthLabel;

  const headers = state.lang === 'ar'
    ? ['أحد','إثن','ثلا','أرب','خمس','جمع','سبت']
    : ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];

  let html = headers.map(h => `<div class="cal-header-cell">${h}</div>`).join('');

  // Cellules vides au début
  for (let i = 0; i < firstDayOfWeek; i++) {
    html += `<div class="cal-day other-month"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = todayHijri.year === year && todayHijri.month === month && todayHijri.day === d;
    const event = ISLAMIC_EVENTS.find(e => e.month === month && e.day === d);
    const greg = julianToGregorian(jd1 + (d - 1) + state.hijriAdjust);
    html += `
      <div class="cal-day ${isToday ? 'today' : ''} ${event ? 'has-event' : ''}" title="${event ? event.name : ''}">
        <span>${d}</span>
        <span class="greg-num">${greg.getDate()}</span>
      </div>
    `;
  }
  $('#calendarGrid').innerHTML = html;

  // Liste événements importants à venir
  renderImportantDates();
}

function renderImportantDates() {
  const todayH = gregorianToHijri(new Date());
  const list = ISLAMIC_EVENTS.map(e => {
    let year = todayH.year;
    // Si déjà passé cette année, prendre l'année suivante
    if (e.month < todayH.month || (e.month === todayH.month && e.day < todayH.day)) {
      year = todayH.year + 1;
    }
    const jd = hijriToJulian(year, e.month, e.day);
    const greg = julianToGregorian(jd + state.hijriAdjust);
    const daysAway = Math.ceil((greg - new Date()) / 86400000);
    return { ...e, greg, daysAway, hyear: year };
  }).sort((a, b) => a.daysAway - b.daysAway).slice(0, 6);

  $('#importantDates').innerHTML = list.map(e => `
    <li>
      <span class="date-name">${state.lang === 'ar' ? e.name_ar : e.name}</span>
      <span class="date-when">
        ${e.greg.toLocaleDateString(state.lang, { day: 'numeric', month: 'short' })}
        · ${e.daysAway === 0 ? t('today') : 'J−' + e.daysAway}
      </span>
    </li>
  `).join('');
}

// ============ DOUAAS RENDU ============
function renderDuas(filter = 'all') {
  const filtered = filter === 'all' ? DUAS : DUAS.filter(d => d.cat === filter);
  $('#duasList').innerHTML = filtered.map(d => `
    <article class="dua-card">
      <div class="dua-header">
        <span class="dua-title">${d.title}</span>
        <span class="dua-tag">${t(d.cat === 'daily' ? 'daily' : d.cat === 'prayer' ? 'prayerDuas' : 'protection')}</span>
      </div>
      <div class="dua-body">
        <div class="dua-arabic">${d.arabic}</div>
        <div class="dua-translit">${d.translit}</div>
        <div class="dua-translation">${d.translation}</div>
      </div>
    </article>
  `).join('');
}

// ============ QIBLA ============
function renderQibla() {
  console.log('[Qibla] renderQibla called');
  
  const angleEl = $('#qiblaAngle');
  const distEl = $('#qiblaDistance');
  
  if (!state.location) {
    if (angleEl) angleEl.textContent = '—°';
    if (distEl) distEl.textContent = '— km';
    return;
  }
  
  // Use precision module
  if (window.QiblaPrecision) {
    window.QiblaPrecision.setLocation(state.location.lat, state.location.lng);
    
    const trueBearing = window.QiblaPrecision.getQiblaBearing();
    const distance = window.QiblaPrecision.getDistance();
    const declination = window.QiblaPrecision.getDeclination();
    
    state.qiblaAngle = trueBearing;
    
    const cardinalDir = getCardinalDirection(trueBearing);
    if (angleEl) {
      angleEl.textContent = `${trueBearing.toFixed(3)}° (${cardinalDir})`;
    }
    if (distEl) {
      distEl.textContent = `${Math.round(distance).toLocaleString()} km`;
    }
    
    console.log('[Qibla] True:', trueBearing.toFixed(2), '° Magnetic:', 
                window.QiblaPrecision.getDiagnostics().qiblaMagnetic, 
                '° Declination:', declination.toFixed(2), '°');
  } else {
    // Fallback to old calculation
    const angle = calculateQibla(state.location.lat, state.location.lng);
    state.qiblaAngle = angle;
    const dist = haversineKm(state.location.lat, state.location.lng, KAABA.lat, KAABA.lng);
    
    const cardinalDir = getCardinalDirection(angle);
    if (angleEl) angleEl.textContent = `${angle.toFixed(3)}° (${cardinalDir})`;
    if (distEl) distEl.textContent = `${Math.round(dist).toLocaleString()} km`;
  }

  renderCompassTicks();
  updateCompass();
}

function renderCompassTicks() {
  const ticks = $('#compassTicks');
  if (ticks.children.length > 0) return;
  let html = '';
  for (let i = 0; i < 72; i++) {
    const isMajor = i % 9 === 0;
    html += `<div class="tick ${isMajor ? 'major' : ''}" style="transform: rotate(${i * 5}deg) translateY(0)"></div>`;
  }
  ticks.innerHTML = html;
}

function updateCompass() {
  if (state.qiblaAngle === null) return;
  // Aiguille pointe toujours vers Qibla relative au nord réel
  // Dial rotates with device
  const dial = $('.compass-dial');
  const needle = $('#qiblaNeedle');

  // La dial tourne à l'inverse de l'orientation
  if (state.compassActive) {
    dial.style.transform = `rotate(${-state.currentHeading}deg)`;
  }
  // Aiguille reste pointée vers qibla - orientation actuelle
  const needleAngle = state.qiblaAngle - (state.compassActive ? state.currentHeading : 0);
  needle.style.transform = `rotate(${needleAngle}deg)`;
  // Kaaba is FIXED at top - doesn't move

  // Direction is already shown in #qiblaAngle - no duplicate
  
  // Statut alignement + direction
  if (state.compassActive) {
    // Use QiblaPrecision for alignment check (±3° religious tolerance)
    let aligned = false;
    let alignmentDiff = 0;
    if (window.QiblaPrecision) {
      const result = window.QiblaPrecision.isAligned(state.currentHeading);
      if (result) {
        aligned = result.aligned;
        alignmentDiff = result.diff;
      }
    } else {
      const rawDiff = Math.abs(((state.qiblaAngle - state.currentHeading + 360) % 360));
      const angularDiff = Math.min(rawDiff, 360 - rawDiff);
      aligned = angularDiff < 3;
      alignmentDiff = angularDiff;
    }
    
    const status = $('#qiblaStatus');
    
    // Get signal quality from precision module
    let qualityIndicator = '';
    if (window.QiblaPrecision) {
      const quality = window.QiblaPrecision.getSignalQuality();
      if (quality === 'good') qualityIndicator = ' 🟢';
      else if (quality === 'fair') qualityIndicator = ' 🟡';
      else if (quality === 'poor') qualityIndicator = ' 🔴 ' + (state.lang === 'ar' ? '(تشويش)' : state.lang === 'fr' ? '(interférence)' : '(noise)');
    }
    
    if (aligned) {
      status.textContent = `✅ ${t('aligned')}${qualityIndicator}`;
      status.classList.add('aligned');
    } else {
      // Show proximity feedback
      let proximity = '';
      if (alignmentDiff < 10) {
        proximity = state.lang === 'ar' ? ' (قريب)' : state.lang === 'fr' ? ' (proche)' : ' (close)';
      }
      status.textContent = `${t('facingQibla')}${proximity}${qualityIndicator}`;
      status.classList.remove('aligned');
    }
    
    // Show heading with appropriate precision
    $('#deviceHeading').textContent = `${state.currentHeading.toFixed(2)}°`;
  }
}

async function activateCompass() {
  // iOS 13+ nécessite une permission explicite
  if (typeof DeviceOrientationEvent !== 'undefined'
      && typeof DeviceOrientationEvent.requestPermission === 'function') {
    try {
      const perm = await DeviceOrientationEvent.requestPermission();
      if (perm !== 'granted') {
        toast(t('compassPermissionDenied'), 'error');
        return;
      }
    } catch (e) {
      toast(t('compassNotSupported'), 'error');
      return;
    }
  }

  if (!window.DeviceOrientationEvent) {
    toast(t('compassNotSupported'), 'error');
    return;
  }

  state.compassActive = true;
  toast('📡 Boussole activée. Bougez votre téléphone...', 'info');

  let headingReceived = false;

  const handler = (e) => {
    // iOS: webkitCompassHeading (plus fiable). Autres: alpha
    let heading = null;
    if (e.webkitCompassHeading !== undefined) {
      heading = e.webkitCompassHeading;
    } else if (e.alpha !== null && e.beta !== null && e.gamma !== null) {
      // Fallback: calculer l'azimut à partir des axes (moins fiable)
      const alpha = e.alpha * Math.PI / 180;
      const beta = e.beta * Math.PI / 180;
      const gamma = e.gamma * Math.PI / 180;
      
      const cos_b = Math.cos(beta);
      const sin_a = Math.sin(alpha);
      const cos_a = Math.cos(alpha);
      const sin_b = Math.sin(beta);
      const cos_g = Math.cos(gamma);
      const sin_g = Math.sin(gamma);
      
      const azimuth = Math.atan2(
        sin_a * cos_g - cos_a * sin_b * sin_g,
        cos_b * sin_g
      );
      heading = (Math.PI / 2 - azimuth) * 180 / Math.PI;
      heading = (heading + 360) % 360;
    }
    
    if (heading !== null) {
      if (!headingReceived) {
        headingReceived = true;
        toast('✅ Boussole OK', 'success');
      }
      // Smoothing filter to stabilize compass (low-pass filter)
      if (state.smoothedHeading === undefined) {
        state.smoothedHeading = heading;
      } else {
        // Handle 360°/0° wrap-around
        let diff = heading - state.smoothedHeading;
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        // Use QiblaPrecision module for advanced filtering
        if (window.QiblaPrecision) {
          const result = window.QiblaPrecision.processSensorReading(heading, true);
          state.currentHeading = result.heading;
          state.signalQuality = result.quality;
          
          // Throttle UI updates to ~15Hz (sensor rate)
          if (!state.lastCompassUpdate || Date.now() - state.lastCompassUpdate > 66) {
            state.lastCompassUpdate = Date.now();
            updateCompass();
          }
        } else {
          // Fallback to basic filter
          if (Math.abs(diff) > 1.5) {
            const factor = Math.abs(diff) > 15 ? 0.3 : 0.15;
            state.smoothedHeading = (state.smoothedHeading + diff * factor + 360) % 360;
            state.currentHeading = state.smoothedHeading;
            if (!state.lastCompassUpdate || Date.now() - state.lastCompassUpdate > 100) {
              state.lastCompassUpdate = Date.now();
              updateCompass();
            }
          }
        }
      }
    }
  };

  window.addEventListener('deviceorientationabsolute', handler, true);
  window.addEventListener('deviceorientation', handler, true);

  $('#qiblaStatus').textContent = t('facingQibla');
  $('#activateQiblaBtn').style.display = 'none';
}

// ============ GÉOLOCALISATION ============
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      err => reject(err),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  });
}

async function reverseGeocode(lat, lng) {
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`);
    const d = await r.json();
    return d.address?.city || d.address?.town || d.address?.village || d.address?.county || 'Position inconnue';
  } catch {
    return `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
  }
}

async function forwardGeocode(query) {
  try {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`);
    const d = await r.json();
    if (d.length === 0) return null;
    return {
      lat: parseFloat(d[0].lat),
      lng: parseFloat(d[0].lon),
      name: d[0].display_name.split(',')[0].trim()
    };
  } catch {
    return null;
  }
}

async function setLocation(loc) {
  state.location = loc;
  localStorage.setItem('salati_location', JSON.stringify(loc));
  const name = loc.name || await reverseGeocode(loc.lat, loc.lng);
  state.location.name = name;
  localStorage.setItem('salati_location', JSON.stringify(state.location));
  
  // Display city name in current language
  const localizedName = getLocalizedCityName(name);
  $('#locationText').innerHTML = `📍 <span>${localizedName}</span>`;

  state.prayerTimes = await fetchPrayerTimes(loc.lat, loc.lng);
  renderPrayers();
  renderQibla();
}

// ============ NOTIFICATIONS ============
async function requestNotifications() {
  if (!('Notification' in window)) {
    toast('Notifications non supportées', 'error');
    return false;
  }
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    state.notifEnabled = true;
    localStorage.setItem('salati_notif', 'true');
    $('#notifToggle').checked = true;
    toast(t('notifOk'), 'success');
    return true;
  } else {
    toast(t('notifKo'), 'error');
    return false;
  }
}

// Vérification des heures de prière chaque minute
function checkPrayerAlerts() {
  if (!state.prayerTimes || !state.notifEnabled) return;
  const now = new Date();
  const timings = state.prayerTimes.timings;
  PRAYER_LIST.forEach(p => {
    if (p.key === 'Sunrise') return;
    if (!state.prayerAlerts[p.key]) return;
    let time = (timings[p.key] || '').split(' ')[0];
    if (state.prayerAdjusts[p.key]) time = applyAdjust(time, state.prayerAdjusts[p.key]);
    const pd = getPrayerDate(time, now);
    const diffSec = Math.abs(pd - now) / 1000;
    if (diffSec < 30) {
      triggerAdhan(p.key);
    }
  });
}

function triggerAdhan(prayerKey) {
  const key = `adhan_fired_${prayerKey}_${new Date().toDateString()}`;
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, '1');

  // Notification
  if (Notification.permission === 'granted') {
    const n = new Notification(`🕌 ${t(prayerKey.toLowerCase())}`, {
      body: t('prayerTime'),
      icon: 'icons/icon-192.png',
      badge: 'icons/icon-96.png',
      tag: 'salati-adhan',
      requireInteraction: true,
      silent: state.adhan === 'none'
    });
    n.onclick = () => { window.focus(); n.close(); };
  }

  // Audio Adhan (respect mute mode)
  if (state.adhan !== 'none' && !state.muteMode) {
    const audio = $('#adhanAudio');
    audio.src = ADHAN_SOURCES[state.adhan];
    audio.play().catch(err => console.warn('Audio autoplay bloqué:', err));
  }
}

// ============ I18N / TRADUCTIONS ============
function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  
  // Translate all elements with data-i18n
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translated = t(key);
    if (translated && translated !== key) el.textContent = translated;
  });
  
  // Force re-render of hijri date (to get Arabic month names)
  renderHijriToday();
  
  // Force re-render of qibla (to get Arabic cardinal directions)
  if (state.qiblaAngle !== null) {
    renderQibla();
  }
  
  // Update location display with localized name
  if (state.location && state.location.name) {
    const localizedName = getLocalizedCityName(state.location.name);
    $('#locationText').innerHTML = `📍 <span>${localizedName}</span>`;
  }
  
  $('#langSelect').value = state.lang;
}

// ============ VIEWS & TABS ============
function showView(name) {
  $$('.view').forEach(v => v.classList.remove('active'));
  $$('.tab').forEach(t => t.classList.remove('active'));
  const view = $(`#view-${name}`);
  const tab = $(`.tab[data-view="${name}"]`);
  if (view) view.classList.add('active');
  if (tab) tab.classList.add('active');
  window.scrollTo(0, 0);

  if (name === 'calendar') renderCalendar();
  if (name === 'duas') renderDuas();
  if (name === 'qibla') renderQibla(); // FIX: Re-render Qibla on tab switch
}

// ============ PRAYER ADJUSTS SETTINGS ============
function renderPrayerAdjustList() {
  const list = $('#prayerAdjustList');
  list.innerHTML = PRAYER_LIST.filter(p => p.key !== 'Sunrise').map(p => `
    <div class="prayer-adjust-row">
      <span class="name">${p.icon} ${t(p.key.toLowerCase())}</span>
      <div class="controls">
        <button data-prayer="${p.key}" data-delta="-1">−</button>
        <span class="value" id="adj-${p.key}">${state.prayerAdjusts[p.key] || 0}</span>
        <button data-prayer="${p.key}" data-delta="+1">+</button>
      </div>
    </div>
  `).join('');
  list.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      const p = b.dataset.prayer;
      const d = parseInt(b.dataset.delta);
      state.prayerAdjusts[p] = (state.prayerAdjusts[p] || 0) + d;
      // Limiter ±30min
      state.prayerAdjusts[p] = Math.max(-30, Math.min(30, state.prayerAdjusts[p]));
      $(`#adj-${p}`).textContent = state.prayerAdjusts[p];
      localStorage.setItem('salati_adjusts', JSON.stringify(state.prayerAdjusts));
      renderPrayers();
    });
  });
}

// ============ ÉVÉNEMENTS ============
function attachEvents() {
  // Tabs
  $$('.tab').forEach(tab => {
    tab.addEventListener('click', () => showView(tab.dataset.view));
  });

  // Langue
  $('#langSelect').addEventListener('change', e => {
    state.lang = e.target.value;
    localStorage.setItem('salati_lang', state.lang);
    applyLanguage();
    renderPrayers();
    renderHijriToday();
    if ($('#view-calendar').classList.contains('active')) renderCalendar();
    if ($('#view-duas').classList.contains('active')) renderDuas();
    renderPrayerAdjustList();
  });

  // Paramètres
  $('#settingsBtn').addEventListener('click', () => {
    renderPrayerAdjustList();
    $('#settingsModal').classList.remove('hidden');
  });
  $('#closeSettingsBtn').addEventListener('click', () => {
    $('#settingsModal').classList.add('hidden');
  });
  $('#settingsModal .modal-backdrop').addEventListener('click', () => {
    $('#settingsModal').classList.add('hidden');
  });

  // Détection GPS
  $('#detectLocationBtn').addEventListener('click', async () => {
    try {
      toast('📡 Recherche de votre position...');
      const loc = await getCurrentLocation();
      await setLocation(loc);
      toast(t('locationOk'), 'success');
    } catch (e) {
      toast(t('locationKo'), 'error');
    }
  });

  // Popular cities dropdown (show when clicking city input)
  const cityDropdown = document.createElement('div');
  cityDropdown.id = 'citiesDropdown';
  cityDropdown.className = 'cities-dropdown hidden';
  cityDropdown.innerHTML = `
    <div class="cities-list">
      ${POPULAR_CITIES_AR.map(city => `
        <button class="city-btn" data-city="${city.en}">
          ${state.lang === 'ar' ? city.ar : city.en}
        </button>
      `).join('')}
    </div>
  `;
  $('#cityInput').parentElement.appendChild(cityDropdown);
  
  // Show dropdown when input is focused
  $('#cityInput').addEventListener('focus', () => {
    const dropdown = $('#citiesDropdown');
    dropdown.classList.remove('hidden');
    // Update city names based on current language
    $$('.city-btn').forEach((btn, idx) => {
      const city = POPULAR_CITIES_AR[idx];
      btn.textContent = state.lang === 'ar' ? city.ar : city.en;
    });
  });

  // INSTANT CITY SUGGESTIONS - Filter as user types
  $('#cityInput').addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    const dropdown = $('#citiesDropdown');
    
    if (query.length === 0) {
      // Show all popular cities
      $$('.city-btn').forEach((btn, idx) => {
        btn.style.display = 'block';
        const city = POPULAR_CITIES_AR[idx];
        btn.textContent = state.lang === 'ar' ? city.ar : city.en;
      });
      dropdown.classList.remove('hidden');
    } else {
      // Filter cities by name
      $$('.city-btn').forEach((btn, idx) => {
        const city = POPULAR_CITIES_AR[idx];
        const cityName = state.lang === 'ar' ? city.ar : city.en;
        const matches = cityName.toLowerCase().includes(query) || 
                       city.en.toLowerCase().includes(query) ||
                       city.ar.includes(query);
        btn.style.display = matches ? 'block' : 'none';
        btn.textContent = cityName;
      });
      // Show dropdown if there are matches
      const hasVisible = $$('.city-btn').some(btn => btn.style.display !== 'none');
      if (hasVisible) {
        dropdown.classList.remove('hidden');
      } else {
        dropdown.classList.add('hidden');
      }
    }
  });
  
  // Hide dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (e.target.id !== 'cityInput' && !e.target.closest('#citiesDropdown')) {
      $('#citiesDropdown').classList.add('hidden');
    }
  });
  
  // Click on popular city
  $$('.city-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const cityName = btn.dataset.city;
      $('#cityInput').value = cityName;
      $('#citiesDropdown').classList.add('hidden');
      $('#searchCityBtn').click();
    });
  });

  // Recherche ville - VERSION SIMPLE (sans suggestions complexes)
  $('#searchCityBtn').addEventListener('click', async () => {
    const q = $('#cityInput').value.trim();
    if (!q) return;
    toast('🔍 Recherche...');
    const loc = await forwardGeocode(q);
    if (loc) {
      await setLocation(loc);
      toast(t('locationOk'), 'success');
    } else {
      toast('Ville introuvable', 'error');
    }
  });
  
  $('#cityInput').addEventListener('keypress', e => {
    if (e.key === 'Enter') $('#searchCityBtn').click();
  });

  // Adhan
  $('#adhanSelect').value = state.adhan;
  $('#adhanSelect').addEventListener('change', e => {
    state.adhan = e.target.value;
    localStorage.setItem('salati_adhan', state.adhan);
  });
  
  // Mute mode toggle
  const muteContainer = document.createElement('div');
  muteContainer.className = 'switch-row';
  muteContainer.style.marginTop = '1rem';
  muteContainer.innerHTML = `
    <span data-i18n="muteMode">🔇 Mode silence</span>
    <label class="switch">
      <input type="checkbox" id="muteToggle">
      <span class="slider"></span>
    </label>
  `;
  $('#adhanSelect').parentElement.insertBefore(muteContainer, $('#testAdhanBtn'));
  
  const muteToggle = $('#muteToggle');
  muteToggle.checked = state.muteMode || false;
  muteToggle.addEventListener('change', e => {
    state.muteMode = e.target.checked;
    localStorage.setItem('salati_muteMode', state.muteMode);
    toast(state.muteMode ? '🔇 Mode silence activé' : '🔊 Mode silence désactivé');
  });
  
  $('#testAdhanBtn').addEventListener('click', () => {
    if (state.adhan === 'none') {
      toast('Son désactivé');
      return;
    }
    const audio = $('#adhanAudio');
    audio.src = ADHAN_SOURCES[state.adhan];
    audio.play().then(() => {
      toast('🔊 Adhan en cours...', 'success');
      setTimeout(() => audio.pause(), 8000); // 8 sec aperçu
    }).catch(err => toast('Erreur audio: ' + err.message, 'error'));
  });

  // Méthode calcul
  $('#methodSelect').value = state.method;
  $('#methodSelect').addEventListener('change', async e => {
    state.method = parseInt(e.target.value);
    localStorage.setItem('salati_method', state.method);
    if (state.location) {
      state.prayerTimes = await fetchPrayerTimes(state.location.lat, state.location.lng);
      renderPrayers();
    }
  });

  // Ajustement hijri
  $$('.adjust-btn').forEach(b => {
    b.addEventListener('click', () => {
      const delta = parseInt(b.dataset.adjust);
      state.hijriAdjust += delta;
      state.hijriAdjust = Math.max(-2, Math.min(2, state.hijriAdjust));
      localStorage.setItem('salati_hijri_adjust', state.hijriAdjust);
      renderHijriToday();
      renderCalendar();
    });
  });
  $('#resetAdjustBtn').addEventListener('click', () => {
    state.hijriAdjust = 0;
    localStorage.setItem('salati_hijri_adjust', '0');
    renderHijriToday();
    renderCalendar();
  });

  // Navigation calendrier
  $('#prevMonthBtn').addEventListener('click', () => {
    if (state.calendarMonth.month === 1) {
      state.calendarMonth = { year: state.calendarMonth.year - 1, month: 12 };
    } else {
      state.calendarMonth.month -= 1;
    }
    renderCalendar();
  });
  $('#nextMonthBtn').addEventListener('click', () => {
    if (state.calendarMonth.month === 12) {
      state.calendarMonth = { year: state.calendarMonth.year + 1, month: 1 };
    } else {
      state.calendarMonth.month += 1;
    }
    renderCalendar();
  });

  // Filtres Douaas
  $$('.filter-btn').forEach(b => {
    b.addEventListener('click', () => {
      $$('.filter-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      renderDuas(b.dataset.filter);
    });
  });

  // Qibla
  $('#activateQiblaBtn').addEventListener('click', activateCompass);
  
  // Add reset compass button after activation
  const resetCompassBtn = document.createElement('button');
  resetCompassBtn.id = 'resetCompassBtn';
  resetCompassBtn.className = 'btn-secondary hidden';
  resetCompassBtn.textContent = '🔄 Réinitialiser la boussole';
  resetCompassBtn.style.marginTop = '1rem';
  $('#activateQiblaBtn').parentElement.appendChild(resetCompassBtn);
  
  resetCompassBtn.addEventListener('click', () => {
    state.compassActive = false;
    state.currentHeading = 0;
    $('#activateQiblaBtn').style.display = 'block';
    resetCompassBtn.classList.add('hidden');
    $('#qiblaStatus').textContent = t('qiblaStatusInit');
    $('#deviceHeading').textContent = '—°';
    updateCompass();
    toast('🔄 Boussole réinitialisée', 'info');
  });
  
  // Show reset button when compass is active
  const originalActivateCompass = activateCompass;
  activateCompass = async function() {
    await originalActivateCompass.call(this);
    resetCompassBtn.classList.remove('hidden');
  };

  // Notifications
  $('#notifToggle').checked = state.notifEnabled;
  $('#notifToggle').addEventListener('change', async e => {
    if (e.target.checked) {
      const ok = await requestNotifications();
      if (!ok) e.target.checked = false;
    } else {
      state.notifEnabled = false;
      localStorage.setItem('salati_notif', 'false');
    }
  });
  $('#enableNotifBtn').addEventListener('click', requestNotifications);
}

// ============ INITIALISATION ============
async function init() {
  attachEvents();
  applyLanguage();
  renderHijriToday();
  renderDuas();

  // Gérer paramètre ?view= pour les raccourcis
  const params = new URLSearchParams(window.location.search);
  const requestedView = params.get('view');

  // Localisation
  if (state.location) {
    const localizedName = getLocalizedCityName(state.location.name);
    $('#locationText').innerHTML = `📍 <span>${localizedName || '...'}</span>`;
    state.prayerTimes = await fetchPrayerTimes(state.location.lat, state.location.lng);
    renderPrayers();
    renderQibla();
  } else {
    $('#locationText').innerHTML = `📍 <span>${t('locationNeeded')}</span>`;
    renderPrayers();
    // Essayer auto-detection
    try {
      const loc = await getCurrentLocation();
      await setLocation(loc);
    } catch {
      // Permission refusée: l'utilisateur devra saisir manuellement
    }
  }

  // Masquer splash
  setTimeout(() => {
    $('#splash').classList.add('fade-out');
    $('#app').classList.remove('hidden');
    setTimeout(() => $('#splash').remove(), 600);
  }, 1100);

  // Afficher la vue demandée
  if (requestedView && ['prayers', 'qibla', 'calendar', 'duas'].includes(requestedView)) {
    showView(requestedView);
  }

  // Ticker pour countdown
  setInterval(() => {
    updateNextPrayer();
    checkPrayerAlerts();
  }, 1000);

  // Rafraîchir les horaires chaque heure (changement de jour)
  setInterval(async () => {
    if (state.location) {
      state.prayerTimes = await fetchPrayerTimes(state.location.lat, state.location.lng);
      renderPrayers();
      renderHijriToday();
    }
  }, 3600000);
}

// Démarrage
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/*
 * PrayTimes.js - Prayer Times Calculation Library
 * Used by: Salatuk, IslamicFinder, MuslimPro, etc.
 * Standard methods: MWL, Umm al-Qura, Egypt, Karachi, ISNA, Tehran, Jafari
 */

'use strict';

const PrayTimes = (function() {
  // Default calculation methods
  const methods = {
    MWL: {
      name: 'Muslim World League',
      params: { fajr: 18, isha: 17 }
    },
    ISNA: {
      name: 'Islamic Society of North America',
      params: { fajr: 15, isha: 15 }
    },
    Egypt: {
      name: 'Egyptian General Authority of Survey',
      params: { fajr: 19.5, isha: 17.5 }
    },
    Makkah: {
      name: 'Umm Al-Qura University, Makkah',
      params: { fajr: 18.5, isha: 90 } // 90 means 90 minutes after sunset
    },
    Karachi: {
      name: 'University of Islamic Sciences, Karachi',
      params: { fajr: 18, isha: 18 }
    },
    Tehran: {
      name: 'Institute of Geophysics, University of Tehran',
      params: { fajr: 17.7, isha: 14.1 }
    },
    Jafari: {
      name: 'Shia Ithna-Ashari, Qom',
      params: { fajr: 16, isha: 14 }
    }
  };

  // Calculation parameters
  const params = {
    Imsak: -10,
    Dhuhr: 0,
    Asr: 'Standard', // Standard, Hanafi
    Maghrib: 0,
    Midnight: 'Standard' // Standard, Jafari
  };

  // ============ MATH FUNCTIONS ============
  function dtr(d) { return (d * Math.PI) / 180.0; }
  function rtd(r) { return (r * 180.0) / Math.PI; }

  function sin(d) { return Math.sin(dtr(d)); }
  function cos(d) { return Math.cos(dtr(d)); }
  function tan(d) { return Math.tan(dtr(d)); }
  function asin(x) { return rtd(Math.asin(x)); }
  function acos(x) { return rtd(Math.acos(x)); }
  function atan(x) { return rtd(Math.atan(x)); }
  function atan2(y, x) { return rtd(Math.atan2(y, x)); }

  function fix(a, b) {
    a = a - b * Math.floor(a / b);
    return a < 0 ? a + b : a;
  }

  // ============ JULIAN DATE ============
  function getJD(date) {
    const a = Math.floor((14 - (date.getMonth() + 1)) / 12);
    const y = date.getFullYear() + 4800 - a;
    const m = (date.getMonth() + 1) + 12 * a - 3;
    const jdn = date.getDate() + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    return jdn + (date.getHours() - 12) / 24 + date.getMinutes() / 1440 + date.getSeconds() / 86400;
  }

  // ============ PRAYER TIME CALCULATION ============
  
  /**
   * Calculate prayer times for a given date, location, and method
   * @param {number} latitude - Location latitude
   * @param {number} longitude - Location longitude
   * @param {number} timezone - Timezone offset from UTC
   * @param {Date} date - Date for calculation
   * @param {string} method - Calculation method (MWL, ISNA, Egypt, Makkah, Karachi, Tehran, Jafari)
   * @param {string} asr - Asr method (Standard=1, Hanafi=2)
   * @returns {Object} Prayer times object
   */
  function getPrayerTimes(latitude, longitude, timezone, date, method = 'MWL', asr = 'Standard') {
    const methodParams = methods[method];
    if (!methodParams) {
      console.warn(`Unknown method: ${method}, using MWL`);
      return getPrayerTimes(latitude, longitude, timezone, date, 'MWL', asr);
    }

    const jd = getJD(date);
    const T = (jd - 2451545.0) / 36525.0;

    // Sun equation of time
    const D0 = 357.52910 + 35999.05030 * T;
    const M = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    const C = ((1.914600 - 0.004817 * T - 0.000014 * T * T) * sin(D0) +
               (0.019990 - 0.000101 * T) * sin(2 * D0) +
               0.000290 * sin(3 * D0));
    const lambda = M + C;
    const epsilon = 23.439291 - 0.0130042 * T - 0.00000016 * T * T + 0.000000504 * T * T * T;
    const alpha = atan2(cos(epsilon) * sin(lambda), cos(lambda));
    const delta = asin(sin(epsilon) * sin(lambda));
    const H = fix(280.46061837 + 360.98564724 * (jd - 2451545.0) - longitude, 360) - alpha;

    // Prayer times
    const times = {};

    // Sunrise/Sunset calculation
    const h0 = -0.833; // Sun disc below horizon
    const cosH = -tan(latitude) * tan(delta);
    if (cosH > 1) {
      // Midnight sun
      return { fajr: null, sunrise: null, dhuhr: null, asr: null, maghrib: null, isha: null };
    } else if (cosH < -1) {
      // Polar night
      return { fajr: null, sunrise: null, dhuhr: null, asr: null, maghrib: null, isha: null };
    }

    const h = acos(cosH);

    // Dhuhr (solar noon)
    times.dhuhr = (12 + timezone - longitude / 15 - H / 360) % 24;

    // Sunrise
    times.sunrise = (times.dhuhr - h / 360 * 24) % 24;

    // Sunset
    times.maghrib = (times.dhuhr + h / 360 * 24) % 24;

    // Asr
    const asrAngle = asr === 'Hanafi' ? 2 : 1;
    const h_asr = acos(-tan(latitude) * tan(asin(sin(delta) / cos(latitude) - cos(delta) * sin(asrAngle * Math.PI / 180) / sin(latitude))));
    times.asr = (times.dhuhr + h_asr / 360 * 24) % 24;

    // Fajr
    const h_fajr = acos((-sin(methodParams.params.fajr) - sin(delta) * sin(latitude)) / (cos(delta) * cos(latitude)));
    times.fajr = (times.dhuhr - h_fajr / 360 * 24) % 24;

    // Isha
    let h_isha;
    if (methodParams.params.isha > 90) {
      // Minutes after maghrib
      h_isha = methodParams.params.isha / 60 / 24;
      times.isha = (times.maghrib + h_isha) % 24;
    } else {
      h_isha = acos((-sin(methodParams.params.isha) - sin(delta) * sin(latitude)) / (cos(delta) * cos(latitude)));
      times.isha = (times.dhuhr + h_isha / 360 * 24) % 24;
    }

    // Imsak (10 minutes before fajr)
    times.imsak = (times.fajr - 10 / 60 / 24) % 24;

    // Midnight
    times.midnight = ((times.maghrib + times.fajr) / 2) % 24;

    // Format times HH:MM
    const formatted = {};
    Object.keys(times).forEach(key => {
      if (times[key] !== null) {
        const hours = Math.floor(times[key]);
        const minutes = Math.floor((times[key] - hours) * 60);
        formatted[key] = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
      } else {
        formatted[key] = null;
      }
    });

    return formatted;
  }

  // ============ PUBLIC API ============
  return {
    /**
     * Get prayer times
     * @param {Object} config - Configuration object
     * @param {number} config.latitude
     * @param {number} config.longitude
     * @param {number} config.timezone - UTC offset (hours)
     * @param {Date} config.date - Calculation date
     * @param {string} config.method - MWL|ISNA|Egypt|Makkah|Karachi|Tehran|Jafari
     * @param {string} config.asr - Standard|Hanafi
     * @returns {Object} { fajr, imsak, sunrise, dhuhr, asr, maghrib, isha, midnight }
     */
    calculate(config) {
      const {
        latitude,
        longitude,
        timezone = 0,
        date = new Date(),
        method = 'MWL',
        asr = 'Standard'
      } = config;

      if (!latitude || !longitude) {
        throw new Error('Latitude and longitude are required');
      }

      return getPrayerTimes(latitude, longitude, timezone, date, method, asr);
    },

    /**
     * Get available calculation methods
     */
    getMethods() {
      return Object.keys(methods).map(key => ({
        key,
        name: methods[key].name
      }));
    },

    /**
     * Convert time string HH:MM to minutes since midnight
     */
    timeToMinutes(timeStr) {
      if (!timeStr) return null;
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    },

    /**
     * Convert minutes to time string HH:MM
     */
    minutesToTime(minutes) {
      const h = Math.floor(minutes / 60);
      const m = minutes % 60;
      return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }
  };
})();

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PrayTimes;
}

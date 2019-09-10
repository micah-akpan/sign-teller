const Util = require('../utils');
const { getPossibleZodiacs, getZodiacDates, getZodiacSign } = require('./helpers');

module.exports = (birthdayDate, type = 'sidereal') => {
  const signs = require(type === 'sidereal' ? './signs/sidereal.json' : './signs/tropical.json');
  const [birthMonthStr, birthDay] = Util.getDateDetails(birthdayDate);
  const filteredSigns = getPossibleZodiacs(signs, birthMonthStr, getZodiacDates);
  const signDetails = getZodiacSign(filteredSigns, { birthMonthStr, birthDay, getZodiacDates });
  return signDetails;
}

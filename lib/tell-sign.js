const Util = require('../utils');
const { getPossibleZodiacs, getZodiacDates, getZodiacSign } = require('./helpers');

module.exports = ({ month, day, year }, type = 'sidereal') => {
  const signs = require(type === 'sidereal' ? './signs/sidereal.json' : './signs/tropical.json');
  const [birthMonth, birthDay] = Util.getDateDetails(day, month, year);
  const filteredSigns = getPossibleZodiacs(signs, birthMonth, getZodiacDates);
  const signDetails = getZodiacSign(filteredSigns, { birthMonth, birthDay, getZodiacDates });
  return signDetails;
}

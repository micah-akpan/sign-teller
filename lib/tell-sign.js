const signs = require('./signs.json');
const Util = require('../utils');

module.exports = (birthdayDate) => {
  const [birthMonthStr, birthDay] = Util.getDateDetails(birthdayDate);
  const filteredSigns = getPossibleZodiacs(signs, birthMonthStr);
  const signDetails = getZodiacSign(filteredSigns, birthMonthStr, birthDay);
  return signDetails;
}


function getZodiacSign(signs, birthMonthStr, birthDay) {
  const signDetails = signs.find(sign => {
    const [monthMin, monthMax, dayMin, dayMax] = getZodiacDates(sign);
    return (birthDay >= dayMin && birthMonthStr === monthMin) || (birthDay <= dayMax && birthMonthStr === monthMax);
  });

  return signDetails;
}

function getZodiacDates(sign) {
  const [monthMin, dayMin] = sign.min.split(' ');
  const [monthMax, dayMax] = sign.max.split(' ');
  return [monthMin, monthMax, dayMin, dayMax];
}

function getPossibleZodiacs(signs, birthMonthStr, birthDay) {
  return signs.filter((sign) => {
    const [monthMin, monthMax] = getZodiacDates(sign);
    return monthMin === birthMonthStr || monthMax === birthMonthStr;
  });
}
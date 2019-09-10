module.exports = {
  getZodiacDates(sign) {
    const [monthMin, dayMin] = sign.min.split(' ');
    const [monthMax, dayMax] = sign.max.split(' ');
    return [monthMin, monthMax, dayMin, dayMax];
  },

  getPossibleZodiacs(signs, birthMonthStr, getZodiacDates) {
    return signs.filter((sign) => {
      const [monthMin, monthMax] = getZodiacDates(sign);
      return monthMin === birthMonthStr || monthMax === birthMonthStr;
    });
  },

  getZodiacSign(signs, { birthMonthStr, birthDay, getZodiacDates }) {
    const signDetails = signs.find(sign => {
      const [monthMin, monthMax, dayMin, dayMax] = getZodiacDates(sign);
      return (birthDay >= dayMin && birthMonthStr === monthMin) || (birthDay <= dayMax && birthMonthStr === monthMax);
    });
    return signDetails;
  }
}

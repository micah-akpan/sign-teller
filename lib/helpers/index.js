module.exports = {
  getZodiacDates(sign) {
    const [monthMin, dayMin] = sign.from.split(' ');
    const [monthMax, dayMax] = sign.to.split(' ');
    return [monthMin, monthMax, dayMin, dayMax];
  },

  getPossibleZodiacs(signs, birthMonth, getZodiacDates) {
    return signs.filter((sign) => {
      const [monthMin, monthMax] = getZodiacDates(sign);
      return monthMin === birthMonth || monthMax === birthMonth;
    });
  },

  getZodiacSign(signs, { birthMonth, birthDay, getZodiacDates }) {
    const signDetails = signs.find(sign => {
      const [monthMin, monthMax, dayMin, dayMax] = getZodiacDates(sign);
      return (birthDay >= dayMin && birthMonth === monthMin) || (birthDay <= dayMax && birthMonth === monthMax);
    });
    return signDetails;
  }
}

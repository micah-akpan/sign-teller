module.exports = {
  /**
   * @param {string} dateStr
   * @returns {Array<String|Number>} Returns an array of date-related values
   */
  getDateDetails(day, month, year = 2000) {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    const date = new Date(year, month - 1, day); // month - 1 because 0 = Jan and Dec = 11
    const monthNum = date.getMonth();
    const monthFull = months.find(month => months.indexOf(month) === monthNum);
    return [monthFull, day];
  }
}

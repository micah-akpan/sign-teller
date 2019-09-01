module.exports = {
  /**
   *
   * @param {string} dateStr
   * @returns {Array<String|Number>} Returns an array of date-related values
   */
  getDateDetails(dateStr) {
    const monthsNumToStr = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    const date = new Date(dateStr);
    const monthNum = date.getMonth();
    const month = monthsNumToStr.find((month) => monthsNumToStr.indexOf(month) === monthNum);
    const day = date.getDate();
    return [month, day];
  }
}

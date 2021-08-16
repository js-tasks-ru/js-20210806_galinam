/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  let counter = 0;
  return [...string].reduce(
    (previousValue, item, index, array) => {
      counter = (!index || item === array[index - 1]) ? counter + 1 : 1;
      return counter <= size ? previousValue + item : previousValue;
    }, '');
}

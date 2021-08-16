/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  return [...arr].reduce(
    (previousValue, item) => {
      if (!previousValue.includes(item)) {
        previousValue.push(item);
      }
      return previousValue;
    },
    []);
}

/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  return [...arr].reduce((item, elem) => (item.includes(elem) || item.push(elem), item), []);
}

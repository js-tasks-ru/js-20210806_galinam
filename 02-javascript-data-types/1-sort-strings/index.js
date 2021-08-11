/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  let sortedArray = [...arr];
  if (param === 'asc') {
    return sortedArray.sort((a, b) => a.localeCompare((b), ['ru', 'en'], {caseFirst: 'upper'})
    );
  }
  if (param === 'desc') {
    return sortedArray.sort((a, b) => a.localeCompare((b), ['ru', 'en'])).reverse();
  }
}

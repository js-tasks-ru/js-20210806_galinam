/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = 'asc') {
  const sortedArray = [...arr];
  const getCompareFunc = (a, b, options) => a.localeCompare((b), ['ru', 'en'], options);
  const getSortedArray = (options) => (a, b) => (options ? 1 : -1) * getCompareFunc(a, b, options);

  return sortedArray.sort(getSortedArray(param === 'asc' && {caseFirst: 'upper'}));
}

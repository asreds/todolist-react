/**
 * function so sort asc array
 * @param array
 * @returns array
 */
export function sortAsc (array) {
  array.sort(function (a, b) {
    return new Date(a.createdAt) - new Date(b.createdAt);
  });
  return array;
}

/**
 * function so sort desc array
 * @param array
 * @returns array
 */
export function sortDesc (array) {
  array.sort(function (a, b) {
    let dateA = new Date(a.date).getTime();
    let dateB = new Date(b.date).getTime();
    return dateA > dateB ? 1 : -1;
  });
  return array;
}

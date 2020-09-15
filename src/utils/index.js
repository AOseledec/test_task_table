export const cutResponse = ({response, currentPage, limit}) => {
  const start = (currentPage-1)*limit;
  return [...response].splice(start, limit);
};

export const compare = (a, b) => (field, order) => {
  if (typeof (a[field]) === 'number') {
    return order
    ? b[field] - a[field]
    : a[field] - b[field]
  }
  if (typeof (a[field] === 'string')) {
    const first   = a[field].toLowerCase();
    const second  = b[field].toLowerCase();
    switch (order) {
      case true:
        if (first > second) return -1;
        if (first < second) return  1;
        break;
      case false:
        if (first < second) return -1;
        if (first > second) return  1;
        break;
      default:
        return 0;
    }
  }
}
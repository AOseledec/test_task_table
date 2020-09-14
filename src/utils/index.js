export const cutResponse = ({response, currentPage, limit}) => {
  const start = (currentPage-1)*limit;
  return [...response].splice(start, limit);
};
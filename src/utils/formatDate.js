const formatDate = (dateString) => {
  // const d = new Date(date);
  // const dtf = new Intl.DateTimeFormat("en", {
  //   year: "numeric",
  //   month: "short",
  //   day: "2-digit",
  // });
  // const [{ value: mo }, , { value: da }] = dtf.formatToParts(d);

  // return `${da} ${mo}`;
  return dateString.substring(0, 2) + "" + dateString.substring(3, 6);
};
export default formatDate;

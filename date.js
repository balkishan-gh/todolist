// jshint esversion:6
exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let date = today.toLocaleDateString("en-US", options);
  return date;
};

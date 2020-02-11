export default errors => {
  return errors.reduce((result, item) => {
    result[item.param] = item.msg;
    return result;
  }, {});
};

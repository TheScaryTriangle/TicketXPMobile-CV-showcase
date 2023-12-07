import moment from 'moment';

/**
 * @dev Use this for all of the date returns from the server
 * @param {*} param0 Date formatted as ISO 8601
 * @returns Date formated as [January] [5] [2020] [00:00]
 */
const formatDate = (date) => {
  const formattedDate = moment(date).format('MMMM Do YYYY HH:mm');
  return formattedDate
};

export default formatDate;

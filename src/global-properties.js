// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from 'dayjs';

function formatDate(date, format) {
  return dayjs(date || new Date())
    .format(format || 'DD.MM.YYYY');
}

export default {
  formatDate,
};

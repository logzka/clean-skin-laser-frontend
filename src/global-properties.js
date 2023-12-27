import dayjs from 'dayjs';

const formatDate = (date, format) => dayjs(date || new Date())
  .format(format || 'DD.MM.YYYY');

const formatDateTime = (date) => formatDate(date, 'DD.MM.YYYY HH:mm');

const formatServices = (servicesIds, servicesMap, sep = ', ') => (servicesIds || [])
  .map((id) => servicesMap[id]?.name || '').join(sep);

export default {
  formatDate,
  formatDateTime,
  formatServices,
};

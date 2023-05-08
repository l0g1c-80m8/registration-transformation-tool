import axios from 'axios';

const registrationService = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: 'https://registration-server-backend.wl.r.appspot.com',
  timeout: 300,
});

const fetchTransformation = async payload => await registrationService.post('/calculate', { ...payload });

export {
  fetchTransformation
};

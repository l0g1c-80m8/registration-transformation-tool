import axios from 'axios';

const registrationService = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 300,
});

const fetchTransformation = async payload => await registrationService.post('/calculate', { ...payload });

export {
  fetchTransformation
};

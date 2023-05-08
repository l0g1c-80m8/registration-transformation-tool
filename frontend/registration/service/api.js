import axios from 'axios';

const registrationService = axios.create({
  baseURL: 'https://localhost:5000',
  timeout: 300,
});

const fetchTransformation = async params => await registrationService.post('/calculate', { params });

export {
  fetchTransformation
};

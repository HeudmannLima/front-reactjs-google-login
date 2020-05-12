import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.transparencia.gov.br/api-de-dados',
});
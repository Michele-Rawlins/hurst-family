import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getFunFactsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/funFacts.json`)
    .then((response) => {
      const fbFunFacts = response.data;
      const funFacts = [];
      if (funFacts) {
        Object.keys(fbFunFacts).forEach((funFactsId) => {
          fbFunFacts[funFactsId].id = funFactsId;
          funFacts.push(fbFunFacts[funFactsId]);
        });
      }
      resolve(funFacts);
    })
    .catch((err) => reject(err));
});

const getSingleFunFact = (funFactsId) => axios.get(`${baseUrl}/funFacts/${funFactsId}.json`);

const postNewFunFact = (newFunFact) => axios.post(`${baseUrl}/funFacts.json`, newFunFact);

const putFunFact = (funFactsId, updatedFunFact) => axios.put(`${baseUrl}/funFacts/${funFactsId}.json`, updatedFunFact);

const deleteFunFact = (funFactsId) => axios.delete(`${baseUrl}/funFacts/${funFactsId}.json`);

export default {
  getFunFactsData,
  postNewFunFact,
  getSingleFunFact,
  putFunFact,
  deleteFunFact,
 };
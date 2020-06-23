import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getFunFactsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/funFacts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbFunFacts = response.data;
      const funFacts = [];
      if (fbFunFacts) {
        Object.keys(fbFunFacts).forEach((fbId) => {
          fbFunFacts[fbId].id = fbId;
          funFacts.push(fbFunFacts[fbId]);
        });
      }
      resolve(funFacts);
    })
    .catch((err) => reject(err));
});

const getSingleFunFact = (funFactsId) => axios.get(`${baseUrl}/funFacts/${funFactsId}.json`);

const postNewFunFact = (newFunFact) => axios.post(`${baseUrl}/funFacts.json`, newFunFact);

const putFunFact = (funFactsId, updatedFunFact) => axios.put(`${baseUrl}/funFacts/${funFactsId}.json`, updatedFunFact);

export default {
  getFunFactsByUid,
  postNewFunFact,
  getSingleFunFact,
  putFunFact,
 };
import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMemoriesByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/memories.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbMemories = response.data;
      const memories = [];
      if (fbMemories) {
        Object.keys(fbMemories).forEach((fbId) => {
          fbMemories[fbId].id = fbId;
          memories.push(fbMemories[fbId]);
        });
      }
      resolve(memories);
    })
    .catch((err) => reject(err));
});

export default {
  getMemoriesByUid,
}
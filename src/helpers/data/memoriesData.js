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

const getSingleMemory = (memoriesId) => axios.get(`${baseUrl}/memories/${memoriesId}.json`);

const postMemory = (newMemory) => axios.post(`${baseUrl}/memories.json`, newMemory);

const putMemory = (memoriesId, updatedMemory) => axios.put(`${baseUrl}/memories/${memoriesId}.json`, updatedMemory);

const deleteMemory = (memoriesId) => axios.delete(`${baseUrl}/memories/${memoriesId}.json`);



export default {
  getMemoriesByUid,
  getSingleMemory,
  postMemory,
  putMemory,
  deleteMemory,
}
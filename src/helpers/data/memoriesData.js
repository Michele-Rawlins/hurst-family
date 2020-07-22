import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMemoriesData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/memories.json`)
    .then((response) => {
      const fbMemories = response.data;
      const memories = [];
      if (memories) {
        Object.keys(fbMemories).forEach((memoriesId) => {
          fbMemories[memoriesId].id = memoriesId;
          memories.push(fbMemories[memoriesId]);
        });
      }
      resolve(memories);
    })
    .catch((err) => reject(err));
});

const getSingleMemory = (memoriesId) => axios.get(`${baseUrl}/memories/${memoriesId}.json`);

const postNewMemory = (newMemory) => axios.post(`${baseUrl}/memories.json`, newMemory);

const putMemory = (memoriesId, updatedMemory) => axios.put(`${baseUrl}/memories/${memoriesId}.json`, updatedMemory);

const deleteMemory = (memoriesId) => axios.delete(`${baseUrl}/memories/${memoriesId}.json`);



export default {
  getMemoriesData,
  getSingleMemory,
  postNewMemory,
  putMemory,
  deleteMemory,
}
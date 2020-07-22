import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getFamilyMembersData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/familyMembers.json`)
    .then((response) => {
      const fbFamilyMembers = response.data;
      const familyMembers = [];
      if (familyMembers) {
        Object.keys(fbFamilyMembers).forEach((familyMembersId) => {
          fbFamilyMembers[familyMembersId].id = familyMembersId;
          familyMembers.push(fbFamilyMembers[familyMembersId]);
        });
      }
      resolve(familyMembers);
    })
    .catch((err) => reject(err));
});

const getSingleFamilyMember = (familyMembersId) => axios.get(`${baseUrl}/familyMembers/${familyMembersId}.json`);

const postNewFamilyMember = (newFamilyMember) => axios.post(`${baseUrl}/familyMembers.json`, newFamilyMember);

const putFamilyMember = (familyMembersId, updatedFamilyMember) => axios.put(`${baseUrl}/familyMembers/${familyMembersId}.json`, updatedFamilyMember);

const deleteFamilyMember = (familyMembersId) => axios.delete(`${baseUrl}/familyMembers/${familyMembersId}.json`);

export default {
  getFamilyMembersData,
  postNewFamilyMember,
  getSingleFamilyMember, 
  putFamilyMember,
  deleteFamilyMember,
 };
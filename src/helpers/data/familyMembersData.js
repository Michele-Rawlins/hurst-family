import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getFamilyMembersByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/familyMembers.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbFamilyMembers = response.data;
      const familyMembers = [];
      if (fbFamilyMembers) {
        Object.keys(fbFamilyMembers).forEach((fbId) => {
          fbFamilyMembers[fbId].id = fbId;
          familyMembers.push(fbFamilyMembers[fbId]);
        });
      }
      resolve(familyMembers);
    })
    .catch((err) => reject(err));
});

const getSingleFamilyMember = (familyMembersId) => axios.get(`${baseUrl}/familyMembers/${familyMembersId}.json`);

const postNewFamilyMember = (newFamilyMember) => axios.post(`${baseUrl}/familyMembers.json`, newFamilyMember);

export default {
  getFamilyMembersByUid,
  postNewFamilyMember,
  getSingleFamilyMember,  
 };
const axios = require("axios");
const one = "https://jsonmock.hackerrank.com/api/article_users?page=1";
const two = "https://jsonmock.hackerrank.com/api/article_users?page=2";
async function getUsernames(threshold) {
  let userNamesArray = [];
  const requestOne = await axios.get(one);
  const requestTwo = await axios.get(two);
  axios.all([requestOne, requestTwo]).then(
    axios.spread((...responses) => {
      const responseOne = responses[0].data;
      const responseTwo = responses[1].data;
      userNamesArray = [
        ...makeUserArray(responseOne, threshold),
        ...makeUserArray(responseTwo, threshold),
      ];
      console.log(userNamesArray);
    })
  );
}

function makeUserArray({ data }, threshold) {
  const filteredUsers = data.filter(
    (user) => Number(user["submission_count"]) > threshold
  );
  const newfilteredUsers = filteredUsers.map((user) => user.username);
  return newfilteredUsers;
}

getUsernames(10);

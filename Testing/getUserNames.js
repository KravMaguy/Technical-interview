const axios = require("axios");
async function getUsernames(threshold) {
  const requestOne = await axios.get(
    "https://jsonmock.hackerrank.com/api/article_users?page=1"
  );
  const requestTwo = await axios.get(
    "https://jsonmock.hackerrank.com/api/article_users?page=2"
  );
  return axios.all([requestOne, requestTwo]).then(
    axios.spread((...responses) => {
      const responseOne = responses[0].data;
      const responseTwo = responses[1].data;
      return Array(
        ...makeUserArray(responseOne, threshold),
        ...makeUserArray(responseTwo, threshold)
      );
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

async function main() {
  const result = await getUsernames(10);
  console.log(result);
}
main();

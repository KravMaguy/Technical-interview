const axios = require("axios");
function getUsernames(threshold) {
  let userNamesArray = [];
  axios
    .get("https://jsonmock.hackerrank.com/api/article_users?page=1")
    .then((response) => {
      userNamesArray = [...makeUserArray(response.data, threshold)];
      axios
        .get("https://jsonmock.hackerrank.com/api/article_users?page=2")
        .then((response) => {
          userNamesArray = [
            ...userNamesArray,
            ...makeUserArray(response.data, threshold),
          ];
          console.log(userNamesArray);
        });
    });
}

function makeUserArray({ data }, threshold) {
  const filteredUsers = data.filter(
    (user) => Number(user["submission_count"]) > threshold
  );
  const newfilteredUsers = filteredUsers.map((user) => user.username);
  return newfilteredUsers;
}
getUsernames(10);

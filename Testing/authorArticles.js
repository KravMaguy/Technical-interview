const axios = require("axios");
async function topArticles(username, limit) {
  return await axios
    .get(`https://jsonmock.hackerrank.com/api/articles?author=${username}`)
    .then(({ data }) => {
      if (data.total_pages > 1) {
        getFollowUp(username);
      }
      return sortData(data, limit);
    });
}

const sortData = (data, limit) => {
  let titlesArray;
  data = data.data;
  data.sort((a, b) => (a.num_comments < b.num_comments ? 1 : -1));
  titlesArray = data
    .map((x) => (x.title ? x.title : x.story_title))
    .slice(0, limit);
  return titlesArray;
};

const getFollowUp = async (username) => {
  return await axios
    .get(
      `https://jsonmock.hackerrank.com/api/articles?author=${username}&page=2`
    )
    .then(({ data: { data } }) => {
      // console.log(data);
    });
};

async function main() {
  const result = await topArticles("coloneltcb", 2);
  console.log(result.join("\n") + "\n");
}
main();

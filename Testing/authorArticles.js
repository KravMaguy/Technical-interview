const axios = require("axios");
async function topArticles(username, limit) {
  return await axios
    .get(`https://jsonmock.hackerrank.com/api/articles?author=${username}`)
    .then(({ data: { data } }) => {
      let titlesArray;
      data.sort((a, b) => (a.num_comments < b.num_comments ? 1 : -1));
      titlesArray = data
        .map((x) => (x.title ? x.title : x.story_title))
        .slice(0, limit);
      return titlesArray;
    });
}

async function main() {
  const result = await topArticles("epaga", 2);
  console.log(result.join("\n") + "\n");
}
main();

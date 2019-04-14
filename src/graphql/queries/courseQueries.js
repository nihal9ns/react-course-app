import gql from "graphql-tag";
const { client } = require("../config");
export async function fetchCourses(email) {
  const { data } = await client
    .query({
      query: gql`
        query {
          course(where: { instructor: { _eq: "${email}" } }) {
            id
            title
            description
            price
            type
            level
            prerequisites
            instructor
            duration
          }
        }
      `
    })
    .then(data => data)
    .catch(error => error);

  return data.course;
}

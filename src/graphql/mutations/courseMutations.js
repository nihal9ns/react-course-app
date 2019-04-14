import gql from "graphql-tag";
const { client } = require("../config");
export async function addCourseMutation(course, email) {
  await client
    .mutate({
      mutation: gql`
        mutation insert_course {
          insert_course(
            objects: [
              {
                id: ${course.id}
                title: "${course.title}"
                description: "${course.description}"
                type: "${course.type}"
                level: "${course.level}"
                prerequisites: "${course.prerequisites}"
                instructor: "${email}"
                price: ${course.price}
                duration: "${course.duration}"
              }
            ]
          ) {
            returning {
              id
              title
              description
              type
              level
              instructor
              duration
              price
              prerequisites
            }
          }
        }
      `
    })
    .then(data => data)
    .catch(error => error);
}

export async function deleteCourseMutation(id, email) {
  await client
    .mutate({
      mutation: gql`
        mutation delete_course {
          delete_course(
            where: {
              _and: [{ id: { _eq: ${id} } }, { instructor: { _eq: "${email}" } }]
            }
          ) {
            affected_rows
          }
        }
      `
    })
    .then(data => data)
    .catch(error => error);
}

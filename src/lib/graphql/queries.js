import {gql} from "graphql-tag";
export const GETAUTH=gql`
query GetAuth {
  getAuth {
    user {
      id
      email
      accountType
      provider
    }
    profile {
      ... on Student {
        id
        firstName
        lastName
        phone
        city
        school
        fieldOfStudy
        graduationYear
        cv
        profilePhoto
      }
      ... on Company {
        id
        companyName
        industry
        phone
        website
        address
        city
        description
        logo
      }
    }
  }
}
`;
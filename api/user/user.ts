import { useQuery, useMutation } from '@tanstack/react-query';
import { request, gql } from "graphql-request";
// import { endpoint } from '../../app/layout';

const userDocument = gql`
    {
        user ( id: "1"  ) {
            company
            displayName
            email
            firstName
            id
            lastName
            pronouns
            userType
        }
    }
`;

export const useUser = (id: string | undefined, email: string | null) => {
    return useQuery(['user', email], async () => {
        const data : any = await request({
            url: "https://interview-buddy-be.onrender.com/graphql",
            document: userDocument,
            variables: { id }
        });
        return data
    }, {
        enabled: id !== undefined && id !== null && id !== ''
    });
};

interface CreateUserInput { // Need id field for Firebase assigned ID?
    firstName: string
    lastName: string
    email: string
    password: string
    userType: number
    pronouns: string | null
    displayName: string | null
    company: string | null
}

const createUserMutation = gql`
mutation createUser($input: CreateUserInput!) {
    createUser(
          input: $input
  ) {
          user {
             id
             firstName
             lastName
             email
             password
             userType
             pronouns
             displayName
             company
          }
    }
}
`
const createUser = async (createUserInput: CreateUserInput) => {
    const {
        firstName,
        lastName,
        email,
        password,
        userType,
        pronouns,
        displayName,
        company
        } = createUserInput

    const variables = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        userType: userType,
        pronouns: pronouns,
        displayName: displayName,
        company: company 
    }

    const data  = await request({
        url: "https://interview-buddy-be.onrender.com/graphql",
        document: createUserMutation,
        variables: { input: variables }
     })
     console.log(data)
     return data
}

export const useCreateUser = () => {
    return useMutation(createUser)
}
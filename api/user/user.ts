import { useQuery, useMutation } from '@tanstack/react-query';
import { request, gql } from "graphql-request";

const endpoint:string = (process.env.NEXT_PUBLIC_GQL_ENDPOINT_PRODUCTION as string);

const userDocument = gql`
query user($uuid: String!)
    {
        user ( uuid: $uuid  ) {
            company
            displayName
            email
            firstName
            uuid
            lastName
            pronouns
            userType
        }
    }
`;

export const useUser = (uuid: string | undefined, email: string | null) => {
    return useQuery(['user', email], async () => {
        const data : any = await request({
            url: endpoint,
            document: userDocument,
            variables: { uuid }
        });
        return data
    }, {
        enabled: uuid !== undefined && uuid !== null && uuid !== ''
    });
};

interface CreateUserInput {
    firstName: string
    lastName: string
    email: string
    uuid: string
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
             uuid
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
        uuid,
        userType,
        pronouns,
        displayName,
        company
        } = createUserInput

    const variables = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        uuid: uuid,
        userType: userType,
        pronouns: pronouns,
        displayName: displayName,
        company: company 
    }

    const data  = await request({
        url: endpoint,
        document: createUserMutation,
        variables: { input: variables }
     })
     return data
}

export const useCreateUser = () => {
    return useMutation(createUser)
}
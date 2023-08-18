import { useQuery } from '@tanstack/react-query';
import { request, gql } from "graphql-request";

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
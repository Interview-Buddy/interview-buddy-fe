import { useQuery, useMutation } from '@tanstack/react-query';
import { request, gql } from "graphql-request";


const endpoint:string = (process.env.NEXT_PUBLIC_GQL_ENDPOINT_PRODUCTION as string);

const meetingDocument = gql`
query meetings
    {
        meetings {
          id
          userId
          interviewType
          date
          title
          studentId
        }
    }
`;
export const getMeetings = () => {
  return useQuery([], async () => {
    const data : any = await request({
        url: endpoint,
        document: meetingDocument,
    });
    console.log(data)
    return data
})
}
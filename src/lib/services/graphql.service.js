import {useLazyQuery,useQuery,useSubscription,useMutation} from "@apollo/client";

import {GETAUTH} from "@lib/graphql/queries.js";
// import {LOGINMUTATION,REGISTERASCOMPANY,REGISTERASSTUDENT,LOGINGOOGLE} from "@lib/graphql/mutations"
export const useGetAuth=()=>{
    return useLazyQuery(GETAUTH);
}


/**MUTATIONS */
// export const useLogin=()=>{
//     return useMutation(LOGINMUTATION)
// }

// export const useRegisterAsStudent=()=>{
//     return useMutation(REGISTERASSTUDENT)
// }
// export const useRegisterAsCompany=()=>{
//     return useMutation(REGISTERASCOMPANY)
// }
// export const useLoginGoogle=()=>{
//     return useMutation(LOGINGOOGLE)
//}
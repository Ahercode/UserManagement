import axios from 'axios';
import {useQuery} from 'react-query'



export const Api_Endpoint = "https://enp.sipconsult.net/userapi/api";
export const Api_Endpoint2 = "https://enp.sipconsult.net/hrwebapi/api";
 export const CacheTime = 600000;

export interface IData {
    id: string;
    [key: string]: any;
}

// create generic type for item make the data generic
export type CustomData<T extends IData> ={
    url: string,
    data: T
}

export type CustomPostDto<T>={
    url: string,
    data: T
}

//dynamic fetch function
export function fetchData(url: string) {
    return axios.get(`${Api_Endpoint}/${url}`)
}

//dynamic update function
export function updateData<T extends IData>(item: CustomData<T>) {
    return axios.put(`${Api_Endpoint}/${item.url}/${item.data.id}`, item.data)
}

//dynamic delete function
export function deleteData<T extends IData>(item: CustomData<T>) {
    return axios.delete(`${Api_Endpoint}/${item.url}/${item.data.id}`)
}

export function postData<T>(item: CustomPostDto<T>) {
    return axios.post(`${Api_Endpoint}/${item.url}`, item.data)
}

export const useDataFetcher = () => {

    const {data: allUsers} = useQuery('users',() =>
      fetchData('Users'),{cacheTime: CacheTime})
    const {data: allRoles} =
      useQuery('roles',() => fetchData('Roles'),{cacheTime: CacheTime})
    const {data: allApplications} =
      useQuery('applications',() =>
        fetchData('Applications'),{cacheTime: CacheTime})
    const {data: allUserRoles} = useQuery('userRoles',() =>
      fetchData('UserRoles'),{cacheTime: CacheTime})

    return {allUsers, allRoles, allApplications, allUserRoles}
}


// export const useGlobalCalls = () => {
//     const actions = {
//
//         fetchUserRoles: async () => {
//             const response = await fetchData('UserRoles');
//             return response.data;
//         },
//
//         fetchRoles: async () => {
//             const response = await fetchData('Roles');
//             return response.data;
//         },
//
//         fetchApplications: async () => {
//             const response = await fetchData('Applications');
//             return response.data;
//         },
//
//         updateUser: async (data: any) => {
//             const response = await updateData({url: 'Users', data});
//             return response.data;
//         },
//
//         updateRole: async (data: any) => {
//             const response = await updateData({url: 'Roles', data});
//             return response.data;
//         },
//
//         updateApplication: async (data: any) => {
//             const response = await updateData({url: 'Applications', data});
//             return response.data;
//         },
//
//         deleteUser: async (data: any) => {
//             const response = await deleteData({url: 'Users', data});
//             return response.data;
//         },
//
//         deleteRole: async (data: any) => {
//             const response = await deleteData({url: 'Roles', data});
//             return response.data;
//         },
//
//         deleteApplication: async (data: any) => {
//             const response = await deleteData({url: 'Applications', data});
//             return response.data;
//         },
//
//         createUser: async (data: any) => {
//             const response = await postData({url: 'Users', data});
//             return response.data;
//         },
//
//         createRole: async (data: any) => {
//             const response = await postData({url: 'Roles', data});
//             return response.data;
//         },
//
//         createApplication: async (data: any) => {
//             const response = await postData({url: 'Applications', data});
//             return response.data;
//         },
//     };
//
//     const  dataFetcher = {
//         const {data: allUsers} = useQuery('users',() => fetchData('Users'),{cacheTime: CacheTime})
//     }
//     return { actions };
// }
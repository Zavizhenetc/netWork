import * as axios from "axios";

const instance = axios.create({
  baseURL:'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers:{
    "API-KEY": "542901ee-8d47-4ec8-a8ac-f9c2d0d99a52",
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize} `, {
      withCredentials: true,
    }).then(response => {
      return  response.data
    })
  },
  follow(userId){
    return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
  unfollow(userId){
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}
// export const getUsers = (currentPage = 1, pageSize = 10) => {
//   return instance.get(`users?page=${currentPage}&count=${pageSize} `, {
//     withCredentials: true,
//   }).then(response => {
//     return  response.data
//   })
// }

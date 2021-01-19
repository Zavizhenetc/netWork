export const getFriends = (state) => {
  return state.friends.users;
};
export const getPageSize = (state) => {
  return state.friends.pageSize;
};
export const getTotalUsersCount = (state) => {
  return state.friends.totalUsersCount;
};
export const getCurrentPage = (state) => {
  return state.friends.currentPage;
};
export const getIsFetching = (state) => {
  return state.friends.isFetching;
};
export const getFollowingInProgress = (state) => {
  return state.friends.followingInProgress;
};

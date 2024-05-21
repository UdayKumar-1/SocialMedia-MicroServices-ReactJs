import axios from "axios";

export const getUsersAllPosts = async ({ page }) => {
  const token = localStorage.getItem("token");
  try {
    const allFetchedPosts = await axios.get(
      `http://localhost:8005/main/posts/tokenuserposts?page=${page}&size=3`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return allFetchedPosts.data;
  } catch (error) {}
};
export const getSavedPostThunk = async ({ page }) => {
  const token = localStorage.getItem("token");
  try {
    const allSavedPostsOfToken = await axios.get(
      `http://localhost:8005/main/savedposts/getsavedpage?page=${page}&size=3`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return allSavedPostsOfToken.data;
  } catch (error) {}
};
export const getAllSavedPosts = async () => {
  const token = localStorage.getItem("token");
  try {
    const allSavedValues = await axios.get(
      `http://localhost:8005/main/savedposts/allsaved`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return allSavedValues.data;
  } catch (error) {
    rejectWithValue(error);
  }
};
export const getSavedPostPage = async ({ page }) => {
  const token = localStorage.getItem("token");
  try {
    const allSavedPostsOfToken = await axios.get(
      `http://localhost:8005/main/savedposts/getsavedpage?page=${page}&size=8`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return allSavedPostsOfToken.data;
  } catch (error) {}
};
export const fetchNotifications = async ({ page }) => {
  try {
    const allnotifi = await axios.get(
      `http://localhost:8005/main/notifications/allnotifications?page=${page}&size=6`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return allnotifi.data;
  } catch (error) {
    rejectWithValue(error);
  }
};

import axios from "axios";

const usersInstance = axios.create({
  baseURL: "https://647cd8aec0bae2880ad14327.mockapi.io/api/users",
});

export const getAllUsers = async () => {
  try {
    const { data } = await usersInstance.get("/");
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

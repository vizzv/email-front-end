import axios from 'axios';

const USER_API_BASE_URL = "https://email-campaign-be.azurewebsites.net/api/v1/users";
const SECRET_TOKEN = import.meta.env.VITE_SECRET_TOKEN; // For Vite
// const SECRET_TOKEN = process.env.REACT_APP_SECRET_TOKEN; // For Create React App

const config = {
  withCredentials: true,
  headers: {
    'X-Secret-Token': SECRET_TOKEN
  }
};

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL,confih);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user,config);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId,config);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user,config);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId,config);
    }
}

const userService = new UserService();
export default userService;

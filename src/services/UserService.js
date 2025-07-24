import axios from 'axios';

const USER_API_BASE_URL = "https://email-campaign-be.azurewebsites.net/api/v1/users";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL,{ withCredentials: true });
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user,{ withCredentials: true });
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId,{ withCredentials: true });
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user,{ withCredentials: true });
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId,{ withCredentials: true });
    }
}

const userService = new UserService();
export default userService;

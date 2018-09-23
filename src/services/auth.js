import ApiService from './apiService';

async function SignUp(userObj) {
    console.log('userObj: ', userObj);
    const apiObject = {};
    apiObject.method = 'POST';
    apiObject.authentication = false;
    apiObject.endpoint = 'api/users';
    apiObject.body = userObj;
    const response = await ApiService.callApi(apiObject);
    return response;
}

export default { SignUp };
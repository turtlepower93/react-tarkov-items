import * as usersAPI from './users-api'

export async function signUp(userData) {
    try {
        //this is where we want to get the token from the server
        const token = await usersAPI.signUp(userData);
        return token;
    } catch {
        throw new Error('Invalid Sign Up');
    }
}
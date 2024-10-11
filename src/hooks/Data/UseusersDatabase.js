import {useSQliteContext}from "expo-sqlite";

export function useUsersDatabase (){
    const database = useSQliteContext();

        async function authUser ({email,password}){
async function authUser({email,password}){
    console.log("authUser email:",email,"- password:",password);
 try {
     const result = await database.getFirstAsync(`
        SELECT id,nome,email,role FROM users where email = '${email}'and senha = '${password}'
        `);
        return result 
 } catch (error) {
    console.error("useUsersDatabase authUsers error",error);
    throw error;
 }
}
return{
    authUser,
};
    }
}
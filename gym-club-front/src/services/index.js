const users = [];
export default class Service {
    static gymName = "ORY GYM";
    static authenticated = false;

    static authenticateUser(user){
      return users.find(u => u.login === user.login && u.password === user.password );
    }

    static isAuthenticated(){
        console.log("auth: "+this.authenticated);
        return this.authenticated;
    }
}

let User=undefined;

module.exports = class currUser{
    static new(newuser){
        User=newuser;
    }
    static logout(){
        User=undefined;
    }
    static user(){
        return User;
    }
}
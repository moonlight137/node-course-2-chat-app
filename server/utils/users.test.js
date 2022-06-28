const expect = require('expect'); 

const {Users} = require('./users'); 

describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users(); 
        users.users = [{
            id: '1',
            name: 'Luis', 
            room: 'Node Course'

        }, {
            id: '2',
            name: 'Michael', 
            room: 'Node Course'

        }, {
            id: '1',
            name: 'Sebastian', 
            room: 'React Course'

        }]; 

    });

    it('should add new user', () => {
    var users = new Users();
    var users = {
        id: '123', 
        name: 'Luis',
        room: 'CT'
    }; 
    var resUSer = users.addUSer(user.id, user.name, user.room); 


    expect(users.users).toEqual([user]);


    });

    it('should remover a user', () => {
        var userId = '1'; 
        var user = users.removeUser(userId); 

        expect(user.id).toBe(userId); 
        expect(users.users.lenght).toBe(2); 
    }); 

    it('should not remove user', () => {
        var userId = '99'; 
        var user = users.removeUser(userId); 

        expect(user).toNotExist(); 
        expect(users.users.lenght).toBe(3); 
    });

    it('should find user', () => {
        var userId = '2'; 
        var user = users.getUser(userId); 

        expect(user.id).toBe(userId); 
    });

    it('should not find user', () => {
        var userId = '99'; 
        var user = users.getUser(userId); 

        expect(user).toNotExist(); 
    });

    

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course'); 

        expect(userList).toEqual(['Luis','Michael']); 
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('React Course'); 

        expect(userList).toEqual(['Sebastian']); 
    });
});
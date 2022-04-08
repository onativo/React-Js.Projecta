function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'User'){
            admins.push(key);
        }
    }
    return admins;
}

const user = new Map();

user.set('Luiz', 'Admin');
user.set('Laura', 'User');
user.set('Lais', 'Admin');
user.set('Luan', 'User');

console.log(getAdmins(user));
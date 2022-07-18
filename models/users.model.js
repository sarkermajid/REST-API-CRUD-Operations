const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id : uuidv4(),
        username : 'sarker majid',
        email : 'sarkermajid@gmail.com'
    },
    {
        id : uuidv4(),
        username : 'asif smar',
        email : 'asifsmar@gmail.com'
    },
    {
        id : uuidv4(),
        username : 'sajid rahman',
        email : 'sajid2gmail.com'
    }
];

module.exports = users;
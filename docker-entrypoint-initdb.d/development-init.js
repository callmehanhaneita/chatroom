db = db.getSiblingDB('chatroom-dev');
db.createUser(
  {
    user: 'user_dev',
    pwd: 'pwd_dev',
    roles: [{ role: 'readWrite', db: 'chatroom-dev' }],
  },
);

db.createCollection('members')
db.members.insertMany([
  {
    name: 'Jenny White'
  },
  {
    name: 'Courtney Henry'
  },
  {
    name: 'Albert Flores'
  },
  {
    name: 'Darlene Robertso'
  }
])

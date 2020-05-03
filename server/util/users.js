const users = [];

// Add user obj to users array if there is no other user in the room with the same name, return user obj.
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find((user) => user.room === room && user.name === name);

  if (existingUser) return { error: 'Username is taken.' };
  if (!name || !room) return { error: 'Username and room are required.' };

  const user = { id, name, room };
  users.push(user);
  return { user };
};

// remove user based on users id
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };

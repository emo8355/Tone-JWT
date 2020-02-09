const database = [
  {
    id: 1,
    email: "1@q.com",
    password: "abc"
  },
  {
    id: 2,
    email: "2@q.com",
    password: "abcd"
  }
];

const userModel = {
  findOne: email => {
    return database.find(x => x.email === email);
  },
  findById: id => {
    return database.find(x => x.id === id);
  }
};

module.exports = { database, userModel };

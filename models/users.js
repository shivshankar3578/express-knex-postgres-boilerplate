
const db = require("../config/dbConfig.js");

const findAll = async () => {
  return await db("users")
}


const findOrRaise = async (/** @type {{id?: number, name?:string}} */ cond) => {
  const users = await db("users").where(cond)
  if (!users || !users.length) {
    throw Error("Not a valid user")
  }
  return users[0]
};

// GET SPECIFIC USER BY ID
const findById = id => {
  return db("users").where("id", id);

  //SQL RAW METHOD
  // return db.raw(`SELECT * FROM users
  //                  WHERE id = ${id}`);
};

// ADD A USER
const addUser = user => {
  return db("users").insert(user, "id");
};

// UPDATE USER
const updateUser = (id, post) => {
  return db("users")
    .where("id", id)
    .update(post);
};

// REMOVE USER
const removeUser = id => {
  return db("users")
    .where("id", id)
    .del();
};

module.exports = {
  findAll,
  findOrRaise,
  findById,
  addUser,
  updateUser,
  removeUser
};

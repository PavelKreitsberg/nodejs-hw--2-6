const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addNewContact = require("./addNewContact");
const removeContactById = require("./removeContactById");
const updateContactById = require("./updateContactById");
const updateFavoriteById = require("./updateFavoriteById");

module.exports = {
  getAllContacts,
  getContactById,
  addNewContact,
  removeContactById,
  updateFavoriteById,
  updateContactById,
};

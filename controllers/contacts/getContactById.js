const { Contact } = require("../../models");

const getContactById = async (req, res, next) => {
  const id = req.params.contactId;
  const lookingContact = await Contact.findById(id);
  if (!lookingContact) {
    const error = new Error(`Item with \`${id}\` id not exist`);
    error.status = 404;
    throw error;
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result: lookingContact,
    },
  });
};

module.exports = getContactById;

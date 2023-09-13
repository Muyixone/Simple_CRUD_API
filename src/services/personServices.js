const personModel = require('../models/personModel');

const CreatePerson = async (personData) => {
  const person = new personModel({ ...personData });

  try {
    await person.save();
    return person;
  } catch (error) {
    return error;
  }
};

const getPerson = async (personId) => {
  try {
    const person = await personModel.findById({ _id: personId });

    if (!person) {
      throw new Error('Person not found');
    }

    return person;
  } catch (error) {
    throw new Error({ status: 500, message: error.message });
  }
};
const updateOnePersonInfo = async (personId, newInfo) => {
  try {
    const person = await personModel.findById({ _id: personId });
    if (!person) {
      console.log('Person not found');
      return null;
    }

    // Update the person document with the value from the request body
    person.set(newInfo);

    await person.save();
    return person;
  } catch (error) {
    console.log(error);
  }
};

// Delete person
const deleteOnePerson = async (personId) => {
  try {
    const person = await personModel.findById({ _id: personId });
    if (!person) {
      console.log('Person not found');
      return;
    }
    await personModel.deleteOne({ _id: personId });
    return;
  } catch (error) {}
  return;
};

module.exports = {
  CreatePerson,
  getPerson,
  updateOnePersonInfo,
  deleteOnePerson,
};

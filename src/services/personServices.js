const personModel = require('../models/personModel');

// Create person service
const CreatePerson = async (personData) => {
  const person = new personModel({ ...personData });

  try {
    await person.save();
    return person;
  } catch (error) {
    throw error;
  }
};

//Get one person

const getPerson = async (personId) => {
  try {
    const person = await personModel.findById({ _id: personId });

    if (!person) {
      return;
    }

    return person;
  } catch (error) {
    throw error;
  }
};

// Update person service

const updateOnePersonInfo = async (personId, newInfo) => {
  try {
    const person = await personModel.findById({ _id: personId });
    if (!person) {
      return null;
    }

    // Update the person document with the value from the request body
    person.set(newInfo);

    await person.save();
    return person;
  } catch (error) {
    throw error;
  }
};

// Delete person
const deleteOnePerson = async (personId) => {
  try {
    const person = await personModel.findById({ _id: personId });
    if (!person) {
      return;
    }
    await personModel.deleteOne({ _id: personId });
    return;
  } catch (error) {}
  throw error;
};

module.exports = {
  CreatePerson,
  getPerson,
  updateOnePersonInfo,
  deleteOnePerson,
};

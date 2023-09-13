const personModel = require('../models/personModel');

const CreatePerson = async (personData) => {
  const person = new personModel({ ...personData });

  try {
    await person.save();
    return person;
  } catch (error) {
    console.log(error);
  }
};

const getPerson = async (personId) => {
  try {
    const person = await personModel.findById({ _id: personId });

    if (!person) {
      return console.log('Person not found');
    }

    return person;
  } catch (error) {
    console.log(error);
  }
};
const updateOnePersonInfo = async (personId, newInfo) => {
  try {
    const person = await personModel.findById({ _id: personId });
    if (!person) {
      console.log('Person not found');
      return null;
    }

    person.set(newInfo);

    await person.save();
    return person;
  } catch (error) {
    console.log(error);
  }
};
const deleteOnePerson = () => {
  return;
};

module.exports = {
  CreatePerson,
  getPerson,
  updateOnePersonInfo,
  deleteOnePerson,
};

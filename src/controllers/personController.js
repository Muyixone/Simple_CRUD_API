const mongoose = require('mongoose');
const personService = require('../services/personServices');

const CreatePerson = async (req, res) => {
  try {
    const person = await personService.CreatePerson({ ...req.body });

    if (!person) {
      return;
    }

    return res.json({
      mesg: 'person created',
      person,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/* 
    @desc Get single person
    @route GET /api/v1/:user_id
    @access Public
*/
const getPerson = async (req, res) => {
  const { user_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(user_id)) {
    return console.log(`No item with ${user_id} found`);
    // throw new notFoundError(`No item found with id ${stateId}`);
  }

  try {
    const person = await personService.getPerson(user_id);
    res.json({
      person,
    });
  } catch (error) {
    throw new Error();
  }
};

const updateOnePersonInfo = async (req, res) => {
  const { user_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(user_id)) {
    return console.log(`No item with ${user_id} found`);
    // throw new notFoundError(`No item found with id ${stateId}`);
  }
  const person = await personService.updateOnePersonInfo(user_id, req.body);

  res.json({
    mesg: 'person  info updated',
    person,
  });
};

const deleteOnePerson = async (req, res) => {
  const { user_id } = req.params;
  try {
    await personService.deleteOnePerson(user_id);
    res.json({
      mesg: 'person deleted',
    });
  } catch (error) {}
};

module.exports = {
  CreatePerson,
  getPerson,
  updateOnePersonInfo,
  deleteOnePerson,
};

const mongoose = require('mongoose');
const personService = require('../services/personServices');

const CreatePerson = async (req, res) => {
  try {
    const person = await personService.CreatePerson({ ...req.body });

    return res.status(200).json({
      mesg: 'person created',
      person,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json(errors);
    }

    res.status(500).json({ error: 'Something went wrong' });
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

    if (!person) {
      return res.status(404).json({
        message: 'Person not found',
      });
    }
    res.json({
      person,
    });
  } catch (error) {
    return res.status(500).json({ errorMessage: 'Something went wrong' });
  }
};

const updateOnePersonInfo = async (req, res) => {
  const { user_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(user_id)) {
    return console.log(`No item with ${user_id} found`);
    // throw new notFoundError(`No item found with id ${stateId}`);
  }
  try {
    const person = await personService.updateOnePersonInfo(user_id, req.body);

    if (!person) {
      return res.status(404).json({
        message: 'Person not found',
      });
    }

    res.json({
      mesg: 'person  info updated',
      person,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).json(errors);
    }
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const deleteOnePerson = async (req, res) => {
  const { user_id } = req.params;
  try {
    const person = await personService.deleteOnePerson(user_id);

    res.json({
      mesg: 'person deleted',
    });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  CreatePerson,
  getPerson,
  updateOnePersonInfo,
  deleteOnePerson,
};

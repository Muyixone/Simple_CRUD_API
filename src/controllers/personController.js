const CreatePerson = (req, res) => {
  res.json({
    mesg: 'person created',
  });
};

const getPerson = (req, res) => {
  res.json({
    mesg: 'Get single person',
  });
};

const updateOnePersonInfo = (req, res) => {
  res.json({
    mesg: 'person  info updated',
  });
};

const deleteOnePerson = (req, res) => {
  res.json({
    mesg: 'person deleted',
  });
};

module.exports = {
  CreatePerson,
  getPerson,
  updateOnePersonInfo,
  deleteOnePerson,
};

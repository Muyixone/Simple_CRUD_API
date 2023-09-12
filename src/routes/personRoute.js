const express = require('express');

const personController = require('../controllers/personController');

const router = express.Router();

router.post('/', personController.CreatePerson);
router
  .route('/:user_id')
  .get(personController.getPerson)
  .patch(personController.updateOnePersonInfo)
  .delete(personController.deleteOnePerson);

module.exports = router;

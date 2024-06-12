const express = require('express');
const router = express.Router();
const { getVote, saveVote, updateVote, deleteVote } = require('../controllers/votecontrol');

router.get('/get', getVote);
router.post('/save', saveVote);
router.put('/update/:id', updateVote);
router.delete('/delete/:id', deleteVote);

module.exports = router;

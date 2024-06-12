const voteModel = require('../models/votemodel');

module.exports.getVote = async (req, res) => {
    try {
        const votes = await voteModel.find();
        res.send(votes);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while retrieving votes.");
    }
};

module.exports.saveVote = async (req, res) => {
    try {
        const { v_name, v_id, c_name } = req.body;
        const newVote = await voteModel.create({ v_name, v_id, c_name });
        console.log("Added successfully");
        res.send(newVote);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while saving the vote.");
    }
};

module.exports.updateVote = async (req, res) => { // Corrected function name
    try {
        const { id } = req.params;
        const { v_name, v_id, c_name } = req.body;

        const updatedVote = await voteModel.findByIdAndUpdate(id, { v_name, v_id, c_name }, { new: true });

        if (!updatedVote) {
            return res.status(404).send("Vote not found.");
        }

        res.send("Updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while updating the vote.");
    }
};

module.exports.deleteVote = async (req, res) => {
    const voteId = req.params.id;

    try {
        const deletedVote = await voteModel.findByIdAndDelete(voteId);

        if (!deletedVote) {
            return res.status(404).json({ error: 'Vote not found' });
        }

        res.status(200).json({ message: 'Vote deleted successfully' });
    } catch (error) {
        console.error('Error deleting vote:', error);
        res.status(500).json({ error: 'An error occurred while deleting the vote' });
    }
};

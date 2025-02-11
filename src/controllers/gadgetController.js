const { Gadget } = require('../models/gadgetModel');
const { generateToken } = require('../controllers/AuthController');

// Fetching the gadgets from the database
exports.getAllGadgets = async (req, res) => {
    //inserting the jwt token for verification
   
    try {
        const gadgets = await Gadget.findAll();
        res.status(200).json(gadgets);
    } catch (error) {
        if (error.message.includes('Invalid status value')) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Error fetching gadgets', details: error.message });
        console.log(error)
    }
};

// Adding a new gadget to the database
exports.addGadget = async (req, res) => {
    try {
        const { name, status } = req.body;
        const gadget = await Gadget.create({ name, status });
        res.status(201).json(gadget);
    } catch (error) {
        res.status(500).json({ error: 'Error adding gadget', details: error.message });
    }
};

// Updating the gadget in the database
exports.updateGadget = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        
        const gadget = await Gadget.findByPk(id);
        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }
        
        const updatedGadget = await gadget.update(data);
        res.status(200).json(updatedGadget);
    } catch (error) {
        res.status(500).json({ error: 'Error updating gadget', details: error.message });
    }
};

// Deleting (decommissioning) the gadget from the database
exports.deleteGadget = async (req, res) => {
    try {
        const { id } = req.params;
        
        const gadget = await Gadget.findByPk(id);
        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }
        
        const decommissionedGadget = await gadget.update({ status: 'Decommissioned' });
        res.status(200).json(decommissionedGadget);
    } catch (error) {
        res.status(500).json({ error: 'Error decommissioning gadget', details: error.message });
    }
};

// Triggering the self-destruct sequence for the gadget
exports.selfDestructGadget = async (req, res) => {
    try {
        const { id } = req.params;
        
        const gadget = await Gadget.findByPk(id);
        if (!gadget) {
            return res.status(404).json({ error: 'Gadget not found' });
        }

        const confirmationCode = Math.random().toString(36).substring(7);
        const destroyedGadget = await gadget.update({ status: 'Destroyed' });
        
        res.status(200).json({
            message: 'Self-destruct sequence triggered successfully',
            confirmationCode,
            gadget: destroyedGadget
        });
    } catch (error) {
        res.status(500).json({ error: 'Error triggering self-destruct', details: error.message });
    }
};

// Generating a JWT token
exports.displayToken = async (req, res) => {
    try {
        const id  = 'unique_id' ;
        const token = generateToken({ id });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error generating token', details: error.message });
    }
}

// Fetching the gadgets from the database by status
exports.getAllGadgetsByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        const gadgets = await Gadget.findAll({ where: { status } });
        res.status(200).json(gadgets);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching gadgets', details: error.message });
    }
}
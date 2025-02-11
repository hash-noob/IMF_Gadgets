const express = require('express');
const {
  getAllGadgets,
  addGadget,
  updateGadget,
  deleteGadget,
  selfDestructGadget,
  displayToken,
  getAllGadgetsByStatus
} = require('../controllers/gadgetController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();


router.get('/', getAllGadgets);//route to get all gadgets

router.get('/token',displayToken);//route to display token

router.post('/', authenticateToken, addGadget);//route to add a new gadget

router.patch('/:id', authenticateToken, updateGadget);//route to update a gadget

router.delete('/:id', authenticateToken, deleteGadget);//route to delete a gadget

router.post('/:id/self-destruct', authenticateToken, selfDestructGadget);//route to self-destruct a gadget

router.get('/:status', getAllGadgetsByStatus);//route to get all gadgets by status

module.exports = router;
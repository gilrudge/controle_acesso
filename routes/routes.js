const express = require('express');
const router = express.Router();
const getAllBranchesCtrl = require('../controllers/getAllBranchesCtrl');
const getOneBranchCtrl = require('../controllers/getOneBranchCtrl');
const addOneBranchCtrl = require('../controllers/addOneBranchCtrl');
const updateBranchCtrl = require('../controllers/updateBranchCtrl');
const deleteOneBranchCtrl = require('../controllers/deleteOneBranchCtrl');
const invasionAlertCtrl = require('../controllers/invasionAlertCtrl')
const getEventsCtrl = require('../controllers/getEventsCtrl');


router.get('/', getAllBranchesCtrl);
router.post('/', addOneBranchCtrl);
router.put('/:id', updateBranchCtrl);
router.delete('/:id', deleteOneBranchCtrl);
router.get('/invasion', invasionAlertCtrl);
router.get('/eventos-agencia/:id', getEventsCtrl);
router.get('/:id', getOneBranchCtrl);



module.exports = router
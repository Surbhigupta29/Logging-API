const express = require('express');

const salesTeam = require('../controller/salesTeam');

const router = express.Router();

router.route('/').get(salesTeam.getAllTeam).post(salesTeam.createSalesTeam);

module.exports = router;

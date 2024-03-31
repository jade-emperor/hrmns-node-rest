const express = require('express');
const router = express.Router();


// Controllers
const employeesCtrl = require('../controllers/employees-controller');


// API - Get Employees
router.get('/get-employees', employeesCtrl.getAllEmployees);

// API - Add new employee
router.post('/add-employee', employeesCtrl.addEmployee);

module.exports = router;
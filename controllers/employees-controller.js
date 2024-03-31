/**
 * temporary bin to store employees' records
 */
let employeesBin = [
    { id: 1001, firstName: "Test", lastName: "Data", salary: 1000.0 }
];

/**
 * 
 * @param {*} req from client 
 * @param {*} res to client [includes all employees record from DB (to be implemented)]
 * @param {*} next optional, which forward request to next
 * 
 */
exports.getAllEmployees = (req, res, next) => {
    res.status(200).json({
        employees: employeesBin
    });
};

/**
 * 
 * @param {*} req from client [includes employee record in req body as json, to be stored in DB (to be implemented)]
 * @param {*} res to client [includes success message and stored employee record]
 * @param {*} next optional, which forward request to next
 */
exports.addEmployee = (req, res, next) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const salary = req.body.salary;

    // The Math.ceil method round the number to up (e.g., 1234.1 -> 1235)
    let employee = {
        id: Math.ceil(Math.random() * 10000),
        firstName: firstName,
        lastName: lastName, 
        salary: salary
    };
    
    employeesBin.push(employee);

    // Create employee record in db (to be implemented)
    res.status(201).json({
        message: "Employee's record created successfully!",
        emp: employee
    });
};
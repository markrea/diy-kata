const getEmployerRole = (employeeName, employees) => {
  return employees.find(employee => {
    return employee.name === employeeName;
  }).role;
};

module.exports = getEmployerRole;

/* used .find() to pull the value of name in the employees
array and test if it is equal to employeeName, then 
returns the role*/
const pg = require('pg');

const sync = async () => {
  //DROP and RECREATE TABLES
  //remember "departmentId" will need to be in quotes
};

const readDepartments = async () => {
  return [];
};

const readUsers = async () => {
  return [];
};

module.exports = {
  sync,
  readDepartments,
  readUsers
};
//you will eventually need to export all of these
/*
module.exports = {
  sync,
  readDepartments,
  readUsers,
  createDepartment,
  createUser,
  deleteDepartment,
  deleteUser,
  updateUser,
  updateDepartment
};
*/

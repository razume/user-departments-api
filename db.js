const pg = require('pg');
const { Client } = pg;

const client = new Client('postgres://localhost/departments_and_users');

const sync = async () => {
  const SQL = `
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        DROP TABLE IF EXISTS users;
        DROP TABLE IF EXISTS departments;

        CREATE TABLE departments (id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (), 
                                  name REQUIRED VARCHAR);
        CREATE TABLE users ("departmentId" UUID FOREIGN KEY DEFAULT NULL REFERENCES departments(id), 
                            id UUID PRIMARY KEY DEFAULT uuid_generate_v4 (), name REQUIRED VARCHAR);

        INSERT INTO departments (name) VALUES ('HR');
        INSERT INTO users (name) VALUES ('John Doe');
    `;

  await client.query(SQL);
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

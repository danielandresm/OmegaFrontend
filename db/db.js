
import { debounce, deburr } from 'lodash';
import { Client } from 'pg'
const connectionString = process.env.DB_URL
import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'ls-5e17ee4eb902050df067358a2121bfdcc7ca67bd.cod9lafdqr5g.us-east-1.rds.amazonaws.com',
  user: 'dbmasteruser', 
  password: 'Z{F0P0-T)8AoQLmA}ho]VB&8X|(9u#.^', 
  database: 'fullstackbook-todo-nestjs' 
});

export default db;




import { db } from '../server/database.js';
console.log('Total products loaded with .js extension:', db.getAllProducts().length);

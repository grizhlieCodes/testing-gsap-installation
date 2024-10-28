import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file if available
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatePath = path.resolve(__dirname, '.npmrc.template');
const npmrcPath = path.resolve(__dirname, '.npmrc');

// Read the template file
let template = fs.readFileSync(templatePath, 'utf-8');

// Replace the placeholder with the actual token
const token = process.env.GREENSOCK_TOKEN || 'your-default-token';
template = template.replace(/\$\{GREENSOCK_TOKEN\}/g, token);

// Write the updated content to .npmrc
fs.writeFileSync(npmrcPath, template);

console.log('Generated .npmrc with GREENSOCK_TOKEN:', token);
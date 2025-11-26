#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define all your routes here
const routes = [
  '/',
  '/cs280a',
  '/cs280a/project0',
  '/cs280a/project1',
  '/cs280a/project2',
  '/cs280a/project3',
  '/cs280a/project4',
  '/cs280a/project5'
];

// Read the main index.html
const indexHtmlPath = path.join(__dirname, '..', 'dist', 'index.html');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Create directories and index.html files for each route
routes.forEach(route => {
  if (route === '/') {
    // Root route already exists
    return;
  }
  
  // Remove leading slash and create directory path
  const dirPath = path.join(__dirname, '..', 'dist', route.substring(1));
  
  // Create directory if it doesn't exist
  fs.mkdirSync(dirPath, { recursive: true });
  
  // Create index.html in the directory
  const indexPath = path.join(dirPath, 'index.html');
  fs.writeFileSync(indexPath, indexHtmlContent);
  
  console.log(`Created: ${route}/index.html`);
});

console.log('GitHub Pages directory structure created successfully!');

/*
Name: EGIE BOY P. DELA CRUZ
Section: IV-BSIT A
Activity: N3 - File Manager
Date: November 17, 2026
*/

// Import built-in modules
const fs = require('fs');
const path = require('path');

// Set the files directory
const filesDirectory = path.join(__dirname, 'files');

// Get command-line arguments
const command = process.argv[2];
const fileName = process.argv[3];

// Create the complete file path
function getFilePath(name) {
    return path.join(filesDirectory, path.basename(name));
}

// CREATE a file
function createFile() {
    const content = process.argv.slice(4).join(' ');
    const filePath = getFilePath(fileName);

    fs.writeFileSync(filePath, content);

    console.log('File created successfully!');
}

// READ a file
function readFile() {
    const filePath = getFilePath(fileName);

    const content = fs.readFileSync(filePath, 'utf8');

    console.log('File Content:');
    console.log(content);
}

// UPDATE a file
function updateFile() {
    const content = process.argv.slice(4).join(' ');
    const filePath = getFilePath(fileName);

    fs.appendFileSync(filePath, '\n' + content);

    console.log('File updated successfully!');
}

// DELETE a file
function deleteFile() {
    const filePath = getFilePath(fileName);

    fs.unlinkSync(filePath);

    console.log('File deleted successfully!');
}

// LIST all files
function listFiles() {
    const files = fs.readdirSync(filesDirectory);

    if (files.length === 0) {
        console.log('No files found.');
        return;
    }

    files.forEach((file) => {
        const filePath = path.join(filesDirectory, file);
        const content = fs.readFileSync(filePath, 'utf8');

        console.log('-----------------------------');
        console.log('Full Path:', filePath);
        console.log('File Name:', path.basename(file));
        console.log('Extension:', path.extname(file));
        console.log('Contents:', content);
    });
}

// Display student information
console.log("=================================");
console.log("N3 - FILE MANAGER");
console.log("Name: EGIE BOY P. DELA CRUZ");
console.log("Section: IV-BSIT A");
console.log("=================================");

// Execute selected command
try {
    switch (command) {
        case 'create':
            createFile();
            break;

        case 'read':
            readFile();
            break;

        case 'update':
            updateFile();
            break;

        case 'delete':
            deleteFile();
            break;

        case 'list':
            listFiles();
            break;

        default:
            console.log('Unknown command.');
            console.log('Available commands: create, read, update, delete, list');
    }
} catch (error) {
    if (error.code === 'ENOENT') {
        console.log('Error: File does not exist.');
    } else {
        console.log('Error:', error.message);
    }
}
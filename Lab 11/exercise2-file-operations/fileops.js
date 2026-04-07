// Exercise 2: Node.js File System Operations using the fs module

// Import built-in fs module
const fs = require('fs');

const FILE_NAME = 'sample.txt';

console.log('=== Node.js File Operations Demo ===\n');

// ─── STEP 1: Create / Write a file ───────────────────────────────────────────
fs.writeFile(FILE_NAME, 'Hello! This file was created by Node.js fs module.\n', (err) => {
  if (err) {
    console.error('[ERROR] writeFile failed:', err.message);
    return;
  }
  console.log(`[WRITE] File "${FILE_NAME}" created successfully.`);

  // ─── STEP 2: Append data to the file ───────────────────────────────────────
  fs.appendFile(FILE_NAME, 'This line was appended using fs.appendFile().\n', (err) => {
    if (err) {
      console.error('[ERROR] appendFile failed:', err.message);
      return;
    }
    console.log(`[APPEND] Data appended to "${FILE_NAME}" successfully.`);

    // ─── STEP 3: Read the file contents ──────────────────────────────────────
    fs.readFile(FILE_NAME, 'utf8', (err, data) => {
      if (err) {
        console.error('[ERROR] readFile failed:', err.message);
        return;
      }
      console.log(`\n[READ] Contents of "${FILE_NAME}":`);
      console.log('-----------------------------');
      console.log(data);
      console.log('-----------------------------\n');

      // ─── STEP 4: Delete the file ────────────────────────────────────────────
      fs.unlink(FILE_NAME, (err) => {
        if (err) {
          console.error('[ERROR] unlink failed:', err.message);
          return;
        }
        console.log(`[DELETE] File "${FILE_NAME}" deleted successfully.`);
        console.log('\n✅ All file operations completed in order using async callbacks!');
      });
    });
  });
});

const fs = require('fs');

const fileName = 'data.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}:`, err);
  } else {
    const wordCount = countWords(data);
    console.log(`Total word count in ${fileName}: ${wordCount}`);
  }
});

function countWords(text) {
  // Remove any leading/trailing spaces and extra spaces between words
  const cleanedText = text.trim().replace(/\s+/g, ' ');

  // Split the cleaned text by spaces to count the words
  const wordsArray = cleanedText.split(' ');

  // Filter out any empty strings from the array (e.g., multiple spaces)
  const filteredArray = wordsArray.filter(word => word !== '');

  return filteredArray.length;
}

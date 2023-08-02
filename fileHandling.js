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
 
  const cleanedText = text.trim().replace(/\s+/g, ' ');

  const wordsArray = cleanedText.split(' ');

  const filteredArray = wordsArray.filter(word => word !== '');

  return filteredArray.length;
}

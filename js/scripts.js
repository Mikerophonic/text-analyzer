// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
        if (!Number(element)) {
        wordCount++;
        }
    });
    return wordCount;
    
  }

  function numberOfOccurrencesInText(word, text) {
    if (word === text) {
        return 1;
    }
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++
        }
    });
    return wordCount;
    
  }



function omitWords(text) {
    const omittedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    const words = text.split(' ');
    
    words.forEach(function(word, index) {
        if (omittedWords.includes(word.toLowerCase())) {
        words[index] = ''; // Replace the word with asterisks
        }
    });
    
    let omittedText = words.join(' ');
    
    return omittedText;
    }


// Utility Logic

function isEmpty(testString) {
    return (testString.trim().length === 0);
  }

// Business Logic



function wordCounter(text) {
    if (isEmpty(text)) {
        return 0;
      }
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
    if (isEmpty(text)) {
        return 0;
      }
    if (word.trim().length === 0) {
        return 0;
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

// UI Logic

function handleFormSubmission() {
    event.preventDefault();
    const passage = document.getElementById("text-passage").value;
    const word = document.getElementById("word").value;
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    document.getElementById("total-count").innerText = wordCount;
    document.getElementById("selected-count").innerText = occurrencesOfWord;
    // new lines here!
    let boldedPassage = boldPassage(word, passage);
    if (boldedPassage) {
      document.querySelector("div#bolded-passage").append(boldedPassage);
    } else {
      document.querySelector("div#bolded-passage").innerText = null;
    }
  }
  
  window.addEventListener("load", function() {
    document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
  });

  function boldPassage(word, text) {
    if (isEmpty(word) || isEmpty(text)) {
        return null;
      }
    if ((text.trim().length === 0) || (word.trim().length === 0)) {
      return null;
    }
    const p = document.createElement("p");
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      if (word === element) {
        const bold = document.createElement("strong");
        bold.append(element);
        p.append(bold);
      } else {
        p.append(element);
      }
      if (index !== (textArray.length - 1)) {
        p.append(" ");
      }
    });
    return p;
  }
  









/* function omitWords(text) {
    const omittedWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
    const words = text.split(' ');
    
    words.forEach(function(word, index) {
        if (omittedWords.includes(word.toLowerCase())) {
        words[index] = '*******'; // Replace the word with asterisks
        }
    });
    
    let omittedText = words.join(' ');
    
    return omittedText;
    }
 */

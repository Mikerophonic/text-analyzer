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

  function offensiveWordCensor(text) {
    const textArray = text.split(" ");
    let word = "******";
    textArray.forEach(function(word) {
        if (word.toLowerCase().includes("zoinks")) {
            return word;
        }
    });
    return textArray.join(" ");
  }

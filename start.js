

// Sleep function used in other functions to delay execution
const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Display Letters with a predefined text, speed and delay
const TitleLetters = async (word,elementId,time,delay) => {
    await sleep(delay);  // delay before display
    for (let i = 0; i < word.length; i++) {
        if(word[i] === " "){
            document.getElementById(elementId).innerHTML += "<br/>";
        } else {
            document.getElementById(elementId).innerHTML += word[i];
        }
        await sleep(time);
    }
};



// Title definition, including speed and delay for animation
const TITLE = "h1_main";
const LETTERS_SPEED = 60;
const DELAY = 500;
const TITLE_TEXT = 'luciusschaerer.space';
// call title letter animation
TitleLetters(TITLE_TEXT,TITLE,LETTERS_SPEED,DELAY);
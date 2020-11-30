/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput(container) {
    let myNode = document.getElementById(container);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/**
 * This functioninsert some element to the parent-element. Its arguments are: 1 - id of parent element; 
 * 2 -  something we want to insert in this parent-element.
 */
function insertOutput(idOutput, toOutput) {
        let container = document.getElementById("container");
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${toOutput}</p>`);
    }

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = document.getElementById(idInput).value;
    return inputValue_1;
}


/**
 * Second task
 */
/**
 * This function checks input, and if it is empty or has fraction the function show the message about this for users.
 */
function ifEmptyInput(ifIEmpty) {
    if((ifIEmpty === undefined) || (ifIEmpty === null) || (ifIEmpty === "")) {
        alert(`Please, fill in all fields`);
        return true;
    }
    if(ifIEmpty != Math.floor(ifIEmpty)) {
        alert(`Numbers must be without fraction`);
        return true;
    }
}

 function checkSecondsMinutes(valueOfTime) {
     if (ifEmptyInput(valueOfTime) || (valueOfTime < 0) || (valueOfTime > 60)) {
         return true;
     } 
 }

 function checkHours(valueOfTime) {
    if (ifEmptyInput(valueOfTime) || (valueOfTime < 0)) {
        return true;
    } 
}

function addZero(valueOfTime) {
    if(valueOfTime < 10) {
        valueOfTime = "0" + valueOfTime;
    }
    return valueOfTime;
}

 /**
  * Third task
  */

function showTime(hours, minutes, seconds) {
    if(checkHours(hours) || checkSecondsMinutes(minutes) || checkSecondsMinutes(seconds)) {
       return alert(`Please, enter time in right format`);
    }
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    let times = `${hours}:${minutes}:${seconds}`;
    deleteOutput("container");
    insertOutput('container', times);
    return [hours, minutes, seconds]
 }

 function addSeconds(seconds) {
    let arrayTime = showTime(getInput('hoursId'), getInput('minutesId'), getInput('secondsId'));
    hours = Number(arrayTime[0]);
    minutes = Number(arrayTime[1]);
    seconds = Number(seconds) + Number(arrayTime[2]);
    hours_2 = hours + Math.floor(seconds  / 3600);
    minutes_2 = minutes + Math.floor((seconds - (hours_2 - hours) * 3600) / 60);
    seconds_2 = seconds - (hours_2 - hours) * 3600 - (minutes_2 - minutes) * 60;
    hours_2 = addZero(hours_2);
    minutes_2 = addZero(minutes_2);
    seconds_2 = addZero(seconds_2);
    let times = `${hours_2}:${minutes_2}:${seconds_2}`;
    deleteOutput("container_2");
    insertOutput('container_2', times);
}

function addMinutes(minutes) {
    let arrayTime = showTime(getInput('hoursId'), getInput('minutesId'), getInput('secondsId'));
    hours = Number(arrayTime[0]);
    minutes = Number(arrayTime[1]) + minutes;
    seconds = Number(arrayTime[2]);
    hours_2 = hours + Math.floor(minutes / 60);
    minutes_2 = minutes - (hours_2 - hours) * 60;
    hours_2 = addZero(hours_2);
    minutes_2 = addZero(minutes_2);
    seconds = addZero(seconds);
    let times = `${hours_2}:${minutes_2}:${seconds}`;
    deleteOutput("container_2");
    insertOutput('container_2', times);
}





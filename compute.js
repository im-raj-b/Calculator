const screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'DEL'){
            screen.value=screenValue.substring(0, screenValue.length-1);
            screenValue=screen.value;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


/*const markMass = 78, jonMass = 92, markHeight = 1.69, jonHeight = 1.95;
const markBMI = markMass/markHeight**2;
const jonBMI = jonMass/jonHeight**2;
let HigherBMI= markBMI > jonBMI;
console.log(markBMI,jonBMI);
console.log(HigherBMI);


if(markBMI > jonBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than Jon's`);
}
else{
    console.log(`Jon's BMI (${jonBMI}) is higher than Mark's`);
}*/

/*const str=`Hey! Man how r u`
const firstName = 'Raj';
const age = 22;
const gender = 'male';
console.log(`${firstName}😂, ${age},${gender}`);
console.log(str); */



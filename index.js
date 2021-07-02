(function(){

    'use strict';
    //define all required things 
    let convertType = 'miles';
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const distanceinput = document.querySelector("#distance");
    const convert = document.querySelector("#convert");
    const answerDiv = document.querySelector("#answer");

    //eventlistener no 1 for conversion type
    document.addEventListener('keydown',(event)=>{
        const key = event.code;
        if(key === 'KeyK'){
            //change heading
            heading.innerHTML = 'Kilometers to Miles Converter';
            //change converttype value
            convertType = 'kilometers'
            //change intro
            intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles .'
        }
        else if(key === 'KeyM'){
            heading.innerHTML = 'Miles to Kilometers Converter';
            convertType = 'miles';
            intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
        };
    });

    //eventlistener for submit
    convert.addEventListener('submit',(event)=>{
        event.preventDefault();
        if(parseFloat(distanceinput.value)){

            if(convertType==='miles'){
                const distancemile = distanceinput.value;
                const distancekm = (distancemile*1.60934).toFixed(3);
                answerDiv.innerHTML = `<h2>${distancemile} miles convert to ${distancekm} kilometers.</h2>`;
            }
            else if(convertType==='kilometers'){
                const distancekm = distanceinput.value;
                const distancemile = (distancekm/1.60934).toFixed(3);
                answerDiv.innerHTML = `<h2>${distancekm} kilometers convert to ${distancemile} miles.</h2>`
            };
        }
        else{
            answerDiv.innerHTML = `<h2>Please enter a valid number</h2>`
        };
    });

})();
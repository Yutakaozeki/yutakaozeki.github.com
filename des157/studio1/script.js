(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');    
    const nameOut = document.querySelector('#nameout');
    const valOut = document.querySelector('#valout');
    const crimeOut = document.querySelector('#crimeout');
    const capOut = document.querySelector('#capout');
    const jobOut = document.querySelector('#jobout');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const value = document.querySelector('#value').value;
        const crime = document.querySelector('#crime').value;
        const crime2 = document.querySelector('#crime2').value;
        const capture = document.querySelector('#capture').value;
        const job = document.querySelector('#job').value;

        console.log("first name = ", firstname);
        console.log("last name = ", lastname);
        console.log("value = ", value);
        console.log("crime = ", crime);
        console.log("crime = ", crime2);
        console.log("capture = ", capture);
        console.log("job = ", job);

        if(firstname && lastname && value && crime && crime2 && capture && job){
            if(job == "Pirate"){
                document.querySelector('#formoutput').className = "showing";
                nameOut.textContent = `${firstname}·D·${lastname}`;
                valOut.textContent = `${value}.000.000`;
                crimeOut.textContent = `This pirate has commited ${crime} and ${crime2}.`;
                capOut.textContent = `Capture: ${capture}`;
                jobOut.textContent = job;
            } else{
                nameOut.textContent = `${firstname}·D·${lastname}`;
                valOut.textContent = `${value}.000.000`;
                crimeOut.textContent = `This marine has betrayed us by commiting ${crime} and ${crime2}. Blashphemy!`;
                capOut.textContent = capture;
                jobOut.textContent = job;
            }
        } else{
            document.querySelector(`#snail`).className = "showing";
        }
   });

 })();

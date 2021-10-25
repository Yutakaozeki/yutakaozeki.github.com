(function(){
    'use strict';
    console.log('reading js');

    const myForm = document.querySelector('#myform');
    const madName = document.querySelector('#name');
    const madValue = document.querySelector('#value');
    const madCrime = document.querySelector('#crime');
    var madCapture = document.querySelector('#capture');
    var madJob = document.querySelector('#job');

    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const name = document.querySelector('#name').value;
        const value = document.querySelector('#value').value;
        const crime = document.querySelector('#crime').value;
        const capture = document.querySelector('#capture').value;
        const job = document.querySelector('#job').value;

        var formData = document.querySelectorAll("input[type=text");
        for (var eachField of formData){
            eachField.value = "";
        }
        var myText;
        var myName;
        var myValue;
        var myCrime;
        var myCapture;
        var myJob;
        if(name && value && crime && capture && job){
            myName = `${name}`;
            myValue = `${value}`;
            myCrime = `${crime}`;
            myCapture = `${capture}`;
            myJob = `${job}`
        }
        else{
            myText = "Please fill out the form";
        }
        madName.innerHTML = myName;
        madValue.innerHTML = myValue;
        madCrime.innerHTML = myCrime;
        madCapture.innerHTML = myCapture;
        madJob.innerHTML = myJob;
    //     const formData = document.querySelectorAll("input[type=text]");
    //     processData(formData);
    //     // document.getElementById('overlay').className = 'showing';
   });

    // function processData(formData){
    //     let emptyFields = 0;
    //     const words = [];
    //     for (const eachWord of formData){
    //         if(eachWord.value){
    //             words.push(eachWord.value);
    //             eachWord.value = "";
    //         } else {emptyFields++; }
    //     }
    //     if(emptyFields > 0){
    //         madlib.innerHTML = 'Please fill out the fields';
    //     }else {makeMadlib(words); }
    // }
    
    // function makeMadlib(wordsArray) {
    //     const myText = `Here are the words: ${wordsArray[0]}, ${wordsArray[1]}, ${wordsArray[2]}, ${wordsArray[3]}`;

    //     madlib.innerHTML = myText;
        // var myText;
        // if(words[0] && words[1] && words[2] && words[3]) {
        //     myText = `Here are the words: ${words[0]}, ${words[1]}, ${words[2]}, and ${words[3]}`;
        // }
        // else{
        //     myText = "Please complete the form so I can make your Mad Lib!";
        // }
        // madlib.innerHTML = myText;
//     }

 })();

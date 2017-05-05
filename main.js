var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");
var inquirer = require('inquirer');
var sleep = require('system-sleep');
var clear = require('clear');
var readline = require('readline');


// Card Objects
var presidentBasic = new BasicCard("Who was the 44th president of the United States?", 
                                    "Barack Obama");

var presidentCloze = new ClozeCard("Barack Obama was the 44th president of the United States.",         
                                        "Barack Obama");      

var megatronBasic = new BasicCard("Who is the leader of the Decepticons?",
                                  "Megatron");

var megatronCloze = new ClozeCard("Megatron is the leader of the Decepticons.",
                                  "Autobots"); 

//////////////////////////////////////////////////////////////////////
function askQuestions(){
    var rl = readline.createInterface(process.stdin, process.stdout);
        clear();
        rl.question('Who was the 44th president of the United States?\n', function(answer){  
                console.log(answer);
                if(answer.toLowerCase() === presidentBasic.back.toLowerCase()){
                sleep(1000);
                console.log('correct');    
                } else {
                    console.log('Your answer is incorrect.\n');
                    sleep(1000);
                    presidentCloze.showText();            
                }

            rl.setPrompt('Who is the leader of the Decepticons?\n');
            rl.prompt();
            rl.on('line', function(answer){
                console.log(answer);
                if(answer.toLowerCase() === megatronBasic.back.toLowerCase()){
                    sleep(1000);
                    console.log('correct');
                    
                } else {
                        console.log('Your answer is incorrect.');
                        sleep(1000);
                        megatronCloze.showText();                    
                    }
           rl.close(); console.log("Exiting Program");
            });
                
        });   

}// end of function askQuestions        

// /////////////////////////////////////////////////////////////////////////////////////////
// function showFlashCards(){
    function showFlashCards(){
            clear();
            presidentCloze.showText();
            sleep(5000);
            clear();
            megatronCloze.showText();
            sleep(5000);
            clear();  
            console.log('Do you need to see the cards again?');  

            // display yes or no 
            // if yes call function again -- RECURSION
            inquirer.prompt([/* Pass your questions in here */
            {
                name: 'confirm',
                type: 'list',
                message: 'Please choose Yes or no. Answering no will begin the test.',
                choices: ['yes', 'no'],
                default: 'yes'
            }

            ]).then(function (user) {
                if(user.confirm === 'yes')
                {showFlashCards();}
                else{
                    askQuestions();
                }
            });// end inquirer.prompt

    };//end show flash card function

// //////////////////////////////////////////////////////////
clear();
sleep(1500);
console.log('This program will test your knowledge by asking a series of questions.')
console.log('You can view flash cards for review, or go straight to the test.')
inquirer.prompt([/* Pass your questions in here */
            {
            name: 'confirm',
            type: 'list',
            message: 'Which do you choose?.',
            choices: ['Flash Card Review', 'Test Questions'],
            default: 'Flash Card Review'
            }

]).then(function (user){
             if(user.confirm === 'Flash Card Review'){
                showFlashCards();
            }
            else {
                console.log('Now we will begin the test.')
                clear();
                askQuestions();
            }
});

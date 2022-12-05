
//query selectors to access DOM elements
let container = document.querySelector('#grid');
let answerForm = document.querySelector('#answerForm');
let answer = document.querySelector('#inputAnswer'); 
let question = document.querySelector('#question');
let questionVal = document.querySelector('#questionValue');
let userInput = document.querySelector('#input');
let total = document.querySelector('#total');


//created element to display score
let totalScore = 0;
console.log(Number(totalScore));

//global variables to access data returned by functions
let groupedData;
let correctAnswer;
let randomValue;
let cardSelected;


//async function to fect data (in this case local json file and not an api url)
let readJeopardyData = async () => {
    
    let rawJeopardyData = await fetch('jeopardy.json');
    // console.log(rawJeopardyData);  \\testing data retrieval

    let data = await rawJeopardyData.json()
    // console.log(data);   //testing data retrieval

    groupedData = _.groupBy(data, 'value');
      //  console.log(groupedData);  //testing data retrieval
      //  console.log(groupedData.$100);  //testing data retrieval

  

   createGrid();
   addData();
   
}
//calling function to initiate fetching of data from json file  
readJeopardyData();
  

//function to dynamically create grid(squares)
    function createGrid() {
      let numberOfRows = 5
      let i = 0;
      let x = numberOfRows *  numberOfRows;
      let gridItem = []; //have not used in project 

      document.documentElement.style.setProperty("--columns-row", numberOfRows);
      
      for (i; i < x; i++) {
       let card = document.createElement("card");
        
        
        
        document.querySelector("#grid").appendChild(card);

            if(i <= 4){
                card.id = `${i}`;
                card.className = 'one-hundred';
                let square_100s = card.innerHTML = '$100';
                 
            } else if (i > 4 && i < 10) {
                card.id = `${i}`;
                card.className = 'two-hundred';
                let square_200s = card.innerHTML = '$200';
                
            } else if (i > 9 && i < 15){
              card.id = `${i}`;  
              card.className = 'four-hundred';
              let square_400s = card.innerHTML = '$400'; 
            
            } else if (i > 14 && i < 20){
              card.id = `${i}`;  
              card.className = 'six-hundred';
              let square_600s = card.innerHTML = '$600';
            
            } else if (i > 19 && i < 25){
              card.id = `${i}`;
              card.className = 'eight-hundred';
              let square_800s = card.innerHTML = '$800';

            }
            
        }
        
    }
//funcdtion to dynamically link card(square) to random json data based on its classname value
    function addData() {
      let getQuestions = document.querySelectorAll('#grid card');
        for(let i = 0; i < getQuestions.length; i++){
          if(getQuestions[i].className === 'one-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$100[Math.floor(Math.random() * groupedData.$100.length)];
                cardSelected = getQuestions[i].id;
                console.log(`This is card id#: ${cardSelected}`);
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random.answer);
                correctAnswer = random.answer;
                randomValue = random.value;
                this.classList.add('clicked');
                console.log('has clicked on card');//testing post clicked
                return random.answer, random.value, cardSelected;
                
   
              })

            } else if(getQuestions[i].className === 'two-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$200[Math.floor(Math.random() * groupedData.$200.length)];
                cardSelected = getQuestions[i].id;
                console.log(`This is card id#: ${cardSelected}`);
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random.answer);
                correctAnswer = random.answer;
                randomValue = random.value;
                this.classList.add('clicked');
                console.log('has clicked on card');//testing post clicked
                return random.answer, random.value, cardSelected;
    
             
              })

            } else if (getQuestions[i].className === 'four-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$400[Math.floor(Math.random() * groupedData.$400.length)];
                cardSelected = getQuestions[i].id;
                console.log(`This is card id#: ${cardSelected}`);
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random.answer);
                correctAnswer = random.answer;
                randomValue = random.value;
                this.classList.add('clicked');
                console.log('has clicked on card');//testing post clicked
                return random.answer, random.value, cardSelected;
    
             
              })

            } else if (getQuestions[i].className === 'six-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$600[Math.floor(Math.random() * groupedData.$600.length)];
                cardSelected = getQuestions[i].id;
                console.log(`This is card id#: ${cardSelected}`);
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random.answer);
                correctAnswer = random.answer;
                randomValue = random.value;
                this.classList.add('clicked');
                console.log('has clicked on card');//testing post clicked
                return random.answer, random.value, cardSelected, cardSelected;
              })

            } else if (getQuestions[i].className === 'eight-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$800[Math.floor(Math.random() * groupedData.$800.length)];
                cardSelected = getQuestions[i].id;
                console.log(`This is card id#: ${cardSelected}`); //might used as a flag 
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random.answer);
                correctAnswer = random.answer;
                randomValue = random.value;
                this.classList.add('clicked');
                console.log('has clicked on card');//testing post clicked
                return random.answer, random.value, cardSelected;
                  }) 
                }     
              }
            }
            // function disable() {
            //   document.getElementById(`#${getQuestions[i]}.id`).disabled = true;
            //   console.log('disable');
            //   }
            
            
//global code that cheks answer (accepts user input and matches to question from json data)
answerForm.addEventListener('submit', function(event){
  event.preventDefault();
  
          console.log(correctAnswer);
          let recordedInput = userInput.value;
          console.log(recordedInput); //testing logic
          // console.log(random.answ
           if (recordedInput === correctAnswer){
            // console.log(random.answer);
            alert('correct'); //testing logic
            let newValue = randomValue;
            newValue = questionVal.innerHTML.replace('$', '')
             // newValue = questionVal.inner
             Number(newValue);
            console.log(typeof Number(newValue));
            totalScore += parseInt(newValue);
            console.log(typeof totalScore);
            total.innerText = `$${totalScore}`;
          }  else 
          // console.log(random.answer)
          {alert('incorrect');
          document.getElementById(cardSelected).classList.add('clicked_wrong_answer');
          userInput.value = '';
        }
      })

  

  
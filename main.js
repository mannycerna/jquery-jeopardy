let container = document.querySelector('#grid');
let answerForm = document.querySelector('#answerForm');
let answer = document.querySelector('#answer'); 
// let score = document.querySelector('#score');
let question = document.querySelector('#question');
let questionVal = document.querySelector('#questionValue');
let inputAnswer = document.querySelector('#inputAnswer');
let total = document.querySelector('#total');
let totalScore = 0;
let groupedData;



let readJeopardyData = async () => {
    
    let rawJeopardyData = await fetch('jeopardy.json');
    // console.log(rawJeopardyData);  \\testing data retrieval

    let data = await rawJeopardyData.json()
    // console.log(data);   //testing data retrieval


    groupedData = _.groupBy(data, 'value');
    // let groupedData = _.groupBy(data, 'question' ); 
      //  console.log(groupedData);  //testing data retrieval
       console.log(groupedData.$100);  //testing data retrieval

   createGrid();

    }
    



 


    function createGrid() {
      let numberOfRows = 5
      let i = 0;
      let x = numberOfRows *  numberOfRows;
      let gridItem = []; //have not used in project 

      document.documentElement.style.setProperty("--columns-row", numberOfRows);

      for (i; i < x; i++) {
        let card = document.createElement("card");
        
        card.id = `${i}`;
        
           console.log(card);
        // gridItem.push(div.id);
        // console.log(gridItem);
        // div.className = 'squares';
        
        
        
        document.querySelector("#grid").appendChild(card);

            if(i <= 4){
  
                card.className = 'one-hundred';
                let square_100s = card.innerHTML = '$100';
                
            } else if (i > 4 && i < 10) {
                card.className = 'two-hundred';
                let square_200s = card.innerHTML = '$200';
                
            } else if (i > 9 && i < 15){
                card.className = 'four-hundred';
                let square_400s = card.innerHTML = '$400'; 
            
            } else if (i > 14 && i < 20){
                card.className = 'six-hundred';
                let square_600s = card.innerHTML = '$600';
            
            } else if (i > 19 && i < 25){
                card.className = 'eight-hundred';
                let square_800s = card.innerHTML = '$800';

            }
            
      }


      let getQuestions = document.querySelectorAll('#grid card');
        for(let i = 0; i < getQuestions.length; i++){
          if(getQuestions[i].className === 'one-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$100[Math.floor(Math.random() * groupedData.$100.length)];
                //split question and question value into two variables 
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random);
                // console.log(getQuestions[i]); //testing output
             
              })

            } else if (getQuestions[i].className === 'two-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$200[Math.floor(Math.random() * groupedData.$200.length)];
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random);
                // console.log(getQuestions[i]); //testing output
             
              })

            } else if (getQuestions[i].className === 'four-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$400[Math.floor(Math.random() * groupedData.$400.length)];
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random);
                // console.log(getQuestions[i]); //testing output
             
              })

            } else if (getQuestions[i].className === 'six-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$600[Math.floor(Math.random() * groupedData.$600.length)];
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random);
                // console.log(getQuestions[i]); //testing output
             
              })

            } else if (getQuestions[i].className === 'eight-hundred'){
              getQuestions[i].addEventListener('click', function(){
                let random = groupedData.$800[Math.floor(Math.random() * groupedData.$800.length)];
                question.innerHTML = random.question;
                questionVal.innerHTML = random.value;
                console.log(random);
                // console.log(getQuestions[i]); //testing output
             
              })
            } 
          }
        }


        answerForm.addEventListener('submit', function(event){
          event.preventDefault();
          
          let newAnswer = document.createElement('h3');
          newAnswer.innerText = answer.value;
          inputAnswer.appendChild(newAnswer);
          answer.value = '';
          console.log(answer);//testing output
          console.log(newAnswer);//testing output
          
          // if(inputAnswer === groupedData.answer){
            newValue = questionVal.innerText.replace('$', '');
            
            // console.log(newValue);
            newVal = Number(newValue);
            totalScore += newVal;
            total.innerText = totalScore
          // }

        })

        
readJeopardyData();



//---------------------------
//created a button, but not sure if will use in final project
// let startBtn = document.getElementById("start");
//     startBtn.addEventListener("click", createGrid());
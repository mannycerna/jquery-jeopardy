let container = document.querySelector('#grid');
let score = document.querySelector('#score');
let question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let groupedData;


let readJeopardyData = async () => {
    
    let rawJeopardyData = await fetch('jeopardy.json');
    // console.log(rawJeopardyData);  \\testing data retrieval

    let data = await rawJeopardyData.json()
    // console.log(data);   //testing data retrieval


    groupedData = _.groupBy(data, 'value');
    // let groupedData = _.groupBy(data, 'question' ); 
    //    console.log(groupedData);  //testing data retrieval
    //    console.log(groupedData.$200);  //testing data retrieval

   

   createGrid();
   

    }
    



    function createGrid() {
      let numberOfRows = 5
      let i = 0;
      let x = numberOfRows *  numberOfRows;
      let gridItem = [];
      document.documentElement.style.setProperty("--columns-row", numberOfRows);

      for (i; i < x; i++) {
        let div = document.createElement("div");
        div.id = `${i}`
        // gridItem.push(div.id);
        // console.log(div.id);
        // div.className = 'squares';
    
        document.querySelector("#grid").appendChild(div);
            if(div.id <= 4){
                // div.id = `${i}`;
                div.className = 'squares, one-hundred';
                let square_100s = div.innerHTML = '$100';
                let random = groupedData.$100[Math.floor(Math.random() * groupedData.$100.length)];  
                question.innerHTML = random.question;
                console.log(random);

            
                
            } else if (i > 4 && i < 10) {
                div.className = 'squares, two-hundred';
                let square_200s = div.innerHTML = '$200';
                let random = groupedData.$200[Math.floor(Math.random() * groupedData.$200.length)];
                question.innerHTML = random.question;
                // console.log (random);

            } else if (i > 9 && i < 15){
                div.className = 'squares, four-hundred';
                let square_400s = div.innerHTML = '$400';
                let random = groupedData.$400[Math.floor(Math.random() * groupedData.$400.length)];
                question.innerHTML = random.question;
                // console.log (random);
            
            } else if (i > 14 && i < 20){
                div.className = 'squares, six-hundred';
                let square_600s = div.innerHTML = '$600';
                let random = groupedData.$600[Math.floor(Math.random() * groupedData.$600.length)];
                question.innerHTML = random.question;
                // console.log (random);
            
            } else if (i > 19 && i < 25){
                div.className = 'squares, eight-hundred';
                let square_800s = div.innerHTML = '$800';
                let random = groupedData.$800[Math.floor(Math.random() * groupedData.$800.length)];
                question.innerHTML = random.question;
                // console.log (random);
            
            }
            
        // div.addEventListener("mouseenter", function() {
        //   this.style.backgroundColor = "blue";
        // });
      }
    }


readJeopardyData();
//---------------------------
//created a button, but not sure if will use in final project
// let startBtn = document.getElementById("start");
//     startBtn.addEventListener("click", createGrid());
// converting days, hours, minutes, seconds to milliseconds
const days = 1000 * 60 * 60 * 24;
const hours = 1000 * 60 * 60;
const mins = 1000 * 60;
const sec = 1000;

//Setting the date and time of the event
let EventDate = new Date("Apr 2, 2023 5:00:00").getTime();

//calling tick function every 1000 ms
let timer = setInterval(tick,1000);


function tick(){

    
    let now = new Date().getTime();
    
    let t = EventDate - now; //to calculate to ms left 


    if(t > 0){
        let daysLeft = Math.floor(t / days);
        //Algorithm to calculate days left
        if(daysLeft < 10){
            daysLeft = "0" + daysLeft;
        }

        let hoursLeft = Math.floor((t % days) / hours);
        //Algorithm to calculate hours left
        if(hoursLeft < 10){
            hoursLeft = "0" + hoursLeft;
        }

        let minsLeft = Math.floor((t % hours) / mins);
        //Algorithm to calculate minutes left
        if(minsLeft < 10){
            minsLeft = "0" + minsLeft;
        } 

        let secLeft = Math.floor((t % mins) / sec);
        //Algorithm to calculate seconds left
        if(secLeft < 10){
            secLeft = "0" + secLeft;
        }

        let time = `<div>
        <p>${daysLeft}:</p>
        <span>Days</span>
    </div>
    <div>
        <p>${hoursLeft}:</p>
        <span>Hours</span>
    </div>
    <div>
        <p>${minsLeft}:</p>
        <span>Minutes</span>
    </div>
    <div>
        <p>${secLeft}</p>
        <span>Seconds</span>
    </div>`;

        document.querySelector('.countdown').innerHTML = time;
    }
}


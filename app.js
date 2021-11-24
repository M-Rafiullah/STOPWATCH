// var minPara = document.getElementById("hours")
// var minPara = document.getElementById("min")
// var secPara = document.getElementById("sec")
// var msecPara = document.getElementById("msec")

// var hours = 0
// var min = 0
// var sec = 0
// var msec = 0



// var interval;




// function timer(){
//     msec++  
//     msecPara.innerHTML = msec
//     if(msec == 100){
//         sec++
//         secPara.innerHTML = sec
//         msec = 0
//     }else if(sec == 60){
//         min++
//         minPara.innerHTML = min
//         sec = 0
//     }
    

// }



// function start(){
//     var startBtn =document.getElementById("startBtn")
//     interval = setInterval( timer , 10 );
//     startBtn.disabled = true

// }

// function stop(){
//     var startBtn =document.getElementById("startBtn")

//     clearInterval(interval)
//     startBtn.disabled = false

// }


// function reset(){
//     clearInterval(interval)
//     msecPara.innerHTML = 0
//     secPara.innerHTML = 0
//     minPara.innerHTML = 0
//     min=0
//     sec=0
//     msec=0

// }



var hours = 0;
var min = 0;
var sec = 0;

var time;
function setTimer(){
  
    if(sec<59){
    sec++;
    document.getElementById('sec').innerHTML = print(sec);
    }
    else{
        sec=0;
        min++;
        document.getElementById('sec').innerHTML = print(sec);
    }
    if(min<=59){
        document.getElementById('min').innerHTML = print(min);
    }
    else{
        min=0;
        hours++
        document.getElementById('min').innerHTML = print(min);
    }
    if(hours<24){
        document.getElementById('hour').innerHTML = print(hours)
    }
    else{
        stop();
    }
}
function print(value){
    if (value<=9){
        return "0"+value;

    }else{
        return value
    }
}
function start(){
    time =setInterval(setTimer,600);
    document.getElementById('start').disabled=true;
}
function stop(){
    clearInterval(time);
    document.getElementById('start').disabled=false
}
function reset(){
    clearInterval(time);
    min=0;
    sec=0;
    hours=0;
    document.getElementById('sec').innerHTML='00';
    document.getElementById('min').innerHTML='00';
    document.getElementById('hour').innerHTML='00';
}
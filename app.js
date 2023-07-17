let para = document.getElementById("getTime");
let clasHour = document.getElementById("hour");
let clasMin = document.getElementById("min");
let clasSec = document.getElementById("sec");

function setTimes() {
  let time = new Date();
  let hour = parseInt(time.getHours());
  let min = time.getMinutes();
  let sec = time.getSeconds();
  
  let hourRotation = 30*hour+min/2;
  let minRotation = 6 * min;
  let secRotation = 6 * sec;

  clasHour.style.transform = `rotate(${hourRotation}deg)`;
  clasMin.style.transform = `rotate(${minRotation}deg)`;
  clasSec.style.transform = `rotate(${secRotation}deg)`;
let all = `${hour}:${min}:${sec} AM`;
  if (sec <= 9) {
    sec = `0${sec}`;
  }
  if (min <= 9) {
    min = `0${min}`;
  }
  if( hour <= 9){
    hour = `0${hour}`;
  }
  if (hour >= 12) {
    all = `${hour-12}:${min}:${sec} PM`;
  }
  para.innerText = all;
}
setInterval(setTimes, 1000);

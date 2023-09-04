// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

//======================= start Date ======================
var countDownDate = new Date("Dec 31, 2023 10:00:00").getTime();

//
var counter = setInterval(function(){
 
 // ================== Get Date Now =======================
 var dateNow = new Date().getTime();

 // ===== Date Difference Between Now And Countdown Date===
 var dateDiff =  countDownDate - dateNow;
 
 //================= Get Time Units =====================
 
 var days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
 
 var hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 
 var minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60 ));
 
 var seconds = Math.floor((dateDiff % (1000 * 60 )) / (1000 ));

document.getElementById("demo").innerHTML = days + "Days: " + hours + "Hr: " + minutes + "Min: " + seconds + "Sec"

 if (dateDiff < 0) {
  clearInterval(counter);
 }
}, 1000);
//============================================
//تغير خلفية الصفحة
/*
  Practice
  - Random Background Color
*/

// #fd34f7 FF00FF

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorParts = [];

for (let i = 0; i < 6; i++) {
 colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

let finalColor = `#${colorParts.join("")}`;

//document.body.append(finalColor);
document.body.style.backgroundColor = finalColor;
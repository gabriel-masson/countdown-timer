let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
function validateHour(today){
    let hour = today.getUTCHours() - (today.getTimezoneOffset() / 60);
    if(hour < 0){
        return hour+3
    }else{
        return hour
    }
}
setInterval(() => {
  let today = new Date();

  let second =today.getUTCSeconds();
  let minute = today.getUTCMinutes();

  //arranging for Brazilian time zone
  let hour = validateHour(today) ;
  let day = today.getUTCDate();
//console.log(day)
    seconds.innerHTML = second;
    minutes.innerHTML = minute;
    hours.innerHTML = hour;
    days.innerHTML = day;
}, 1000);
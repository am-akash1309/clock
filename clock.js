function gettingdata(){
    let getting = new Date()
    let date = getting.getDate()
    let month = getting.getMonth()
    let year = getting.getFullYear()
    hour = getting.getHours()
    minute = getting.getMinutes()
    second = getting.getSeconds()

    console.log(date,month,year,hour,minute,second)

    let ddmmyyyy = "Date : " + date + "." + (month+1) + "." + year
    document.getElementById("date").innerHTML = ddmmyyyy

    if (hour > 12) {
        hour = hour - 12
    }
    if (hour == 0) {
        hour = 12
    }

    let hhmmss = "Current time : " + hour + ":" + minute + ":" + second
    document.getElementById("time").innerHTML = hhmmss

    setTimeout(function(){ 
    gettingdata() 
    }, 1000)
}
gettingdata()

function calc(){
var hourcalc = (hour*30)
a = "rotate("+hourcalc+"deg)"
var mincalc = (minute*6)
b = "rotate("+mincalc+"deg)"
var seccalc = (second*6)
c = "rotate("+seccalc+"deg)"
setTimeout(function(){ 
calc() 
}, 1000)
}
calc()
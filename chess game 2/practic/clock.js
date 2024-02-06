setInterval(()=>{
    let hh = document.getElementById("hh")
let mm = document.getElementById("mm")
let ss = document.getElementById("ss")

let sec_dot = document.querySelector(".sec_dot")
let min_dot = document.querySelector(".min_dot")
let hr_dot = document.querySelector(".hr_dot")

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let sc = document.getElementById("sc")
let mn = document.getElementById("mn")
let hr = document.getElementById("hr")
sc.style.transform = `rotateZ(${s * 6}deg)` //360/60seconds = 6
mn.style.transform = `rotateZ(${m * 6}deg)` //360/60minutes = 6
hr.style.transform = `rotateZ(${h * 30}deg)` //360/12minutes = 30

hh.style.strokeDashoffset = 510 -(510*h) /12;//12hours clock

mm.style.strokeDashoffset = 630 - (630*m)/60 //60minutes clock

ss.style.strokeDashoffset = 760 - (760*s)/60 //60seconds clock

sec_dot.style.transform = `rotateZ(${s * 6}deg)` //360/60seconds = 6
min_dot.style.transform = `rotateZ(${m * 6}deg)` //360/60minutes = 6
hr_dot.style.transform = `rotateZ(${h * 30}deg)` //360/12hr = 30


hr.style.transform = `rotateZ(${h * 30}deg)`
mn.style.transform = `rotateZ(${m * 6}deg)`
sc.style.transform = `rotateZ(${s * 6}deg)`

})
let now = new Date()

let userName = prompt("Username")
let nameLoc = document.getElementById("myName")
nameLoc.innerHTML = userName

const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

function timeDet() {
    let timeLoc = document.getElementById("myClock")
    timeLoc.innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${days.now.getDay}`
};

function showTime() {
    setInterval(timeDet, 1000)
}
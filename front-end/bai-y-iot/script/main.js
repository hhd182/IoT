

//button
const fan = document.getElementById('fan-img');
const flash = document.getElementById('flashlight-img');
const bgrFanOn = document.getElementById('fan-on');
const bgrFanOff = document.getElementById('fan-off');
const bgrFlashOn = document.getElementById('flash-on');
const bgrFlashOff = document.getElementById('flash-off');



let fanStatus = false;
let flashStatus = false;

function onFan() {
    fan.src = "./img/fan.gif";
    fanStatus = true;
    bgrFanOn.style.backgroundColor = 'rgb(51, 126, 51)';
    bgrFanOff.style.backgroundColor = 'rgb(216, 216, 216)';
    console.log("On Fan");
}

function offFan() {
    fan.src = "./img/fan-image.png";
    fanStatus = false;
    bgrFanOn.style.backgroundColor = 'rgb(216, 216, 216)';
    bgrFanOff.style.backgroundColor = 'rgb(145, 50, 50)';
    console.log("Off Fan");
}

function onFlash() {
    flash.src = "./img/flashlight.gif";
    flashStatus = true;
    bgrFlashOn.style.backgroundColor = 'rgb(51, 126, 51)';
    bgrFlashOff.style.backgroundColor = 'rgb(216, 216, 216)';
    console.log("On Flashlight");
}

function offFlash() {
    flash.src = "./img/flashlight-image.png";
    flashStatus = false;
    bgrFlashOn.style.backgroundColor = 'rgb(216, 216, 216)';
    bgrFlashOff.style.backgroundColor = 'rgb(145, 50, 50)';
    console.log("On Flashlight");
}


// spam data
let listNhietDo = [0];
let listDoAm = [0];
let listAnhSang = [0];


function RandomData() {
    let nhietDo = Math.floor(Math.random() * 151);
    let doAm = Math.floor(Math.random() * 101);
    let anhSang = Math.floor(Math.random() * 251);

    listNhietDo.push(nhietDo);
    listDoAm.push(doAm);
    listAnhSang.push(anhSang);
}

// set data
const nhietdo = document.getElementById('nhietdo');
const doam = document.getElementById('doam');
const anhsang = document.getElementById('anhsang');

function SetData(obj) {
    nhietdo.innerText = listNhietDo[listNhietDo.length - 1];
    doam.innerText = listDoAm[listDoAm.length - 1];
    anhsang.innerText = listAnhSang[listAnhSang.length - 1];
}

// bieu do
let timeData = [];
function deleteData() {
    if (listAnhSang.length > 20) {
        listAnhSang.shift();
        listNhietDo.shift();
        listDoAm.shift();
        timeData.shift();
    }
}

console.log(timeData);

// Ve bieu do
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timeData,
        datasets: [{
            label: 'Nhiệt Độ',
            borderColor: '#d31a1a',
            data: listNhietDo,
        }, {
            label: 'Độ Ẩm',
            borderColor: '#046ea6',
            data: listDoAm,
        }, {
            label: 'Ánh Sáng',
            borderColor: '#f3f63d',
            data: listAnhSang,
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                    stepSize: 10,
                    callback: function (value) {
                        const date = new Date(value);
                        return date.toLocaleTimeString(); //chuyển đổi phần thời gian của đối tượng Date thành một chuỗi biểu diễn thời gian 
                    }
                }
            },
            y: {
                min: 0,
                max: 250
            }
        }
    }
});

//cập nhật màu gradient
const tempColor = document.getElementById('temp-container');
const humColor = document.getElementById('hum-container');
const lightColor = document.getElementById('light-container');

function updateColor() {
    let n = listNhietDo.length - 1;
    if (listNhietDo[n] <= 50) {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #ff8585);'
    } else if (50 < listNhietDo[n] <= 100) {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #ff3a3a)'
    } else {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #ff0000)'
    }

    if (listDoAm[n] <= 33) {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #7e88fb);'
    } else if (33 < listDoAm[n] <= 66) {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #2e3ef8)'
    } else {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #0015ff)'
    }

    if (listAnhSang[n] <= 83) {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #7e88fb);'
    } else if (83 < listAnhSang[n] <= 166) {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #2e3ef8)'
    } else {
        tempColor.style.backgroundImage = 'linear-gradient(to top right, #ffffff, #0015ff)'
    }
}

// call
setInterval(function () {
    SetData();
    updateColor();
    chart.update();
    RandomData();
    deleteData();
    time = Math.floor(Date.now());
    timeData.push(time);
    let n = listNhietDo.length - 1;
    console.log(listNhietDo[n], listDoAm[n], listAnhSang[n]);
}, 2000);


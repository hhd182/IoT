
function setColorTemp(data) {
    let colorRed;
    if (data > 100) {
        colorRed = "#ff0000";
    } else if (data > 50) {
        colorRed = "#ff3737"
    } else {
        colorRed = "#ff7373"
    }
    return colorRed
}

function setColorHum(data) {
    let colorBlue;
    if (data > 66) {
        colorBlue = "#0000ff";
    } else if (data > 33) {
        colorBlue = "#1f32ff"
    } else {
        colorBlue = "#5e6cff"
    }
    return colorBlue
}

function setColorLight(data) {
    let colorYellow;
    if (data > 200) {
        colorYellow = "#eeff00";
    } else if (data > 100) {
        colorYellow = "#f3ff4e"
    } else {
        colorYellow = "#f7ff8a"
    }
    return colorYellow
}

export { setColorTemp, setColorHum, setColorLight }
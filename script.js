function openApp(appId) {
    document.getElementById(appId).style.display = "block";
}

function closeApp(appId) {
    document.getElementById(appId).style.display = "none";
}

// 電卓の機能
let calcValue = "";

function pressKey(key) {
    calcValue += key;
    document.getElementById('calc-display').value = calcValue;
}

function calculate() {
    try {
        calcValue = eval(calcValue);
        document.getElementById('calc-display').value = calcValue;
    } catch (error) {
        document.getElementById('calc-display').value = "エラー";
        calcValue = "";
    }
}

//localStorage.clear()

if (localStorage.getItem("Cookies") == undefined) {
    localStorage.setItem("Cookies", 0)
    localStorage.setItem("CPC", 1)
    localStorage.setItem("CPS", 0)
    localStorage.setItem("Rebirths", 0)
}

setInterval(function() {
    document.getElementById("CookieCount").innerHTML = parseFloat(localStorage.Cookies).toFixed(1)
}, 1)

var CPS_Index = 0
var CPS_Ary = []

setInterval(function() {
    document.getElementById("CPS").innerHTML = (localStorage.Cookies - CPS_Ary[9]).toFixed(1) + " cps"
    CPS_Index += 1
    CPS_Ary.splice(0,0, localStorage.Cookies)
    if (CPS_Index > 10) {
        CPS_Ary.pop()
    }
}, 100)

setInterval(function() {
    localStorage.Cookies = (parseFloat(localStorage.Cookies) + (parseFloat(localStorage.CPS)/10)*(parseFloat(localStorage.Rebirths) + 1)).toFixed(1)
}, 100)

function ButtonClick() {
    localStorage.Cookies = parseFloat(localStorage.Cookies) + (parseFloat(localStorage.CPC) * (parseFloat(localStorage.Rebirths) + 1))
}

function Upgrade(Type, Cost, Amnt) {
    if (parseFloat(localStorage.Cookies) - Cost < 0) { return }
    localStorage.Cookies = (parseFloat(localStorage.Cookies) - Cost).toFixed(1)
    if (Type == "CPC") {
        localStorage.CPC = (parseFloat(localStorage.CPC) + Amnt).toFixed(1)
    }
    if (Type == "CPS") {
        localStorage.CPS = (parseFloat(localStorage.CPS) + Amnt).toFixed(1)
    }
}

function Rebirth() {
    if (parseFloat(localStorage.Cookies) - 100000 < 0) { return }
    localStorage.Rebirths = parseFloat(localStorage.Rebirths) + 1
    localStorage.CPC = 1
    localStorage.CPS = 0
    localStorage.Cookies = 0
}
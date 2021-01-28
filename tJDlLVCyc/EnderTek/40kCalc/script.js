function getAttacks(){
    return document.getElementById("att").value;
}
function getHits(){
    return document.getElementById("bs").value;
}

function getWounds(){
    return document.getElementById("w").value;
}

function getSaves(){
    return document.getElementById("s").value;
}

function setPercent(num){
    var v = (num)*100;
    var s = v.toFixed(3);
    document.getElementById("percent_value").innerText =  s + "%";
}

function setThrough(num){
    document.getElementById("through_value").innerText = num.toFixed(3);
}

function doCalc(){
    var a = (7-getHits())/6;
    var b = (7-getWounds())/6;
    var c = (getSaves()-1)/6;
    var p = a * b * c;
    setPercent(p);
    var t = getAttacks() * p;
    setThrough(t);
}

function doClear(){
    document.getElementById("percent_value").innerText = "Percent";
    document.getElementById("through_value").innerText="Saves Failed";
    document.getElementById("att").value = "";
    document.getElementById("bs").value = "";
    document.getElementById("w").value = "";
    document.getElementById("s").value = "";
}

doClear();

var calculate = document.getElementById("do_calc");
calculate.addEventListener('click',function(){doCalc();});

var clear = document.getElementById("do_clear");
clear.addEventListener('click',function(){doClear();});

// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const buttonTakeOff = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const flightScreen = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const buttonLand = document.getElementById("landing");
    const buttonMissionAbort = document.getElementById("missionAbort");
    const buttonUp = document.getElementById("btnup");
    const buttonDown = document.getElementById("btndown");
    const buttonRight = document.getElementById("btnright");
    const buttonLeft = document.getElementById("btnleft");
    const rocketImage = document.getElementById("rocket");
    const stepsToMove = 10;

    buttonTakeOff.addEventListener("click", function(event){
        let confirmation = window.confirm("COnfirm that the shuttle is reday for takeoff");
        if(confirmation){
            window.console.log(confirmation);
            status.innerHTML = "Shuttle in flight";
            flightScreen.style.background = "blue";
            shuttleHeight.innerHTML = 10000;
        }
    });

    buttonLand.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged");
        status.innerHTML = "The shuttle has landed";
        flightScreen.style.background = "green";
        shuttleHeight.innerHTML = 0;

    });

    buttonMissionAbort.addEventListener("click", function(){
        let confirmAbort = window.confirm("Confirm that you want to abort the mission");
        if(confirmAbort){
            status.innerHTML = "Mission Aborted";
            flightScreen.style.background = "green";
            shuttleHeight.innerHTML = 0;
        }

    });

    buttonUp.addEventListener("click", function(){
        //var x = buttonUp.offsetTop;
        rocketImage.style.position = "relative";
        var x = rocketImage.offsetTop;
        x = x - stepsToMove;
        shuttleHeight.innerHTML = parseFloat(shuttleHeight.innerHTML) + 10000;
        rocketImage.style.top = x + "px";
    });    

    buttonDown.addEventListener("click", function(){
        
        rocketImage.style.position = "relative";
        var x = rocketImage.offsetTop;
        x = x + stepsToMove;
        shuttleHeight.innerHTML = parseFloat(shuttleHeight.innerHTML) - 10000;
        rocketImage.style.top = x + "px";
    }); 

    rocketImage.style.left = 0 + "px"
    rocketImage.style.right = 0 + "px"
    
    buttonRight.addEventListener("click", function(){
        rocketImage.style.position = "relative"
        rocketImage.style.left = (parseInt(rocketImage.style.left) + 10) + "px";
    });

    buttonLeft.addEventListener("click", function(){
        rocketImage.style.position = "relative"
        rocketImage.style.left = (parseInt(rocketImage.style.left) - 10) + "px";
        ;
    });
}

window.addEventListener("load", init);
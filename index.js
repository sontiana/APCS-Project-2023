curClicks = 0;
kwonPer = 1;
kwonToUpgrade = 15;
unlocks = 0;
easterCheck = 0;

function clicked() {
  curClicks += kwonPer;
  document.getElementById("click").innerHTML =
    "Kwons per click: " + kwonPer;
  document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
}
//How to upgrade your kwonsPer
function upgrade() {
    if (curClicks >= kwonToUpgrade) {
      kwonPer += kwonToUpgrade/15;
      curClicks -= kwonToUpgrade;
      kwonPer += 1;
      kwonToUpgrade = kwonToUpgrade * 5;
      document.getElementById("upgrade").innerHTML = "Next Upgrade: " + kwonToUpgrade;
      
    }
    document.getElementById("click").innerHTML = "Kwons per click: " + kwonPer;
  document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
  }
/* This is from sourcecodester and it showed me how to change the background of an image
document.getElementById('display').innerHTML="";
	document.getElementById('display').style.backgroundImage="url('"+image.src+"')";
	document.getElementById('display').style.backgroundSize="cover";
	document.getElementById('display').style.backgroundPosition="center center";
}
*/
function unlock(name){
    if (name == "kwonOne") {
        if(curClicks >= 375){
            unlocks++;
            curClicks -= 375;
            kwonPer *= 2;
            document.getElementById('unlockOne').innerHTML= " ";
	        document.getElementById('unlockOne').style.backgroundImage = "url('https://i.imgur.com/jlz4j3R.png')";
	        document.getElementById('unlockOne').style.backgroundSize = "cover";
	        document.getElementById('unlockOne').style.backgroundPosition = "center center";
	        document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
	        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7";
        }
    }
    if (name == "kwonTwo") {
        if(curClicks >= 1875){
            unlocks++;
            curClicks -= 1875;
            kwonPer *= 2;
            document.getElementById('unlockTwo').innerHTML= " ";
	        document.getElementById('unlockTwo').style.backgroundImage = "url('https://i.imgur.com/kBaDa9R.png')";
	        document.getElementById('unlockTwo').style.backgroundSize = "cover";
	        document.getElementById('unlockTwo').style.backgroundPosition = "center center";
	        document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
	        document.getElementById("click").innerHTML = "Kwons per click: " + kwonPer;
	        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7";
        }
    }
    if (name == "kwonThree") {
        if(curClicks >= 25000){
            unlocks++;
            curClicks -= 25000;
            kwonPer *= 2;
            document.getElementById('unlockThree').innerHTML= " ";
	        document.getElementById('unlockThree').style.backgroundImage = "url('https://i.imgur.com/tBZmA5H.png')";
	        document.getElementById('unlockThree').style.backgroundSize = "cover";
	        document.getElementById('unlockThree').style.backgroundPosition = "center center";
	        document.getElementById("click").innerHTML = "Kwons per click: " + kwonPer;
	        document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
	        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7";
        }
    }
    if (name == "kwonFour") {
        if(curClicks >= 270000){
            unlocks++;
            curClicks -= 270000;
            kwonPer *= 2;
            document.getElementById('unlockFour').innerHTML= " ";
	        document.getElementById('unlockFour').style.backgroundImage = "url('https://i.imgur.com/p7ADk1l.png')";
	        document.getElementById('unlockFour').style.backgroundSize = "cover";
	        document.getElementById('unlockFour').style.backgroundPosition = "center center";
	        document.getElementById("click").innerHTML = "Kwons per click: " + kwonPer;
	        document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
	        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7";
        }
    }
    if (name == "kwonFive") {
        if(curClicks >= 1200000){
            unlocks++;
            curClicks -= 1200000;
            kwonPer *= 2;
            document.getElementById('unlockFive').innerHTML= " ";
	        document.getElementById('unlockFive').style.backgroundImage = "url('https://i.imgur.com/bN27Q93.png')";
	        document.getElementById('unlockFive').style.backgroundSize = "cover";
	        document.getElementById('unlockFive').style.backgroundPosition = "center center";
	        document.getElementById("click").innerHTML = "Kwons per click: " + kwonPer;
	        document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
	        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7";
        }
    }
    if (name == "kwonSix") {
        if(curClicks >= 10000000){
            unlocks++;
            curClicks -= 10000000;
            kwonPer *= 2;
            document.getElementById('unlockSix').innerHTML= " ";
	        document.getElementById('unlockSix').style.backgroundImage = "url('https://i.imgur.com/E4JhHgU.png')";
	        document.getElementById('unlockSix').style.backgroundSize = "cover";
	        document.getElementById('unlockSix').style.backgroundPosition = "center center";
	        document.getElementById("click").innerHTML = "Kwons per click: " + kwonPer;
	        document.getElementById("total").innerHTML = "Current Kwons: " + curClicks;
	        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7";
        }
    }
}
/* This is from sourcecodester and it showed me how to change the background of an image
document.getElementById('display').innerHTML="";
	document.getElementById('display').style.backgroundImage="url('"+image.src+"')";
	document.getElementById('display').style.backgroundSize="cover";
	document.getElementById('display').style.backgroundPosition="center center";
}
*/

function easter(){
    easterCheck += 1;
    if(easterCheck == 10){
        unlocks++;
        document.body.style.backgroundImage = "url('https://i.imgur.com/Vm6ROtn.png')";
        document.getElementById("check").innerHTML = "Kwons Unlocked: " + unlocks + "/7 (found the secret kwon)";
    }
}
  


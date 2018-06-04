var ansCode = Math.floor(Math.random()*99+1);
var guessNum;
var counter=0;
var minCode = 1;
var maxCode = 99;

console.log("ansCode = "+ansCode);

function setSmoke(counter){
    switch(counter){
            case 1:
                document.img1.src = "img/smoke.png";
                break;
            case 2:
                document.img2.src = "img/smoke.png";
                break;
            case 3:
                document.img3.src = "img/smoke.png";
                break;
            case 4:
                document.img4.src = "img/smoke.png";
                break;
            case 5:
                document.img5.src = "img/smoke.png";
                break;
            case 6:
                document.img6.src = "img/smoke.png";
                alert("次數已達上限\n"+"總共猜了"+counter+"次");
                restart();
                break;
    }
}

function doGuess(){
    guessNum = document.getElementById("code").value;
    //console.log("guessNum= "+guessNum);
    if(guessNum==ansCode){
        alert("恭喜答對了!"+"總共猜了"+(counter+1)+"次\n再試一次!");
        restart();
    }
    else{
        if(guessNum>ansCode){
            maxCode= guessNum;
        }else{
            minCode = guessNum;
        }
        counter++;
        alert(minCode + "~" + maxCode);
        setSmoke(counter);
        code.value = "";
    }
}

function restart(){
    ansCode = Math.floor(Math.random()*99+1);
    guessNum = 0;
    counter =0;
    minCode = 1;
    maxCode = 99;
    code.value ="";
    var bombs = document.querySelectorAll('#bombs img');
    for(var i=0; i<bombs.length; i++){
        bombs[i].src = "img/bomber.png";
    }

}
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let e = document.querySelector("#e");
let f = document.querySelector("#f");
let g = document.querySelector("#g");
let h = document.querySelector("#h");
let i = document.querySelector("#i");
let j = document.querySelector("#j");
let k = document.querySelector("#k");
let l = document.querySelector("#l");
let m = document.querySelector("#m");
let n = document.querySelector("#n");
let o = document.querySelector("#o");
let p = document.querySelector("#p");
let q = document.querySelector("#q");
let r = document.querySelector("#r");
let s = document.querySelector("#s");
let t = document.querySelector("#t");
let u = document.querySelector("#u");
let v = document.querySelector("#v");
let w = document.querySelector("#w");
let x = document.querySelector("#x");
let y = document.querySelector("#y");
let z = document.querySelector("#z");
let box = document.querySelector(".box-hangman")
let horizontalBot = document.getElementById("horizonBottom");
let vertical = document.getElementById("vertical");
let oblique = document.getElementById("oblique");
let horizonTop = document.getElementById("horizonTop");
let rope = document.getElementById("rope");
let circleRope = document.getElementById("circleRope");
let head = document.getElementById("head");
let rightEye = document.getElementById("eyeOne");
let leftEye = document.getElementById("eyeTwo");
let body = document.getElementById("body");
let rightHand = document.getElementById("rgHand");
let leftHand = document.getElementById("lfHand");
let rightFoot = document.getElementById("rgFoot");
let leftFoot = document.getElementById("lfFoot");
let message = document.getElementById("winMsg");
let resetBtn = document.getElementById("resetBtn");
let count = 0;
let theWord = "";

setWord();

clickCharacter(a,"A");
clickCharacter(b,"B");
clickCharacter(c,"C");
clickCharacter(d,"D");
clickCharacter(e,"E");
clickCharacter(f,"F");
clickCharacter(g,"G");
clickCharacter(h,"H");
clickCharacter(i,"I");
clickCharacter(j,"J");
clickCharacter(k,"K");
clickCharacter(l,"L");
clickCharacter(m,"M");
clickCharacter(n,"N");
clickCharacter(o,"O");
clickCharacter(p,"P");
clickCharacter(q,"Q");
clickCharacter(r,"R");
clickCharacter(s,"S");
clickCharacter(t,"T");
clickCharacter(u,"U");
clickCharacter(v,"V");
clickCharacter(w,"W");
clickCharacter(x,"X");
clickCharacter(y,"Y");
clickCharacter(z,"Z");

resetButton();

function setWord(){
    onload = ()=>{
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let randomNums = Math.floor(Math.random() * 10);
        if(randomNums > 3 && randomNums < 9){
            for(let i = 0; i < randomNums; i++){
                let randomNbOne = Math.floor(Math.random() * 10);
                if(randomNbOne === 0 || randomNbOne === 9){
                    randomNbOne = 5;
                    theWord +=  characters[randomNbOne + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)];
                }
                else{
                    theWord +=  characters[randomNbOne + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)];
                }
            }
            addInput();
        }
        else{
            randomNums = 5;
            for(let i = 0; i < randomNums; i++){
                let randomNbOne = Math.floor(Math.random() * 10);
                if(randomNbOne === 0 || randomNbOne === 9){
                    randomNbOne = 5;
                    theWord +=  characters[randomNbOne + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)];
                }
                else{
                    theWord +=  characters[randomNbOne + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10)];
                }
            }
            addInput();
        }
    }
}

function addInput(){
        let divOfInput = document.querySelector("#charsOfWord");
        for(let i = 0; i < theWord.length; i++){
            let input = document.createElement("input");
            input.setAttribute("maxlength","1");
            input.setAttribute("readonly","");
            divOfInput.appendChild(input);
        }
}

function clickCharacter(button,char){
    button.onclick = ()=>{
        let input = document.querySelectorAll("input");
            if(theWord.includes(char) === true){
                button.classList.add("checked");
                for(let i = 0; i < theWord.length; i++){
                    if(char === theWord.charAt(i)){
                       input[i].value = char;
                    }
                }
            }
            else{
                let empty = theWord.length;
                for(let i = 0; i < input.length; i++){
                    if(input[i].value.length === 0){
                        empty--;
                    }
                }    
                if(empty < theWord.length){
                    addPicture(button);
                }
                else{
                    box.style.pointerEvents = "none";
                    console.log("Game Over");
                }
            }   
    }
}

function addPicture(wrgBtn){
        let rope = document.getElementById("rope");
        let arrayOfClass = ["horizontal-bottom","vertical","oblique","horizontal-top","rope","circle-rope","head","body","right-hand","left-hand","right-foot","left-foot"];
        let arrayOfPieces = [horizontalBot,vertical,oblique,horizonTop,rope,circleRope,head,body,rightHand,leftHand,rightFoot,leftFoot];
        if(count < 12){
            wrgBtn.classList.add("checked");
            arrayOfPieces[count].classList.add(arrayOfClass[count]);
        }
        if(count === 5){
            rightEye.innerHTML = "."
            leftEye.innerHTML = "."
            rightEye.classList.add("eye-one");
            leftEye.classList.add("eye-two");
        }
        count++;
        if(count === 12){
            box.style.pointerEvents = "none";
            let msgtext = document.createTextNode("Game Over");
            message.appendChild(msgtext);
            message.classList.add("win-message");
            rightEye.classList.add("new-eye-one");
            leftEye.classList.add("new-eye-two");
            rightEye.innerHTML = "x";
            leftEye.innerHTML = "x";
        }
}

function resetButton(){
    resetBtn.onclick = ()=>{
        location.reload();
    }
}
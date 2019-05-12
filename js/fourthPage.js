function vizualize(lang){

////document.createElement qisa formasi create////
function create(element) {
    return document.createElement(element);
}
//// p taginin yaradilmasi/////
function createP(tagName, className, text, parent) {
    let element = create(tagName);
    element.className = className;
    element.innerText = text;
    parent.appendChild(element);
    return element;
}

//// img taginin yaradilmasi/////
function createImg(tagName, className, src, imgName, parent) {
    let element = create(tagName);
    element.className = className;
    element.setAttribute(src, imgName);
    parent.appendChild(element);
    return element;
}

//// divin yaradilmasi/////
function createDiv(tagName, className, backGround , parent) {
    let element = create(tagName);
    element.className = className;
    element.style.background = backGround;
    parent.appendChild(element);
    return element;
}

let itemObj = localStorage.item;
let itemSecondPageObj = localStorage.itemSecondPage;

let upDivFourth;
let upDivFourthInside;
let middleDivFourth;
function run(){
    upDivFourth = createDiv("div", "upDivFourth", null, document.body);
    upDivFourthInside = createDiv("div", "upDivFourthInside", null, upDivFourth);
    createP("p", "inputPr", "Xahiş edirik nömrənizi daxil edin:", upDivFourth );
    let input = create("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", "");
    input.setAttribute("disabled", "disabled");
    input.setAttribute("maxlength", "9");
    input.className = "inputText";
    upDivFourth.appendChild(input);
    function init(obj){
        if (obj[itemObj].keyboardType == "number") {
            middleDivFourth = createDiv("div", "middleDivFourth", null, document.body);
            middleDivFourth.style.width = "18%";
        }else{
            middleDivFourth = createDiv("div", "middleDivFourth", null, document.body);
            middleDivFourth.style.width = "71%";
        }
    };
    init(lang)
    bottomDivFourth = createDiv("div", "bottomDivFourth", null, document.body);
    var a = document.querySelector(".inputText");
   
    if(langId == "az_lang"){
        upDivFourthDelete = createImg("img","upDivFourthDelete", "src","img/ui/delbtn_FC.gif", upDivFourth);
        let btnBack = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/back_FC.gif", bottomDivFourth); 
        btnBack.setAttribute("id","btnBackId");
        let btnHome = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/menu_FC.gif", bottomDivFourth); 
        btnHome.setAttribute("id","btnHomeId");
        let btnNext = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/forward_FC.gif", bottomDivFourth);
        btnNext.setAttribute("id", "btnNextId");
        btnNext.style.display = "none";
    }
    else if(langId == "ru_lang"){
        upDivFourthDelete = createImg("img","upDivFourthDelete", "src","img/ui/delbtn_F1.gif", upDivFourth);
        let btnBack = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/back_F1.gif", bottomDivFourth);  
        btnBack.setAttribute("id","btnBackId");
        let btnHome = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/menu_F1.gif", bottomDivFourth); 
        btnHome.setAttribute("id","btnHomeId");
        let btnNext = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/forward_F1.gif", bottomDivFourth); 
        btnNext.setAttribute("id", "btnNextId");
        btnNext.style.display = "none";

    }
    else if(langId == "en_lang"){
        upDivFourthDelete = createImg("img","upDivFourthDelete", "src","img/ui/delbtn_F2.gif", upDivFourth);
        let btnBack = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/back_F2.gif", bottomDivFourth);
        btnBack.setAttribute("id","btnBackId");
        let btnHome = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/menu_F2.gif", bottomDivFourth); 
        btnHome.setAttribute("id","btnHomeId");
        let btnNext = createImg("img","bottomDivFourthImg", "src","img/ui/navigation/forward_F2.gif", bottomDivFourth);
        btnNext.setAttribute("id", "btnNextId");
        btnNext.style.display = "none";

    }         
}
run();


//////yuxari solda logonun yaradilmasi////


function initial(obj){
    createImg("img","upDivFourthLogo", "src",obj[itemObj].providers[itemSecondPageObj].logo, upDivFourthInside);
    createP("p","logo",obj[itemObj].providers[itemSecondPageObj].headerText,upDivFourthInside);
}
initial(lang);


////Nomreleri div ve ichinde img olaraq yazdirmaq//////
function initialKeyboard(obj){

    if (obj[itemObj].keyboardType == "number") {
            let count = 0;
            let dataCount = 1;
            for (let item of keyboards.number) {
                if(count < 9){
                    let numbers = createDiv("div","numbers",null, middleDivFourth);
                    numbers.setAttribute("data-nmbr", dataCount);
                    dataCount++;
                    let img = createImg("img", "numbersImg","src", item,numbers);
                    count++;
                }else{
                    let numbers = createDiv("div","numbers",null, middleDivFourth);
                    numbers.setAttribute("data-nmbr", 0);
                    createImg("img", "numbersImgZero","src", item,numbers);
                }
            }
    }
    else{
        let count = 0;
        for (let item of keyboards.allSimvol) {
            
                let allSimvols = createDiv("div","allSimvols",null, middleDivFourth);
                let allSimvolsInside = createDiv("div","allSimvolsInside",null, allSimvols); 
                allSimvolsInside.innerText = item;
                if (allSimvolsInside.innerText == "TAB") {
                    allSimvols.style.width = "152px";
                    allSimvols.style.background = "orange";
                }else if(allSimvolsInside.innerText == "АБВ"){
                    allSimvols.style.background = "orange";
                }else if(allSimvolsInside.innerText == "SHIFT"){
                    allSimvols.style.width = "152px";
                    allSimvols.style.background = "orange";
                }else if(allSimvolsInside.innerText == "CapsLock"){
                    allSimvols.style.width = "234px";
                    allSimvols.style.background = "orange";
                }else if(allSimvolsInside.innerText == ""){
                    allSimvols.style.width = "562px";
                    allSimvols.style.borderBottomLeftRadius = "100px";
                    allSimvols.style.borderBottomRightRadius = "100px";
                }else if(allSimvolsInside.innerText == "Delete all"){
                    allSimvols.style.width = "234px";
                    allSimvols.style.background = "orange";
                }
                

                // count++;
        }
    }
}

initialKeyboard(lang);



/////click olunmush reqemleri inputa yazdirmaq////////
let numberClickCount = 0;
let inputText = document.querySelector(".inputText");
let numberClick = document.querySelectorAll(".numbers");
var nextBtn = document.querySelector("#btnNextId");

for (let item of numberClick) {
    item.addEventListener("click", function(){
        if(numberClickCount<=9){
            numberClickCount++;
            let dataClick = this.dataset.nmbr;
            inputText.value += dataClick;
            // console.log(numberClickCount);
            if(numberClickCount >= 10){
            nextBtn.style.display = "inline-block";
             }
        }else{
            var prRed = document.querySelector(".inputPr");
            prRed.innerText = "Bunnan artıq daxil etmə yalnışdır !!!";
            prRed.style.color = "red";
        }
        
    })
}



/////inputa yazilanlari silmek/////////
let deleteClick = document.querySelector(".upDivFourthDelete");

deleteClick.addEventListener("click",function(){
    numberClickCount--;
    
    let inputTextLength = +inputText.value.length - 1;
    inputText.value = inputText.value.substring(0, inputTextLength)  
    if(numberClickCount<10){
        nextBtn.style.display = "none";
        var prGray = document.querySelector(".inputPr");
            prGray.innerText = "Xahiş edirik nömrənizi daxil edin:";
            prGray.style.color = "#5d5d5d";
    }
});


let btnBack = document.querySelector("#btnBackId");
    btnBack.addEventListener("click",function(){
        location.href = "thirdpage.html"
    });

////Ana sehifeye qayitmaq/////////
let btnHome = document.querySelector("#btnHomeId");
btnHome.addEventListener("click", function(){
    location.href = "index.html";
});



}
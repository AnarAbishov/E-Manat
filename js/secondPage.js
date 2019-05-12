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
let langId = localStorage.language;

let upDivSecond;

let middleDivSecond;
function run(){
    upDivSecond = createDiv("div", "upDivSecond", null, document.body);
    middleDivSecond = createDiv("div", "middleDivSecond", null, document.body);
    bottomDivSecond = createDiv("div", "bottomDivSecond", null, document.body);
    if(langId == "az_lang"){
    createImg("img","bottomDivSecondImg", "src","img/ui/navigation/menu_FC.gif", bottomDivSecond);  
    }
    else if(langId == "ru_lang"){
    createImg("img","bottomDivSecondImg", "src","img/ui/navigation/menu_F1.gif", bottomDivSecond);
    }
    else if(langId == "en_lang"){
    createImg("img","bottomDivSecondImg", "src","img/ui/navigation/menu_F2.gif", bottomDivSecond);
    }
  
}
run();

class InsideProviders{
    constructor(tagName, className, src, img , width, height){
        this._tagName = tagName;
        this._className = className;
        this._src = src;
        this._img = img;
        this._width = width;
        this._height = height;
    }
    createProvider(){
       let element = create(this._tagName);
       element.className = this._className;
       element.setAttribute(this._src, this._img);
       element.style.width = this._width;
       element.style.height = this._height;
       middlePrvd.appendChild(element);
    }
}




function initial(obj){
    let itemObj = localStorage.item;
        if(typeof(obj[itemObj].logo)=="object"){
            for (let itemLogo of obj[itemObj].logo) {
                let upDivSecondLogo = createImg("img","upDivSecondLogo", "src", itemLogo, upDivSecond);
            }
        }else{
            let upDivSecondLogo = createImg("img","upDivSecondLogo", "src", obj[itemObj].logo, upDivSecond);    
            upDivSecondLogo.style.marginLeft = "80px";
        }  
 
createP("p", "pr", obj[itemObj].headerText, upDivSecond);  

for (let item in obj[itemObj].providers) {
   
middlePrvd = createDiv("div", "middle", null, middleDivSecond);
middlePrvd.setAttribute("data-pagesecond",item)

new InsideProviders("img","middleDivSecondImg", "src",obj[itemObj].providers[item].img,"200px", "120px").createProvider();
}
}
initial(lang);


/////////Click olunmushu tapmaq ve localstorageye yazmaq///////
let middle = document.querySelectorAll(".middle");

for (let item of middle) {
    item.addEventListener("click",function(){
        localStorage.setItem("itemSecondPage",item.dataset.pagesecond);
        location.href = "thirdPage.html";
    });  
}




/////////Esas sehifeye gondermek////////////
let btnHome = document.querySelector(".bottomDivSecondImg");

btnHome.addEventListener("click", function(){
    location.href = "index.html";
    
});


}


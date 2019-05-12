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

let upDivThird;
let middleDivThird;
function run(){
    upDivThird = createDiv("div", "upDivThird", null, document.body);
    middleDivThird = createDiv("div", "middleDivThird", null, document.body);
    bottomDivThird = createDiv("div", "bottomDivThird", null, document.body);
  
    if(langId == "az_lang"){
        createImg("img","bottomDivThirdImg", "src","img/ui/navigation/menu_FC.gif", bottomDivThird);  
        }
        else if(langId == "ru_lang"){
        createImg("img","bottomDivThirdImg", "src","img/ui/navigation/menu_F1.gif", bottomDivThird);
        }
        else if(langId == "en_lang"){
        createImg("img","bottomDivThirdImg", "src","img/ui/navigation/menu_F2.gif", bottomDivThird);
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
let itemSecondPageObj = localStorage.itemSecondPage;
    
         let upDivThirdLogo = createImg("img","upDivThirdLogo", "src", obj[itemObj].providers[itemSecondPageObj].logo, upDivThird);    
         upDivThirdLogo.style.marginLeft = "80px";    
         createP("p", "pr", obj[itemObj].providers[itemSecondPageObj].headerText, upDivThird);
         for (let item in obj[itemObj].providers[itemSecondPageObj].providersInside) {
            middle = createDiv("div", "middle", null, middleDivThird);
            middle.setAttribute("data-pagethird",item);
            if(langId == "az_lang"){
                    createP("p", "pr", obj[itemObj].providers[itemSecondPageObj].providersInside[item], middle); 
                }
                else if(langId == "ru_lang"){
                    createP("p", "pr", obj[itemObj].providers[itemSecondPageObj].providersInside[item], middle);
                }
                else if(langId == "en_lang"){
                    createP("p", "pr", obj[itemObj].providers[itemSecondPageObj].providersInside[item], middle);
                }
           }
        }

initial(lang);
//////middle divlerine click olunnannan sora/////////////
let middles = document.querySelectorAll(".middle");

for (let item of middles) {
    item.addEventListener("click",function(){
        localStorage.setItem("itemThirdPage",item.dataset.pagethird);
        location.href = "fourthPage.html";
    });  
}


/////Home page///////////////////
let btnHome = document.querySelector(".bottomDivThirdImg");

btnHome.addEventListener("click", function(){
    location.href = "index.html";
});


}


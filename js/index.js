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
function createDiv(tagName, className, backGround, parent) {
    let element = create(tagName);
    element.className = className;
    element.style.background = backGround;
    parent.appendChild(element);
    return element;
}
let middleDiv;
let bottomDiv;
let bottomDivLeft;
let bottomDivMiddle;
let bottomDivRight;
let footerDiv;

function run() {
    let upDiv = createDiv("div", "upDiv", null, document.body);
    let upDivLeft = createDiv("div", "upDivLeft", null, upDiv);
    let upDivMiddle = createDiv("div", "upDivMiddle", null, upDiv);
    let upDivRight = createDiv("div", "upDivRight", null, upDiv);
    createP("p", "pr", moment().format("h:mm"), upDivLeft);
    createP("p", "pr", moment().format("D MMMM"), upDivLeft);
    createP("p", "pr", moment().format("dddd"), upDivLeft);
    createImg("img", "eManatLogo", "src", "img/emanat.png", upDivMiddle);
    let info = createImg("img", "informationLogo", "src", "img/info.png", upDivMiddle);
    if(langId == "az_lang"){
        info.setAttribute("title","Əlaqə nomresi: 012-404-48-88")
    }
    else if(langId == "ru_lang"){
        info.setAttribute("title","Контактное номер: 012-404-48-88")
    }
    else if(langId == "en_lang"){
        info.setAttribute("title","Contact number: 012-404-48-88")
    }
    
    let az = createImg("img", "lang", "src", "img/ui/index/az.png", upDivRight);
    az.setAttribute("id", "az_lang");
    let ru = createImg("img", "lang", "src", "img/ui/index/rus.png", upDivRight);
    ru.setAttribute("id", "ru_lang");
    let en = createImg("img", "lang", "src", "img/ui/index/eng.png", upDivRight);
    en.setAttribute("id", "en_lang");
    middleDiv = createDiv("div", "middleDiv", null, document.body);
    bottomDiv = createDiv("div", "bottomDiv", null, document.body);
    bottomDivLeft = createDiv("div", "bottomDivLeft", null, bottomDiv);
    bottomDivMiddle = createDiv("div", "bottomDivMiddle", null, bottomDiv);
    bottomDivRight = createDiv("div", "bottomDivRight", null, bottomDiv);
    
    if(langId == "az_lang"){
            createImg("img", "adLeft", "src", "img/icons/adAz.gif", bottomDivLeft); 
            createImg("img", "adRight", "src", "img/ani.gif", bottomDivRight);
            footerDiv = createDiv("div", "footerDiv", "lightgray", document.body);
            createP("p", "pr", "Müştəri xidmətləri: 012-404-48-88", footerDiv);
        }
        else if(langId == "ru_lang"){
            createImg("img", "adLeft", "src", "img/icons/adRu.gif", bottomDivLeft);
            createImg("img", "adRight", "src", "img/ani.gif", bottomDivRight);
            footerDiv = createDiv("div", "footerDiv", "lightgray", document.body);
             createP("p", "pr", "Обслуживание клиентов: 012-404-48-88", footerDiv);
        }
        else if(langId == "en_lang"){
            createImg("img", "adLeft", "src", "img/icons/adEn.gif", bottomDivLeft);
            createImg("img", "adRight", "src", "img/ani.gif", bottomDivRight);
            footerDiv = createDiv("div", "footerDiv", "lightgray", document.body);
             createP("p", "pr", "Customer service: 012-404-48-88", footerDiv);
        }
    
    
}

run();

let languages = document.querySelectorAll(".lang");
for (let l of languages) {
    l.addEventListener("click", function(){
        // document.body.innerHTML="";
        document.body.innerHTML=`
    <script src="js/configurationAz.js"></script>
    <script src="js/configurationRu.js"></script>
    <script src="js/configurationEn.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
    <script src="js/moment.js"></script>     
    <script src="js/index.js"></script>
    `
    langId = l.id;
    let script= document.createElement("script");
    document.body.appendChild(script)
    script.innerHTML=`vizualize(${l.id})`
    localStorage.setItem("language", l.id);
    
    })
}



class UpProviders {
    constructor(tagName, className, src, img, width, height) {
        this._tagName = tagName;
        this._className = className;
        this._src = src;
        this._img = img;
        this._width = width;
        this._height = height;
    }
    createProvider() {
        let element = create(this._tagName);
        element.className = this._className;
        element.setAttribute(this._src, this._img);
        element.style.width = this._width;
        element.style.height = this._height;
        middlePrvd.appendChild(element);
    }
}

let middlePrvd;
let countUp = 0;
function initialUp(obj){
    for (let item in obj) {
            for (let itemInside in obj[item].providers) {
                    if (obj[item].providers[itemInside].star == true) {
                    if (countUp < 7) {
                       middlePrvd = createDiv("div", "middleUp", null, middleDiv);
                       middlePrvd.setAttribute("data-pagesecond",itemInside)
                       middlePrvd.setAttribute("data-provider",item)
                       new UpProviders("img", "middleDivImg", "src", obj[item].providers[itemInside].img, "180px", "120px").createProvider();
                       countUp++;
                    }  
                }
        }
    }
}



initialUp(lang);
/////Localstorage yazmaq ve novbeti sehifeye kecmek/////
let middlesUp = document.querySelectorAll(".middleUp");
for (let item of middlesUp) {
    item.addEventListener("click", function () {
        localStorage.setItem("item", item.dataset.provider);
        localStorage.setItem("itemSecondPage",item.dataset.pagesecond);
        location.href = "thirdPage.html";
    });
};

class BottomProviders {
    constructor(tagName, className, src, img, width, height) {
        this._tagName = tagName;
        this._className = className;
        this._src = src;
        this._img = img; //array
        this._width = width;
        this._height = height;
    }
    createProvider() {
        if (typeof (this._img) == "object") {
            for (let imgItem of this._img) {
                let element = create(this._tagName);
                element.className = this._className;
                element.setAttribute(this._src, imgItem);
                element.style.width = this._width;
                element.style.height = this._height;
                middle.appendChild(element);
            }
        } else {
            let element = create(this._tagName);
            element.className = this._className;
            element.setAttribute(this._src, this._img);
            element.style.width = this._width;
            element.style.height = this._height;
            middle.appendChild(element);
        }
    }
}



let middle;
let bottomDivImg;
let middleId = 1;
let carousel = create("div");
carousel.className = "carousel";
bottomDivMiddle.appendChild(carousel);
carousel.innerHTML = `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
  <div class="carousel-item active">
    
  </div>
  <div class="carousel-item">

  </div>
  
  
</div>
<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>`;

let carouselItem = document.querySelectorAll(".carousel-item");


let count = 0;
function initial(obj){
    for (let item in obj) {
        if (count < 9) {
            middle = createDiv("div", "middle", item.backColorProvider, carouselItem[0]);
            middle.setAttribute("data-page", item);
            middle.style.display = "inline-block";
            middle.style.background = obj[item].backColorProvider;
            bottomDivImg = new BottomProviders("img", "bottomDivImg", "src", obj[item].logo, "50px", "50px").createProvider();
            createP("p", "pr", obj[item].headerText, middle);
            count++;

        } else {
            middle = createDiv("div", "middle", item.backColorProvider, carouselItem[1]);
            middle.setAttribute("data-page", item);
            middle.style.display = "inline-block";
            middle.style.background = obj[item].backColorProvider;
            bottomDivImg = new BottomProviders("img", "bottomDivImg", "src", obj[item].logo, "50px", "50px").createProvider();
            createP("p", "pr", obj[item].headerText, middle);
        }
    }
}

initial(lang);



/////Carouselin avto loop elemeyini sondurmek////
$('.carousel').carousel({
    interval: false
})



/////Localstorage yazmaq ve novbeti sehifeye kecmek/////
let middles = document.querySelectorAll(".middle");
for (let item of middles) {
    item.addEventListener("click", function () {
        localStorage.setItem("item", item.dataset.page);
        location.href = "secondPage.html";
    });
}




}
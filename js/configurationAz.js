
let az_lang = {
        "Kommunal Odenishler":{
            name:"utility",
            headerText: "Kommunal Ödənişlər",
            backColorProvider: "#175db3",
            logo: ["img/icons/fire.png","img/icons/water.png","img/icons/lamp.png"],            
            keyboardType: "allSimvol",
            providers: {
                azeriqaz:{
                    headerText: "Azəriqaz",
                    star: true,
                    img: "img/main/azerigaz_F1.png",
                    logo: "img/main/azerigaz_F1.png",
                    providersInside: {
                        bildirishle: "Bildirişlə Ödəmə Azeriqaz",
                        smartkartla: "Smart kartla ödəmə",
                        mecburikockun: "Məcburi Köçkün limitli ödəmə",
                        smartkartberpa: "Smart kartı bərpa",  
                    }, 
                },
                azerisu:{
                    headerText: "Azərisu",
                    star: true,                    
                    img: "img/main/azersu_F1.png",
                    logo: "img/main/azersu_F1.png",
                    providersInside: {
                        bildirishle: "Bildirişlə Ödəmə Azerisu",
                        smartkartla: "Smart kartla ödəmə",
                        mecburikockun: "Məcburi Köçkün limitli ödəmə",
                        smartkartberpa: "Smart kartı bərpa",  
                    }, 
                },
                bakielectrikshebeke:{
                    headerText: "Azərİşıq",
                    star: true,                    
                    img: "img/main/elektrik_F1.png",
                    logo: "img/main/elektrik_F1.png",
                    providersInside: {
                        bildirishle: "Bildirişlə Ödəmə Electrik",
                        smartkartla: "Smart kartla ödəmə",
                        mecburikockun: "Məcburi Köçkün limitli ödəmə",
                        smartkartberpa: "Smart kartı bərpa",  
                    }, 
                }
            },
        },
        "Operatorlar":{
            name:"phone",
            headerText: "Operatorlar",  
            backColorProvider: "#fcda5c",
            logo: "img/icons/phone.png",            
            keyboardType: "number",
            providers: {
                azercell:{
                    headerText: "Azercell",
                    star: true,
                    img: "img/main/azercell_F1.png",
                    logo: "img/main/azercell_F1.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                bakcell:{
                    headerText: "Bakcell",
                    star: true,
                    img: "img/main/bakcell_F1.png",
                    logo: "img/main/bakcell_F1.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                nar:{
                    headerText: "Nar",
                    star: true,
                    img: "img/main/nar_F1.png",  
                    logo: "img/main/nar_F1.png", 
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                }
            },
                     
        },
        "Bank Xidmetleri":{
            name:"phone",
            headerText: "Bank Xidmətləri",  
            backColorProvider: "#3d1e7b",
            logo: "img/icons/bank.png",            
            keyboardType: "Numbers",
            providers: {
                unibank:{
                    headerText: "Unibank",
                    star: false,
                    img: "img/main/unibank.jpg",
                    logo: "img//icons/unibank.jpg",
                    providersInside: {
                        fiziki: "Fiziki Şəxs",
                        huquqi: "Hüquqi Şəxs",
                    },
                },
                bankStandart:{
                    headerText: "Bank Standart",
                    star: false,
                    img: "img/main/bankstandart.jpg",
                    logo: "img//icons/standardbank.jpg",
                    providersInside: {
                        fiziki: "Fiziki Şəxs",
                        huquqi: "Hüquqi Şəxs",
                    },
                },
                kapitalBank:{
                    headerText: "Kapital Bank",
                    star: false,
                    img: "img/main/kapitalbank.png",  
                    logo: "img//icons/kapitalbank.jpg",
                    providersInside: {
                        fiziki: "Fiziki Şəxs",
                        huquqi: "Hüquqi Şəxs",
                    },
                },
                beynelxalqBank:{
                    headerText: "Beynəlxalq Bank",
                    star: false,
                    img: "img/main/beynelxalqbank.jpg",  
                    logo: "img//icons/beynelxalqbank.jpg",
                    providersInside: {
                        fiziki: "Fiziki Şəxs",
                        huquqi: "Hüquqi Şəxs",
                    },
                }
            },         
        },
        "Dovlet ve belediyye":{
            name:"phone",
            headerText: "Dövlət və Bələdiyyə",  
            backColorProvider: "#b21ba6",
            logo: "img/icons/state.png",            
            keyboardType: "Numbers",
            providers: {
                azercell:{
                    headerText: "Azercell",
                    star: false,
                    img: "img/main/azercell_F1.png",
                    logo: "img//icons/azercell.png",
                },
                bakcell:{
                    headerText: "Bakcell",
                    star: false,
                    img: "img/main/bakcell_F1.png",
                    logo: "img//icons/bakcell.png",
                },
                nar:{
                    headerText: "Nar",
                    star: false,
                    img: "img/main/nar_F1.png",  
                    logo: "img//icons/nar.png",
                }
            },
                     
        },
        "Tv":{
            name:"phone",
            headerText: "TV",  
            backColorProvider: "#44801b",
            logo: "img/icons/tv.png",            
            keyboardType: "Numbers",
            providers: {
                ailetv:{
                    headerText: "Ailə TV",
                    star: false,
                    img: "img/main/ailetv.jpg",
                    logo: "img/main/ailetv.jpg",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                katv:{
                    headerText: "Katv",
                    star: false,
                    img: "img/main/katv.jpg",
                    logo: "img/main/katv.jpg",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
            },
                     
        },
        "Internet":{
            name:"phone",
            headerText: "İnternet",  
            backColorProvider: "#ed3923",
            logo: "img/icons/wifi.png",            
            keyboardType: "Numbers",
            providers: {
                avirtel:{
                    headerText: "Avirtel",
                    star: false,
                    img: "img/main/avirtel.png",
                    logo: "img/main/avirtel.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                alfanet:{
                    headerText: "Alfanet",
                    star: false,
                    img: "img/main/alfanet.png",
                    logo: "img/main/alfanet.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                ailenet:{
                    headerText: "Ailenet",
                    star: false,
                    img: "img/main/ailenet.png",  
                    logo: "img/main/ailenet.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                connect:{
                    headerText: "Connect",
                    star: false,
                    img: "img/main/connect.jpg",  
                    logo: "img/main/connect.jpg",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                dataplus:{
                    headerText: "Dataplus",
                    star: false,
                    img: "img/main/dataplus.png",  
                    logo: "img/main/dataplus.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                katv:{
                    headerText: "Katv",
                    star: false,
                    img: "img/main/katv.jpg",
                    logo: "img/main/katv.jpg",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                narcitynet:{
                    headerText: "NarCitynet",
                    star: false,
                    img: "img/main/narcitynet.png",  
                    logo: "img/main/narcitynet.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                uninet:{
                    headerText: "Uninet",
                    star: false,
                    img: "img/main/uninet.jpg",  
                    logo: "img/main/uninet.jpg",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
            },
                     
        },
        "Odeme Kartlari":{
            name:"phone",
            headerText: "Ödəmə kartları",  
            backColorProvider: "#0187c3",
            logo: "img/icons/card.png",            
            keyboardType: "Numbers",
            providers: {
                azercell:{
                    headerText: "Azercell",
                    img: "img/main/azercell_F1.png",
                    logo: "img//icons/azercell.png",
                },
                bakcell:{
                    headerText: "Bakcell",
                    img: "img/main/bakcell_F1.png",
                    logo: "img//icons/bakcell.png",
                },
                nar:{
                    headerText: "Nar",
                    img: "img/main/nar_F1.png",  
                    logo: "img//icons/nar.png",
                }
            },
                     
        },
        "Eylence ve Oyunlar":{
            name:"phone",
            headerText: "Əyləncə və oyunlar",  
            backColorProvider: "#b11e48",
            logo: "img/icons/game.png",            
            keyboardType: "Numbers",
            providers: {
                topaz:{
                    headerText: "Topaz",
                    star: true,
                    img: "img/main/topaz.jpg",
                    logo: "img/main/topaz.jpg",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                gamepay:{
                    headerText: "GamePay.az",
                    star: false,
                    img: "img/ui_item/1.png",
                    logo: "img/ui_item/1.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                skype:{
                    headerText: "Skype",
                    star: false,
                    img: "img/ui_item/196.png",  
                    logo: "img/ui_item/196.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                vkontakte:{
                    headerText: "Vkontakte",
                    star: false,
                    img: "img/ui_item/300.png",  
                    logo:  "img/ui_item/300.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                odnoklassniki:{
                    headerText: "Odnoklassniki",
                    star: false,
                    img: "img/ui_item/332.png",  
                    logo: "img/ui_item/332.png",
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                parapa:{
                    headerText: "Parapa",
                    star: false,
                    img: "img/ui_item/334.png",  
                    logo: "img/ui_item/334.png",  
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                bilayn:{
                    headerText: "Bilayn",
                    star: false,
                    img: "img/ui_item/387.png",  
                    logo: "img/ui_item/387.png", 
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                mtc:{
                    headerText: "Mtc",
                    star: false,
                    img: "img/ui_item/390.png",  
                    logo: "img/ui_item/390.png", 
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                mailru:{
                    headerText: "Mail",
                    star: false,
                    img: "img/ui_item/330.png",  
                    logo: "img/ui_item/330.png",  
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
                timezero:{
                    headerText: "Time Zero",
                    star: false,
                    img: "img/ui_item/236.png",  
                    logo: "img/ui_item/236.png",  
                    providersInside: {
                        nagd: "Nağd Ödəniş",
                        plastikkartla: "Plastik kartla ödəniş",
                    },
                },
            },
                     
        },
        "E-pulqabi":{
            name:"phone",
            headerText: "E-Pulqabı",  
            backColorProvider: "#b77523",
            logo: "img/icons/wallet.png",            
            keyboardType: "Numbers",
            providers: {
                azercell:{
                    headerText: "Azercell",
                    img: "img/main/azercell_F1.png",
                    logo: "img//icons/azercell.png",
                },
                bakcell:{
                    headerText: "Bakcell",
                    img: "img/main/bakcell_F1.png",
                    logo: "img//icons/bakcell.png",
                },
                nar:{
                    headerText: "Nar",
                    img: "img/main/nar_F1.png",  
                    logo: "img//icons/nar.png",
                }
            },
                     
        },
        "Sigorta":{
            name:"Sigorta",
            headerText: "Siğorta",  
            backColorProvider: "#85990e",
            logo: "img/icons/money.png",            
            keyboardType: "Numbers",
            providers: {
                pashasigorta:{
                    headerText: "Paşa Sığorta",
                    star: false,
                    img: "img/main/pashasigorta.jpg",  
                    logo: "img/main/pashasigorta.jpg",  
                    providersInside: {
                        nagd: "Nağd ödəmə",
                        seriya: "Seriya vasitəsi ilə ödəmə",
                    },
                },
                atasigorta:{
                    headerText: "Ata Sığorta",
                    star: false,
                    img: "img/main/atasigorta.jpg",  
                    logo: "img/main/atasigorta.jpg",   
                    providersInside: {
                        nag: "Nağd ödəmə",
                        seriya: "Seriya vasitəsi ilə ödəmə",
                    },
                },
            },
                     
        },
        "Dyp":{
            name:"dyp",
            headerText: "DYP",  
            backColorProvider: "#002dff",
            logo: "img/icons/police.png",            
            keyboardType: "Numbers",
            providers: {
                minik:{
                    headerText: "Minik",
                    star: false,
                    img: "img/main/minik.jpg",  
                    logo: "img/main/minik.jpg",  
                    providersInside: {
                        protokol: "Protokolla ödəmə",
                        seriya: "Seriya vasitəsi ilə ödəmə",
                    },
                },
                yuk:{
                    headerText: "Yük",
                    star: false,
                    img: "img/main/yuk.jpg",  
                    logo: "img/main/yuk.jpg",   
                    providersInside: {
                        protokol: "Protokolla ödəmə",
                        seriya: "Seriya vasitəsi ilə ödəmə",
                    },
                },
            },
                     
        },
}



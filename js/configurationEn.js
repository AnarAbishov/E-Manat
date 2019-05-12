
let en_lang = {
    "Kommunal Odenishler":{
        name:"utility",
        headerText: "Utility Payments",
        backColorProvider: "#175db3",
        logo: ["img/icons/fire.png","img/icons/water.png","img/icons/lamp.png"],            
        keyboardType: "StringAndNumbers",
        providers: {
            azeriqaz:{
                headerText: "Azəriqaz",
                star: true,
                img: "img/main/azerigaz_F1.png",
                logo: "img//icons/fire.png",
                providersInside: {
                    bildirishle: "Payment with Notification",
                    smartkartla: "Pay with smart card",
                    mecburikockun: "Compulsory Displacement Limited Payment",
                    smartkartberpa: "Smart card recovery",  
                }, 
            },
            azerisu:{
                headerText: "Azərisu",
                star: true,
                img: "img/main/azersu_F1.png",
                logo: "img//icons/water.png",
                providersInside: {
                    bildirishle: "Payment with Notification",
                    smartkartla: "Pay with smart card",
                    mecburikockun: "Compulsory Displacement Limited Payment",
                    smartkartberpa: "Smart card recovery",  
                }, 
            },
            bakielectrikshebeke:{
                headerText: "Bakı Electrik Şəbəkə",
                star: true,
                img: "img/main/elektrik_F1.png",
                logo: "img//icons/lamp.png",
                providersInside: {
                    bildirishle: "Payment with Notification",
                    smartkartla: "Pay with smart card",
                    mecburikockun: "Compulsory Displacement Limited Payment",
                    smartkartberpa: "Smart card recovery",  
                }, 
            }
        },
    },
    "Operatorlar":{
        name:"phone",
        headerText: "Operators",  
        backColorProvider: "#fcda5c",
        logo: "img/icons/phone.png",            
        keyboardType: "Numbers",
        providers: {
            azercell:{
                headerText: "Azercell",
                star: true,
                img: "img/main/azercell_F1.png",
                logo: "img//icons/azercell.png",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            bakcell:{
                headerText: "Bakcell",
                star: true,
                img: "img/main/bakcell_F1.png",
                logo: "img//icons/bakcell.png",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            nar:{
                headerText: "Nar",
                star: true,
                img: "img/main/nar_F1.png",  
                logo: "img//icons/nar.png",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            }
        },
                 
    },
    "Bank Xidmetleri":{
        name:"phone",
        headerText: "Banking Services",  
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
                    fiziki: "Individual",
                    huquqi: "Juridical person",
                },
            },
            bankStandart:{
                headerText: "Bank Standart",
                star: false,
                img: "img/main/bankstandart.jpg",
                logo: "img//icons/standardbank.jpg",
                providersInside: {
                    fiziki: "Individual",
                    huquqi: "Juridical person",
                },
            },
            kapitalBank:{
                headerText: "Kapital Bank",
                star: false,
                img: "img/main/kapitalbank.png",  
                logo: "img//icons/kapitalbank.jpg",
                providersInside: {
                    fiziki: "Individual",
                    huquqi: "Juridical person",
                },
            },
            beynelxalqBank:{
                headerText: "Beynəlxalq Bank",
                star: false,
                img: "img/main/beynelxalqbank.jpg",  
                logo: "img//icons/beynelxalqbank.jpg",
                providersInside: {
                    fiziki: "Individual",
                    huquqi: "Juridical person",
                },
            }
        },  
                 
    },
    "Dovlet ve belediyye":{
        name:"phone",
        headerText: "State and Municipalities",  
        backColorProvider: "#b21ba6",
        logo: "img/icons/state.png",            
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
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            katv:{
                headerText: "Katv",
                star: false,
                img: "img/main/katv.jpg",
                logo: "img/main/katv.jpg",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
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
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            alfanet:{
                headerText: "Alfanet",
                star: false,
                img: "img/main/alfanet.png",
                logo: "img/main/alfanet.png",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            ailenet:{
                headerText: "Ailenet",
                star: false,
                img: "img/main/ailenet.png",  
                logo: "img/main/ailenet.png", 
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            connect:{
                headerText: "Connect",
                star: false,
                img: "img/main/connect.jpg",  
                logo: "img/main/connect.jpg",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            dataplus:{
                headerText: "Dataplus",
                star: false,
                img: "img/main/dataplus.png",  
                logo: "img/main/dataplus.png", 
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            katv:{
                headerText: "Katv",
                star: false,
                img: "img/main/katv.jpg",
                logo: "img/main/katv.jpg",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            narcitynet:{
                headerText: "NarCitynet",
                star: false,
                img: "img/main/narcitynet.png",  
                logo: "img/main/narcitynet.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            uninet:{
                headerText: "Uninet",
                star: false,
                img: "img/main/uninet.jpg",  
                logo: "img/main/uninet.jpg", 
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
        },
                 
    },
    "Odeme Kartlari":{
        name:"phone",
        headerText: "Debit Cards",  
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
        headerText: "Entertainment and games",  
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
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            gamepay:{
                headerText: "GamePay.az",
                star: false,
                img: "img/ui_item/1.png",
                logo: "img/ui_item/1.png",
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            skype:{
                headerText: "Skype",
                star: false,
                img: "img/ui_item/196.png",  
                logo: "img/ui_item/196.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            vkontakte:{
                headerText: "Vkontakte",
                star: false,
                img: "img/ui_item/300.png",  
                logo: "img/ui_item/300.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            odnoklassniki:{
                headerText: "Odnoklassniki",
                star: false,
                img: "img/ui_item/332.png",  
                logo: "img/ui_item/332.png", 
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            parapa:{
                headerText: "Parapa",
                star: false,
                img: "img/ui_item/334.png",  
                logo: "img/ui_item/334.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            bilayn:{
                headerText: "Bilayn",
                star: false,
                img: "img/ui_item/387.png",  
                logo: "img/ui_item/387.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            mtc:{
                headerText: "Mtc",
                star: false,
                img: "img/ui_item/390.png",  
                logo: "img/ui_item/390.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            mailru:{
                headerText: "Mail",
                star: false,
                img: "img/ui_item/330.png",  
                logo: "img/ui_item/330.png",  
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
            timezero:{
                headerText: "Time Zero",
                star: false,
                img: "img/ui_item/236.png",  
                logo: "img/ui_item/236.png", 
                providersInside: {
                    nagd: "Cash Payment",
                    plastikkartla: "Payment by plastic card",
                },
            },
        },
                 
    },
    "E-pulqabi":{
        name:"phone",
        headerText: "E-wallet",  
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
        headerText: "Insurance",  
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
                    nagd: "Cash Payment",
                    seriya: "Payment by plastic card",
                },
            },
            atasigorta:{
                headerText: "Ata Sığorta",
                star: false,
                img: "img/main/atasigorta.jpg",  
                logo: "img/main/atasigorta.jpg",    
                providersInside: {
                    nag: "Cash Payment",
                    seriya: "Payment by plastic card",
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
                    protokol: "Pay for the protocol",
                    seriya: "Pay through the series",
                },
            },
            yuk:{
                headerText: "Yük",
                star: false,
                img: "img/main/yuk.jpg",  
                logo: "img/main/yuk.jpg",   
                providersInside: {
                    protokol: "Pay for the protocol",
                    seriya: "Pay through the series",
                },
            },
        },
                 
    },
}



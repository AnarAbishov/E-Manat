
let ru_lang = {
    "Kommunal Odenishler":{
        name:"utility",
        headerText: "Kоммунальные платежи",
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
                    bildirishle: "По уведомлению Оплата",
                    smartkartla: "Платите с помощью смарт-карты",
                    mecburikockun: "Внутренне перемещенные oплата",
                    smartkartberpa: "Восстановление смарт-карт",  
                }, 
            },
            azerisu:{
                headerText: "Azərisu",
                star: true,
                img: "img/main/azersu_F1.png",
                logo: "img//icons/water.png",
                providersInside: {
                    bildirishle: "По уведомлению Оплата",
                    smartkartla: "Платите с помощью смарт-карты",
                    mecburikockun: "Внутренне перемещенные oплата",
                    smartkartberpa: "Восстановление смарт-карт",  
                }, 
            },
            bakielectrikshebeke:{
                headerText: "Bakı Electrik Şəbəkə",
                star: true,
                img: "img/main/elektrik_F1.png",
                logo: "img//icons/lamp.png",
                providersInside: {
                    bildirishle: "По уведомлению Оплата",
                    smartkartla: "Платите с помощью смарт-карты",
                    mecburikockun: "Внутренне перемещенные oплата",
                    smartkartberpa: "Восстановление смарт-карт",  
                }, 
            }
        },
    },
    "Operatorlar":{
        name:"phone",
        headerText: "Oператоры",  
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
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            bakcell:{
                headerText: "Bakcell",
                star: true,
                img: "img/main/bakcell_F1.png",
                logo: "img//icons/bakcell.png",
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            nar:{
                headerText: "Nar",
                star: true,
                img: "img/main/nar_F1.png",  
                logo: "img//icons/nar.png",
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            }
        },
                 
    },
    "Bank Xidmetleri":{
        name:"phone",
        headerText: "Банковские услуги", 
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
                    fiziki: "Физическое лицо",
                    huquqi: "Юридическое лицо",
                },
            },
            bankStandart:{
                headerText: "Bank Standart",
                star: false,
                img: "img/main/bankstandart.jpg",
                logo: "img//icons/standardbank.jpg",
                providersInside: {
                    fiziki: "Физическое лицо",
                    huquqi: "Юридическое лицо",
                },
            },
            kapitalBank:{
                headerText: "Kapital Bank",
                star: false,
                img: "img/main/kapitalbank.png",  
                logo: "img//icons/kapitalbank.jpg",
                providersInside: {
                    fiziki: "Физическое лицо",
                    huquqi: "Юридическое лицо",
                },
            },
            beynelxalqBank:{
                headerText: "Beynəlxalq Bank",
                star: false,
                img: "img/main/beynelxalqbank.jpg",  
                logo: "img//icons/beynelxalqbank.jpg",
                providersInside: {
                    fiziki: "Физическое лицо",
                    huquqi: "Юридическое лицо",
                },
            }
        },   
                 
    },
    "Dovlet ve belediyye":{
        name:"phone",
        headerText: "Государство и муниципалитеты",  
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
        headerText: "Tелевизор",  
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
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                katv:{
                    headerText: "Katv",
                    star: false,
                    img: "img/main/katv.jpg",
                    logo: "img/main/katv.jpg",
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
            },
                     
        },
        "Internet":{
            name:"phone",
            headerText: "Интернет",  
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
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                alfanet:{
                    headerText: "Alfanet",
                    star: false,
                    img: "img/main/alfanet.png",
                    logo: "img/main/alfanet.png",
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                ailenet:{
                    headerText: "Ailenet",
                    star: false,
                    img: "img/main/ailenet.png",  
                    logo: "img/main/ailenet.png", 
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                connect:{
                    headerText: "Connect",
                    star: false,
                    img: "img/main/connect.jpg",  
                    logo: "img/main/connect.jpg",  
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                dataplus:{
                    headerText: "Dataplus",
                    star: false,
                    img: "img/main/dataplus.png",  
                    logo: "img/main/dataplus.png", 
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                katv:{
                    headerText: "Katv",
                    star: false,
                    img: "img/main/katv.jpg",
                    logo: "img/main/katv.jpg",
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                narcitynet:{
                    headerText: "NarCitynet",
                    star: false,
                    img: "img/main/narcitynet.png",  
                    logo: "img/main/narcitynet.png",  
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
                uninet:{
                    headerText: "Uninet",
                    star: false,
                    img: "img/main/uninet.jpg",  
                    logo: "img/main/uninet.jpg",  
                    providersInside: {
                        nagd: "Оплата наличными",
                        plastikkartla: "Оплата пластиковой картой",
                    },
                },
            },
                     
        },
    "Odeme Kartlari":{
        name:"phone",
        headerText: "Платежные карты",  
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
        headerText: "Развлечения и игры",  
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
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            gamepay:{
                headerText: "GamePay.az",
                star: false,
                img: "img/ui_item/1.png",
                logo: "img/ui_item/1.png",
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            skype:{
                headerText: "Skype",
                star: false,
                img: "img/ui_item/196.png",  
                logo: "img/ui_item/196.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            vkontakte:{
                headerText: "Vkontakte",
                star: false,
                img: "img/ui_item/300.png",  
                logo: "img/ui_item/300.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            odnoklassniki:{
                headerText: "Odnoklassniki",
                star: false,
                img: "img/ui_item/332.png",  
                logo: "img/ui_item/332.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            parapa:{
                headerText: "Parapa",
                star: false,
                img: "img/ui_item/334.png",  
                logo: "img/ui_item/334.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            bilayn:{
                headerText: "Bilayn",
                star: false,
                img: "img/ui_item/387.png",  
                logo: "img/ui_item/387.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            mtc:{
                headerText: "Mtc",
                star: false,
                img: "img/ui_item/390.png",  
                logo: "img/ui_item/390.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            mailru:{
                headerText: "Mail",
                star: false,
                img: "img/ui_item/330.png",  
                logo: "img/ui_item/330.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
            timezero:{
                headerText: "Time Zero",
                star: false,
                img: "img/ui_item/236.png",  
                logo: "img/ui_item/236.png",  
                providersInside: {
                    nagd: "Оплата наличными",
                    plastikkartla: "Оплата пластиковой картой",
                },
            },
        },
                 
    },
    "E-pulqabi":{
        name:"phone",
        headerText: "E-кошелек",  
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
        headerText: "Страхование",  
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
                    nagd: "Оплата наличными",
                    seriya: "Оплата пластиковой картой",
                },
            },
            atasigorta:{
                headerText: "Ata Sığorta",
                star: false,
                img: "img/main/atasigorta.jpg",  
                logo: "img/main/atasigorta.jpg",    
                providersInside: {
                    nag: "Оплата наличными",
                    seriya: "Оплата пластиковой картой",
                },
            },
        },
                 
    },
    "Dyp":{
        name:"dyp",
        headerText: "ДПС",  
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
                    protokol: "Платите за протокол",
                    seriya: "Платите через серию",
                },
            },
            yuk:{
                headerText: "Yük",
                star: false,
                img: "img/main/yuk.jpg",  
                logo: "img/main/yuk.jpg",   
                providersInside: {
                    protokol: "Платите за протокол",
                    seriya: "Платите через серию",
                },
            },
        },
                 
    },
}



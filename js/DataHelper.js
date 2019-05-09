

if (!localStorage.globalData){
    localStorage.setItem("globalData",'{\
        "restorani": [\
        {\
            "id": 1,\
            "naziv": "Restoran 1",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Srpska hrana", "Italijanska hrana","Giros"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Beograd",\
            "slike": ["restoran1.jpg", "restoran2.jpg", "restoran3.jpg"],\
            "jela": [\
            {\
                "naziv": "Hamburger",\
                "cena": 320,\
                "slika": "hamburger.png"\
            },\
            {\
                "naziv": "Giros",\
                "cena": 400,\
                "slika": "giros.jpg"\
            }\
            ],\
            "ocene": [5, 5, 3, 5, 4, 2]\
        },\
        {\
            "id": 2,\
            "naziv": "Saradis",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Srpska hrana", "Italijanska hrana"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Beograd",\
            "slike": ["restoran1.jpg", "restoran2.jpg", "restoran3.jpg"],\
            "jela": [{\
                "naziv": "Hamburger",\
                "cena": 320,\
                "slika": "hamburger.png"\
            }],\
            "ocene": [1]\
        },\
        {\
            "id": 3,\
            "naziv": "Test",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Srpska hrana", "Italijanska hrana"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Beograd",\
            "slike": ["restoran1.jpg", "restoran2.jpg", "restoran3.jpg"],\
            "jela": [{\
                "naziv": "Hamburger",\
                "cena": 320,\
                "slika": "hamburger.png"\
            }],\
            "ocene": [2]\
        },\
        {\
            "id": 4,\
            "naziv": "Mangiare",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Srpska hrana", "Italijanska hrana"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Novi Sad",\
            "slike": ["restoran1.jpg", "restoran2.jpg", "restoran3.jpg"],\
            "jela": [{\
                "naziv": "Hamburger",\
                "cena": 320,\
                "slika": "hamburger.png"\
            }],\
            "ocene": [5, 5, 3, 4, 2]\
        }\
        ]\
    }');
}


function dohvatiRestorane(){

    return JSON.parse(localStorage.globalData).restorani;
}

function dohvatiOcenu(res){

    var sum = 0;

    for (var i=0; i<res.ocene.length; i++) sum += res.ocene[i];

    return Math.round((sum / res.ocene.length) * 100) / 100;;

}

function dodajOcenu(id, ocena){

    var globalData = JSON.parse(localStorage.globalData);

    for (var i = 0 ; i <globalData.restorani.length; i++){
        if (globalData.restorani[i].id == id){
            globalData.restorani[i].ocene.push(ocena);
            break;
        }
    }

    localStorage.setItem("globalData", JSON.stringify(globalData));
}
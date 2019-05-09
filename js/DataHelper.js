
var globalData = JSON.parse('{\
    "restorani": [\
    {\
        "id": 1,\
        "naziv": "Restoran 1",\
        "opis": "sadsadadadadasdsadadsadas",\
        "tipovi": ["Srpska hrana", "Italijanska hrana","Giros"],\
        "adresa": "Toplicka 22, Beograd",\
        "grad": "Beograd",\
        "slike": ["restoranlogo.png", "restoran1-2.png", "restoran1-3.png"],\
        "jela": [{\
            "naziv": "Hamburger",\
            "cena": 320,\
            "slika": "hamburger.png"\
        }],\
        "ocene": [5, 5, 3, 5, 4, 2]\
    },\
    {\
        "id": 2,\
        "naziv": "Saradis",\
        "opis": "sadsadadadadasdsadadsadas",\
        "tipovi": ["Srpska hrana", "Italijanska hrana"],\
        "adresa": "Toplicka 22, Beograd",\
        "grad": "Beograd",\
        "slike": ["restoranlogo.png", "restoran1-2.png", "restoran1-3.png"],\
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
        "opis": "sadsadadadadasdsadadsadas",\
        "tipovi": ["Srpska hrana", "Italijanska hrana"],\
        "adresa": "Toplicka 22, Beograd",\
        "grad": "Beograd",\
        "slike": ["restoranlogo.png", "restoran1-2.png", "restoran1-3.png"],\
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
        "opis": "sadsadadadadasdsadadsadas",\
        "tipovi": ["Srpska hrana", "Italijanska hrana"],\
        "adresa": "Toplicka 22, Beograd",\
        "grad": "Novi Sad",\
        "slike": ["restoranlogo.png", "restoran1-2.png", "restoran1-3.png"],\
        "jela": [{\
            "naziv": "Hamburger",\
            "cena": 320,\
            "slika": "hamburger.png"\
        }],\
        "ocene": [5, 5, 3, 4, 2]\
    }\
    ]\
}');


function dohvatiRestorane(){

    return globalData.restorani;
}

function dohvatiOcenu(res){

    var sum = 0;

    for (i=0; i<res.ocene.length; i++) sum += res.ocene[i];

    return sum / res.ocene.length;

}
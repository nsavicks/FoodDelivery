
var globalData = JSON.parse('{\
    "restorani": [\
    {\
        "id": 1,\
        "naziv": "Restoran 1",\
        "opis": "sadsadadadadasdsadadsadas",\
        "tipovi": ["Srpska hrana", "Italijanska hrana"],\
        "adresa": "Toplicka 22, Beograd",\
        "grad": "Beograd",\
        "slike": ["restoran1-1.png", "restoran1-2.png", "restoran1-3.png"],\
        "jela": [{\
            "naziv": "Hamburger",\
            "cena": 320,\
            "slika": "hamburger.png"\
        }],\
        "ocene": [5, 5, 3, 5, 4, 2]\
    }\
    ]\
}');


function dohvatiRestorane(){

    return globalData;
}
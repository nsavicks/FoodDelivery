

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
            "naziv": "Chinese food",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Kineska hrana"],\
            "adresa": "Maticanska 22, Kruševac",\
            "grad": "Kruševac",\
            "slike": ["restoran1.jpg", "restoran2.jpg"],\
            "jela": [\
            {\
                "naziv": "Integralni susi",\
                "cena": 400,\
                "slika": "susiintegralni.jpg"\
            },\
			{\
                "naziv": "Susi",\
                "cena": 300,\
                "slika": "susi.jpg"\
            }\
            ],\
            "ocene": [5, 3, 3, 5, 4, 2]\
        },\
        {\
            "id": 3,\
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
            "id": 4,\
            "naziv": "Kod domacina",\
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
            "id": 5,\
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
        },\
		{\
            "id": 6,\
            "naziv": "Dak",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Srpska hrana"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Beograd",\
            "slike": ["restoran1.jpg", "restoran2.jpg"],\
            "jela": [\
            {\
                "naziv": "Karadjordjeva snicla",\
                "cena": 400,\
                "slika": "karadjordjeva.jpg"\
            },\
			{\
				"naziv": "Punjena pljeskavica",\
                "cena": 400,\
                "slika": "punjena.jpg"\
            }],\
            "ocene": [5, 5, 5, 5, 5, 5]\
        },\
		{\
            "id": 7,\
            "naziv": "Pizza BAR",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Italijanska hrana"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Beograd",\
            "slike": ["restoran1.jpg", "restoran2.jpg"],\
            "jela": [\
            {\
                "naziv": "Capricciosa pizza",\
                "cena": 400,\
                "slika": "capricciosa.jpg"\
            },\
			{\
				"naziv": "Vezuvio pizza",\
                "cena": 400,\
                "slika": "vezuvio.jpg"\
            },\
			{\
				"naziv": "Quattro formaggi",\
                "cena": 400,\
                "slika": "quattro.jpg"\
            },\
			{\
				"naziv": "Con prosciutto",\
                "cena": 400,\
                "slika": "conprosciutto.jpg"\
            }],\
            "ocene": [5, 5, 5, 5, 5, 5, 4, 4, 4]\
        },\
		{\
            "id": 8,\
            "naziv": "Menza 4. april",\
            "opis": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\
            "tipovi": ["Srpska hrana"],\
            "adresa": "Toplicka 22, Beograd",\
            "grad": "Beograd",\
            "slike": ["restoran1.jpg", "restoran2.jpg"],\
            "jela": [\
            {\
                "naziv": "Gulas",\
                "cena": 90,\
                "slika": "gulas.jpg"\
            },\
			{\
				"naziv": "Cufte u sosu",\
                "cena": 80,\
                "slika": "cufteusosu.jpg"\
            },\
			{\
				"naziv": "Teleca corba",\
                "cena": 100,\
                "slika": "corba.jpg"\
            },\
			{\
				"naziv": "Pileci batak",\
                "cena": 400,\
                "slika": "batak.jpg"\
            }],\
            "ocene": [5, 5, 5, 5, 5, 5, 4, 4, 4]\
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

    if (localStorage.getItem(id) != null){
        alert("Restoran je vec ocenjen!");
    }
    else{

        var globalData = JSON.parse(localStorage.globalData);

        for (var i = 0 ; i <globalData.restorani.length; i++){
            if (globalData.restorani[i].id == id){
                globalData.restorani[i].ocene.push(ocena);
                break;
            }
        }

        localStorage.setItem("globalData", JSON.stringify(globalData));
        localStorage.setItem(id, "");
        alert("Uspesno ste ocenili restoran!");
    }

    
}
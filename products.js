const products = [
  {
    "name": "Johnnie Walker Red Label",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 28.75
      }
    ],
    "note": "Confirma el tamaño de la botella al pedir.",
    "asset": "images/catalog/0.webp"
  },
  {
    "name": "Grant’s Triple Wood",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 18.54
      }
    ],
    "note": "",
    "asset": "images/product-1.png"
  },
  {
    "name": "Clan MacGregor",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 10.26
      }
    ],
    "note": "",
    "asset": "images/product-2.png"
  },
  {
    "name": "John Morris Red",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 13.0
      },
      {
        "size": "1 litro",
        "price": 15.0
      }
    ],
    "note": "Confirma presentación en tienda.",
    "asset": "images/catalog/3.gif",
    "imageScale": 1.85
  },
  {
    "name": "Black Owl",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 13.85
      }
    ],
    "note": "",
    "asset": "images/product-4.png"
  },
  {
    "name": "Black Castle",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 15.55
      }
    ],
    "note": "",
    "asset": "images/product-5.png"
  },
  {
    "name": "Old Times Red",
    "category": "whisky",
    "prices": [
      {
        "size": "1 litro",
        "price": 12.59
      }
    ],
    "note": "",
    "asset": "images/product-6.png"
  },
  {
    "name": "Howard",
    "category": "whisky",
    "prices": [
      {
        "size": "750 ml",
        "price": 10.73
      },
      {
        "size": "1 litro",
        "price": 12.31
      }
    ],
    "note": "",
    "asset": "images/catalog/7.png"
  },
  {
    "name": "San Miguel Gold",
    "category": "ron",
    "prices": [
      {
        "size": "750 ml",
        "price": 11.8
      },
      {
        "size": "375 ml",
        "price": 5.47
      }
    ],
    "note": "",
    "asset": "images/product-8.png"
  },
  {
    "name": "Abuelo Añejo",
    "category": "ron",
    "prices": [
      {
        "size": "750 ml",
        "price": 14.0
      }
    ],
    "note": "",
    "asset": "images/catalog/9.gif",
    "imageScale": 1.85
  },
  {
    "name": "Romanosky Neutro",
    "category": "vodka",
    "prices": [
      {
        "size": "750 ml",
        "price": 6.81
      }
    ],
    "note": "",
    "asset": "images/catalog/10.jpg"
  },
  {
    "name": "Russkaya",
    "category": "vodka",
    "prices": [
      {
        "size": "750 ml",
        "price": 11.95
      }
    ],
    "note": "",
    "asset": "images/product-11.png"
  },
  {
    "name": "El Charro Silver",
    "category": "tequila",
    "prices": [
      {
        "size": "750 ml",
        "price": 20.13
      }
    ],
    "note": "",
    "asset": "images/catalog/12.png",
    "imageScale": 1.4
  },
  {
    "name": "Espuela Agave Silver",
    "category": "tequila",
    "prices": [
      {
        "size": "750 ml",
        "price": 17.71
      }
    ],
    "note": "",
    "asset": "images/product-13.png"
  },
  {
    "name": "Zhumir Tradicional",
    "category": "aguardiente",
    "prices": [
      {
        "size": "350 ml",
        "price": 5.15
      }
    ],
    "note": "Se observan varias presentaciones; confirma volumen y precio.",
    "asset": "images/catalog/14.png",
    "imageScale": 1.15
  },
  {
    "name": "Zhumir Seco",
    "category": "aguardiente",
    "prices": [
      {
        "size": "700 ml",
        "price": 6.98
      }
    ],
    "note": "",
    "asset": "images/catalog/15.jpg"
  },
  {
    "name": "Cristal",
    "category": "aguardiente",
    "prices": [
      {
        "size": "750 ml",
        "price": 6.84
      }
    ],
    "note": "Presentación tradicional; etiqueta y volumen por confirmar.",
    "asset": "images/catalog/16.jpg"
  },
  {
    "name": "Cristal Suave",
    "category": "aguardiente",
    "prices": [
      {
        "size": "750 ml",
        "price": 7.77
      }
    ],
    "note": "",
    "asset": "images/product-17.png"
  },
  {
    "name": "Zhumir Tamarindo Caribeño y Piña Hawaiana",
    "category": "saborizados",
    "prices": [
      {
        "size": "700 ml",
        "price": 4.75
      }
    ],
    "note": "Tamarindo y piña en una misma mezcla.",
    "asset": "images/catalog/18.png"
  },
  {
    "name": "Zhumir Naranjilla Amazónica",
    "category": "saborizados",
    "prices": [
      {
        "size": "700 ml",
        "price": 6.48
      }
    ],
    "note": "",
    "asset": "images/catalog/19.png"
  },
  {
    "name": "Zhumir Mango, Passion Fruit y Frutos Cítricos",
    "category": "saborizados",
    "prices": [
      {
        "size": "700 ml",
        "price": 4.99
      }
    ],
    "note": "Etiqueta parcialmente visible; confirma la variante.",
    "asset": "images/catalog/20.png",
    "imageScale": 1.36
  },
  {
    "name": "Zhumir Celebrity Green Apple",
    "category": "saborizados",
    "prices": [],
    "note": "Licor sabor manzana verde, edición sour.",
    "asset": "images/catalog/21.png"
  },
  {
    "name": "Zhumir edición Ecuador",
    "category": "saborizados",
    "prices": [],
    "note": "Edición especial; confirma volumen y variante.",
    "asset": "images/catalog/22.png",
    "imageScale": 1.12
  },
  {
    "name": "Zhumir Durazno Guaytambo",
    "category": "saborizados",
    "prices": [{ "size": "700 ml", "price": 4.99 }],
    "note": "Sabor a durazno.",
    "asset": "images/catalog/43.png"
  },
  {
    "name": "Zhumir Pink Watermelon Citrus",
    "category": "saborizados",
    "prices": [{ "size": "700 ml", "price": 4.99 }],
    "note": "Sabor a sandía y cítricos.",
    "asset": "images/catalog/44.png"
  },
  {
    "name": "Zhumir Coco Tropical",
    "category": "saborizados",
    "prices": [{ "size": "700 ml", "price": 4.99 }],
    "note": "Sabor a coco tropical.",
    "asset": "images/catalog/45.png"
  },
  {
    "name": "Koslov Naranja",
    "category": "saborizados",
    "prices": [],
    "note": "Licor sabor naranja.",
    "asset": "images/catalog/23.png"
  },
  {
    "name": "Baldoré Frutilla",
    "category": "cocteles",
    "prices": [],
    "note": "600 ml · bebida preparada de frutilla.",
    "asset": "images/catalog/24.png"
  },
  {
    "name": "Venetto Tinto de Cereza",
    "category": "cocteles",
    "prices": [
      {
        "size": "1.5 litros",
        "price": 2.75
      }
    ],
    "note": "",
    "asset": "images/catalog/25.jpg"
  },
  {
    "name": "Tres Reyes Tinto de Verano",
    "category": "cocteles",
    "prices": [
      {
        "size": "750 ml",
        "price": 4.5
      }
    ],
    "note": "Confirma volumen para cotizar la presentación correcta.",
    "asset": "images/catalog/26.png"
  },
  {
    "name": "Anthony (sabor surtido)",
    "category": "vino",
    "prices": [
      {
        "size": "750 ml",
        "price": 7.75
      }
    ],
    "note": "Etiqueta trasera visible; falta confirmar el sabor.",
    "asset": "images/catalog/27.gif",
    "imageScale": 2.15
  },
  {
    "name": "Miraflores Cabernet Sauvignon / Merlot",
    "category": "vino",
    "prices": [
      {
        "size": "750 ml",
        "price": 5.32
      }
    ],
    "note": "",
    "asset": "images/catalog/28-clean.png"
  },
  {
    "name": "Miraflores Blanco",
    "category": "vino",
    "prices": [],
    "note": "Confirma la variedad de vino blanco.",
    "asset": "images/catalog/29.jpg"
  },
  {
    "name": "Santa Lucía Blanco",
    "category": "vino",
    "prices": [
      {
        "size": "1 litro",
        "price": 5.75
      }
    ],
    "note": "",
    "asset": "images/product-30.png"
  },
  {
    "name": "Santa Lucía Tinto",
    "category": "vino",
    "prices": [
      {
        "size": "1 litro",
        "price": 5.75
      }
    ],
    "note": "",
    "asset": "images/product-31.png"
  },
  {
    "name": "Summer",
    "category": "vino",
    "prices": [],
    "note": "Vino dulce. Confirma la presentación disponible por WhatsApp.",
    "asset": "images/catalog/32.png"
  },
  {
    "name": "Pilsener Litro",
    "category": "cerveza",
    "prices": [
      {
        "size": "1 litro",
        "price": 2.5
      }
    ],
    "note": "Botella de 1 litro. El valor del envase retornable se consulta en tienda.",
    "asset": "images/catalog/33.png"
  },
  {
    "name": "Club Verde Grande",
    "category": "cerveza",
    "prices": [
      {
        "size": "850 ml",
        "price": 2.75
      }
    ],
    "note": "Botella grande de 850 ml. El valor del envase retornable se consulta en tienda.",
    "asset": "images/catalog/34.png"
  },
  {
    "name": "Pilsener Lata",
    "category": "cerveza",
    "prices": [
      {
        "size": "269 ml",
        "price": 1.0
      }
    ],
    "note": "Lata individual de 269 ml.",
    "asset": "images/catalog/35.png"
  },
  {
    "name": "Pilsener Lata",
    "category": "cerveza",
    "prices": [
      {
        "size": "355 ml",
        "price": 1.18
      }
    ],
    "note": "Lata individual de 355 ml.",
    "asset": "images/catalog/36.png"
  },
  {
    "name": "Pilsener Lata Grande",
    "category": "cerveza",
    "prices": [
      {
        "size": "473 ml",
        "price": 1.5
      }
    ],
    "note": "Lata individual de 473 ml.",
    "asset": "images/catalog/37.png"
  },
  {
    "name": "Club Verde Lata",
    "category": "cerveza",
    "prices": [
      {
        "size": "269 ml",
        "price": 1.2
      }
    ],
    "note": "Lata individual de 269 ml.",
    "asset": "images/catalog/38.png"
  },
  {
    "name": "Club Verde Lata",
    "category": "cerveza",
    "prices": [
      {
        "size": "355 ml",
        "price": 1.35
      }
    ],
    "note": "Lata individual de 355 ml.",
    "asset": "images/catalog/39.png"
  },
  {
    "name": "Club Verde Lata Grande",
    "category": "cerveza",
    "prices": [
      {
        "size": "473 ml",
        "price": 2.25
      }
    ],
    "note": "Lata individual de 473 ml.",
    "asset": "images/catalog/40.png"
  },
  {
    "name": "Corona Extra",
    "category": "cerveza",
    "prices": [
      {
        "size": "330 ml",
        "price": 2.4
      }
    ],
    "note": "Botella individual de 330 ml.",
    "asset": "images/catalog/41.jpg",
    "imageScale": 1.08
  },
  {
    "name": "Coronita",
    "category": "cerveza",
    "prices": [],
    "note": "Botella individual de 210 ml. Consulta el precio por WhatsApp.",
    "asset": "images/catalog/42.jpg"
  }
];

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
    "flavors": ["Red", "Black", "Blue"],
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
      },
      {
        "size": "200 ml",
        "price": 4.75
      }
    ],
    "note": "",
    "asset": "images/product-5.png"
  },
  {
    "name": "John Morris Black",
    "category": "whisky",
    "prices": [
      { "size": "750 ml", "price": 12.79 },
      { "size": "1 litro", "price": 15.75 }
    ],
    "note": "Whisky de perfil intenso y ahumado.",
    "asset": "https://distribuidorariofrio.com/storage/images-productos/producto_5736_69b5d180a83ce.jpg"
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
    "flavors": ["Clásico", "Blueberries y guaraná", "Strawberry", "Cherry y lime"],
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
    "name": "Tequila Azteca Silver",
    "category": "tequila",
    "prices": [{ "size": "800 ml", "price": 16.90 }],
    "note": "Tequila silver para shots y cócteles.",
    "flavors": ["Silver", "Gold"],
    "asset": "https://images.gotoliquorstore.com/product/1000023468/71b97c35-0e03-46ae-a607-109d0632d3b0_510_m.jpg"
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
    "category": "vino",
    "prices": [],
    "note": "600 ml · vino de frutas.",
    "flavors": ["Frutilla", "Durazno", "Manzana", "Uva", "Cereza", "Sandía", "Sangría"],
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
  },
  {
    "name": "Zhumir Hot Tamarindo Picante",
    "category": "saborizados",
    "prices": [{ "size": "750 ml", "price": 7.99 }],
    "note": "Sabor dulce, cítrico y picante.",
    "asset": "images/new-products/zhumir-hot-tamarindo.png"
  },
  {
    "name": "Zhumir Piña Colada",
    "category": "cocteles",
    "prices": [{ "size": "700 ml", "price": 8.56 }],
    "note": "Cóctel con alcohol listo para servir.",
    "asset": "https://static.wixstatic.com/media/5228a7_ea0a8c1ead95401a8c12eb0f25a29b88~mv2.png/v1/fill/w_1665,h_5000,al_c,q_95/5228a7_ea0a8c1ead95401a8c12eb0f25a29b88~mv2.png"
  },
  {
    "name": "Catador Tinto",
    "category": "vino",
    "prices": [{ "size": "750 ml", "price": 7.99 }],
    "note": "Vino tinto chileno.",
    "asset": "https://b4bc3ef19e.cbaul-cdnwnd.com/bff51f112a29eeb032f59b80470ac99b/200000046-9d6089d60b/catador-tinto.jpg?ph=b4bc3ef19e"
  },
  {
    "name": "Fray León Vasijas Cabernet Sauvignon",
    "category": "vino",
    "prices": [{ "size": "750 ml", "price": 7.99 }],
    "note": "Cabernet Sauvignon chileno.",
    "asset": "https://images.tcdn.com.br/img/img_prod/1089127/180_fray_leon_cabernet_sauvignon_2020_750_ml_6_1_a521d9ecd7f688e71886ea095134252a.jpg"
  },
  {
    "name": "Trópico Cereza",
    "category": "saborizados",
    "prices": [{ "size": "750 ml", "price": 5.35 }],
    "note": "Licor sabor cereza, 15% vol.",
    "asset": "https://chopiecuador.vtexassets.com/arquivos/ids/162103/51vijVayiH90br0QODoT.png?v=638842189164500000"
  },
  {
    "name": "Special Queen",
    "category": "whisky",
    "prices": [{ "size": "700 ml", "price": 8.50 }],
    "note": "Licor seco tipo whisky.",
    "asset": "https://eurosuper.vtexassets.com/arquivos/ids/168320/7708965631934.jpg?v=638237428629830000"
  },
  {
    "name": "Romanosky Party Strawberry",
    "category": "vodka",
    "prices": [{ "size": "750 ml", "price": 8.00 }],
    "note": "Vodka saborizado.",
    "flavors": ["Strawberry", "Blueberries y guaraná", "Cherry y lime"],
    "asset": "images/new-products/romanosky-party-strawberry.png"
  },
  {
    "name": "Ron Ronero",
    "category": "ron",
    "prices": [{ "size": "750 ml", "price": 7.50 }],
    "note": "Ron auténtico, 32% vol.",
    "asset": "https://static.wixstatic.com/media/5228a7_aceda3ae7b124413a95aa3d3792822ef~mv2.png/v1/fill/w_394,h_1200,al_c,q_90/5228a7_aceda3ae7b124413a95aa3d3792822ef~mv2.png"
  },
  {
    "name": "Cherish Crema de Whisky",
    "category": "cocteles",
    "prices": [{ "size": "750 ml", "price": 10.00 }],
    "note": "Cóctel cremoso de whisky, 14% vol.",
    "asset": "https://jrrmedellin.com/cdn/shop/files/7708965631972.webp?v=1738267226"
  },
  {
    "name": "Club Premium Botella",
    "category": "cerveza",
    "prices": [{ "size": "330 ml", "price": 1.25 }],
    "note": "Botella individual.",
    "asset": "https://tofuu.getjusto.com/orioneat-local/resized2/CkdPtbxpLtM3TtCFK-1020-x.webp"
  },
  {
    "name": "Switch Berry Cool",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel sabor frutos rojos.",
    "flavors": ["Berry Cool", "Pistacho Lime", "Pistacho Rose", "Bongo Bongo Zero", "Harta Demencia Zero", "Tamarindo Uva Sour", "Bongo Bongo", "Maracuyá Madness", "Harta Demencia", "Daiquiri Shark"],
    "asset": "https://static.wixstatic.com/media/b4e640_a9a1d0614a4047b993969a38596f13fe~mv2.png/v1/fill/w_980,h_928,al_c,q_90/RECURSO-berriepng.png"
  },
  {
    "name": "Switch Pistacho Lime",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Sabor pistacho y lima.",
    "asset": "https://static.wixstatic.com/media/b4e640_3f2f4c8c7bbe43089e96bd1d08c87aac~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/pistacho-lime.png"
  },
  {
    "name": "Switch Pistacho Rose",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Variante pistacho rose.",
    "asset": "https://static.wixstatic.com/media/b4e640_b67f824ee84f4d0db3855cc8a699e34a~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/oistacho-rose.png"
  },
  {
    "name": "Switch Bongo Bongo Zero",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Vodka con agua tónica, sin azúcar.",
    "asset": "https://static.wixstatic.com/media/b4e640_87677b12a2b547b2b18191dae9985431~mv2.png/v1/fill/w_980,h_928,al_c,q_90/BONGO-ZERO.png"
  },
  {
    "name": "Switch Harta Demencia Zero",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Variante ligera sin azúcar.",
    "asset": "https://static.wixstatic.com/media/b4e640_c309bdcd1cf6418c8a085550c34e4dd7~mv2.png/v1/fill/w_980,h_928,al_c,q_90/HARTA-DEMENCIA-w.png"
  },
  {
    "name": "Switch Tamarindo Uva Sour",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Tamarindo, uva cítrica y tequila blanco.",
    "asset": "https://static.wixstatic.com/media/b4e640_adf9921225f94a3a9a63746d21a05732~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/tamarindo-.png"
  },
  {
    "name": "Switch Bongo Bongo",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel de vodka sabor frutos exóticos.",
    "asset": "https://static.wixstatic.com/media/b4e640_260ffe80cb8846dfabc0bd7139f2e26e~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/bongo-bongo-.png"
  },
  {
    "name": "Switch Maracuyá Madness",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel sabor maracuyá.",
    "asset": "https://static.wixstatic.com/media/b4e640_5b77157c84e243469f827dc7350d7b6e~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/maracuya.png"
  },
  {
    "name": "Switch Harta Demencia",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel listo para compartir.",
    "asset": "https://static.wixstatic.com/media/b4e640_b9448d85c2e9403c8cbf9b3c59c9cdb2~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/harta-.png"
  },
  {
    "name": "Switch Daiquiri Shark",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel sabor frutos tropicales.",
    "asset": "https://static.wixstatic.com/media/b4e640_79a06e0005454d6ea68d715c70c8b05b~mv2.png/v1/fill/w_703,h_1152,al_c,q_90/daiqiri.png"
  },
  {
    "name": "Cubata Berrylicious",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel de vodka sabor frutos rojos.",
    "flavors": ["Berrylicious", "Guaraná", "Maracuvibes", "Mora Azul"],
    "asset": "https://d2o812a6k13pkp.cloudfront.net/Productos/40535252_0120231109180229.jpg"
  },
  {
    "name": "Cubata Guaraná",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel de vodka sabor guaraná.",
    "asset": "https://d2o812a6k13pkp.cloudfront.net/Productos/40589389_0120241220120922.jpg"
  },
  {
    "name": "Cubata Maracuvibes",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel de vodka sabor maracuyá.",
    "asset": "https://www.supermercadosantamaria.com/documents/10180/10504/186204975_G.jpg"
  },
  {
    "name": "Cubata Mora Azul",
    "category": "cocteles",
    "prices": [{ "size": "1.5 litros", "price": 3.00 }],
    "note": "Cóctel de vodka sabor mora azul.",
    "asset": "images/new-products/cubata-mora-azul.png"
  }
];

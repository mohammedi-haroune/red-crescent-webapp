import uuid from 'uuid/v1';
export const hospitals = [
  {
    id: uuid(),
    title:`CHU Mustapha Pacha`,
    location: `36°45'46.3"N 3°03'11.4"E`,
    // imageUrl: `https://www.chu-mustapha.dz/wp-content/uploads/2015/07/hopital-642x300.jpg`,
    imageUrl: `pictures/hospitals/CHU_Mustapha_Pacha.jpg`
  },
  {
    id: uuid(),
    title:`CHU Beni Messous`,
    location: `36°46'49.2"N 2°58'53.0"E`,
    // imageUrl: `https://upload.wikimedia.org/wikipedia/commons/9/99/CHU_Beni_Messous_%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89_-_panoramio_%283%29.jpg`
    imageUrl: `pictures/hospitals/CHU_Beni_Messous.jpg`
  },
  {
    id: uuid(),
    title:`CHU Bab El Oued`,
    // imageUrl: `https://upload.wikimedia.org/wikipedia/commons/5/57/Hopital_Mohamed_Lamine_Debaghine_%C3%A0_Alger.jpg`,
    imageUrl: `pictures/hospitals/CHU_Bab_El_Oued.jpg`,
    location: `36°47'36.3"N 3°03'02.5"E`
  },
  {
    id: uuid(),
    title:`EHS Salim Zemirli`,
    // imageUrl: `https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/39162712_519421175174545_7685812511261589504_o.jpg?_nc_cat=100&_nc_ohc=aRczq-r9z0sAQleCHo7rAwhM66s-QmzP9-7bvIyYcVmeMpZSR-erEATOg&_nc_ht=scontent-mad1-1.xx&oh=20d35f20f4826a616469c64a1ad5ba8e&oe=5E7FEC16`,
    imageUrl: `pictures/hospitals/EHS_Salim_Zemirli.jpg`,
    location: `36°47'36.3"N 3°03'02.5"E`
  },
  {
    id: uuid(),
    title:`EHS Dr Madouche (CNMS)`,
    // imageUrl: `https://lh3.googleusercontent.com/p/AF1QipM0OdgQrJIJturhn4vytJMSJdLJB1Y-ZHwdM3wW=s1600-h380`,
    imageUrl: `pictures/hospitals/EHS_CNMS.jpg`,
    location: `36°46'05.0"N 3°00'01.2"E`
  },
  {
    id: uuid(),
    title:`CHU Douera`,
    // imageUrl: `https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/s960x960/62783938_2348426542112483_8161708876366872576_o.jpg?_nc_cat=106&_nc_ohc=3gjzgRlPyBgAQlm-7Xq0iIBZAvDghwXWTJnkFL4RQve5xGJ67gQql1SYw&_nc_ht=scontent-mad1-1.xx&oh=2d20ba6ea5db4be29adfc01c090da815&oe=5E4F4A49`,
    imageUrl: `pictures/hospitals/CHU_Douera.jpg`,
    location: `36°39'58.7"N 2°56'34.1"E`
  },
  {
    id: uuid(),
    title:`EHS Ait Idir`,
    // imageUrl: `http://www.alger-city.com/pics/ville/sante/hopital-ali-ait-idir/hopital-neurochirurgie-ali-ait-idir-casbah-alger.jpg`,
    imageUrl: `pictures/hospitals/EHS_Ali_Ait_Idir.jpg`,
    location: `36°47'13.6"N 3°03'29.7"E`
  },
  {
    id: uuid(),
    title:`EPH El Biar (Birtraria)`,
    // imageUrl: `https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/p960x960/12240912_138925849801153_2814322703766458871_o.jpg?_nc_cat=111&_nc_ohc=CpYuTgpA38sAQlSXDEIuaF4Ffj8XcAyuf9wXkTHPbxPOoen5Iif2yUF9w&_nc_ht=scontent-mad1-1.xx&oh=392050154e07d8b5e7a6f1776a643e10&oe=5E4E82DB`,
    imageUrl: `pictures/hospitals/EPH_Birtraria.jpg`,
    location: `36°46'21.6"N 3°02'24.3"E`
  },
  {
    id: uuid(),
    title:`EPH Kouba`,
    // imageUrl: `https://upload.wikimedia.org/wikipedia/commons/f/ff/Photo_hopital_kouba_26052016.jpg`,
    imageUrl: `pictures/hospitals/EPH_Kouba.jpg`,
    location: `36°43'32.7"N 3°05'14.0"E`
  },
  {
    id: uuid(),
    title:`EPH Bologhine`,
    imageUrl: `https://cdnfr2.img.sputniknews.com/images//104213/97/1042139753.jpg`,
    imageUrl: `pictures/hospitals/EPH_Bologhine.jpg`,
    location: `36°48'38.7"N 2°58'47.2"E`
  },
  {
    id: uuid(),
    title:`EPH El Harrach (Belfort)`,
    // imageUrl: `https://scontent-mrs2-2.xx.fbcdn.net/v/t1.0-9/26731367_400495023727496_8203033252755700365_n.jpg?_nc_cat=108&_nc_ohc=gc8xaXof01YAQmt6w8zL9nLmmI9yDvcJ-NeuwhzBjRkpZX_OWXKQGGK9A&_nc_ht=scontent-mrs2-2.xx&oh=adcf24cde177604e21e710571d7c587c&oe=5E4A2613`,
    imageUrl: `pictures/hospitals/EPH_Belfort.jpg`,
    location: `36°43'13.6"N 3°08'51.9"E`
  },
  {
    id: uuid(),
    title:`EPH Ain Taya`,
    // imageUrl: `https://scontent-mrs2-2.xx.fbcdn.net/v/t31.0-8/11393222_1592642771013314_9156192588752806168_o.jpg?_nc_cat=100&_nc_ohc=8mxLuIdb3J0AQnGxmXifmwsRFpObmxf-OmQDFKlnw4XWtGgRMnG6uzfNQ&_nc_ht=scontent-mrs2-2.xx&oh=2811afbfb09b39cdf16a1ec02b812b25&oe=5E42B4C6`,
    imageUrl: `pictures/hospitals/EPH_Ain_Taya.jpg`,
    location: `36°47'22.2"N 3°17'46.4"E`
  },
  {
    id: uuid(),
    title:`EPH Zeralda`,
    // imageUrl: `https://live.staticflickr.com/4790/25880662817_c516b4a928_b.jpg`,
    imageUrl: `pictures/hospitals/EPH_Zeralda.jpg`,
    location: `36°42'00.8"N 2°50'34.2"E`
  },
  {
    id: uuid(),
    title:`EPH Rouiba`,
    // imageUrl: `https://2.bp.blogspot.com/-ef4dOPhRwPc/Vsd6FYdWoLI/AAAAAAAATic/qTt-kBOvIqI/s1600/Hospital-ROUIBA.jpg`,
    imageUrl: `pictures/hospitals/EPH_Rouiba.jpg`,
    location: `36°44'08.2"N 3°17'08.5"E`
  },
  {
    id: uuid(),
    title:`EHS Abderrahmani (Bir Mourad Rais)`,
    // imageUrl: `https://lh3.googleusercontent.com/p/AF1QipONPjU2Tm0e1WErGgi2G1ShBawzhjhACBPx2jUx=s1600-w400`,
    imageUrl: `pictures/hospitals/EHS_Abderrahmani.jpg`,
    location: `36°44'03.0"N 3°03'11.9"E`
  },
  {
    id: uuid(),
    title:"CHU Husein dey (Parnet)",
    // imageUrl: `https://scontent-mad1-1.xx.fbcdn.net/v/t31.0-8/1400827_482994668475020_775300573_o.jpg?_nc_cat=106&_nc_ohc=hgo3p8MqzwkAQlaazQNxM4DFRi_gptptgRXk4W-SUmJT9doQNO5n9mrpg&_nc_ht=scontent-mad1-1.xx&oh=01fb9ed3c508d6187a146630f59a3943&oe=5E4F6F40`,
    imageUrl: `pictures/hospitals/CHU_Parnet.jpg`,
    location: `36°44'09.2"N 3°06'16.1"E`
  }
];

// 1.Creo array con i dati

const infoPersone= [

  {
    nome: 'Wayne Barnett',
    ruolo:'Founder & CEO',
    image:'wayne-barnett-founder-ceo.jpg'
  },

  {
    nome:'Angela Caroll',
    ruolo:'	Chief Editor',
    image:'	angela-caroll-chief-editor.jpg'
  },

  {
    nome:'Walter Gordon',
    ruolo:'	Office Manager',	image:'walter-gordon-office-manager.jpg'
  },

  {
    nome:'Angela Lopez',
    ruolo:'Social Media Manager',	
    image:'angela-lopez-social-media-manager.jp'
  },

  {
    nome:'Scott Estrada',
    ruolo:'	Developer',
    image:'	scott-estrada-developer.jpg'
  },

  {
    nome:'Barbara Ramos'	,
    ruolo:'Graphic Designer',
    image:'barbara-ramos-graphic-designer.jpg'
  }
]

// 2.Faccio un ciclo per stampare in console i dati

for (let i = 0; i < infoPersone.length; i++) {
  let stringa = "nome: " + infoPersone[i].nome+ " ruolo: "+  infoPersone[i].ruolo + " image: " + infoPersone[i].image;
  console.log(stringa);
  document.getElementById("dati-persone").innerHTML+=`<h2>${stringa}</h2>`;

}


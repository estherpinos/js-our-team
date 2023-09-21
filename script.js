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
    image:'angela-lopez-social-media-manager.jpg'
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
  let card = `
  <div class="card text-center col-4" >
    <img src="img/${infoPersone[i].image}" class="card-img-top" alt="">
      <div class="card-body text-center ">
           <h5 class="card-title">${infoPersone[i].nome}</h5>
           <p class="card-text">${infoPersone[i].ruolo}</p>
      </div>
  </div>`;

  document.getElementById(`dati-persone`).innerHTML+=card;


 
}


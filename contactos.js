let listaDeContactos = [
    "Mariana Morales",
    "Jorge Fonseca",
    "Andrea Ortega"
];


function agregarContacto (listaDeContactos){
    listaDeContactos.push ("Alicia Espinal")
    };

function borrarContacto (listaDeContactos){
    const indice = listaDeContactos.indexOf(listaDeContactos);
    if (indice !== -1) {
        listaDeContactos.splice(indice-1);
    }
};

function imprimirContactos() {
    console.log("Lista de contactos:");
    listaDeContactos.forEach((contacto, indice) => {
      console.log(`${indice + 1}. ${contacto}`);
    });
  }
  



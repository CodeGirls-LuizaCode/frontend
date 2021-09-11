function showProducts() {
  fetch('https://codegilrs.herokuapp.com/produtos')
    .then((response) => response.json())
    .then((data) => {
      let produtosGrid = document.getElementById('produtos');

      data.map((item) => {
        const { produto, descricao, image_prod, valor } = item;
        return (produtosGrid.innerHTML += `
          <div class="produtos"> <img src="${image_prod}" alt="${produto}'s thumbnail" /> <p>${produto}</p>
          <p>${descricao}</p>
          <p class="price">R$ ${valor}</p>
          <p><button class="button">Comprar</button> </p> </div>
      
          `);
      });
    })
    .catch((err) => {
      console.error('Produto não encontrado', err);
    });
}
showProducts();

const form = document.querySelector('#form');
const searchInput = document.querySelector('#search').value;
const apiUrl = 'https://codegilrs.herokuapp.com/produtos';
let produtosGrid = document.getElementById('produtos');

const fetchProducts = async (term) => {
  const response = fetch(`${apiUrl}/suggest/${term}`);
  const { data } = response.json();

    let newArray = data;
    
    if (searchInput !== "") {
      newArray = data.filter(
        (item) =>
          item.produtotoLowerCase().includes(searchInput)
      );
    }

    if (selectedCategoria !== "") {
      newArray = data.filter((movie) => movie.categoria === selectedCategoria);
    }

    return newArray;
}

searchInput.addEventListener('submit', event => {
  event.preventDefault();
  
  const searchTerm = searchInput.trim();

  if(!searchTerm) {
    produtosGrid.innerHTML = `<h1>Produto não Encontrado</h1>`

  }
  fetchProducts(searchTerm);
})

 function showProducts(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then((data) => {
      
      let produtosGrid = document.getElementById('produtos');
  
      data.map((item) => {
        const { id, title } = item;
        return (produtosGrid.innerHTML += `
          <div class="produtos"> <img src="${id}" alt="${title}'s thumbnail" /> <p>${title}</p>
          <p><button class="button">Comprar</button> </p> </div>
      
          `);
      })
    })
    .catch((err) => {
      console.error("Produto não encontrado", err);
    });  
}

  showProducts();
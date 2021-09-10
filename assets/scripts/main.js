 function showProducts(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then((data) => {
      
      let produtosGrid = document.getElementById('produtos');
  
      data.map((item) => {
        const { produto , descricao , image_prod } = item;
        return (produtosGrid.innerHTML += `
          <div class="produtos"> <img src="${image_prod}" alt="${produto}'s thumbnail" /> <p>${produto}</p>
          <p>${descricao}</p>
          <p><button class="button">Comprar</button> </p> </div>
      
          `);
      })
    })
    .catch((err) => {
      console.error("Produto não encontrado", err);
    });  
}

  showProducts();
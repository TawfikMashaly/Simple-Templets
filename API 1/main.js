async function getBrand() {
    const res = await fetch("https://dummyjson.com/products"),
          data = await res.json()
    return data.products
    // console.log(products)
}

async function displayBrands() {
    const products = await getBrand(),
          row = document.querySelector('.row')
    for(let val of products) {
        const div = document.createElement('div')
        div.className = "col-lg-4 col-md-6 col-smj-12 my-3"
        div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${val.thumbnail}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${val.title}</h5>
                        <p class="card-text">
                            ${val.description}    
                        </p>
                        <div>Price : ${val.price}</div> 
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> 
                `;
                row.appendChild(div)
    }
        
}
displayBrands();
let tbody = document.querySelector("tbody")

function getAllProducts() {
    fetch("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
    .then(res => res.json())
    .then( data => data.forEach( (item) => tbody.innerHTML += row(item) ))
}

getAllProducts()


function row(item) {
    return ` <tr>
    <td><img class="image-site" width="30" src="${item.product.image}" alt=""></td>
    <th class="name-site" >${item.product.name}</th>  
    <th > <button class="btnmimateba"  onclick="miumate(${item.product.id}, ${item.product.price}, ${item.quantity})"> + </button> ${item.quantity} <button class="btngamokleba"> - </button></th>   
    <td class="price-site">${item.product.price}₾</td>
    <td class="quantity-site">${item.quantity * item.product.price}</td>
    <td><button class="btn2" onclick="deleteFood(${item.product.id})"> Remove </button> </td>
  </tr>`
}








function miumate(price,id,quantity) {
    quantity++
    let cartInfo = {
        "quantity": quantity,
        "price": price,
        "productId": id
    }

    fetch("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", {
        method: "PUT",
        headers: {
            accept: "*/*",
            'Content-Type' : " application/json"
        },
        body: JSON.stringify(cartInfo)
    }).then( res => res.text() )
    .then(() => {
        tbody.innerHTML = ""
        getAllProducts()
    })
}


function deleteFood(id) {
    fetch(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`, {
        method: "DELETE",
        headers: {
            acccept: "*/*"
        }
    }).then( res => res.text() )
    .then( () => {
        tbody.innerHTML = ""
        getAllProducts()
    })
    
}
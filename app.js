let allFood = document.querySelector(".allFood")
 
fetch("https://restaurant.stepprojects.ge/api/Products/GetAll")
.then((pasuxi) => pasuxi.json())
.then((data) => {
    console.log(data);
    data.forEach((sawmeli) => allFood.innerHTML += card(sawmeli) )
} )
 
 
 
function card (sawmeli) {
    return `<div class="card" style="width: 18rem;">
    <div class="for-image">
    <img src="${sawmeli.image}" class="card-img-top" alt="...">
     </div>
    <div class="card-body">
      <h5 class="card-title">${sawmeli.name}</h5>
      <p class="card-text">spicness:${sawmeli.spiciness}</p>
      <div class="nuts">
          <p class="card-text">Nuts: <span class="red"> ${sawmeli.nuts}</span></p>
          <p class="card-text">Vegeterian: <span class="red"> ${sawmeli.vegeterian}</span></p>
      </div>
      <div class="second">
          <h5 class="price">$ ${sawmeli.price}</h5>
          <a href="#" class="btn btn-primary primary" onClick ="sawmeli(${sawmeli.id}, ${sawmeli.quantity}, ${sawmeli.price})">Add to cart</a>
      </div>  
    </div>
  </div>`
}
function sawmeli(id, quantity, price){
 
  fetch("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", {
    method: "POST",
    headers: {
        accept: "text/plain",
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        "quantity": quantity,
        "price": price,
        "productId": id
    })
}).then( pasuxi => pasuxi.json() )
.then( data => {
    console.log(data);
} )
 
}
console.log(card);
 
 
 
// fetch('https://restaurant.stepprojects.ge/api/Baskets/GetAll')
// .then( object => object.json())
// .then(data => {
//   console.log(data);
// })
// ეს fetch დაწერე მეორე გვერძე კალათის და მერე როგორც
// ქარდები გამოიტანე აქ ისე გამოიტანე იქაც ოღონდ იქ სხვა
// ინფორმაციები გინდა რა აი რაოდენობა და ფასი და ეგეთები
// მარა პრინციპი იგივეა, ისე პროდუქტების სიას ლოგავს რაც უკვე
// კალათაშია ეს ფეტჩი
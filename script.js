/* ROOMS */

function showRoom(type){

let img = document.getElementById("roomImg")
let price = document.getElementById("roomPrice")

if(type === "deluxe"){img.src="https://images.unsplash.com/photo-1566665797739-1674de7a421a"
price.innerHTML="Deluxe Room — ₹8,000 / night"
}

if(type === "family"){
img.src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
price.innerHTML="Family Room — ₹5,000 / night"
}

if(type === "suite"){
img.src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
price.innerHTML="Executive Suite — ₹10,000 / night"
}

}




/* FOOD */

function showFood(type){

let img = document.getElementById("foodImg")
let price = document.getElementById("foodPrice")

if(type === "italian"){
img.src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=900"
price.innerHTML="Italian Special — ₹799"
}

if(type === "south"){
img.src="https://images.unsplash.com/photo-1630383249896-424e482df921"
price.innerHTML="South Indian Meal — ₹349"
}

if(type === "chinese"){
img.src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
price.innerHTML="Chinese Combo — ₹599"
}

}



/* SERVICES */

function showService(type){

let img = document.getElementById("serviceImg")
let price = document.getElementById("servicePrice")

if(type === "pool"){
img.src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc"
price.innerHTML="Swimming Pool Access — ₹499"
}

if(type === "spa"){
img.src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
price.innerHTML="Luxury Spa Package — ₹2,499"
}

if(type === "dining"){
img.src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
price.innerHTML="Fine Dining — ₹1,299"
}

}
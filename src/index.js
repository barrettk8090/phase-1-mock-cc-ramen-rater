fetch("http://localhost:3000/ramens")
.then((r) => r.json())
.then(ramens => {
    ramens.forEach((ramen => getRamenImages(ramen)))
    addRamenToMain(ramens[0]);
}
)

function getRamenImages(ramen){
    const mainMenu = document.querySelector("#ramen-menu");
    const ramenImage = document.createElement("img");
    const button = document.createElement("button")

    mainMenu.appendChild(ramenImage);
    mainMenu.appendChild(button);
    button.style.backgroundColor = "darkBlue";
    button.textContent = "🗑️"
    button.style.padding = "14px";
    
    ramenImage.src = ramen.image;

    ramenImage.addEventListener("click", function(){
        addRamenToMain(ramen);
    })
    
    button.addEventListener("click", function() {
        ramenImage.remove();
        button.remove();
    })
}

function addRamenToMain(ramen){
    const detailImage = document.querySelector(".detail-image");
    const name = document.querySelector(".name");
    const restaurant = document.querySelector(".restaurant");
    const rating = document.querySelector("#rating-display");
    const comment = document.querySelector("#comment-display");

    detailImage.src = ramen.image;
    name.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment;

}

const form = document.querySelector("#new-ramen");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameValue = e.target["new-name"].value
    let restaurantValue = e.target["new-restaurant"].value;
    let imageValue = e.target["new-image"].value;
    let ratingValue = e.target["new-rating"].value;
    let commentValue = e.target["new-comment"].value;

    let newRamen = {
        name: nameValue,
        restaurant: restaurantValue,
        image: imageValue,
        rating: ratingValue,
        comment: commentValue,
    }
    getRamenImages(newRamen);

    e.target.reset();
})

const editForm = document.querySelector("#edit-ramen");

editForm.addEventListener("submit", function(e){
    e.preventDefault();

    const rating = document.querySelector("#rating-display");
    const comment = document.querySelector("#comment-display");

    let ratingValue = e.target["new-rating"].value;
    let commentValue = e.target["new-comment"].value;

    rating.textContent = ratingValue;
    comment.textContent = commentValue;
})


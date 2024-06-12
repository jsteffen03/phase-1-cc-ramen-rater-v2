
document.addEventListener('DOMContentLoaded', () => {
  fetch("http://localhost:3000/ramens")
  .then((r)=> r.json())
  .then(ramens => {
    main(ramens)
  })
  .catch(error => console.error('Error fetching the ramens:', error));
})

// Callbacks
const handleClick = (ramen) => {
  const ramenImage = document.querySelector(`.detail-image`)
  const name = document.querySelector(`.name`)
  const restaurant = document.querySelector(`.restaurant`)
  const rating = document.querySelector('#rating-display')
  const comment = document.querySelector('#comment-display')

  ramenImage.src = ramen.image
  name.textContent = ramen.name
  restaurant.textContent = ramen.restaurant
  rating.textContent = ramen.rating 
  comment.textContent = ramen.comment

};

const addSubmitListener = () => {
  const ramenForm = document.querySelector("#new-ramen")
  ramenForm.addEventListener("submit",(e)=> {
    e.preventDefault()

    const newRamen = {

      image: e.target["new-image"].value,
      name: e.target["new-name"].value,
      restaurant: e.target["new-restaurant"].value,
      rating: e.target["new-rating"].value,
      comment: e.target["new-comment"].value
    }
    displayRamens(newRamen)

  })
}

function displayRamens(ramen){
  const ramenImg = document.createElement("img")
  ramenImg.src = ramen.image
  const menuOption = document.querySelector("#ramen-menu")
  menuOption.append(ramenImg)

  ramenImg.addEventListener("click",() => {
  handleClick(ramen)

  })
};

const main = (ramens) => {
  ramens.forEach((ramen)=> {
    displayRamens(ramen)
  })
  addSubmitListener()
}

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

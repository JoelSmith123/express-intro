const imageContainer = document.querySelector('.sunsets')

const pictureCounter = 36

for (let i = 0; i < pictureCounter; i++) {
  imageContainer.innerHTML += `<img class='sunset-img' src='https://source.unsplash.com/collection/162470/${i}' alt='sunset'/>`
}
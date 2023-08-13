import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join("") 
}

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

let galleryModal = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250
});
galleryModal.on('show.simplelightbox', function () {

});


/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" 
      src="small-image.jpg" 
      alt="Image description" />
   </a>
</li> */
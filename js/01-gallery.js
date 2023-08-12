import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("") 
}

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

gallery.addEventListener("click", hendlerClick);

function hendlerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }

    const largeImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${largeImg}" width="800" height="600">
`)
instance.show()

}



/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */
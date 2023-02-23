import { galleryItems } from "./gallery-items.js";

const containerForImages = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`
  )
  .join("");

containerForImages.insertAdjacentHTML("beforeend", createGalleryMarkup);

function onImageClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();
}

containerForImages.addEventListener("click", onImageClick);

var lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 });

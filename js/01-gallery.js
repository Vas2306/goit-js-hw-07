import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const containerForImages = document.querySelector(".gallery");
// console.log(containerForImages);

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

containerForImages.insertAdjacentHTML("beforeend", createGalleryMarkup);

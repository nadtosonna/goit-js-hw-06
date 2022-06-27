const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesList = document.querySelector('.gallery');
imagesList.insertAdjacentHTML("beforebegin", "<h2>GALLERY</h2>");
const galleryHeader = document.querySelector('h2');
galleryHeader.setAttribute("style", "text-align: center;");

images.forEach(image => {
  imagesList.insertAdjacentHTML('afterbegin',
  `<li class = "gallery-item"> <img src = "${image.url}" alt = "${image.alt}" width = 320 height = 240> </li>`);
});

imagesList.setAttribute("style", "list-style:none; display: flex; flex-direction: column; text-align: center;");

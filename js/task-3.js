const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const containerRef = document.querySelector('#gallery');
containerRef.classList.add('img-container');

function markupBuilder(arr) {
  const imgMarkup = arr.map(item => {
    const listItemRef = document.createElement('li');
    const imgRef = document.createElement('img');
    imgRef.src = item.url;
    imgRef.alt = item.alt;
    imgRef.classList.add('imgsstyles');

    listItemRef.appendChild(imgRef);

    return listItemRef;
  });

  return imgMarkup;
};

containerRef.append(...markupBuilder(images));

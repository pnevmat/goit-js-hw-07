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

const catListItemRef = document.createElement('li');
const fishListItemRef = document.createElement('li');
const horsesListItemRef = document.createElement('li');

const catImgRef = document.createElement('img');
catImgRef.src = images[0].url;
catImgRef.alt = images[0].alt;
catImgRef.classList.add('imgsstyles');

const fishImgRef = document.createElement('img');
fishImgRef.src = images[1].url;
fishImgRef.alt = images[1].alt;
fishImgRef.classList.add('imgsstyles');

const horsesImgRef = document.createElement('img');
horsesImgRef.src = images[2].url;
horsesImgRef.alt = images[2].alt;
horsesImgRef.classList.add('imgsstyles');

catListItemRef.appendChild(catImgRef);
fishListItemRef.appendChild(fishImgRef);
horsesListItemRef.appendChild(horsesImgRef);

containerRef.append(catListItemRef, fishListItemRef, horsesListItemRef);

function createHomepage() {
  const contentContainer = document.querySelector('#content');
  const topText = document.createElement('ul');
  const foodGrid = document.createElement('div');
  const bottomText = document.createElement('p');
  const imageSources = [
    '../assets/g1-pexels-lisa-fotios-1351238.jpg',
    '../assets/g2-pexels-grooveland-designs-3607284.jpg',
    '../assets/g3-pexels-pixabay-248509.jpg',
    '../assets/g4-pexels-nataliya-vaitkevich-6275187.jpg',
    '../assets/g5-pexels-bulbfish-1143754.jpg',
    '../assets/g6-pexels-engin-akyurt-2456435.jpg',
  ];

  contentContainer.appendChild(topText);
  const topTextListItem1 = document.createElement('p');
  const topTextListItem2 = document.createElement('p');
  const topTextListItem3 = document.createElement('p');

  topText.appendChild(topTextListItem1);
  topText.appendChild(topTextListItem2);
  topText.appendChild(topTextListItem3);

  topTextListItem1.textContent = 'Hours of operation:';
  topTextListItem2.textContent = 'Monday-Friday 10am-9:30pm';
  topTextListItem3.textContent = 'Saturday and Sunday 9am-9:30pm';

  topText.classList = 'flex flex-col gap-3 items-center text-xl pb-8';

  contentContainer.appendChild(foodGrid);
  foodGrid.classList = 'grid grid-cols-3 grid-flow-row gap-3';

  imageSources.forEach((e, index) => {
    const img = document.createElement('img');
    img.src = imageSources[index];
    img.classList = 'w-60 rounded-md';
    foodGrid.appendChild(img);
  });

  contentContainer.appendChild(bottomText);

  bottomText.innerHTML = 'Our mission is to offer approachable, delicious plant based food for everyone.'
    + '<br>'
    + '<br>'
    + 'Whether you’ve been vegan for years or you’re new to the world of plant based eating, we’re confident you’ll find something to enjoy. ';
  bottomText.classList = 'w-4/5 fancy-font text-2xl p-8';
}

export default createHomepage;

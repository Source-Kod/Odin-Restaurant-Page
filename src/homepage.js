function createHomepage() {
  const contentContainer = document.querySelector('#content');
  const topText = document.createElement('ul');
  const foodGrid = document.createElement('div');
  const bottomText = document.createElement('p');

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

  topText.classList = "flex flex-col gap-3"
}

export { createHomepage };

function createContactPage() {
  const contentContainer = document.querySelector('#content');
  const phoneNumber = document.createElement('p');
  const address = document.createElement('p');
  const mapContainerDiv = document.createElement('div');

  phoneNumber.textContent = '☏ 555-555-3243';

  address.textContent = '🏠 1234 Mountain View Lane, Boulder, CO 12345';

  mapContainerDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1528.0028028248146!2d-105.1447057208512!3d40.00832094646435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1234%20Mountain%20View%20Lane%20Boulder%2C%20CO%2012345!5e0!3m2!1sen!2sus!4v1684021533849!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  contentContainer.appendChild(phoneNumber);
  contentContainer.appendChild(address);
  contentContainer.appendChild(mapContainerDiv);

  phoneNumber.classList = 'text-2xl';
  address.classList = 'text-xl';
  contentContainer.classList.add('items-center');
}

export default createContactPage;

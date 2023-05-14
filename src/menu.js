const menu = {
  appetizers: [
    {
      name: 'Crispy Tofu Bites',
      description:
        'Bite-sized tofu cubes marinated in savory spices, lightly fried until golden brown, served with a tangy sesame dipping sauce.',
    },
    {
      name: 'Stuffed Portobello Mushrooms',
      description:
        'Grilled Portobello mushrooms filled with a mouthwatering blend of quinoa, roasted vegetables, and fragrant herbs.',
    },
    {
      name: 'Rainbow Summer Rolls',
      description:
        'Fresh rice paper rolls filled with colorful julienned vegetables, tofu, and aromatic herbs, served with a zesty peanut dipping sauce.',
    },
  ],
  soupsAndSalads: [
    {
      name: 'Creamy Tomato Basil Soup',
      description:
        'A comforting blend of ripe tomatoes, fragrant basil, and creamy coconut milk, served with homemade croutons.',
    },
    {
      name: 'Mediterranean Quinoa Salad',
      description:
        'Nutrient-packed quinoa tossed with juicy cherry tomatoes, cucumbers, Kalamata olives, and a lemon-herb vinaigrette.',
    },
    {
      name: 'Thai Lemongrass Noodle Soup',
      description:
        'A fragrant broth infused with lemongrass, galangal, and lime leaves, loaded with rice noodles, tofu, and fresh vegetables.',
    },
  ],
  mainCourses: [
    {
      name: 'Eggplant Parmesan',
      description:
        'Breaded and baked eggplant slices topped with marinara sauce, vegan mozzarella, and fresh basil, served with spaghetti marinara.',
    },
    {
      name: 'Chickpea Tikka Masala',
      description:
        'Tender chickpeas simmered in a spiced tomato and coconut cream sauce, served with aromatic basmati rice and garlic naan.',
    },
    {
      name: 'Vegetable Paella',
      description:
        'Saffron-infused rice cooked with a medley of seasonal vegetables, artichoke hearts, and green peas, garnished with lemon wedges.',
    },
  ],
  desserts: [
    {
      name: 'Blueberry Bliss Cheesecake',
      description:
        'Creamy cashew-based cheesecake with a gluten-free almond crust, topped with a luscious blueberry compote.',
    },
    {
      name: 'Decadent Chocolate Brownie',
      description:
        'Rich and fudgy chocolate brownie made with wholesome ingredients, served warm with a scoop of vanilla vegan ice cream.',
    },
    {
      name: 'Zesty Lemon Bars',
      description:
        'Tangy and sweet lemon bars with a buttery crust, dusted with powdered sugar and garnished with fresh mint.',
    },
  ],
  beverages: [
    {
      name: 'Refreshing Watermelon Cooler',
      description:
        'Freshly blended watermelon juice infused with a hint of mint and a squeeze of lime, served over ice.',
    },
    {
      name: 'Matcha Latte',
      description:
        'Ceremonial grade matcha powder blended with creamy almond milk and a touch of natural sweetener.',
    },
    {
      name: 'Tropical Paradise Smoothie',
      description:
        'A tropical blend of pineapple, mango, coconut milk, and a splash of orange juice, perfect for a sunny day.',
    },
  ],
};

function createMenuHeader(name) {
  const header = document.createElement('h2');
  header.textContent = name;
  header.classList = 'font-bold text-2xl';
  return header;
}

function createSectionItems(sectionArray, sectionContainer) {
  sectionArray.forEach((e) => {
    const menuItemDiv = document.createElement('div');
    const nameParagraph = document.createElement('p');
    const descriptionParagraph = document.createElement('p');

    nameParagraph.textContent = e.name;
    descriptionParagraph.textContent = e.description;

    nameParagraph.classList = 'font-bold text-lg';

    menuItemDiv.appendChild(nameParagraph);
    menuItemDiv.appendChild(descriptionParagraph);
    sectionContainer.appendChild(menuItemDiv);
  });
}

function createMenuPage() {
  // containers
  const contentContainer = document.querySelector('#content');
  contentContainer.classList.remove('items-center');

  const appetizersContainer = document.createElement('div');
  appetizersContainer.classList = 'flex flex-col gap-4 p-4';

  const soupsAndSaladsContainer = document.createElement('div');
  soupsAndSaladsContainer.classList = 'flex flex-col gap-4 p-4';

  const mainCoursesContainer = document.createElement('div');
  mainCoursesContainer.classList = 'flex flex-col gap-4 p-4';

  const dessertsContainer = document.createElement('div');
  dessertsContainer.classList = 'flex flex-col gap-4 p-4';

  const beveragesContainer = document.createElement('div');
  beveragesContainer.classList = 'flex flex-col gap-4 p-4';

  // menu headers
  const appetizerHeader = createMenuHeader('Appetizers');
  appetizersContainer.appendChild(appetizerHeader);

  const soupsAndSaladsHeader = createMenuHeader('Soups and Salads');
  soupsAndSaladsContainer.appendChild(soupsAndSaladsHeader);

  const mainCoursesHeader = createMenuHeader('Main Courses');
  mainCoursesContainer.appendChild(mainCoursesHeader);

  const dessertsHeader = createMenuHeader('Desserts');
  dessertsContainer.appendChild(dessertsHeader);

  const beveragesHeader = createMenuHeader('Beverages');
  beveragesContainer.appendChild(beveragesHeader);

  // fill containers
  createSectionItems(menu.appetizers, appetizersContainer);

  createSectionItems(menu.soupsAndSalads, soupsAndSaladsContainer);

  createSectionItems(menu.mainCourses, mainCoursesContainer);

  createSectionItems(menu.desserts, dessertsContainer);

  createSectionItems(menu.beverages, beveragesContainer);

  // append containers
  contentContainer.appendChild(appetizersContainer);
  contentContainer.appendChild(soupsAndSaladsContainer);
  contentContainer.appendChild(mainCoursesContainer);
  contentContainer.appendChild(dessertsContainer);
  contentContainer.appendChild(beveragesContainer);
}

export default createMenuPage;

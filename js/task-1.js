// Отримуємо список категорій
const categoriesList = document.querySelector("#categories");

// Отримуємо всі елементи li.item всередині списку
const categoryItems = categoriesList.querySelectorAll("li.item");

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Для кожного елемента li.item виводимо текст заголовка (тегу <h2>)
// та кількість елементів у категорії (усіх <li>, вкладених у нього)
categoryItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElementsCount = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});

categoriesList.style.listStyle = "none";
const miniLists = categoriesList.querySelectorAll("ul");
miniLists.forEach((list) => list.classList.add("micro-list"));
const microList = document.querySelectorAll(".micro-list");
microList.forEach((microList) => (microList.style.listStyle = "none"));

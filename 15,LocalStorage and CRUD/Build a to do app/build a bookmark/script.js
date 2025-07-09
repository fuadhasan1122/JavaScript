
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkBtn = document.getElementById("add-bookmark-button");
const viewCategoryBtn = document.getElementById("view-category-button");
const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkListSection = document.getElementById("bookmark-list-section");
const closeFormBtn = document.getElementById("close-form-button");
const closeListBtn = document.getElementById("close-list-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button");
const nameInput = document.getElementById("name");
const urlInput = document.getElementById("url");
const categoryNameEls = document.querySelectorAll(".category-name");
const categoryList = document.getElementById("category-list");

const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    if (
      Array.isArray(bookmarks) &&
      bookmarks.every(
        (b) =>
          b &&
          typeof b === "object" &&
          "name" in b &&
          "url" in b &&
          "category" in b
      )
    ) {
      return bookmarks;
    }
    return [];
  } catch (e) {
    return [];
  }
};

const saveBookmarks = (bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};

const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookmarkListSection.classList.toggle("hidden");
};

const updateCategoryNames = () => {
  categoryNameEls.forEach((el) => (el.innerText = categoryDropdown.value));
};

const updateCategoryList = () => {
  const bookmarks = getBookmarks();
  const selectedCategory = categoryDropdown.value;
  const filtered = bookmarks.filter((b) => b.category === selectedCategory);

  if (filtered.length === 0) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    categoryList.innerHTML = filtered
      .map(
        (b, i) => `
          <div>
            <input type="radio" id="${b.name}" name="bookmark" value="${b.name}" />
            <label for="${b.name}">
              <a href="${b.url}" target="_blank">${b.name}</a>
            </label>
          </div>
        `
      )
      .join("");
  }
};

// Event Listeners
addBookmarkBtn.addEventListener("click", () => {
  updateCategoryNames();
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", displayOrCloseForm);

addBookmarkFormBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  const category = categoryDropdown.value;

  if (!name || !url) return;

  const bookmarks = getBookmarks();
  bookmarks.push({ name, url, category });
  saveBookmarks(bookmarks);

  nameInput.value = "";
  urlInput.value = "";
  displayOrCloseForm();
});

viewCategoryBtn.addEventListener("click", () => {
  updateCategoryNames();
  updateCategoryList();
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", displayOrHideCategory);

deleteBookmarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector("input[name='bookmark']:checked");
  if (!selectedRadio) return;

  const nameToDelete = selectedRadio.value;
  const category = categoryDropdown.value;

  let bookmarks = getBookmarks();
  bookmarks = bookmarks.filter(
    (b) => !(b.name === nameToDelete && b.category === category)
  );
  saveBookmarks(bookmarks);

  updateCategoryList();
});



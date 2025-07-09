const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");

function validateForm() {
  const fullNameValid = fullName.value.trim() !== "";
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  const orderNoValid = /^2024\d{6}$/.test(orderNo.value.trim());
  const productCodeValid = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/.test(productCode.value.trim());
  const quantityValid = /^\d+$/.test(quantity.value.trim()) && parseInt(quantity.value.trim()) > 0;

  const complaintsChecked = complaintsGroup.querySelectorAll("input[type='checkbox']:checked").length > 0;
  const isOtherComplaintChecked = document.getElementById("other-complaint").checked;
  const complaintDescriptionValid = !isOtherComplaintChecked || complaintDescription.value.trim().length >= 20;

  const solutionSelected = solutionsGroup.querySelector("input[type='radio']:checked") !== null;
  const isOtherSolutionSelected = document.getElementById("other-solution").checked;
  const solutionDescriptionValid = !isOtherSolutionSelected || solutionDescription.value.trim().length >= 20;

  return {
    "full-name": fullNameValid,
    "email": emailValid,
    "order-no": orderNoValid,
    "product-code": productCodeValid,
    "quantity": quantityValid,
    "complaints-group": complaintsChecked,
    "complaint-description": complaintDescriptionValid,
    "solutions-group": solutionSelected,
    "solution-description": solutionDescriptionValid,
  };
}

function isValid(results) {
  return Object.values(results).every(value => value);
}

function setBorderColor(el, isValid) {
  el.style.borderColor = isValid ? "green" : "red";
}

function handleValidation(event) {
  const results = validateForm();
  for (const [key, valid] of Object.entries(results)) {
    const el = document.getElementById(key);
    if (el) {
      setBorderColor(el, valid);
    } else if (key === "complaints-group" || key === "solutions-group") {
      setBorderColor(document.getElementById(key), valid);
    }
  }
}

function attachChangeListeners() {
  [fullName, email, orderNo, productCode, quantity, complaintDescription, solutionDescription].forEach(input => {
    input.addEventListener("change", () => {
      const results = validateForm();
      setBorderColor(input, results[input.id]);
    });
  });

  [complaintsGroup, solutionsGroup].forEach(group => {
    group.addEventListener("change", () => {
      const results = validateForm();
      setBorderColor(group, results[group.id]);
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const results = validateForm();
  handleValidation();

  if (isValid(results)) {
    alert("Form submitted successfully!");
    form.reset();
  } else {
    alert("Please correct the errors in the form.");
  }
});

attachChangeListeners();

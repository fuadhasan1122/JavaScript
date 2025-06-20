let inventory = [];

function findProductIndex(productName) {
  const name = productName.toLowerCase();
  return inventory.findIndex(product => product.name === name);
}

function addProduct(product) {
  const name = product.name.toLowerCase();
  const quantity = product.quantity;
  const index = findProductIndex(name);

  if (index !== -1) {
    inventory[index].quantity += quantity;
    console.log(`${name} quantity updated`);
  } else {
    inventory.push({ name, quantity });
    console.log(`${name} added to inventory`);
  }
}

function removeProduct(productName, quantityToRemove) {
  const name = productName.toLowerCase();
  const index = findProductIndex(name);

  if (index === -1) {
    console.log(`${name} not found`);
    return;
  }

  const product = inventory[index];

  if (product.quantity < quantityToRemove) {
    console.log(`Not enough ${name} available, remaining pieces: ${product.quantity}`);
  } else {
    product.quantity -= quantityToRemove;
    if (product.quantity === 0) {
      inventory.splice(index, 1);
    }
    console.log(`Remaining ${name} pieces: ${product.quantity}`);
  }
}
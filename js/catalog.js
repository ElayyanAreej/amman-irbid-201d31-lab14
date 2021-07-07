/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  const selectElement = document.getElementById('items');
  //TODO: Add an <option> tag inside the form's select for each product
  for (let i in Product.allProducts) {
    let opEl = document.createElement('Option');
    opEl.setAttribute('id',`item ${i}`);
    opEl.textContent=Product.allProducts[i].name;
    selectElement.appendChild(opEl);}
  }

 

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
let myForm=document.getElementById('catalog');
myForm.addEventListener('submit',handleSubmit);

function handleSubmit(event) {

  // TODO: Prevent the page from reloading
event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  let productOp= document.getElementById('items').value; 
  let quOp= document.getElementById('quantity').value; 
  let produtindex= document.getElementById('items').id; 

  cart.removeItem(produtindex);
  console.log(productOp,quOp);
  cart.addItem(productOp,quOp);
  // let productEl= new CartItem(productOp,quOp);  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
let counter=0;
function updateCounter() {
counter++;
console.log(counter);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
let container =document.getElementById('cartContents');
let ulEL= document.createElement('ul');
container.appendChild(ulEL);
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let liEl = document.createElement('li');
  let productOp= document.getElementById('items').value; 
  let quOp= document.getElementById('quantity').value; 
  liEl.textContent=`Your item ${productOp} with quantity ${quOp}`;
  ulEL.appendChild(liEl);
   
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();

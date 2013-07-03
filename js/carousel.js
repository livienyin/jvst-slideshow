function modulus(n, m) {
  if(n < 0) {
    return (m + (n % m)) % m;
  }
  return n % m;
}

function Carousel(imageURLs, containingDiv) {
  this.images = imageURLs.map(function(imageURL){
    imgDomElement = document.createElement('img');
    imgDomElement.setAttribute('src', imageURL);
    return imgDomElement;
  });
  this.containingDiv = containingDiv;
  this.currentImageIndex = 0;
  this.createDomElements();
}

Carousel.prototype.createDomElements = function() {
  var carousel = this;

  this.nextButton = document.createElement('button');
  this.nextButton.appendChild(document.createTextNode("next"));
  this.nextButton.onclick = function() { carousel.next() };
  
  this.previousButton = document.createElement('button');
  this.previousButton.appendChild(document.createTextNode("previous"));
  this.previousButton.onclick = function() { carousel.previous() }; 

  buttonDiv = document.createElement('div');
  buttonDiv.appendChild(this.previousButton);
  buttonDiv.appendChild(this.nextButton);
  buttonDiv.setAttribute("class", "carousel-buttons");

  this.containingDiv.appendChild(buttonDiv);
  this.imageDiv = document.createElement('div');
  this.imageDiv.appendChild(this.images[this.currentImageIndex])
  this.containingDiv.appendChild(this.imageDiv);
}

Carousel.prototype.setImage = function(newIndex) {
  this.imageDiv.removeChild(this.images[this.currentImageIndex]);
  this.currentImageIndex = newIndex;
  this.imageDiv.appendChild(this.images[this.currentImageIndex]);
}

Carousel.prototype.next = function() {
  this.setImage(modulus(this.currentImageIndex + 1, this.images.length));
}

Carousel.prototype.previous = function() {
  this.setImage(modulus(this.currentImageIndex - 1, this.images.length));
}

/* SLIDER */

// email button
function toggle(){
	var blur = document.getElementById("blur");
	blur.classList.toggle("active");
	var orderFormular = document.getElementById("orderFormular");
	orderFormular.classList.toggle("active");
}




// phone button
var buttonPhone = document.getElementById("buttonPhone");
var addElementPhone = document.getElementById("addElementPhone");

buttonPhone.onclick = function(){
if(addElementPhone.style.display === "block"){
	addElementPhone.style.display = "none";
}else {
	addElementPhone.style.display = "block";
}
}


/* PRICE LIST */


var priceListItem = document.getElementsByClassName("priceListItem");
var priceListItemCirclePrice = document.getElementsByClassName("priceListItemCirclePrice");

for(var i = 0; i < priceListItem.length; i++){
priceListItem[i].onmouseover = funckiaNefunkcia;
function funckiaNefunkcia(){
	
	for(var a = 0; a < priceListItemCirclePrice.length; a++){
		priceListItemCirclePrice[a].style.display = "block";
	}

};

priceListItem[i].onmouseout = funckiaNefunkciaLeave;
function funckiaNefunkciaLeave(){
	
	for(var a = 0; a < priceListItemCirclePrice.length; a++){
		priceListItemCirclePrice[a].style.display = "none";
	}

}
}

/* GALLERY */
var galleryItem = document.getElementsByClassName("galleryItem");

for(i = 0; i < galleryItem.length; i++){
	galleryItem[i].onmouseover = function(){
		
	if(this.children.length > 2){
		return;
	}
		
	var span = document.createElement("span");
	var att = document.createAttribute("class"); 
	att.value = "bi bi-info-circle-fill galleryItemIcon";
	span.setAttributeNode(att);
	
	span.onclick = showDetailsOfPicture;
	
	this.appendChild(span);
		
	}
	
	galleryItem[i].onmouseout = function(){
		
		var e = event.toElement || event.relatedTarget;
        if (e == null || e.parentNode == this || e == this) {
           return;
        }

	this.removeChild(this.children[2]);
	this.children[1].classList.remove("showDescription");

		
}
}

function showDetailsOfPicture(){
	this.parentElement.children[1].classList.add("showDescription");
}


/* CONTACT */

/* IMAGESLIDER */

var imageSliderItem = document.getElementsByClassName("imageSliderItem");
var actualIndex = 0;

imageSliderItem[actualIndex].classList.add("showImageSliderImages");

function showHideImageSliderItem(nextPrev){
	imageSliderItem[actualIndex].classList.remove("showImageSliderImages");
	actualIndex += nextPrev;
	
	if(actualIndex == imageSliderItem.length){
		actualIndex = 0;
	}else if(actualIndex == -1){
		actualIndex = imageSliderItem.length -1;
	}
	
	imageSliderItem[actualIndex].classList.add("showImageSliderImages");
}

setInterval(function(){
	showHideImageSliderItem(+1)
	}, 3000);
	
	

/* SCROLLTOTOP */

var toTheTopButton = document.getElementById("toTheTopButton");

function scrollToTop(){
	window.scrollTo(0, 0);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
	toTheTopButton.style.display = "block";
	}else{
	toTheTopButton.style.display = "none";
	}
}


let slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
  index = 0;
}

slides[index].classList.add("active");

},3000);
<script src="script.js"></script>
<script src="script.js"></script>
function darkMode(){

document.body.classList.toggle("dark");

}
function addToCart(){

alert("Product Added To Cart");

}
let slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(() => {

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
  index = 0;
}

slides[index].classList.add("active");

},3000);



function darkMode(){

document.body.classList.toggle("dark");

}



document.querySelectorAll('#pay-btn').forEach(button => {

button.onclick = function(){

var options = {

"key":"YOUR_RAZORPAY_KEY",

"amount":"50000",

"currency":"INR",

"name":"Sai Green Nursery",

"description":"Plant Order",

handler:function(response){

alert("Payment Successful");

}

};

var rzp = new Razorpay(options);

rzp.open();

}

});

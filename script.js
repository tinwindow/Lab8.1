 $(document).ready(function(){

var items = [
	 {name: "Cat Food", price: 17.50},
     {name: "Catnip", price: 4.99},
	 {name: "Toilet Paper", price: 6.49},
	 {name: "Paper Towels", price: 1.79},
     {name: "Star Trek Pizza Cutter", price: 20.00}
];


var $total = 0;
var $orderedList = $("#GroceryList");

for (var i = 0; i < items.length; i++) {
  console.log(items[i].name, items[i].price);

  $total = $total + items[i].price;


  var $listItem = $("<li>"); //here you're creating the element
  $listItem.text (items[i].name + " $ " + items[i].price);
  $("#GroceryList").append($listItem);//here you're appending the element to the GroceryList (an OL)

}

 console.log("Your total is " + $total + ".");


  $("#total").append($total) = $total; //just appending it because it's already been created!













}); //end ready !!!!!

$(function(){
  var products = [
    { value: 'Samsung Galaxy s6 mobile', data: '1.html'  },
    { value: 'Iphone 6 mobile', data: '2.html' },
    { value: 'Karbonn Sparkle V mobile', data: '3.html' },
    { value: 'Lenovo A6000 mobile', data: '4.html' },
	{ value: 'Lenovo A7000 mobile', data: '5.html' },
	{ value: 'Moto X play mobile', data: '6.html' },
	{ value: 'asus z97 motherboard ', data: 'mobo1.html' },
    { value: 'HP 15-AB027TX 15.6-inch Laptop ', data: 'lap1.html' },
	{ value: 'HP Envy 15-k004TX Laptop ', data: 'lap2.html' },
	{ value: 'corsair vengeance 8gb ram', data: 'ram1.html' },
   ];


  // setup autocomplete function pulling from products[] array
  $('#autocomplete').autocomplete({
    lookup: products,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Product Name:</strong> ' + suggestion.value + ' <br> <a target="_blank" href= "'
      + suggestion.data + '" >' + suggestion.value + '</a>';
      $('#outputcontent').html(thehtml);

changeLink()

    }
  });


});

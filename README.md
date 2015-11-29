Internet Programming Lab Project:

Instructor: Dr.R.Shriram

Project Members: Anirudh Krishnan, Gautham Prasad

Title: Price Comparison Website


Instructions to run project:

1.Download the jquery plugins for the two key features, the search bar and the hot deals sector.
(link for hot deals :http://als.musings.it/
link for autocomplete which is the key for search bar :https://jqueryui.com/autocomplete/)


2.Download/create the necessary CSS(cascading style sheets ) that define how interactive your webpage looks.You may choose to download our CSS files
or create your own files based on your interest

3.It is important to note that an API is used in powering the the price comparison.

4.Our API is powered by a site called http://www.pricecheckindia.com/ .

5.Register for an account on the website, get the api key and password , and you may invoke the api as and when needed.

6.The website contains a product catalogue which can be obtained from "http://api.pricecheckindia.com/home/catalogs".

7.Choose the products from the product catalog, obtain the correct keyword, and edit it in the section 
<table id="priceTable"></table>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="http://cdn.pricecheckindia.com/compare.js"></script>
<script type="text/javascript"> $(document).ready(function(){
	initComparison('mobile_phones','galaxy s6 ','anirudhk','XUWERLBDDCDRGTIV');
})


8.Now for creating a search bar that functions in a simlar fashion to our website, we need to populate the autocomplete section,
in the jquery file 
var products = [
    { value: 'Samsung Galaxy s6 mobile', data: '1.html'  }
,
    { value: 'Iphone 6 mobile', data: '2.html' } }
Replace the value in the value column and the data column and you will have the search term and the corresponding link that term takes you to..
As shown , the first term galaxy s6 mobile will take u to the "page 1.html"

9.for the Hot deals page, the jquery is called inside the progra
$(document).ready(function() 
	
		{
	
			$("#lista1").als({

					visible_items: 4,
	
				scrolling_items: 2,
	
				orientation: "horizontal",

					circular: "yes",

					autoscroll: "no",

					interval: 5000,
	
				             speed: 500,

					easing: "linear",

					direction: "right",

					start_from: 0
	
			});m. 
 
As you may  look at the code, the parameters are self explanatory, as the specify the time interval, direction, orientation, no of visible items, no of items per scroll
etc


10.The categories page is simply done by redirecting one master page to its subpages and so on.As usual the API is called upon and shall 
function only upon using the right keywords.

11.It is important to undestand that the project shall work only online since the API sources prices from various sites Real Time.

credits: jqueryui.com, als.musings.it,pricecheckindia.com

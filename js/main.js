/*JavaScript Team*/


// header and footer created at page load
// and appended to <header> and <footer> tags
$( document ).ready(function(){
	createHeader();
	createFooter();
	unHide();
});



function createHeader(){ 
	
	var headerVar = $("<img src='images/grandtravelsLOGO.png'id='HeaderLogo' >" +
						"<section>" +
							"<h1 id='HeaderTitle'>Welcome To Grand Travels</h1>" +
						"</section>" +
						"<nav>" +
							"<ul>" +
								"<a href='index.html'><li>Home</li></a>" +
								"<a href='pages/agency.html'><li>Agency</li></a>" +
								"<a href='pages/howTo.html'><li>How-To</li></a>" +
								"<a href='pages/contactUs.html'><li>Contact Us</li></a>" +
								"<a href='pages/login.html' class='login'><li>Login/Register</li></a>" +
							"</ul>" +
						"</nav>");
	// html elements as giant string //

	$("header").append(headerVar);
	$("header:after").css('background-image','url(images/BrandenbergGateBanner.jpg)'); 				// append headerVar to header tag
	$("header h1").html( $('title').text() );	// changes h1 tag within header

}

function createFooter(){


	// empty footer column 
	var div1 = $("<div class='footerColumn'></div>");
	var heading1 = $("<h3></h3>");

	heading1.append("FAQ");
	div1.append(heading1);

	var ulist1 = $("<ul></ul>");
	div1.append(ulist1);

	// var i = ;
	ulist1.append(createListItem("Terms of Service", 	"pages/terms.html")); 	// needs links
	ulist1.append(createListItem("Privacy Policy", 		"pages/privacy.html"));		// provided to 
	ulist1.append(createListItem("Icons Used", 		    "pages/important.html"));			//createListItem function
	ulist1.append(createListItem("About Us", 		    "pages/about.html"));
	ulist1.append(createListItem("Some link 5", 		"http://www.google.com"));
	// console.log(i);







	var div2 = $("<div class='footerColumn'></div>");
	var heading2 = $("<h3></h3>");

	heading2.append("Some Other Stuff");
	



	
	div2.append(heading2);

	var ulist2 = $("<ul></ul>");
	div2.append(ulist2);

	// var i = ;
	ulist2.append(createListItem("Terms of Service", 	"http://www.google.com")); 	// needs links
	ulist2.append(createListItem("Privacy Policy", 		"http://www.google.com"));		// provided to 
	ulist2.append(createListItem("Icons Used", 		"http://www.google.com"));			//createListItem function
	ulist2.append(createListItem("Something else", 		"http://www.google.com"));
	ulist2.append(createListItem("Some link 5", 		"http://www.google.com"));

	
	$("#footer").append("<img src='images/grandtravelsLOGO.png' id='HeaderLogo' >");
	$("#footer").append(div1);
	$("#footer").append(div2);

	
	$("#footer").append("<span id = 'footBottom'>----  &#169; Grand Travels Inc. 2020  ----</span>");


	function createListItem(text, linkTo){
		var item = $("<li></li>");
		var aTag = $("<a></a>")
		item.text(text);
		aTag.append(item);
		aTag.attr("href", linkTo);
		return aTag;
	}

}

function unHide(){
	$('body').removeClass('hide');
}


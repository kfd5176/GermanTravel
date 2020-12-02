
/// not implemented currently,
/// but working if used in DOM console.
function createCard(img, link, label, description){
	$('.pageContent')
			.append(
				"<article class = 'destinationCard'>" +
					"<a href="+link+">" +
						"<img src= "+img+">" +
						"<section class= 'cardInfo'>" +
							"<p class='cardLabel'>"+ label + "</p>" +
							"<p class='cardDescription'>"+ description +"</p>" +
						"</section>" +
					"</a>" +
				"</article>"
				);

}
///copy -paste this into the console in the dom to create. 
createCard("images/Brandenberg_Gate.jpg","index","monkey", "MOOOOO");
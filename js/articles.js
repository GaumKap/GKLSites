//js



async function arto(vazen){

	if ( vazen == 1){$("#page_gl").load("cases/update_info.gaum");}
	else if ( vazen == 2){window.location.replace("cases/conditions.pdf");}
	else if ( vazen == 3){window.location.replace("./dev/");}
	else if ( vazen == 4){$("#page_gl").load("");}
	else if ( vazen == 5){$("#page_gl").load("");}
	else if ( vazen == 6){$("#page_gl").load("");}
	else if ( vazen == 7){$("#page_gl").load("");}
	else if ( vazen == 8){$("#page_gl").load("");}
	else if ( vazen == 9){$("#page_gl").load("");}
	else if ( vazen == 10){$("#page_gl").load("");}
	else if ( vazen == 999){
		document.getElementById("page_gl").innerHTML = '<div id="showbar_ac" ></div><div id="about_ac"></div><div id="twitter"><blockquote class="twitter-tweet tw-align-center" data-width="550"><p lang="et" dir="ltr">14.0 available 10 August at 5p.m , GTM +1 Paris<a href="https://t.co/oazEx6H3tf">https://t.co/oazEx6H3tf</a></p>&mdash; GaumKap (@GaumKap) <a href="https://twitter.com/GaumKap/status/1026816078704459776?ref_src=twsrc%5Etfw">August 7, 2018</a></blockquote></div> <div id="softwares_ac">Stay positive Software back soon!</div>';
		window.lobir();
	}
	document.getElementById("backh").style = "visibility:;";
	document.getElementById("otherlogo").style = "margin-left:60px;";
	if (vazen == 999){
		document.getElementById("backh").style = "visibility:hidden;";
		document.getElementById("otherlogo").style = "margin-left:20px;";
	}
}

/*
Vazen == 1 Update
Vazen == 2 Legacy
Vazen == 3 DevZone
Vazen == 4 show 1
Vazen == 5 show 2
Vazen == 6 show 3
Vazen == 7 show 4
Vazen == 8 art database
Vazen == 9 empty
Vazen == 10 empty
*/

$(document).ready(function() {
	init();
})
function init() {
	$.ajax({
		type: 'GET',
		url: './cgi-bin/getData.py',
		cache: 'false',
		async: true,
		success: function(data) {
				window.active = [],
				window.prep = [],
				window.warm = [],
				window.inactive = [],
				window.aadd = [],
				window.aremove = [],
				window.padd = [],
				window.wadd = [],
				window.wremove = [],
				window.premove = [],
				window.iadd = [],
				window.iremove = [];
			var array = data.split("\n");
			for (var i = 0; i < array.length-1; i++) {
				var single_array = array[i].split(". ");
				if (single_array[0] === "Stop the skritt burglar before it escapes with the treasure" || single_array[0].indexOf("Skill Challenge:") !=-1) {}
				else if (single_array[1] === "Active") {
					window.active.push(single_array[0]);
				} else if (single_array[1] === "Warmup") {
					window.warm.push(single_array[0]);
				} else if (single_array[1] === "Preparation"){
					window.prep.push(single_array[0]);
				}
				else{
					window.inactive.push(single_array[0]);
				}
			}
			$(".i").css("background-color", "orange");

			for (var item = 0; item < window.active.length; item++)
				$(".a").append("<li>"+window.active[item]+"</li>");
			for (var item = 0; item < window.prep.length; item++)
				$(".p").append("<li>"+window.prep[item]+"</li>");
			for (var item = 0; item < window.warm.length; item++)
				$(".w").append("<li>"+window.warm[item]+"</li>");
			for (var item = 0; item < window.inactive.length; item++)
				$(".i").append("<li>"+window.inactive[item]+"</li>");
		}
	})
	this.counter(16);
}
function update(number){
	$.ajax({
		type: 'GET',
		url: './cgi-bin/getData.py',
		cache: 'false',
		async: true,
		success: function(data) {
			var active = [],
				prep = [],
				warm = [],
				inactive = [];
			var array = data.split("\n");
			for (var i = 0; i < array.length-1; i++) {
				var single_array = array[i].split(". ");
				if (single_array[0] === "Stop the skritt burglar before it escapes with the treasure" || single_array[0].indexOf("Skill Challenge:") !=-1) {}
				else if (single_array[1] === "Active") {
					active.push(single_array[0]);
				} else if (single_array[1] === "Warmup") {
					warm.push(single_array[0]);
				} else if (single_array[1] === "Preparation"){
					prep.push(single_array[0]);
				}
				else{
					inactive.push(single_array[0]);
				}
			}
			//For each item in the old active
			for (var oldr = 0; oldr < window.active.length; oldr++) {
				//For each item in new active
				for (var item = 0; item < active.length; item++) {
					if (window.active[oldr].indexOf(active[item])!=-1) {
						break;
					}
					//If element no longer exists in active
					else if (item == active.length-1) {
						//Get the no longer exisiting element
						elm = $("ul.a").find("li:nth-child("+(oldr+1)+")");
						//Make it read
						elm.css("background-color", "red");
						//Remove later from page
						
						for (var findel = 0; findel < array.length-1; findel++) {
							single_array = array[findel].split(". ");
							if (single_array[0] === elm.html()) {
								if (single_array[1] === "Active") {
									window.aadd.push(single_array[0]);
								} else if (single_array[1] === "Warmup") {
									window.wadd.push(single_array[0]);
								} else if (single_array[1] === "Preparation"){
									window.padd.push(single_array[0]);
								}
								else{
									window.iadd.push(single_array[0]);
								}
								window.aremove.push(elm.html());
								break;
							}
						}
					}
				}
			}
			//For each item in new warm
			for (var oldr = 0; oldr < window.warm.length; oldr++) {
				//For each item in window warm
				for (var item = 0; item < warm.length; item++) {
					if (window.warm[oldr].indexOf(warm[item])!=-1) {
						break;
					}
					else if (item == warm.length-1) {
						//Get the no longer exisiting element
						elm = $("ul.w").find("li:nth-child("+(oldr+1)+")");
						//Make it read
						elm.css("background-color", "red");
						//Remove later from page
						
						for (var findel = 0; findel < array.length-1; findel++) {
							single_array = array[findel].split(". ");
							if (single_array[0] === elm.html()) {
								if (single_array[1] === "Active") {
									window.aadd.push(single_array[0]);
								} else if (single_array[1] === "Warmup") {
									window.wadd.push(single_array[0]);
								} else if (single_array[1] === "Preparation"){
									window.padd.push(single_array[0]);
								}
								else{
									window.iadd.push(single_array[0]);
								}
								window.wremove.push(elm.html());
								break;
							}
						}
					}
				}
			}
			//For each item in new prep
			for (var oldr = 0; oldr < window.prep.length; oldr++) {
				//For each item in window prep
				for (var item = 0; item < prep.length; item++) {
					if (window.prep[oldr].indexOf(prep[item])!=-1) {
						break;
					}
					else if (item == prep.length-1) {
						//Get the no longer exisiting element
						elm = $("ul.p").find("li:nth-child("+(oldr+1)+")");
						//Make it read
						elm.css("background-color", "red");
						//Remove later from page
						
						for (var findel = 0; findel < array.length-1; findel++) {
							single_array = array[findel].split(". ");
							if (single_array[0] === elm.html()) {
								if (single_array[1] === "Active") {
									window.aadd.push(single_array[0]);
								} else if (single_array[1] === "Warmup") {
									window.wadd.push(single_array[0]);
								} else if (single_array[1] === "Preparation"){
									window.padd.push(single_array[0]);
								}
								else{
									window.iadd.push(single_array[0]);
								}
								window.premove.push(elm.html());
								break;
							}
						}
					}
				}
			}
			//For each item in new inactive
			for (var oldr = 0; oldr < window.inactive.length; oldr++) {
				//For each item in window inactive
				for (var item = 0; item < inactive.length; item++) {
					if (window.inactive[oldr].indexOf(inactive[item])!=-1) {
						break;
					}
					else if (item == inactive.length-1) {
						elm = $("ul.i").find("li:nth-child("+(oldr+1)+")");
						//Make it read
						elm.css("background-color", "red");
						//Remove later from page
						
						for (var findel = 0; findel < array.length-1; findel++) {
							single_array = array[findel].split(". ");
							if (single_array[0] === elm.html()) {
								if (single_array[1] === "Active") {
									window.aadd.push(single_array[0]);
								} else if (single_array[1] === "Warmup") {
									window.wadd.push(single_array[0]);
								} else if (single_array[1] === "Preparation"){
									window.padd.push(single_array[0]);
								}
								else{
									window.iadd.push(single_array[0]);
								}
								window.iremove.push(elm.html());
								break;
							}
						}
					}
				}
			}
			for (var togo = 0; togo < window.aadd.length; togo++) {
				$(".a").append("<li style=\"background-color: darkgreen\">"+window.aadd[togo]+"</li>");
				window.active.push(aadd[togo]);
			}
			for (var togo = 0; togo < window.aremove.length; togo++) {
				window.active.splice(window.active.indexOf(window.aremove[togo]), 1);
			}
			window.aadd = [];
			window.aremove = [];
			for (var togo = 0; togo < window.wadd.length; togo++) {
				$(".w").append("<li style=\"background-color: darkgreen\">"+window.wadd[togo]+"</li>");
				window.warm.push(wadd[togo]);
			}
			for (var togo = 0; togo < window.wremove.length; togo++) {
				window.warm.splice(window.warm.indexOf(window.wremove[togo]), 1);
			}
			window.wadd = [];
			window.wremove = [];
			for (var togo = 0; togo < window.padd.length; togo++) {
				$(".p").append("<li style=\"background-color: darkgreen\">"+window.padd[togo]+"</li>");
				window.prep.push(padd[togo]);
			}
			for (var togo = 0; togo < window.premove.length; togo++) {
				window.prep.splice(window.prep.indexOf(window.premove[togo]), 1);
			}
			window.padd = [];
			window.premove = [];
			for (var togo = 0; togo < window.iadd.length; togo++) {
				$(".i").append("<li style=\"background-color: darkgreen\">"+window.iadd[togo]+"</li>");
				window.inactive.push(iadd[togo]);
			}
			for (var togo = 0; togo < window.iremove.length; togo++) {
				window.inactive.splice(window.inactive.indexOf(window.iremove[togo]), 1);
			}
			window.iadd = [];
			window.iremove = [];


			//$(".a").append("<li style=\"background-color: darkgreen\">"+single_array[0]+"</li>");			
			/*for (var item = 0; item < window.prep.length; item++)
				$(".p").append("<li>"+window.prep[item]+"</li>");
			for (var item = 0; item < window.warm.length; item++)
				$(".w").append("<li>"+window.warm[item]+"</li>");
			for (var item = 0; item < window.inactive.length; item++)
				$(".i").append("<li>"+window.inactive[item]+"</li>");*/
			setTimeout(counter(number), 1000);
		}
	})
}
function counter(number){
	if (number === 0) {
		update(16);
	}
	else {
		if (number == 7) {
			$("ul.a").text("");
			$("ul.w").text("");
			$("ul.p").text("");
			$("ul.i").text("");
			for (var item = 0; item < window.active.length; item++)
				$(".a").append("<li>"+window.active[item]+"</li>");
			for (var item = 0; item < window.prep.length; item++)
				$(".p").append("<li>"+window.prep[item]+"</li>");
			for (var item = 0; item < window.warm.length; item++)
				$(".w").append("<li>"+window.warm[item]+"</li>");
			for (var item = 0; item < window.inactive.length; item++)
				$(".i").append("<li>"+window.inactive[item]+"</li>");

		}
		var self = this;
		window.number = number-1;
		$("#timer").text("Timer: "+window.number);
		setTimeout(function() {
			counter(window.number);
		}, 1000);
	}
}

window.onload = function() {
	var cimg = document.getElementById('wrapper');

	document.getElementById('pic1').onclick = function() {
		cimg.innerHTML = "<p><img src='falls.jpg' alt='Seven Falls in Bicol' /></p>";
	}

	document.getElementById('pic2').onclick = function() {
		cimg.innerHTML = "<p><img src='lake.jpg' alt='Seven Lake in Bicol' /></p>";
	}

	document.getElementById('pic3').onclick = function() {
		cimg.innerHTML = "<p><img src='fallslake.jpg' alt='Seven Falls with Lake' /></p>";
	}

	document.getElementById('pic4').onclick = function() {
		cimg.innerHTML = "<p><img src='forest.jpg' alt='Seven Forest' /></p>";
	}

	document.getElementById('pic5').onclick = function() {
		cimg.innerHTML = "<p><img src='grass.jpg' alt='Seven Garden Grass' /></p>";
	}

	document.getElementById('pic6').onclick = function() {
		cimg.innerHTML = "<p><img src='river.jpg' alt='Seven Enchanted River' /></p>";
	}

 	var text = 'Enter URL address of an image:';
	document.getElementById('popupscr').onclick = function popup1() {
		var popup = document.createElement('div');
		popup.className = 'fullscreenpopup';
		var container = document.createElement('div');
		container.className = 'fullscreenpopup_container';
		popup.appendChild(container);
		var content = document.createElement('div');
		content.className = 'fullscreenpopup_content';
		container.appendChild(content);
		var p1 = document.createElement('p');
		p1.appendChild(document.createTextNode(text));
		content.appendChild(p1);
		var p11 = document.createElement('p');
		var input = document.createElement('input');
		input.setAttribute('type', 'text');
		input.className = 'txtInputBox';
		p11.appendChild(input);
		content.appendChild(p11);
		var p2 = document.createElement('p');
		content.appendChild(p2);
		var button = document.createElement('a');
		button.href = '#';
		button.className = 'button';
		button.onclick = function() {
			if(input.value=='') {
				alert('Please enter a URL.');
			}
			else if(!checkURL(input.value)) {
				alert('Invalid Image URL.');
			}
			else {
				document.body.removeChild(popup);
				document.getElementById('wrapper').innerHTML = "<p><img src='" + input.value + "' alt='' /></p>";
			}
		}
		p2.appendChild(button);
		var span = document.createElement('span');
		span.appendChild(document.createTextNode('OK'));
		button.appendChild(span);

		var button2 = document.createElement('a');
		button2.href = '#';
		button2.className = 'btnCancel';
		button2.onclick = function() {
			document.body.removeChild(popup);
		}
		p2.appendChild(button2);
		var span2 = document.createElement('span');
		span2.appendChild(document.createTextNode('CANCEL'));
		button2.appendChild(span2);
		
		document.body.appendChild(popup);
	}

	function checkURL(url) {
		return(url.match(/\.(jpeg|jpg|gif|png|bmp|ico)$/) != null);
	}
}

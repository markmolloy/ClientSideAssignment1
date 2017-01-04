// JavaScript Document

"use strict"

setUpListeners();


function setUpListeners()
{

	var x = document.getElementById('partA');
	var y = document.getElementById('partB');
	x.addEventListener("click", partA, false);
	y.addEventListener("click", partB, false);
}

var partB = false;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//			PART A
//			THESE BITS ARE FOR SETTING UP PART A
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function partA()
{
	//start part A
	adjustTitle();
	removePlanet();
	alterBackground();
	moveMenu();
	changeFonts();
	hideInfo();
	editH3();
	changeButtons();
	changeImages();
	//paral();
	window.addEventListener('scroll', paral, false);
	window.addEventListener('scroll', animateBlo, false);
	
}




function paral()
{
	if (!partB)
	{
		//console.log(document.body.scrollTop);
		var x = document.getElementsByTagName('h1')[0];
		x.style.position = 'absolute';
		x.style.left = '33%';
		x.style.top = 90 + document.body.scrollTop / 1.8 + 'px';
	}
}


function adjustTitle()
{
	var x = document.getElementById('title');
	x.style.fontFamily = 'Satisfy';
	x.style.fontSize = '200px';
	x.style.color = '#8894a8';
	var y = x.innerHTML.toUpperCase() + '!';
	x.innerHTML = y;
	x.style.textShadow = 'white 0em 0em 0.1em';
	var z = document.getElementById('sub1');
	z.style.fontFamily = 'Orbitron';
	z.style.color = '#E30E1F';
	z.style.fontSize = '80px';
	z.style.textShadow = 'white 0em 0em 0.1em';
	var t = document.getElementById('infoSub');
	t.innerHTML = 'The planet of tomorrow!';
}

function alterBackground()
{
	//change the background of each of the main divs
	var x = document.getElementById('header-wrapper');
	x.setAttribute('style', 'height: 70vh; background-image: url(images/bcg0.jpg); background-size: cover; background-position: center; margin-bottom: 50px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;');
	//var y = document.getElementsByTagName('html');
	//y[0].style.background = '#E30E1F url(images/overlay.png) repeat';
	var y = document.getElementById('wrapper1');
	y.style.background = '#1A1021 url(images/overlay.png) repeat';
	var z = document.getElementById('wrapper3');
	z.style.background = '#E8D392 url(images/overlay.png) repeat';
	
}


function removePlanet()
{
	//remove the mars image from above the title
	var x = document.getElementById('mearth');
	x.parentNode.removeChild(x);
}


function changeFonts()
{
	var x = document.getElementsByTagName('body');
	x[0].style.fontFamily = 'Satisfy';
	var y = document.getElementById('info');
	y.style.fontFamily = 'Jura';
	var z = document.getElementById('but');
	z.style.fontFamily = 'Jura';
	var c = document.getElementById('copyright');
	c.style.fontFamily = 'Jura';
}

function moveMenu()
{
	//relocate menu
	var x = document.getElementById('menu');
	x.parentNode.removeChild(x);
	x.style.background = '#E30E1F url(images/overlay.png) repeat';
	var y = document.getElementById('header-wrapper');
	y.parentNode.insertBefore(x, y);
	x.style.animationName = 'menuMove';
	x.style.animationDuration = '800ms';
	
}


function animateBlo()
{
	//var t = false;
	var x = document.getElementById('wrapper3');
	var xY = getPosition(x);
	var blos = document.getElementById('portfolio').querySelectorAll('div');
	if(document.body.scrollTop > xY)
	{
		for(var i=0; i<blos.length; i++)
		{
			blos[i].style.animationName = 'blopaque';
			blos[i].style.animationDuration = '2s';
			blos[i].style.animationFillMode = 'forwards';
			blos[i].style.animationDirection = 'normal';
		}
	}
	else if(xY - document.body.scrollTop >= 500)
	{
			for(var i=0; i<blos.length; i++)
			{
				blos[i].style.animationName = '';
				blos[i].style.opacity = '0';
			}
	}
}

function getPosition(element) 
{
	
    var yPos = 0;

    while(element) {
        yPos += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPos;
}

function editH3()
{
	//remove the sub headings in the information section
	var x = document.getElementsByTagName('h3');
	while (x.length > 0)
	{
		x[0].parentNode.removeChild(x[0]);
	}
}

function hideInfo()
{
	//remove the paragraphs from the information section
	var x = document.getElementsByClassName('invis');
	while (x.length >0)
	{
		x[0].parentNode.removeChild(x[0]);
	}
}

function changeImages()
{
	//change the images in the information section
	var x = document.getElementsByClassName('image-full');
	var y = ['images/moonr.jpg', 'images/mountainr.jpg', 'images/expr.jpg', 'images/searchr.jpg'];
	for(var i = 0; i < x.length; i++)
	{
		x[i].setAttribute('src', y[i]);
		x[i].setAttribute('onmouseover', 'grow('+i+')');
		x[i].setAttribute('onmouseout', 'shrink('+i+')');
		x[i].style.borderRadius = '7%';
		x[i].style.border = '3px solid #E30E1F';
		//x[i].style.borderImage = 'url(images/distressed.jpg) 50 round';
	}
	x[2].style.height = '451.188px';
}

function shrink(num)
{
	//when mouse is removed
	var x = document.getElementsByClassName('image-full');
	x[num].style.height = '451.188px';
	x[num].style.width = '280px';
	unshadow(num);
}

function grow(num)
{
	//when mouse is hovered
	var x = document.getElementsByClassName('image-full');
	x[num].style.height = '491.188px';
	x[num].style.width = '295px';
	shadow(num);
}

function shadow(num)
{
	//when mouse is hovered
	var x = document.getElementsByClassName('image-full');
	x[num].style.boxShadow = '10px 10px 5px #888888';
}

function unshadow(num)
{
	//when mouse is removed
	var x = document.getElementsByClassName('image-full');
	x[num].style.boxShadow = '0px 0px 0px #888888';
}

function changeButtons()
{
	//remove buttons from information section
	var x =document.getElementsByClassName('button-small');
	while (x.length > 0)
	{
		x[0].parentNode.removeChild(x[0]);
	}

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//			PART A
//			END OF PART A
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//			PART B
//			THESE BITS ARE FOR SETTING UP PART B
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function partB()
{
	//start part B
	partB = true;
	createBlankCanvas();
	createBasicFrame();
	createLanding();
	createUsThem();
	createCollage();
	createMenu();
	imageWiggleTimer();
	
}





function createMenu()
{
	//create button which displays menu when hovered over
	var x = document.getElementsByClassName('bmain')[0];
	var y = document.createElement('div');
	var z = document.createElement('div');
	y.style.width = '40px';
	y.style.height = '40px';
	y.style.borderRadius = '50%';
	y.style.backgroundColor = 'yellow';
	y.style.position = 'absolute';
	y.style.top = '10%';
	y.style.left = '93%';
	y.style.boxShadow = '1px 1px 15px black';
	y.setAttribute('id', 'yelbutton');
	var check = document.getElementsByClassName('yelbuttoncl');
	y.setAttribute('onmouseover', 'displayMenuExp()');
	
	z.textContent = 'MENU';
	z.style.color = 'yellow';
	z.style.fontFamily = 'Ostrich Sans Rounded';
	z.style.fontSize = '40px';
	z.style.position = 'absolute';
	z.style.top = '15%';
	z.style.left = '83%';
	//z.style.WebkitFilter = 'drop-shadow(1px 1px 15px black)';
	z.style.padding = '7px 20px';
	
	z.appendChild(y);
	
	x.appendChild(z);
}

function displayMenuExp()
{
	//display menu when menu button is hovered over
	//BLOCK STYLE MENU
	var x = document.getElementsByClassName('bmain')[0];
	var y = document.createElement('div');
	var but = document.getElementById('yelbutton');
	
	but.style.boxShadow = '0px 0px 0px black';
	
	//y.style.width = '80vw';
	y.style.height = '30vh';
	y.style.backgroundColor = 'yellow';
	//y.style.position = 'fixed';
	y.style.marginLeft = '20vw';
	//y.style.marginTop = '10vh';
	y.style.top = '10%';
	y.style.left = '77%';
	y.style.boxShadow = '1px 1px 15px black';
	y.setAttribute('id', 'yelmenu');
	y.setAttribute('class', 'yelbuttoncl');
	y.setAttribute('onmouseleave', 'removeMenu()');
	
	var lin = [];
	var ps = [];
	var lins = ['window.location.reload()', 'playSong()', 'applyFilter()', 'placeholder()', 'placeholder()'];
	var lintxt = ['Reload Page', 'Play Song', 'Blue-ify!', 'Another Item', 'Another Item']
	for(var i=0; i<lins.length; i++)
	{
		lin[i] = document.createElement('a');
		ps[i] = document.createElement('p');
		lin[i].setAttribute('onclick', lins[i]);
		lin[i].innerHTML = lintxt[i];
		lin[i].style.color = 'yellow';
		lin[i].style.backgroundColor = 'black';
		lin[i].style.padding = '5px';
		lin[i].style.cursor = 'pointer';
		ps[i].appendChild(lin[i]);
		ps[i].style.display = 'inline-block';
		ps[i].style.fontFamily = 'Ostrich Sans Rounded';
		ps[i].style.fontSize = '30px';
		ps[i].style.padding = '1px';
		ps[i].style.margin = '12% 0 5% 0';
		y.appendChild(ps[i]);
	}
	var check = document.getElementsByClassName('yelbuttoncl');
	while (check.length < 1)
	{
		//x.appendChild(y);
		
		if(document.getElementById('blueCover'))
		{
			x.insertBefore(y, document.getElementById('blueCover'));
			y.style.backgroundColor = '#cccccc';
		}
		else
		{
			x.insertBefore(y, x.querySelector('h1'));
		}
	}
}


function removeMenu()
{
	//get rid of menu on mouse leave
	var x = document.getElementById('yelmenu');
	x.parentNode.removeChild(x);
	var y = document.getElementById('yelbutton');
	y.style.boxShadow = '1px 1px 15px black';
}

function playSong()
{
	//set up the piano
	//setKeys();
	//
	animateInPiano();
}


function animTitle()
{
	//animate Earth title
	var x = document.getElementsByTagName('h1')[0];
	x.style.animationName = 'spill';
	x.style.animationDuration = '2s';
	x.style.animationIterationCount = 'infinite';
	x.style.animationDirection = 'alternate';
}

function unplay()
{
	//stop animating Earth title
	var x = document.getElementsByTagName('h1')[0];
	x.style.animationName = '';
}


function createCollage()
{
	//create a 3x3 grid of images and populate it with pics
	var x = document.getElementsByClassName('bmain')[2];
	x.style.background = 'yellow url(images/backyel2.png)';
	x.style.height = '140%';
	x.style.position = 'relative';
	var y = document.createElement('div');
	y.style.position = 'relative';
	y.style.width = '60%';
	y.style.display = 'inline-block';
	x.appendChild(y);
	var im = [];
	for(var i=0; i<9; i++)
	{
		im[i] = document.createElement('img');
		im[i].setAttribute('class',  'imcollage');
		im[i].setAttribute('float', 'left');
		im[i].setAttribute('src', 'images/'+i+'.jpg');
		im[i].setAttribute('onmouseover', 'view('+i+')');
		im[i].style.width = '32%';
		im[i].style.height ='32%';
		im[i].style.margin = '0px';
		im[i].style.border = '4px solid yellow';
		
		y.appendChild(im[i]);
	}
	
	createViewing();
}

function view(pic)
{
	//show big version of image which is under cursor
	var viewer = document.getElementById('viewer');
	var im = document.createElement('img');
	im.setAttribute('src', 'images/'+pic+'.jpg');
	im.style.width = '100%';
	im.style.zIndex = '0';
	
	var c = viewer.childNodes;
	if (c.length > 0)
	{
		while (c.length > 0)
		{
			c[0].parentNode.removeChild(c[0]);
		}
	}
	viewer.appendChild(im);
}

function createViewing()
{
	//create a window for viewing images
	var x = document.getElementsByClassName('bmain')[2];
	var y = document.createElement('div');
	y.style.display = 'inline-block';
	y.style.width = '30%';
	y.style.height = '40%';
	y.style.border = '15px solid black';
	y.style.position = 'absolute';
	y.style.top = '24%';
	y.style.left = '64%';
	y.style.zIndex = '1';
	y.setAttribute('float', 'right');
	y.setAttribute('id', 'viewer');
	x.appendChild(y);
}

function createUsThem()
{
	//create second section
	var x = document.getElementsByClassName('bmain')[1];
	x.style.height = '105%';
	var subx = [];
	for(var i=0; i<2; i++)
	{
		subx[i] = document.createElement('div');
		subx[i].style.width = '45%';
		subx[i].style.display = 'inline-block';
		subx[i].style.height = '94%';
		subx[i].style.margin = '2%';
		subx[i].setAttribute('class', 'usthem');
		x.appendChild(subx[i]);
	}
	
	subx[0].setAttribute('float', 'left');
	subx[0].innerHTML = '';
	subx[1].setAttribute('float', 'right');
	subx[1].innerHTML = '';
	
	fillUsThem(0, 'Us', 'images/bwus.jpg', 'Our special abilities, from big brains to opposable thumbs, have allowed us change our world dramatically.');
	fillUsThem(1, 'Them', 'images/bwthem.jpg', 'Many animals actually help people just by performing their natural roles in their environments.');
	
	styleUsThem();
}

function diffut(num)
{
	//changes the appearance of the subtitle(Us&Them) when hovered over
	var he = document.getElementsByClassName('uthead')[num];
	he.innerHTML = 'MORE INFO';
	if(document.getElementById('blueCover'))
	{
		he.style.color = '#cccccc';
		he.style.backgroundColor = '#996699';
	}
	else
	{
		he.style.color = 'black';
		he.style.backgroundColor = 'yellow';
	}
	he.style.cursor = 'pointer';
}

function revertut(num)
{
	//changes the appearance of the subtitle(Us&Them) back on mouse leave
	var he = document.getElementsByClassName('uthead')[num];
	if (num == 0)
	{
		he.innerHTML = 'Us';
	}
	else { he.innerHTML = 'Them'; }
	if(document.getElementById('blueCover'))
	{
		he.style.color = 'black';
		he.style.backgroundColor = '#cccccc';
	}
	else
	{
		he.style.color = 'yellow';
		he.style.backgroundColor = 'black';
	}
	he.style.cursor = 'auto';
}

function styleUsThem()
{
	//styling of Us Them section
	var im = document.getElementsByClassName('utpic');
	var he = document.getElementsByClassName('uthead');
	var pa = document.getElementsByClassName('utpar');
	for(var i=0; i<2; i++)
	{
		im[i].style.border = '0.25px solid yellow';
		im[i].style.width = '55%';
		im[i].style.display = 'block';
		im[i].style.margin = '0 auto';
		
		he[i].style.textAlign = 'center';
		he[i].style.width = '140px';
		he[i].style.fontFamily = 'Ostrich Sans Rounded';
		he[i].style.color = 'yellow';
		he[i].style.margin = '40px auto 60px auto';
		he[i].style.fontSize = '40px';
		he[i].setAttribute('onmouseover', 'diffut('+i+')');
		he[i].setAttribute('onmouseleave', 'revertut('+i+')');
		
		pa[i].style.textAlign = 'justify';
		pa[i].style.width = '70%';
		pa[i].style.display = 'block';
		pa[i].style.margin = '0 auto';
		pa[i].style.padding = '5px';
		pa[i].style.fontFamily = 'Titillium Web';
		pa[i].style.fontWeight = 'bold';
		pa[i].style.fontSize = '21px';
		pa[i].style.color = 'black';
		pa[i].style.backgroundColor = 'yellow';
	}
}




function fillUsThem(num, head, image, txt)
{
	//fills section with elevant data (from createUsThem())
	var x = document.getElementsByClassName('usthem')[num];
	var pic = document.createElement('img');
	pic.setAttribute('src', image);
	pic.setAttribute('class', 'utpic');
	var subhead = document.createElement('h2');
	subhead.setAttribute('class', 'uthead');
	var cont = document.createTextNode(head);
	subhead.appendChild(cont);
	var tx = document.createElement('p');
	tx.setAttribute('class', 'utpar');
	var txcont = document.createTextNode(txt);
	tx.appendChild(txcont);
	x.appendChild(pic);
	x.appendChild(subhead);
	x.appendChild(tx);
	x.style.position = 'relative';
}

function createLanding()
{
	//create and style landing page
	var x = document.getElementsByClassName('bmain')[0];
	x.style.backgroundImage = "url('images/bwheader.jpg')";
	x.style.backgroundPosition = 'center bottom';
	x.style.position = 'relative';
	//x.style.width = '100vw';
	x.style.backgroundSize = 'cover';
	
	var title = document.createElement('h1');
	var tx = document.createTextNode('Earth');
	title.appendChild(tx);
	title.style.backgroundColor = 'yellow';
	title.style.padding = '40px';
	title.style.width = '40%';
	title.style.position= 'absolute';
	title.style.top = '40%';
	title.style.fontFamily = 'Ostrich Sans';
	title.style.fontWeight = '700';
	title.style.fontSize = '120px';
	title.style.color = 'black';
	title.setAttribute('onmouseover', 'animTitle()');
	title.setAttribute('onmouseleave', 'unplay()');
	//title.style.color = '#373737';
	
	x.appendChild(title);
	
}



function createBasicFrame()
{
	//create basic outline of part B & create footer
	var divs = [];
	var bod = document.getElementsByTagName('body');
	for(var i=0; i<4; i++)
	{
		divs[i] = document.createElement('div');
		divs[i].setAttribute('class', 'bmain');
		divs[i].setAttribute('overfow', 'hidden');
		divs[i].style.width = '99%';
		divs[i].style.height = '60px';
		divs[i].style.marginBottom = '10px';
		divs[i].style.padding = '5px';
		bod[0].appendChild(divs[i]);
	}
	divs[0].style.height = '100vh';
	divs[0].style.backgroundColor = 'blue';
	
	//divs[1].style.backgroundColor = 'red';
	//divs[2].style.backgroundColor = 'green';
	divs[3].style.backgroundColor = 'black';
	divs[3].style.position = 'relative';
	var end = document.createElement('p');
	var endcont = document.createTextNode('Client Side Scripting - Mark Molloy - s00165174 - 2016');
	end.appendChild(endcont);
	end.style.textAlign = 'center';
	end.style.color = 'black';
	end.style.backgroundColor = 'yellow';
	end.style.fontFamily = 'Ostrich Sans';
	end.style.fontSize = '30px';
	end.style.position = 'absolute';
	end.style.top = '20%';
	end.style.left = '30%';
	end.style.padding = '0px 30px';
	divs[3].appendChild(end);
	
}


function createBlankCanvas()
{
	//remove everything - clean slate
	var x = document.getElementsByTagName('div');
	var y = document.getElementsByTagName('body');
	y[0].style.maxWidth = '100vw';
	//y[0].style.overflow = 'hidden';
	while (x.length > 0)
	{
		x[0].parentNode.removeChild(x[0]);
	}
	y[0].style.backgroundColor = 'black';
}


function applyFilter()
{
	//can be selected from menu
	//Blues everything!
	var images = document.querySelectorAll('img');
	for(var i=0;i<images.length;i++)
	{
		//general images
		images[i].style.webkitFilter = 'contrast(190%)';
		images[i].style.border = '0.25px solid #006699';
	}
	var text = ['p', 'h1', 'h2','h3', 'h4'];
	var div = document.querySelectorAll('div');
	for(var j=0;j<div.length;j++)
	{
		//all text 
		div[j].style.color = '#006699';
		if(div[j].style.backgroundColor == 'yellow' || div[j].style.background == 'yellow')
		{
			div[j].style.backgroundColor = '#cccccc';
		}

		for(var k=0;k<text.length;k++)
		{
			var text0 = div[j].querySelectorAll(text[k]);
			for(var l=0;l<text0.length;l++)
			{
				text0[l].style.color = '#006699';
				text0[l].style.backgroundColor = '#cccccc';
			}
		}
	}
	//this one is a bit different cos it has an image background
	var x = document.getElementsByClassName('bmain')[2];
	x.style.background = '#996699 url(images/backyel2.png)';
	//cover background image to tint it
	var landing = document.getElementsByClassName('bmain')[0];
	var landingCover = document.createElement('div');
	landingCover.setAttribute('id', 'blueCover');
	landingCover.style.width = '99.5%';
	landingCover.style.height = '100%';
	landingCover.style.backgroundColor = '#006699';
	landingCover.style.opacity = '0.2';
	landingCover.style.position = 'absolute';
	//landing.appendChild(landingCover);
	landing.insertBefore(landingCover, landing.querySelector('h1'));
}


function imageWiggleTimer()
{
	//Wiggle pics at bottom of page
	setInterval(function(){ var images = document.getElementsByClassName('imcollage');
	var i = getRandomInt(0, images.length-1);
	images[i].style.animationName = 'shake';
	images[i].style.animationDuration = '1000ms';
	setTimeout(function(){ images[i].style.animationName = '';}, 1100)}, 1200);
}

function imageWiggle()
{
	var images = document.getElementsByClassName('imcollage');
	var i = getRandomInt(0, images.length-1);
	images[i].style.animationName = 'shake';
	images[i].style.animationDuration = '200ms';
}

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//			PART B
//			END OF PART B
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//			PIANO
//			THESE BITS MAKE THE PIANO ON PART B WORK
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//animateInPiano();
//setTimeout(song, 1800);

function animateInPiano()
{
	//create and animate a div to house the piano
	//set the other piano related functions rolling 
	var holder = document.createElement('div');
	holder.setAttribute('id', 'holderPiano');
	holder.style.animationName = 'holderPianoIn';
	holder.style.animationDuration = '1.5s';
	holder.style.animationFillMode = 'forwards';
	holder.style.background = 'yellow';
	//holder.style.display = 'inline-block';
	//var spacer = document.getElementById('space');
	document.body.appendChild(holder);
	setTimeout(createPiano, 1500);
	createX(holder);
}


function createX(parent)
{
	//create an x to escape 
	var x = document.createElement('div');
	var y = document.createElement('p');
	y.textContent = 'X';
	y.style.textAlign = 'center';
	y.style.padding = '10px 0 10px 0';
	y.style.margin = '0px';
	x.appendChild(y);
	x.style.background = 'black';
	x.style.color = 'yellow';
	x.style.height = '40px';
	x.style.width = '40px';
	x.style.borderRadius = '50%';
	x.style.position = 'absolute';
	x.style.top = '-5%'
	x.style.left = '98.5%'
	x.setAttribute('id', 'x');
	x.setAttribute('onclick', 'removeThis()');
	x.style.cursor = 'pointer';
	
	parent.appendChild(x);
}


function removeThis()
{
	//there will only be one x at a time
	var x = document.getElementById('x');
	x.parentNode.parentNode.removeChild(x.parentNode);
}

function createPiano()
{
	//create a piano and populate with keys
	var piano = document.createElement('div');
	piano.setAttribute('id', 'piano');
	piano.style.animationName ='pianoIn';
	piano.style.animationDuration = '1.2s';
	piano.style.animationTimingFunction = 'ease-in-out';
	piano.style.animationFillMode = 'forwards';
	//var individualKeys = [];
	for(var i=0;i<12;i++)
	{
		var individualKey = document.createElement('div');
		individualKey.setAttribute('class', 'key');
		individualKey.textContent = (i+1);
		individualKey.style.cursor = 'pointer';
		piano.appendChild(individualKey);
	}
	document.getElementById('holderPiano').appendChild(piano);
	addAudioAndEventToEachKey();
}



function addAudioAndEventToEachKey()
{
	//add an audio tag and mouse events 
	var individualKeys = document.getElementsByClassName('key');
	var notes = ['a', 'bb', 'b', 'c','cs', 'd', 'eb', 'e', 'f', 'fs', 'g', 'gs'];
	var audioTags = [];
	var sourceTags = [];
	var noteFile = [];
	for(var i=0;i<individualKeys.length;i++)
	{
		audioTags[i] = document.createElement('audio');
		sourceTags[i] = document.createElement('source');
		noteFile = 'sounds/' + notes[i] + '.wav';
		sourceTags[i].setAttribute('src', noteFile);
		audioTags[i].appendChild(sourceTags[i]);
		individualKeys[i].appendChild(audioTags[i]);
		individualKeys[i].setAttribute('onmousedown', 'playNote('+i+')');
		individualKeys[i].setAttribute('onmouseup', 'releaseNote('+i+')');
		individualKeys[i].setAttribute('onmouseleave', 'releaseNote('+i+')');
	}
}

function playNote(i)
{
	//when piano key is activated
	var individualKey = document.getElementsByClassName('key')[i];
	individualKey.style.boxShadow = 'inset 15px 0px 23px -5px rgba(0,0,0,0.75)';
	var audio = document.getElementsByTagName("audio")[i];
	audio.currentTime = 1;
	audio.play();
}

function releaseNote(i)
{
	//when piano key is deactivated
	var individualKey = document.getElementsByClassName('key')[i];
	individualKey.style.boxShadow = '';
	var audio = document.getElementsByTagName("audio")[i];
	setTimeout( function(){audio.pause();}, 200);
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//			
//			END OF PIANO
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/*function setVidPlayer()
{
	var a = document.createElement('div');
	var b = document.createElement('div');
	b.setAttribute('id', 'player');
	a.appendChild(b);
	a.setAttribute('class', 'popup');
	var x = document.getElementsByTagName('body');
	x[0].appendChild(a);
}*/

/*function playSong()
{
	var x = document.getElementsByTagName('body');
	x[0].appendChild(ply);
	ply.style.display = 'block';
	//loadvid();
}

function onYouTubeIframeAPIReady() {
  var player;
  player = new YT.Player('player', {
    videoId: 'M7lc1UVf-VE',
    playerVars: { 'autoplay': 1, 'controls': 0 },
    events: {
      'onReady': onPlayerReady,
      //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      'onStateChange': onPlayerStateChange,
      //'onError': onPlayerError
    }
  });
}
function onPlayerReady(event) {
        event.target.pauseVideo();
      }
function onPlayerStateChange()
{}
*/
/*function alterBack()
{
	var x = document.getElementById('header-wrapper');
	var y = changePic();
	x.style.backgroundImage = y;
	x.setAttribute('style', 'height: 70vh; background-size: cover; background-position: center; margin-bottom: 50px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;');
	var interval = setInterval(alterBack, 500);
}
function changePic()
{
	var x = document.getElementById('header-wrapper');
	var y = window.getComputedStyle(x,null).getPropertyValue('background-image');
	//var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
	//var y = x.style.backgroundImage;
	var next;
	if (y === 'url(images/bcg0.jpg)') { next = 'url(images/bcg1.jpg)';}
	else if (y === 'url(images/bcg1.jpg)') { next = 'url(images/bcg2.jpg)';}
	else if (y === 'url(images/bcg2.jpg)') { next = 'url(images/bcg3.jpg)';}
	else if (y === 'url(images/bcg3.jpg)') { next = 'url(images/bcg0.jpg)';}
	else {next = 'url(images/bcg0.jpg)';}
	return next;
}*/
/*function moveImagesNotWorking()
{
	var x = document.getElementsByClassName('image-full');
	var y = document.getElementById('header');
	for(var i = 0; i < 4; i++)
	{
		y.appendChild(x[i]);
		x[i].style.width = '282px';
		if (i < 3)
		{
			x[i].setAttribute('float', 'left');
			x[i].setAttribute('margin-right', '24px');
		}
		else 
		{ 
			x[i].setAttribute('float', 'left');
		}
	}
}

function moveImages()
{
	var x1 = document.getElementsByClassName('column1');
	var x2 = document.getElementsByClassName('column2');
	var x3 = document.getElementsByClassName('column3');
	var x4 = document.getElementsByClassName('column4');
	var y = document.getElementById('header');
	y.appendChild(x1[0]);
	y.appendChild(x2[0]);
	y.appendChild(x3[0]);
	y.appendChild(x4[0]);	

}*/
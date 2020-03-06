var files = [{
		name: "BMI",
		href: "BMI.html",
		thumbnail: 'bmi'
	},
	{
		name: "Click Me",
		href: "clickme.html",
		thumbnail: 'click_me'
	},
	{
		name: "Draw Graph",
		href: "DrawGraphBasic.html",
		thumbnail: 'graph'
	},
	{
		name: "Basic Clock",
		href: "DigitalClock_Plain.html",
		thumbnail: 'basic_clock'
	},
	{
		name: "Calender",
		href: "Calender.html",
		thumbnail: 'calender_basic'
	},
	{
		name: "Calculator",
		href: "BasicCalculator.html",
		thumbnail: 'calculator_basic'
	},
	{
		name: "Converter(All)",
		href: "Converter.html",
		thumbnail: 'converter_all'
	},
	{
		name: "Digital Clock (Time Indicator)",
		href: "GiantClockDigital.html",
		thumbnail: 'digital_clock_dark'
	},
	/*{
		name: "Hangman",
		href: "hangman.html"
	},*/
	{
		name: "Diwali",
		href: "HappyDiwali.html",
		thumbnail: 'diwali'
	},
	{
		name: "Valentine wish",
		href: "hBeats.html",
		thumbnail: 'valentine'
	},
	/*{
		name: "HNY 2019",
		href: "hpn2019.html"
	},*/
	{
		name: "Loader (Rope Bundle)",
		href: "Loader1.html",
		thumbnail: 'loader_rope'
	},
	{
		name: "Message Container",
		href: "Message.html",
		thumbnail: 'message'
	},
	{
		name: "Point tracker",
		href: "Point Tracking Tool.html",
		thumbnail: 'point_tracker'
	},
	{
		name: "Morse it up",
		href: "morseConverter.html",
		thumbnail: 'morse'
	},
	{
		name: "Rock-Paper-Scissor",
		href: "RockPaperScissor.html",
		thumbnail: 'rock_paper_scisor'
	},
	{
		name: "Roll A dice",
		href: "Roll-A-Dice.html",
		thumbnail: 'roll_dice'
	},
	{
		name: "Text-Binart-Text",
		href: "TextToBinaryAndViceVersa.html",
		thumbnail: 'text_to_binary'
	},
	{
		name: "Tic-Tac-Toe",
		href: "TicTacToe.html",
		thumbnail: 'tic_tac_toe'
	},
	{
		name: "Dice Roll",
		href: "diceroll.html",
		thumbnail: 'dice_roll'
	},
	{
		name: 'My Resume',
		href: 'Resume.html',
		thumbnail: 'resume'
	}

].sort( (a, b) => a.name.localeCompare(b.name)  );

const createCard = (data) => {
	// Outer body
	let outDiv = document.createElement('DIV');
	outDiv.classList.add('card');
	
	// Image
	let img = document.createElement('IMG');
	img.classList.add('card-img-top');
	img.setAttribute('src', './snapshot/' +  (data.thumbnail) + '.png');
	img.setAttribute('alt', data.name + "; href:  " + data.href);
	outDiv.appendChild(img);
	img = null;
	// card body
	let bodyDiv = document.createElement('DIV');
	bodyDiv.classList.add('card-body');
	let h4 = document.createElement('H4');
	h4.innerText = data.name;
	h4.classList.add('card-title');
	bodyDiv.appendChild(h4);
	h4 = null;
	if (data.detail) {
		let p = document.createElement('p');
		p.classList.add('card-tex');
		p.innerText = data.detail;
		bodyDiv.appendChild(p);
		p = null;
	}
	outDiv.appendChild(bodyDiv);
	// set width

	// add event
	outDiv.addEventListener('click', (e) => {
		window.open('./html/' +  data.href, '_blank');
	});
	return outDiv;
};
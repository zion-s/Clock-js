const lightMode = document.getElementById('light');
const darkMode = document.getElementById('dark');

lightMode.addEventListener("click", ()=>{
	document.querySelector('.page').style.backgroundColor="var(--light-color)";
	document.querySelector('.clock').style.backgroundColor="rgba(255,255,255,0.8)";
	document.querySelector('.clock').style.border="12px solid black";
	document.querySelector('.clock').style.boxShadow="inset 5px 5px 8px 2px rgba(0, 0, 0, 0.3)";
	let nums = document.getElementsByClassName('number');
	for (let i = 0; i < nums.length; i++) {
		nums[i].style.color='black';
	};
	document.getElementById('hourHand').style.backgroundColor="black";
	document.getElementById('minuteHand').style.backgroundColor="black";
	document.querySelector('.date').style.color="black";
});

darkMode.addEventListener("click", ()=>{
	document.querySelector('.page').style.backgroundColor="var(--dark-color)";
	document.querySelector('.clock').style.backgroundColor="var(--dark-color)";
	document.querySelector('.clock').style.border="none";
	document.querySelector('.clock').style.boxShadow="none";
	let nums = document.getElementsByClassName('number');
	for (let i = 0; i < nums.length; i++) {
		nums[i].style.color='var(--light-color)';
	};
	document.getElementById('hourHand').style.backgroundColor="var(--light-color)";
	document.getElementById('minuteHand').style.backgroundColor="var(--light-color)";
	document.querySelector('.date').style.color="var(--light-color)";
});

const secondHand=document.querySelector('#secondHand');
const minuteHand=document.querySelector('#minuteHand');
const hourHand=document.querySelector('#hourHand');

clockStart=()=>{
	const date = new Date();
	const hour = date.getHours()%12;//12 hour clock time
	const minute = date.getMinutes();
	const second = date.getSeconds();

	const hourDeg = (hour+ (minute/60)) * 30 ;//30 degrees movement for evry hour passed
	const minDeg = (minute + (second/60)) * 6;//6 degrees movement for every minute passed
	const secDeg = second * 6;//6 degrees movement for every second passed

	hourHand.style.transform = 'translateX(-50%)';//this style in css was being overridden, hence included it in JS file
	hourHand.style.transform += 'rotate('+hourDeg+'deg)';//cannot include in the same line; need to use += to add multiple transforms
	minuteHand.style.transform = 'translateX(-50%)';
	minuteHand.style.transform += 'rotate('+minDeg+'deg)';
	secondHand.style.transform = 'translateX(-50%)';
	secondHand.style.transform += 'rotate('+secDeg+'deg)';

	setTimeout(clockStart, 1000);

	const dayOfWeek = document.querySelector('.dayOfWeek');
	const day = document.querySelector('.day');
	const month = document.querySelector('.month');
	const year = document.querySelector('.year');

	const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthName = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	dayOfWeek.innerHTML = weekDay[date.getDay()];
	day.innerHTML = date.getDate();
	month.innerHTML = monthName[date.getMonth()];
	year.innerHTML = date.getFullYear();
}

clockStart();


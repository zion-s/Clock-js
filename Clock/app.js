const secondHand=document.querySelector('#secondHand');
const minuteHand=document.querySelector('#minuteHand');
const hourHand=document.querySelector('#hourHand');

clockStart=()=>{
	const date = new Date();
	const hour = date.getHours()%12;//12 hour clock time
	const minute = date.getMinutes();
	const second = date.getSeconds();

	const hourDeg = hour * 30;//30 degrees movement for evry hour passed
	const minDeg = minute * 6;//6 degrees movement for every minute passed
	const secDeg = second * 6;//6 degrees movement for every second passed

	hourHand.style.transform = 'translateX(-50%)';//this style in css was being overridden, hence included it in JS file
	hourHand.style.transform += 'rotate('+hourDeg+'deg)';//cannot include in the same line; need to use += to add multiple transforms
	minuteHand.style.transform = 'translateX(-50%)';
	minuteHand.style.transform += 'rotate('+minDeg+'deg)';
	secondHand.style.transform = 'translateX(-50%)';
	secondHand.style.transform += 'rotate('+secDeg+'deg)';

	setTimeout(clockStart, 1000);
}

clockStart();
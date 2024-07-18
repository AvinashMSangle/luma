const now = new Date();
const OurTime = now.getHours()+":"+ now.getMinutes()+" GMT+5:30" ;
console.log(OurTime);

const timeEl = document.querySelector(".time");
timeEl.textContent= OurTime;
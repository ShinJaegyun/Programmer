const today = new Date();
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const str = day[today.getDay()] + ', ' + (("00" + today.getMonth()).slice(-2)) + '월 ' +  (("00" + today.getDate()).slice(-2)) + '일';
document.write(str)
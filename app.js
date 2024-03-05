let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar_dates");
const currentDate = document.querySelector(".calendar_data");
const navigationIcon = document.querySelectorAll(".navigation");

const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];
 

function startCalendar() {
    let dayOne = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();
    let dayEnd = new Date(year, month, lastDate).getDay();
    let monthLastDate = new Date(year, month, 0).getDate();
    
    let lit = "";
    for (let i = dayOne; i > 0; i--) {
        lit +=`<li class="inactive">${monthLastDate - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDate; i++) {
 
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "date"
            : "";
             if ((dayOne + i - 1) % 7 === 5) {
                isToday = "blue";
            } else if ((dayOne + i - 1) % 7 === 6) {
                isToday = "red";
            }
                
            
        lit += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = dayEnd; i < 6; i++) {
        lit += `<li class="inactive">${i - dayEnd + 1}</li>`
    }

    currentDate.innerHTML = `${months[month]} ${year}`;
    day.innerHTML = lit;
}
startCalendar()

navigationIcon.forEach(icon => {
 
    icon.addEventListener("click", () => {
        
        month = icon.id === "left" ? month - 1 : month + 1;
        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }
    
        startCalendar()
    });
});
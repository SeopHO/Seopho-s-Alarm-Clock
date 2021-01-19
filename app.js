const view = document.querySelectorAll(".view");

const view_hour = document.querySelector(".view-hour");
const view_minute = document.querySelector(".view-minute");
const view_second = document.querySelector(".view-second");

const start_btn = document.querySelector(".start-btn");

let time_pos = null;



// const styles_d = event.currentTarget.classList;
// if(styles_d.contains("decrease"))
// {
//     if(styles_d.contains("hour-decrease"))
//     {
//         hour--;
//         if(hour < 0)
//             hour = 23;
//         view_hour.textContent = detail(hour);
//     }
//     else if(styles_d.contains("minute-decrease"))
//     {
//         min--;
//         min = detail2(min);
//         view_minute.textContent = detail(min);
//     }
//     else if(styles_d.contains("second-decrease"))
//     {
//         sec--;
//         sec=detail2(sec);
//         view_second.textContent = detail(sec);
//     }
// }

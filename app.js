const views = document.querySelectorAll(".view");

const view_hour = document.querySelector(".view-hour h1");
const view_minute = document.querySelector(".view-minute h1");
const view_second = document.querySelector(".view-second h1");

const start_btn = document.querySelector(".start-btn");
const btn_design =document.querySelector(".start h2");

const popup = document.getElementById("pop-up");
const popUp = document.querySelector(".popUp");


let time_pos = null;

let clickCheck = false;
let keydonwCheck = false; 

let hour_value=0;
let min_value=0;
let sec_value=0;

const _HOUR = "hour";
const _MIN = "minute";
const _SEC = "second";

views.forEach(function(view)
{
    view.addEventListener("click",function(event)
    {
        clickCheck = true;
        // console.log(clickCheck);
        
        const style = event.currentTarget.classList;
        console.log(style);
        if(style.contains("view-hour"))
        {
            popup.classList.toggle("popUp");
            time_pos=_HOUR;
        }
        else if(style.contains("view-minute"))
        {
            popup.classList.toggle("popUp");
            time_pos = _MIN;
        }
        else if(style.contains("view-second"))
        {
            popup.classList.toggle("popUp");
            time_pos = _SEC;
        }
        console.log(time_pos);
        
    })
});

window.addEventListener("keydown",function(event)
{
    switch(event.keyCode)
    {
        case 38:
            console.log('위');
            increaseHandler();
            keydonwCheck=true;
            if(clickCheck === true)
            {
                btn_design.textContent = "▶";
            }
            break;
        case 40:
            console.log('아래');
            decreaseHandler();
            keydonwCheck=true;
            if(clickCheck === true)
            {
                btn_design.textContent = "▶";
            }
            break;
    }
});

start_btn.addEventListener("click", function () 
{
    if (clickCheck === true && keydonwCheck == true )
        if(hour_value != 0 || min_value != 0 || sec_value != 0)
        {
            let timer = setInterval(function () {
                sec_value--;
                if(sec_value < 0)
                {
                    min_value--;
                    sec_value = 59;
                }
                if(min_value<0)
                {
                    hour_value--;
                    min_value = 59;
                }
                view_second.textContent = detail(sec_value);
                view_minute.textContent = detail(min_value);
                view_hour.textContent=detail(hour_value);
                if (hour_value === 0 && min_value === 0 && sec_value === 0) {
                    clearInterval(timer);
                }
            }, 1000);
        }
});
    
function increaseHandler()
{
    switch(time_pos)
    {
        case _HOUR:
            hour_value++;
            if (hour_value > 23)
                hour_value = 0;
            view_hour.textContent = detail(hour_value);
            break;
        case _MIN:
            min_value++;
            if(min_value>59)
                min_value=0;
            view_minute.textContent = detail(min_value);
            break;
        case _SEC:
            sec_value++;
            if(sec_value>59)
                sec_value=0;
            view_second.textContent = detail(sec_value);
            break;
    }
}

function decreaseHandler()
{
    switch(time_pos)
    {
        case _HOUR:
            hour_value--;
            if(hour_value<0)
                hour_value=23;
            view_hour.textContent = detail(hour_value);
            break;
        case _MIN:
            min_value--;
            if(min_value<0)
                min_value=59;
            view_minute.textContent = detail(min_value);
            break;
        case _SEC:
            sec_value--;
            if(sec_value<0)
                sec_value=59;
            view_second.textContent = detail(sec_value);
            break;
    }
}

function detail(value)
{
    if(value<10)
    {
        return `0${value}`;
    }
    else
    {
        return value;
    }
}

function Check()
{
    if(clickCheck === false && keydonwCheck == false)
    {
    }
}

function init()
{
    Check();
}

init();






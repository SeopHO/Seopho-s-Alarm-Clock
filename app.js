const views = document.querySelectorAll(".view");

const view_hour = document.querySelector(".view-hour h1");
const view_minute = document.querySelector(".view-minute h1");
const view_second = document.querySelector(".view-second h1");

const start_btn = document.querySelector(".start-btn");

let time_pos = null;
let clickCheck = false;
let keydownCheck = false; 

let hour_value=0;
let min_value=0;
let sec_value=0;

const _HOUR = "hour";
const _MIN = "minute";
const _SEC = "second";
const _WRONG = "wrong";
const _START = "start";
const _PAUSE = "pause";

let buttonStatus=_WRONG;

let pause_mode = false;

window.addEventListener("load",function()
{
    buttonCheck();
});

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
            time_pos=_HOUR;
            PopupCheck();
        }
        else if(style.contains("view-minute"))
        {
            time_pos = _MIN;
            PopupCheck();
        }
        else if(style.contains("view-second"))
        {
            time_pos = _SEC;
            PopupCheck();
        }
        console.log(time_pos);
    })
});

window.addEventListener("keydown",function(event)
{
    switch(event.keyCode)
    {
        case 38:
            // console.log('위');
            increaseHandler();
            keydownCheck=true;
            if(clickCheck === true)
            {
                // btn_design.classList.add("fa-play");
                buttonStatus= _START;
                buttonCheck();
            }
            break;
        case 40:
            // console.log('아래');
            decreaseHandler();
            keydownCheck=true;
            if(clickCheck === true)
            {
                buttonStatus= _START;
                buttonCheck();
            }
            break;
    }
});

start_btn.addEventListener("click", function () 
{
    if(clickCheck === true && keydownCheck == true && (hour_value != 0 || min_value != 0 || sec_value != 0)) 
    {
        time_pos = _START;
        PopupCheck();
        buttonStatus = _PAUSE;
        buttonCheck();
        let timer = setInterval(function () 
        {
            sec_value--;
            if (sec_value < 0) 
            {
                min_value--;
                sec_value = 59;
            }
            if (min_value < 0) 
            {
                hour_value--;
                min_value = 59;
            }
            view_second.textContent = detail(sec_value);
            view_minute.textContent = detail(min_value);
            view_hour.textContent = detail(hour_value);
            if(hour_value === 0 && min_value === 0 && sec_value === 0) 
            {
                buttonStatus = _WRONG;
                buttonCheck();
                clearInterval(timer);
            }
        }, 1000);
    }
    else 
    {
        time_pos = _WRONG;
        PopupCheck();
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





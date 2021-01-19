const views = document.querySelectorAll(".view");

const view_hour = document.querySelector(".view-hour h1");
const view_minute = document.querySelector(".view-minute h1");
const view_second = document.querySelector(".view-second h1");

const start_btn = document.querySelector(".start-btn");

let time_pos = null;

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
        const style = event.currentTarget.classList;
        console.log(style);
        if(style.contains("view-hour"))
        {
            time_pos=_HOUR;
        }
        else if(style.contains("view-minute"))
        {
            time_pos = _MIN;
        }
        else if(style.contains("view-second"))
        {
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
            break;
        case 40:
            console.log('아래');
            decreaseHandler();
            break;
    }
});

function increaseHandler()
{
    switch(time_pos)
    {
        case _HOUR:
            hour_value++;
            view_hour.textContent = hour_value;
            break;
        case _MIN:
            min_value++;
            view_minute.textContent = min_value;
            break;
        case _SEC:
            sec_value++;
            view_second.textContent = sec_value;
            break;
    }
    
}

function decreaseHandler()
{
    switch(time_pos)
    {
        case _HOUR:
            hour_value--;
            view_hour.textContent = hour_value;
            break;
        case _MIN:
            min_value--;
            view_minute.textContent = min_value;
            break;
        case _SEC:
            sec_value--;
            view_second.textContent = sec_value;
            break;
    }
}



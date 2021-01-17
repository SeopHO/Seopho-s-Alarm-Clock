const decreaseS = document.querySelectorAll(".decrease");
const increaseS = document.querySelectorAll(".increase");

const view = document.querySelector("view");
const view_hour = document.querySelector(".view-hour");
const view_minute = document.querySelector(".view-minute");
const view_second = document.querySelector(".view-second");

let hour=0,min=0,sec=0;

decreaseS.forEach(function(decrease)
{
    decrease.addEventListener("click",function(event)
    {
        const styles_d = event.currentTarget.classList;
        // const test = event.currentTarget;
        // console.log(styles);
        // console.log(test);
        
        if(styles_d.contains("decrease"))
        {
            if(styles_d.contains("hour-decrease"))
            {
                hour--;
                view_hour.textContent = detail(hour);
            }
            else if(styles_d.contains("minute-decrease"))
            {
                min--;
                min = detail2(min);
                view_minute.textContent = detail(min);
            }
            else if(styles_d.contains("second-decrease"))
            {
                sec--;
                sec=detail2(sec);
                view_second.textContent = detail(sec);
            }
        }
    });
});

increaseS.forEach(function(btn)
{
    let what;
    btn.addEventListener("click",function(event)
    {
        const styles_i = event.currentTarget.classList;
        // console.log(styles);
        if(styles_i.contains("increase"))
        {
            if(styles_i.contains("hour-increase"))
            {
                hour++;
                view_hour.textContent = detail(hour);
            }
            else if(styles_i.contains("minute-increase"))
            {
                min++;
                min = detail2(min);
                view_minute.textContent = detail(min);
            }
            else if(styles_i.contains("second-increase"))
            {
                sec++;
                sec=detail2(sec);
                view_second.textContent = detail(sec);
            }
        }
        
    });
});

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

function detail2(value)
{
    if(value<0)
    {
        value = 59;
        return value;
    }
    else if(value>59)
    {
        value=0;
        return value;
    }
    else
    {
        return value;
    }
}

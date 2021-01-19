const decreaseS = document.querySelectorAll(".decrease");
const increaseS = document.querySelectorAll(".increase");

const view_hour = document.querySelector(".view-hour");
const view_minute = document.querySelector(".view-minute");
const view_second = document.querySelector(".view-second");

const timer = document.querySelector(".timer-start");

let hour=0,min=0,sec=0; //default.

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

decreaseS.forEach(function(decrease)
{
    decrease.addEventListener("click",function(event)
    {
        const styles_d = event.currentTarget.classList;
        if(styles_d.contains("decrease"))
        {
            if(styles_d.contains("hour-decrease"))
            {
                hour--;
                if(hour < 0)
                    hour = 23;
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
        if(styles_i.contains("increase"))
        {
            if(styles_i.contains("hour-increase"))
            {
                hour++;
                if(hour>23)
                    hour=0;
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

timer.addEventListener("click",function()
{
    console.log(hour,min,sec);

    let time = setInterval(function()
    {
        sec--;
        if(hour === 0 && min === 0 && sec === 0)
        {
            alert("END");
            clearInterval(time);
        }
        if(sec<0)
        {
            sec = 59;
            min--;
        }
        if(min<0)
        {
            min=59;
            hour--;
        }
        
        view_hour.textContent = detail(hour);
        view_minute.textContent = detail(min);
        view_second.textContent = detail(sec);
    },1000);

})


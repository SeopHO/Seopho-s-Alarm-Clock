

window.addEventListener("load",function()
{
    buttonCheck();
});

views.forEach(function (view) 
{
    view.addEventListener("click", function(event) 
    {
        if(timer.wrong_mode === true)
        {
            timer.clickCheck = true;
            // console.log(clickCheck);
    
            const style = event.currentTarget.classList;
            // console.log(style);
            if (style.contains("view-hour")) {
                timer.time_select = _HOUR;
                PopupCheck();
            }
            else if (style.contains("view-minute")) {
                timer.time_select = _MIN;
                PopupCheck();
            }
            else if (style.contains("view-second")) {
                timer.time_select = _SEC;
                PopupCheck();
            }
            console.log(timer.time_select);
        }

    })

});

function buttonReset()
{
    timer.wrong_button = false;
    timer.operate_button = false;
    timer.pause_button = false;
}

window.addEventListener("keydown",function(event)
{
    if(timer.wrong_mode === true)
    {
        switch(event.keyCode)
        {
            case 38:
                // console.log('위');
                if(timer.clickCheck === true)
                {
                    timer.keydownCheck=true;
                    buttonReset();
                    timer.operate_button = true;
                    buttonCheck();
                    increaseHandler();
                }
                break;
            case 40:
                // console.log('아래');            
                if(timer.clickCheck === true)
                {
                    timer.keydownCheck=true;
                    buttonReset();
                    timer.operate_button = true;
                    buttonCheck();
                    decreaseHandler();
                }
                break;
        }
    }
});

button.addEventListener("click", function(event) 
{
    const style = event.currentTarget.classList;
    console.log(style);
    if(style.contains("fa-times"))
    {
        
    }
    else if(style.contains("fa-play"))
    {
        buttonReset();
        timer.pause_button = true;
        buttonCheck();
    }
    else if(style.contains("fa-pause"))
    {
        buttonReset();
        timer.operate_button = true;
        buttonCheck();
    }
    if(timer.clickCheck === true && timer.keydownCheck == true && (timer.hour_value != 0 || timer.min_value != 0 || timer.sec_value != 0)) 
    {
        timer.time_select = _START;
        PopupCheck();
        buttonStatus = _PAUSE;
        buttonCheck();
        let timer = setInterval(function() 
        {
            timer.sec_value--;
            if (timer.sec_value < 0) 
            {
                timer.min_value--;
                timer.sec_value = 59;
            }
            if (timer.min_value < 0) 
            {
                timer.hour_value--;
                timer.min_value = 59;
            }
            view_second.textContent = detail(timer.sec_value);
            view_minute.textContent = detail(timer.min_value);
            view_hour.textContent = detail(timer.hour_value);
            if(timer.hour_value === 0 && timer.min_value === 0 && timer.sec_value === 0) 
            {
                buttonStatus = _WRONG;
                buttonCheck();
                clearInterval(timer);
            }
        }, 1000);
    }
    else 
    {
        timer.time_select = _WRONG;
        PopupCheck();
    }
});

function increaseHandler()
{
    switch(timer.time_select)
    {
        case _HOUR:
            timer.hour_value++;
            if (timer.hour_value > 23)
                timer.hour_value = 0;
            view_hour.textContent = detail(timer.hour_value);
            break;
        case _MIN:
            timer.min_value++;
            if(timer.min_value>59)
                timer.min_value=0;
            view_minute.textContent = detail(timer.min_value);
            break;
        case _SEC:
            timer.sec_value++;
            if(timer.sec_value>59)
                timer.sec_value=0;
            view_second.textContent = detail(timer.sec_value);
            break;
    }
}

function decreaseHandler()
{
    switch(timer.time_select)
    {
        case _HOUR:
            timer.hour_value--;
            if(timer.hour_value<0)
                timer.hour_value=23;
            view_hour.textContent = detail(timer.hour_value);
            break;
        case _MIN:
            timer.min_value--;
            if(timer.min_value<0)
                timer.min_value=59;
            view_minute.textContent = detail(timer.min_value);
            break;
        case _SEC:
            timer.sec_value--;
            if(timer.sec_value<0)
                timer.sec_value=59;
            view_second.textContent = detail(timer.sec_value);
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





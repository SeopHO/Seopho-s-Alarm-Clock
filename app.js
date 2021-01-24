window.addEventListener("load",function()
{
    timer.button_select = _WRONG;
    buttonCheck();
    timer.mode_select = _WRONG;
});

views.forEach(function(view) 
{
    view.addEventListener("click", function(event) 
    {
        if(timer.mode_select === _WRONG) //add timer.mode_select === _PAUSE
        {
            timer.clickCheck = true;
            // console.log(clickCheck);
    
            const style = event.currentTarget.classList;
            // console.log(style);
            if (style.contains("view-hour")) {
                timer.time_select = _HOUR;
                PopupCheck_time();
            }
            else if (style.contains("view-minute")) {
                timer.time_select = _MIN;
                PopupCheck_time();
            }
            else if (style.contains("view-second")) {
                timer.time_select = _SEC;
                PopupCheck_time();
            }
            console.log(timer.time_select);
        }

    })
});

window.addEventListener("keydown",function(event)
{
    if(timer.mode_select === _WRONG) //add timer.mode_select === _PAUSE
    {
        switch(event.keyCode)
        {
            case 38:
                // console.log('위');
                if(timer.clickCheck === true)
                {
                    timer.keydownCheck=true;
                    timer.button_select = _START;
                    buttonCheck();
                    increaseHandler();
                }
                break;
            case 40:
                // console.log('아래');            
                if(timer.clickCheck === true)
                {
                    timer.keydownCheck=true;
                    timer.button_select = _START;
                    buttonCheck();
                    decreaseHandler();
                }
                break;
        }
    }
});

button.addEventListener("click", function(event) 
{
    let pauseClick;
    const style = event.currentTarget.classList;
    console.log(style);
    if(style.contains("fa-times"))
    {
        buttonCheck();
        timer.popup_select = _WRONG;
        PopupCheck_btn();
    }
    else if(style.contains("fa-play"))
    {
        timer.mode_select = _START;
        timer.button_select = _PAUSE;
        buttonCheck();
        timer.popup_select = _START;
        PopupCheck_btn();

        let interval = setInterval(function() 
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
                timer.button_select = _WRONG;
                buttonCheck();
                clearInterval(interval);
            }
            else if(pauseClick === true)
            {
                timer.mode_select = _PAUSE;
                timer.button_select = _START;
                buttonCheck();
                timer.popup_select = _PAUSE;
                PopupCheck_btn();

                clearInterval(interval);
            }
        }, 1000);
    }
    else if(style.contains("fa-pause"))
    {
        // timer.mode_select = _PAUSE;
        // timer.button_select = _START;
        // buttonCheck();
        // timer.popup_select = _PAUSE;
        // PopupCheck_btn();
        pauseClick = true;
        console.log(pauseClick);
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





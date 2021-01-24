const popup = document.getElementById("pop-up");

const popupText = document.querySelector(".pop-up-text");
const bellicon = document.querySelector(".fa-bell");

bellicon.style.display='block';

let timeBtnCnt=0;
let BtnCnt=0;

function drawPopup(text,CntValue)
{
    if(CntValue%2===0)
    { 
        popup.classList.remove("newpopUp"); 
        popup.classList.add("popUp"); 
    }
    else if(CntValue%2===1)
    {
        popup.classList.remove("popUp"); 
        popup.classList.add("newpopUp"); 
    }

    if(text === _HOUR || text === _MIN || text === _SEC)
        popupText.textContent = `Select ${text}`;
    else
        popupText.textContent = `${text}`;
}

function PopupCheck_time() 
{
    switch (timer.time_select) 
    {
        case _HOUR:
            timeBtnCnt++;
            drawPopup(timer.time_select, timeBtnCnt);
            break;
        case _MIN:
            timeBtnCnt++;
            drawPopup(timer.time_select, timeBtnCnt);
            break;
        case _SEC:
            timeBtnCnt++;
            drawPopup(timer.time_select, timeBtnCnt);
            break;

    }
}

function PopupCheck_btn()
{
    if(timer.wrong_button)
    {
        timeBtnCnt++;
        drawPopup('You dont have set Time',timeBtnCnt);
    }
    else if(timer.operate_button)
    {
        timeBtnCnt++;
        drawPopup('Timer Start',timeBtnCnt);
    }
    else if(timer.pause_button)
    {
        timeBtnCnt++;
        drawPopup('Timer Pause',timeBtnCnt);
    }
}








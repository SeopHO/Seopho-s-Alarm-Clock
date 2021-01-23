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

function ErasePopupText()
{
    popupText.style.display='none';
}

function PopupCheck() 
{
    switch (time_pos) 
    {
        case _HOUR:
            timeBtnCnt++;
            drawPopup(time_pos, timeBtnCnt);
            break;
        case _MIN:
            timeBtnCnt++;
            drawPopup(time_pos, timeBtnCnt);
            break;
        case _SEC:
            timeBtnCnt++;
            drawPopup(time_pos, timeBtnCnt);
            break;
        case _WRONG:
            timeBtnCnt++;
            drawPopup(time_pos=`You don't have set Time`,BtnCnt);
            break;
        case _START:
            timeBtnCnt++;
            drawPopup(time_pos=`Timer Start`,BtnCnt);
            break;
        case _PAUSE:
            timeBtnCnt++;
            drawPopup(time_pos=`Timer Pause`,BtnCnt);
            break;
    }
}








const popup = document.getElementById("pop-up");

// const popUp = document.querySelector(".popUp");

const popupText = document.querySelector(".pop-up-text");
const bellicon = document.querySelector(".fa-bell");

bellicon.style.display='block';
// popupText.style.display = 'none';

let timeBtnCnt=0;
let BtnCnt=0;


function drawPopup(text,CntValue)
{
    // popup.classList.add("popUp"); 
    // popup.classList.add("newpopUp"); 
    if(CntValue%2===0)
    { 
        popup.classList.remove("newpopUp"); 
        // popup.style.display='none';
        popup.classList.add("popUp"); 
    }
    else if(CntValue%2===1)
    {
        popup.classList.remove("popUp"); 
        // popup.style.display='none';
        popup.classList.add("newpopUp"); 
    }

    popupText.textContent = `Select ${text}`;
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

    }
}








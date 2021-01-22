const popup = document.getElementById("pop-up");
const popupText = document.querySelector(".pop-up-text");
const bellicon = document.querySelector(".fa-bell");

bellicon.style.display='block';
// popupText.style.display = 'none';

let pre_time_pos;

function drawPopupText(value)
{
    popupText.textContent = `Select ${value}`;
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
            popup.classList.add("popUp");
            drawPopupText(time_pos);
            break;
        case _MIN:
            popup.classList.add("popUp");
            drawPopupText(time_pos);
            break;
        case _SEC:
            popup.classList.add("popUp");
            drawPopupText(time_pos);
            break;
    }
}






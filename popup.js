const popup = document.getElementById("pop-up");
const popupText = document.querySelector(".pop-up-text");
const bellicon = document.querySelector(".fa-bell");

bellicon.style.display='block';
popupText.style.display = 'none';

let pre_time_pos;

function PopupCheck()
{
    switch(time_pos)
    {
        case _HOUR:
            popup.classList.toggle("popUp");
            popupText.textContent = `Select ${_HOUR}`;
            break;
        case _MIN:
            popup.classList.toggle("popUp");
            popupText.textContent = `Select ${_MIN}`;
            break;
        case _SEC:
            popup.classList.toggle("popUp");
            popupText.textContent = `Select ${_SEC}`;
            break;
    }      
}




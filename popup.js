const popup = document.getElementById("pop-up");
const popupText = document.querySelector(".pop-up-text");

let popupCheck = false;

function drawPopup(style)
{
    switch(time_pos)
    {
        case _HOUR:
            popup.classList.remove("popUp");
            popup.classList.toggle("popUp");
            popupText.textContent = `Select ${_HOUR}`;
            break;
        case _MIN:
            popup.classList.add("popUp");
            popupText.textContent = `Select ${_MIN}`;
            break;
        case _SEC:
            popup.classList.add("popUp");
            popupText.textContent = `Select ${_SEC}`;
            break;
    }       
}


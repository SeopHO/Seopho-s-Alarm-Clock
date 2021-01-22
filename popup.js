const popup = document.getElementById("pop-up");
const popupText = document.querySelector(".pop-up-text");
const bellicon = document.querySelector(".fa-bell");

bellicon.style.display='block';
// popupText.style.display = 'none';

let pre_time_pos=null;


function drawPopup(value)
{
    let rec;
    popup.classList.toggle("popUp");

    if(popup.classList.contains("popUp") === false)
    {
        popup.classList.add("newpopUp");
    }

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
            drawPopup(time_pos);
            break;
        case _MIN:
             drawPopup(time_pos);
            break;
        case _SEC:
            drawPopup(time_pos);
            break;
    }
}








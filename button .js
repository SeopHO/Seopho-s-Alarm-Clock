const btn_design =document.querySelector(".start i");

function buttonCheck()
{
    btnclassReset();
    switch(timer.button_select)
    {
        case _WRONG:
            btn_design.classList.add("fa-times");
            break;
        case _START:
            btn_design.classList.add("fa-play");
            break;
        case _PAUSE:
            btn_design.classList.add("fa-pause");
            break;
    }
}

function btnclassReset()
{
    btn_design.classList.remove("fa-times");
    btn_design.classList.remove("fa-play");
    btn_design.classList.remove("fa-pause");
}
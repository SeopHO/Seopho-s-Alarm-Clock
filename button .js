const btn_design =document.querySelector(".start i");

function buttonCheck()
{
    btnclassReset();
    if(timer.wrong_button)
    {
        btn_design.classList.add("fa-times");
    }
    else if(timer.operate_button)
    {
        btn_design.classList.add("fa-play");
    }
    else if(timer.pause_button)
    {
        btn_design.classList.add("fa-pause");
    }

}

function btnclassReset()
{
    btn_design.classList.remove("fa-times");
    btn_design.classList.remove("fa-play");
    btn_design.classList.remove("fa-pause");
}
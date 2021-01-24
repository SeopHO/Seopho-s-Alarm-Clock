const timer={
    wrong_mode:true,
    pause_mode:false,
    operate_mode:false,
    
    wrong_button:true,
    pause_button:false,
    operate_button:false,

    time_select:null,

    keydownCheck:false,
    clickCheck:false,

    hour_value:0,
    min_value:0,
    sec_value:0,
}

const _HOUR = "hour";
const _MIN = "minute";
const _SEC = "second";
const _WRONG = "wrong";
const _START = "start";
const _PAUSE = "pause";


const views = document.querySelectorAll(".view");
const button = document.querySelector(".button");

const start_btn = document.querySelector(".start-btn");

const view_hour = document.querySelector(".view-hour h1");
const view_minute = document.querySelector(".view-minute h1");
const view_second = document.querySelector(".view-second h1");
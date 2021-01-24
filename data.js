const timer={
    mode_select:null,
    button_select:null,
    time_select:null,
    popup_select:null,

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
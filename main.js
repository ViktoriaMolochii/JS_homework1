'use strict'
let BIG_BLOCK = document.querySelector('.big_block');
// змінні для тексту 
let box1 = document.querySelector(".box1");
let BoxTexting = document.querySelector('.box_texting');

let BOX2 = document.querySelector('.box2');
let BOX3 = document.querySelector('.box3');
//змінні для блоку з textarea
let BOX_AREA = document.querySelector('.box_area');
let AREA = document.querySelector('.area');
//зміни тексту
let DECORATION = document.querySelector('.decoration');
let COLORS = document.querySelector(".box_colors");
let COLORS1 = document.querySelector(".box_colors1");
let FONT = document.querySelector('.font');
let STYLE = document.querySelector('.style');
let All_FONT = document.querySelector('.allFontSize');
let CHECK1 = document.querySelector(".check1");
let CHECK2 = document.querySelector(".check2");
//додавання списку
let RADIO_BTN = document.querySelector('.RadioBT');
let LIST_tABLE = document.querySelector('.list_table');
let LIST_BOX = document.querySelector('.list_box');
let BTN_LIST = document.querySelector('.btn_list');
let COUNT_LI = document.querySelector('.count');
let TYPE_LI = document.querySelector('.TypeOfMarks');
let RADIO_LIST = document.querySelector('.List_Radio');
//додавання таблиці
let TABLE_BOX = document.querySelector('.table_box');
let COUNT_TR = document.querySelector('.tablee1');
let COUNT_TD = document.querySelector('.tablee11');
let WIDTH_TD = document.querySelector('.tablee2');
let HEIGHT_TD = document.querySelector('.tablee3');
let WIDTH_BRD = document.querySelector('.tablee4');
let TYPE_BRD = document.querySelector('.TypeOfBorder');
let COLOR_BRD = document.querySelector('.ColorOfBorder');
let TABLE_BTN = document.querySelector('.btn_table');
let TABLE_RADIO = document.querySelector('.Table_Radio');
//кнопка редагувати текст з середини
let EDIT = document.querySelector('.editBTN');
EDIT.addEventListener('click', function () {
    document.querySelector('.box_area').style.display = 'block';
    DECORATION.style.display = 'none';
    AREA.value = BoxTexting.innerHTML;
});
//кнопка зберегти змінни тексту
let SAVE = document.querySelector('.save');
SAVE.addEventListener('click', function () {
    BOX_AREA.style.display = "none";
    BoxTexting.innerHTML = AREA.value;
});
//кнопка для зовнішніх змін тексту
let STYLE_BTN = document.querySelector('.styleBTN');
STYLE_BTN.addEventListener('click', function () {
    BOX_AREA.style.display = "none";
    DECORATION.style.display = "block";
});
//розмір тексту
All_FONT.addEventListener('click', function (event) {
    if (event.target.type === 'radio') {
        BoxTexting.style.fontSize = event.target.value;
    }
});
//шрифт тексту
FONT.addEventListener('change', function (event) {
    BoxTexting.style.fontFamily = event.target.value;
});
//вибір кольору для тексту 
let BTN3 = document.querySelector('.button3');
BTN3.addEventListener('click', function () {
    COLORS.style.display = "flex";
    COLORS1.style.display = "none";
});
COLORS.addEventListener('click', function (event) {
    if (event.target.classList.contains('box_color')) {
        BoxTexting.style.color = event.target.style.background;
    }
});
//вибір кольору для background
let BTN4 = document.querySelector('.button4');
BTN4.addEventListener('click', function () {
    COLORS1.style.display = "flex";
    COLORS.style.display = "none";
});
COLORS1.addEventListener('click', function (event) {
    if (event.target.classList.contains('box_color1')) {
        box1.style.background = event.target.style.background;
    }
});
//вибір курсивний чи жирний текст
CHECK1.addEventListener('click', function (event) {
    event.target.checked ? BoxTexting.style.fontWeight = event.target.value : BoxTexting.style.fontWeight = 'normal';
});
CHECK2.addEventListener('click', function (event) {
    event.target.checked ? BoxTexting.style.fontStyle = event.target.value : BoxTexting.style.fontStyle = 'normal';
});
//вибір додавання таблиці чи списку 
let ADDING = document.querySelector('.add');
ADDING.addEventListener('click', function () {
    LIST_tABLE.style.display = "block";
    BIG_BLOCK.style.display = "none";
});
RADIO_BTN.addEventListener('click', function (event) {
    if (event.target.type === 'radio') {
        if (event.target.value == "table") {
            TABLE_BOX.style.display = "block";
            LIST_BOX.style.display = "none";
        }
        else if (event.target.value == "list") {
            LIST_BOX.style.display = "block";
            TABLE_BOX.style.display = "none";
        }
    }
});
//додавання списку
BTN_LIST.addEventListener('click', function () {
    let list = '';
    list = list + "<ul>";
    for (let i = 1; i <= COUNT_LI.value; i++) {
        list += `<li style='list-style-type:${TYPE_LI.value}'> item${i} </li>`;
    }
    list = list + "<ul>";
    AREA.value += list;
    LIST_BOX.style.display = 'none';
    LIST_tABLE.style.display = "none";
    RADIO_LIST.checked = false;
    document.querySelector('.big_block').style.display = 'block';
});
//додавання таблиці
TABLE_BTN.addEventListener('click', function () {
    let table = '';
    table = table + "<table>";
    for (let i = 1; i <= COUNT_TR.value; i++) {
        table = table + "<tr>";
        for (let j = 1; j <= COUNT_TD.value; j++) {
            table += `<td style='width:${WIDTH_TD.value}px; height:${HEIGHT_TD.value}px; border: ${WIDTH_BRD.value}px ${TYPE_BRD.value} ${COLOR_BRD.value}'> TD </td>`;
        }
        table += "</tr>";
    }
    table = table + "</table>";
    AREA.value += table;
    TABLE_RADIO.checked = false;
    TABLE_BOX.style.display = 'none';
    LIST_tABLE.style.display = "none";
    document.querySelector('.big_block').style.display = 'block';
});

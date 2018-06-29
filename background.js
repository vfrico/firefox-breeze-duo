var breeze_white_background = "#eff0f1";
var breeze_white_text = "#fcfcfc";
var breeze_black_text = "#232627";
var breeze_blue_resalt = "#3daee9";
var breeze_black_background = "#31363b";

var theme = {
    colors: {
        accentcolor: breeze_black_background,
        textcolor: breeze_white_text,

        toolbar: breeze_white_background,
        toolbar_text: breeze_black_text,
        tab_line: breeze_blue_resalt,
        toolbar_text: breeze_black_text,
        toolbar_bottom_separator: breeze_blue_resalt,

        toolbar_field: breeze_white_text,
        toolbar_field_text: breeze_black_text,

        popup: breeze_white_background,
        popup_text: breeze_black_text
    }
};

browser.theme.update(theme);

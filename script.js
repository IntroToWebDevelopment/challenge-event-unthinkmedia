
//Example 1: Go to another URL or file
let goto_btn = document.querySelector("#goto_btn");


//Example 2: Pretend we are checking for passwords

let signin_btn = document.querySelector("#signin_btn");
let uname_txt = document.querySelector("#uname_txt");
let password_txt = document.querySelector("#password_txt");

let pretendDatabase = {
    abritez : {
        password: "Password"
    },
    user2: {
        password: "Coffee"
    }
}

//Example 3: Do a word count

let message_txt = document.querySelector("#message_txt");
let notification_txt = document.querySelector("#notification_txt")
let wordCount = document.querySelector("#wordCount");



//Example 4: Us values somewhere else
let range_input = document.querySelector('#range_input');
let range_output = document.querySelector('#range_output');

range_output.innerHTML = range_input.value;
scaleMe_ele.style.width = range_input.value;



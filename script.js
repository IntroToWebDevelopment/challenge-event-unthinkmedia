
//Example 1: Go to another URL or file
let goto_btn = document.querySelector("#goto_btn");

goto_btn.addEventListener("click", event => {
    document.location.href = "http://www.google.com";
})


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

signin_btn.addEventListener("click", event => {
    let username = uname_txt.value;
    let password = password_txt.value;

    if(pretendDatabase[username]){
        console.log("PASSED")
        if(password == pretendDatabase[username].password){
            console.log("Signed IN!");
        }else{
            console.log("Bad password");
        }

    }else{
        console.log("This user does not exist");
    }
});



//Example 3: Do a word count

let message_txt = document.querySelector("#message_txt");
let notification_txt = document.querySelector("#notification_txt")
let wordCount = document.querySelector("#wordCount");

message_txt.addEventListener("input", event => {
    wordCount.innerText = message_txt.value.length;

    if(message_txt.value.length > 30){
        notification_txt.classList.add("warning");
    }else{
        notification_txt.classList.remove("warning");
    }

})


//Example 4: Us values somewhere else
let range_input = document.querySelector('#range_input');
let range_output = document.querySelector('#range_output');

range_output.innerHTML = range_input.value;
scaleMe_ele.style.width = range_input.value;

range_input.addEventListener("input", event => {
    range_output.innerHTML = range_input.value;
    scaleMe_ele.style.width = range_input.value + "px";
})

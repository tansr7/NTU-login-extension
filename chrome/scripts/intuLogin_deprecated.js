//intu 
console.log("intuLogin filling running");
//=== try page 1 js
try {
    document.querySelector('.btnWindowsLogin').click()
    console.log("Page 1 intuLogin filling running");
} catch(error) {
    //=== page 2 if no login button
    try {
        console.log("Page 2 intuLogin filling running");
        chrome.storage.local.get(
            ['us_id', 'pw']
            , function(items) {
                let us_id = items.us_id;
                let pw = items.pw;
                let url = "https://" + us_id + ":" + pw + "@intu.ntu.edu.sg/_windows/default.aspx?ReturnUrl=/_layouts/Authenticate.aspx?Source=%2F&Source=/&";
                window.location.href = url;
        });
    } catch(error) {
    console.log("this should not happen, login sequence have changed");
    }
}

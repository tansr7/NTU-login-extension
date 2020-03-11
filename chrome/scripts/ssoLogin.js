//=== temperature taking
console.log("ssoLogin filling running");
//=== try page 1 js
try {
        document.querySelector('select option[value="STUDENT"]').selected = true;
        console.log("Page 1 ssoLogin filling running");
        chrome.storage.local.get(
            ['us_id'], function(items) {
            document.querySelector('input').value = items.us_id;
            document.querySelector('[type="submit"]').click(); 
        });
    } catch (error) {
    //=== page 2 if no dropdown options
    try { 
        console.log("Page 2 ssoLogin filling running");
        chrome.storage.local.get(
            ['pw'], function(items) {
            document.querySelector('[type="password"]').value = items.pw;
            document.querySelector('[type="submit"]').click(); 
        });
    } catch (error) {
        console.log("this should not happen, login sequence have changed");
    }
}
console.log("ssoLogin filling finished");
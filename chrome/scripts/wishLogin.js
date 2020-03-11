//=== stars
//=== console logs -> then chrome.storage.local.get()
console.log("wishLogin filling running");
//=== try page 1 js
chrome.storage.local.get(
    ['us_id', 'pw'], function(items) {
        try {
            console.log('try if page2')
            document.querySelector('[value="STUDENT"]').selected = true;
            document.querySelector('[name="UID"]').value = items.us_id;
            document.querySelector('[type="password"]').value = items.pw;
            document.querySelector('[type="submit"]').click(); 
        } catch (error) {
        try {
            console.log('it is page1')
            document.querySelector('[type="submit"]').click(); 
        } catch (error) {
            console.log(error, "this should not happen, login sequence have changed");
        }}
    }
);
console.log("wishLogin filling finished")
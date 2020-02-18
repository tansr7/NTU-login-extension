//=== temperature taking
console.log("ssoLogin filling running");

//=== try page 1 js
try {
        document.querySelector('input').value = '<user_id>';
        document.querySelector('select option[value="STUDENT"]').selected = true;
    } catch (error) {
    //=== page 2 if no dropdown options
    try { 
        document.querySelector('[type="password"]').value = '<password>';
    } catch (error) {
        console.log("#this should not happen, login sequence have changed");
    }
}
// if (!document.querySelector('select option[value="STUDENT"]')) {
//     document.querySelector('input').value = '<user_id>';
//     document.querySelector('select option[value="STUDENT"]').selected=true;
// } else if (!document.querySelector('[type="password"]')) {
//     document.querySelector('[type="password"]').value = '<password>';
// } 

console.log("ssoLogin filling finished");
document.querySelector('[type="submit"]').click();
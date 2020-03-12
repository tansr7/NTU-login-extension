//=== starswars
//=== console logs -> then chrome.storage.local.get()
console.log("star wars running");
if (location.href=="https://wish.wis.ntu.edu.sg/pls/webexe/AUS_STARS_PLANNER.time_table") {
    console.log("entering course ids")
    chrome.storage.local.get(
        ['c_id_list'], function(items) {
            if (items.c_id_list) {
                let c_id_list = items.c_id_list;
                let input_arrays = document.querySelectorAll("input[name='subj_code']");
                console.log(c_id_list.length);
                for (let i=0; i<c_id_list.length; i++) {
                    input_arrays[i].value = c_id_list[i];
                }
                document.querySelector("input[value='Plan']").click();
            } else {alert('Please enter course ids in extension options page.');}
        }
    );
} else {
    console.log("entering course indexes")
    //=== change index here 
    //...
    //===
    document.querySelector("[type='submit']").click()
}
// Saves options to chrome.storage
function save_options() {
  var us_id = document.getElementById('user-name').value;
  var pw = document.getElementById('pw').value;
  var c_id_list = document.getElementById('course-id').value;
  console.log(us_id, 'password', c_id_list); //list
  c_id_list = c_id_list.split(/,{1}[\s]*/); //
  browser.storage.local.set({
    us_id: us_id,
    pw: pw,
    c_id_list: c_id_list
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores label state using the preferences stored in chrome.storage.
function restore_options() {
  browser.storage.local.get(
    {
      us_id: null,
      pw: null,
      c_id_list: null, 
    }, function(items) {
      document.getElementById('user-name').value = items.us_id;
      document.getElementById('pw').value = items.pw;
      if (items.c_id_list) {
        console.log('joining course id string', items.c_id_list)
        document.getElementById('course-id').value = items.c_id_list.join(", ");
      }      
    }
  );
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
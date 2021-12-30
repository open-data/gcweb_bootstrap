(function ($, Drupal, drupalSettings) {

  'use strict';

  if ( document.URL.indexOf("/user/") != -1 && document.getElementById("edit-submit") ) {
    $("#edit-submit").click(function () {
      ga('send', 'event', document.getElementsByTagName('h1')[0].innerText, 'username: ' + document.getElementById('edit-name').value, document.getElementById('edit-submit').formAction);
    });
  }
})(jQuery, Drupal, drupalSettings);

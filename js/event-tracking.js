(function ($, Drupal, drupalSettings) {

  'use strict';

  if ( document.URL.indexOf("/user/") != -1 && document.getElementById("edit-submit") ) {
    $("#edit-submit").click(function () {
      gtag('event', document.getElementsByTagName('h1')[0].innerText, {
        'event_category': 'username: ' + document.getElementById('edit-name').value,
        'event_label': document.getElementById('edit-submit').formAction
      });
    });
  }
})(jQuery, Drupal, drupalSettings);

(function ($, Drupal, drupalSettings) {

  'use strict';

  $('#catalog-search-form').on("submit", function(e) {
    $("#catalog-search-form").attr('action', $('#catalog-search-form').attr('action') + $('input[name=query]').val());
    window.location.href = $('input[name=url]').val() + $('input[name=query]').val();
    return false;
  });

})(jQuery, Drupal, drupalSettings);

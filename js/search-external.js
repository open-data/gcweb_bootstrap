(function ($, Drupal, drupalSettings) {

  'use strict';

  $('#catalog-search-form').on("submit", function(e) {
    $("#catalog-search-form").attr('action', $('#catalog-search-form').attr('action') + $('input[name=query]').val());
  });

})(jQuery, Drupal, drupalSettings);

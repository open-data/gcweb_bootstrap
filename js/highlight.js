/**
 * @file
 * highlight javascript functions
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Text highlight
   */
  Drupal.behaviors.Highlight = {
    attach: function (context, settings) {
      $( document ).ajaxComplete(function() {
        let keyword = $("input[id^='edit-combine']").val();
        if (keyword) {
          // remove non-alphanumeric characters
          keyword = keyword.replace(/[^a-z0-9]/gi,' ');
          let rows = document.getElementsByClassName("views-row");
          let rgxp = new RegExp(keyword, 'ig');
          // capitalize to title case
          keyword = keyword.toLowerCase().replace(/\b[a-z]/g, function(str) {
            return str.toUpperCase();
          });
          let repl = '<mark>' + keyword + '</mark>';
          $(rows).each(function() {
            // replace excerpt
            let excerpt = $(this).find(".excerpt").text();
            $(this).find(".excerpt").text("");
            $(this).find(".excerpt").append(excerpt.replace(rgxp, repl));
            // replace title
            let title = $(this).find("h2").find("a").text();
            $(this).find("h2").find("a").text("");
            $(this).find("h2").find("a").append(title.replace(rgxp, repl));
          });
        }
      });
    }
  };

})(window.jQuery, window.Drupal, window.drupalSettings);


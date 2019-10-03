/**
 * @file
 * Load WET-BOEW CDTS closure template scripts for
 * - Head
 * - Top
 * - PreFooter
 * - Footer
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.WETLoad = {
    attach: function (context, settings) {
      $(document).ready(function() {
        // load CDTS Head reference
        $('head').append(wet.builder.refTop({
        }));

        // load CDTS Top Reference
        let defTop = document.getElementById("def-top");
        if (defTop) {
          defTop.outerHTML = wet.builder.top({
            "lngLinks": false,
            "breadcrumbs": false
          });
        }

        // load CDTS PreFooter Reference
        let defPreFooter = document.getElementById("def-preFooter");
        if (defPreFooter) {
          defPreFooter.outerHTML = wet.builder.preFooter({
            "showFeedback" : drupalSettings.feedback_link,
            "dateModified": drupalSettings.date_modified
          });
        }

        // load CDTS Footer refernce
        let defFooter = document.getElementById("def-footer");
        if (defFooter) {
          defFooter.outerHTML = wet.builder.footer();
        }
      });
    }
  };
})(window.jQuery, window.Drupal, window.drupalSettings);

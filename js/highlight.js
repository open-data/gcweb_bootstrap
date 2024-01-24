/**
 * @file
 * highlight javascript functions
 */

(function ($, Drupal) {

    'use strict';

    /**
     * Text highlight for pages reloading using AJAX
     */
    Drupal.behaviors.Highlight = {
        attach: function (context, settings) {
            $(document).ajaxComplete(
                function () {
                    let keyword = $("input[id^='edit-combine']").val();
                    if (keyword) {
                        // remove non-alphanumeric characters
                        keyword = keyword.replace(/[^a-z0-9]/gi,' ');
                        let rows = document.getElementsByClassName("views-row");
                        let rgxp = new RegExp(keyword, 'ig');
                        // capitalize to title case
                        keyword = keyword.toLowerCase().replace(
                            /\b[a-z]/g, function (str) {
                                return str.toUpperCase();
                            }
                        );
                        let repl = '<mark>' + keyword + '</mark>';
                        $(rows).each(
                            function () {
                                // replace excerpt
                                let excerpt = $(this).find(".excerpt").text();
                                $(this).find(".excerpt").text("");
                                $(this).find(".excerpt").append(excerpt.replace(rgxp, repl));
                                // replace title
                                let title = $(this).find("h2").find("a").text();
                                $(this).find("h2").find("a").text("");
                                $(this).find("h2").find("a").append(title.replace(rgxp, repl));
                            }
                        );
                    }
                }
            );
        }
    };

    /**
     * Text highlight for Proactive Disclosure search pages not reloaded using AJAX
     */
    Drupal.behaviors.SearchHighlight = {
        attach: function (context, settings) {
            $(document).ready(
                function () {
                    let keyword = $("input[id^='edit-search-api-fulltext']").val();
                    if (keyword) {
                        // remove non-alphanumeric characters
                        keyword = keyword.replace(/[^a-zA-ZÀ-ú0-9-]/gi,' ');
                        let rows = document.getElementsByClassName("views-row");
                        let rgxp = new RegExp(keyword, 'ig');

                        // highlight all elements with class hgl
                        $(rows).each(
                            function () {
                                let excerpt = $(this).find(".hgl");
                                $(excerpt).each(
                                    function () {
                                            let str = $(this).text();
                                            let key = new RegExp('\\b' + keyword + '\\b',"gi");
                                        if (str.match(key)) {
                                            let repl = '<mark>' + str.match(key)[0] + '</mark>';
                                            let val = $(this).text().replace(rgxp, repl);
                                            $(this).text("");
                                            $(this).append(val);
                                        }
                                    }
                                )
                            }
                        )
                    }
                }
            );
        }
    };

})(window.jQuery, window.Drupal, window.drupalSettings);


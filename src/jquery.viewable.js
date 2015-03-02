/*!
 * jquery-viewable
 * filip@salsitasoft.com
 * Released under the MIT license
 */

;(function($) {

  // Defaults
  var element = null;
  var settings = null;
  var $window = $(window);
  var defaultOptions = {
    checkOpacity: true,
    opacityMin: 0,
    checkParents: true,
    checkViewport: true,
    viewportTolerance: 0
  };

  // Is element hidden by CSS values?
  var isVisible = function(el, opacity, opacityMin) {
    // Expect opaque element if we're not checking it
    var opaque = true;
    var displayed = el.css('display') !== 'none' ? true : false;
    var visible = el.css('visibility') !== 'hidden' ? true : false;
    if (opacity) {
      opaque = el.css('opacity') > opacityMin ? true : false;
    };
    return (displayed && visible && opaque);
  };

  // Is element in visible viewport?
  var isInViewport = function(el, tolerance) {
    var rect = el[0].getBoundingClientRect();
    // Using jQuery width()/height() since it factors in overlayed scrollbars
    return !(rect.bottom < 0 + tolerance ||
             rect.right < 0 + tolerance ||
             rect.left > $window.width() - tolerance ||
             rect.top > $window.height() - tolerance);
  };

  // Create jQuery plugin
  $.fn.viewable = function(options) {

    // Get user settings
    settings = $.extend({}, defaultOptions, options);

    // Reference only first element found by query
    element = (this.length > 1) ? this.first() : this;

    // Element CSS value check
    if (!isVisible(element, settings.checkOpacity, settings.opacityMin)) {
      // console.info('Element is not visible');
      return false;
    };

    // Parents CSS value check
    if (settings.checkParents) {
      var state = true;
      element.parents(':not(body, html)').each(function() {
        if (!isVisible($(this), settings.checkOpacity, settings.opacityMin)) {
          state = false;
          return false;
        };
      });
      // console.info('Parent element is not visible');
      if (!state) return false;
    };

    // Viewport check
    if (settings.checkViewport && !isInViewport(element, settings.viewportTolerance)) {
      // console.info('Element is visible, but not in viewport (tolerance: ' + settings.viewportTolerance + 'px)');
      return false;
    };

    // TODO: Below fold check
    // TODO: z-index check
    // TODO: debug

    // Element is viewable
    return true;
  };
})(jQuery, window, document);
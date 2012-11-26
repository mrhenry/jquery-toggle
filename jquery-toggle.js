/** @preserve
 * jquery-toggle
 *
 * Created at: 2012-11-23
 * Updated at: 2012-11-26 22:17:43 +0100
 *
 * Author: Yves Van Broekhoven
 * Version: 1.2.0
 *
 */

/*global jQuery:false console window*/

(function($) {
  "use strict";

  var plugin_name = "jqueryToggle",
      defaults    = {
        event:      'click',
        speed:      300
      };

  function Toggle( element, options ) {
    var $this     = $(element);

    this.element          = element;
    this.options          = $.extend({}, options, defaults);
    this.target_selector  = $this.data('toggle-target');
    this.$similar         = $('*[data-toggle-target="' + this.target_selector + '"]');

    this.init();
  }

  Toggle.prototype.init = function() {
    var _this = this;

    _this.setState();

    _this.$similar.on( _this.options.event, function(event){
      event.preventDefault();
      _this.setState( true, _this.options.speed );
    });

  };

  Toggle.prototype.setState = function( toggle, speed ) {
    var _this     = this,
        $target   = $( _this.target_selector ),
        state     = $target.data('toggle-state');

    toggle  = toggle ? true : false;
    speed   = speed ? speed : 0;

    if ( (state === 'open' && toggle) || (state === 'closed' && !toggle) ) {
      $target
        .data('toggle-state', 'closed')
        .stop(true, true)
        .slideUp( speed, function(){
          $target.hide();
        });

      _this.$similar
        .removeClass('open')
        .addClass('closed');

    } else {
      $target
        .data('toggle-state', 'open')
        .stop(true, true)
        .slideDown( speed );

      _this.$similar
        .removeClass('closed')
        .addClass('open');

    }

    //console.log( 'toggles.' + _this.target_selector );
    $(window).trigger('toggles.' + _this.target_selector, [$target.data('toggle-state')] );
  };

  $.fn.toggles = function(options) {
    return this.each( function() {
      $(this).data( plugin_name, new Toggle(this, options) );
    });
  };

}(jQuery, window));

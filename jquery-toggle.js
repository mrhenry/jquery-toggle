/** @preserve
 * jquery-toggle
 *
 * Created at: 2012-11-23
 * Updated at: 2012-11-26 16:18:46 +0100
 *
 * Author: Yves Van Broekhoven
 * Version: 1.1.1
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";

  var plugin_name = "jqueryToggle",
      defaults    = {
        event:      'click',
        speed:      300,
        btn_class:  '.toggle-btn'
      };

  function Toggle( element, options ) {
    var $this     = $(element);

    this.element  = element;
    this.options  = $.extend({}, options, defaults);
    this.$btns    = $this.find( this.options.btn_class );

    this.init();
  }

  Toggle.prototype.init = function() {
    var _this = this,
        $this = $(_this.element);

    _this.$btns.each( function() {
      _this.setState( this );
    });

    $this.on( _this.options.event, _this.options.btn_class, function(event){
      event.preventDefault();
      _this.setState( this, true, _this.options.speed );
    });

  };

  Toggle.prototype.setState = function( btn, toggle, speed ) {
    var _this           = this,
        $this           = $(this.element),
        $btn            = $(btn),
        target_selector = $btn.data('toggle-target'),
        $target         = $this.find( target_selector ),
        state           = $target.data('toggle-state');

    toggle  = toggle ? true : false;
    speed   = speed ? speed : 0;

    if ( (state === 'open' && toggle) || (state === 'closed' && !toggle) ) {
      $target
        .data('toggle-state', 'closed')
        .stop(true, true).slideUp( speed, function(){
          $(this).hide();
        });

      _this.$btns.filter('[data-toggle-target="' + target_selector + '"]')
        .removeClass('open')
        .addClass('closed');

    } else {
      $target
        .data('toggle-state', 'open')
        .stop(true, true).slideDown( speed );

      _this.$btns.filter('[data-toggle-target="' + target_selector + '"]')
        .removeClass('closed')
        .addClass('open');

    }

    $(window).trigger('toggles.' + target_selector, [$target.data('toggle-state')] );
  };

  $.fn.toggles = function(options) {
    return this.each( function() {
      $(this).data( plugin_name, new Toggle(this, options) );
    });
  };

}(jQuery));

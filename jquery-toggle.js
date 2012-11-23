/** @preserve
 * jquery-toggle
 *
 * Created at: 2012-11-23
 * Updated at: 2012-11-23 15:06:06 +0100
 *
 * Author: @ivow
 * Version: 1.0.0
 *
 */

/*global jQuery:false*/

(function($) {
  "use strict";

  var plugin_name = "jquery-toggle",
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

      _this.$btns.filter('[data-toggle-target="' + target_selector + '"]')        .removeClass('closed')
        .addClass('open');

    }
  };

  $.fn.toggle = function(options) {
    return this.each( function() {
      $(this).data( plugin_name, new Toggle(this, options) );
    });
  };

}(jQuery));

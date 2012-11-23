/*

 jquery-toggle

 Created at: 2012-11-23
 Updated at: 2012-11-23 15:06:06 +0100

 Author: @ivow
 Version: 1.0.0

*/
(function(c){function e(a,d){var b=c(a);this.element=a;this.options=c.extend({},d,g);this.$btns=b.find(this.options.btn_class);this.init()}var g={event:"click",speed:300,btn_class:".toggle-btn"};e.prototype.init=function(){var a=this,d=c(a.element);a.$btns.each(function(){a.setState(this)});d.on(a.options.event,a.options.btn_class,function(b){b.preventDefault();a.setState(this,!0,a.options.speed)})};e.prototype.setState=function(a,d,b){var f=c(this.element),a=c(a).data("toggle-target"),f=f.find(a),
e=f.data("toggle-state"),d=d?!0:!1,b=b?b:0;"open"===e&&d||"closed"===e&&!d?(f.data("toggle-state","closed").stop(!0,!0).slideUp(b,function(){c(this).hide()}),this.$btns.filter('[data-toggle-target="'+a+'"]').removeClass("open").addClass("closed")):(f.data("toggle-state","open").stop(!0,!0).slideDown(b),this.$btns.filter('[data-toggle-target="'+a+'"]').removeClass("closed").addClass("open"))};c.fn.toggle=function(a){return this.each(function(){c(this).data("jquery-toggle",new e(this,a))})}})(jQuery);

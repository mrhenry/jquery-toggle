/*

 jquery-toggle

 Created at: 2012-11-23
 Updated at: 2012-11-23 13:45:22 +0100

 Author: @ivow
 Version: 0.0.0

*/
(function(d){function e(a,c){var b=d(a);this.element=a;this.options=d.extend({},c,g);this.$btns=b.find(this.options.btn_class);this.init()}var g={event:"click",speed:300,btn_class:".toggle-btn"};e.prototype.init=function(){var a=this,c=d(a.element);a.$btns.each(function(){a.setState(this)});c.on(a.options.event,a.options.btn_class,function(b){b.preventDefault();a.setState(this,!0,a.options.speed)})};e.prototype.setState=function(a,c,b){var f=d(this.element),a=d(a).data("toggle-target"),f=f.find(a),
e=f.data("toggle-state"),c=c?!0:!1,b=b?b:0;"open"===e&&c||"closed"===e&&!c?(f.data("toggle-state","closed").stop(!0,!0).slideUp(b),this.$btns.filter('[data-toggle-target="'+a+'"]').removeClass("open").addClass("closed")):(f.data("toggle-state","open").stop(!0,!0).slideDown(b),this.$btns.filter('[data-toggle-target="'+a+'"]').removeClass("closed").addClass("open"))};d.fn.toggle=function(a){return this.each(function(){d(this).data("jquery-toggle",new e(this,a))})}})(jQuery);

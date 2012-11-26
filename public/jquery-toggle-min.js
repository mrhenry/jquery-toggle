/*

 jquery-toggle

 Created at: 2012-11-23
 Updated at: 2012-11-26 15:57:10 +0100

 Author: Yves Van Broekhoven
 Version: 1.0.1

*/
(function(b){function e(a,c){var d=b(a);this.element=a;this.options=b.extend({},c,g);this.$btns=d.find(this.options.btn_class);this.init()}var g={event:"click",speed:300,btn_class:".toggle-btn"};e.prototype.init=function(){var a=this,c=b(a.element);a.$btns.each(function(){a.setState(this)});c.on(a.options.event,a.options.btn_class,function(b){b.preventDefault();a.setState(this,!0,a.options.speed)})};e.prototype.setState=function(a,c,d){var f=b(this.element),a=b(a).data("toggle-target"),f=f.find(a),
e=f.data("toggle-state"),c=c?!0:!1,d=d?d:0;"open"===e&&c||"closed"===e&&!c?(f.data("toggle-state","closed").stop(!0,!0).slideUp(d,function(){b(this).hide()}),this.$btns.filter('[data-toggle-target="'+a+'"]').removeClass("open").addClass("closed")):(f.data("toggle-state","open").stop(!0,!0).slideDown(d),this.$btns.filter('[data-toggle-target="'+a+'"]').removeClass("closed").addClass("open"));b(window).trigger("toggles",[a,f.data("toggle-state")])};b.fn.toggles=function(a){return this.each(function(){b(this).data("jqueryToggle",
new e(this,a))})}})(jQuery);

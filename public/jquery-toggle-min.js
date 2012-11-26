/*

 jquery-toggle

 Created at: 2012-11-23
 Updated at: 2012-11-26 22:17:43 +0100

 Author: Yves Van Broekhoven
 Version: 1.1.1

*/
(function(c){function e(a,b){var d=c(a);this.element=a;this.options=c.extend({},b,f);this.target_selector=d.data("toggle-target");this.$similar=c("*[data-toggle-target="+this.target_selector+"]");this.init()}var f={event:"click",speed:300};e.prototype.init=function(){var a=this;a.setState();a.$similar.on(a.options.event,function(b){b.preventDefault();a.setState(!0,a.options.speed)})};e.prototype.setState=function(a,b){var d=c(this.target_selector),e=d.data("toggle-state"),a=a?!0:!1,b=b?b:0;"open"===
e&&a||"closed"===e&&!a?(d.data("toggle-state","closed").stop(!0,!0).slideUp(b,function(){d.hide()}),this.$similar.removeClass("open").addClass("closed")):(d.data("toggle-state","open").stop(!0,!0).slideDown(b),this.$similar.removeClass("closed").addClass("open"));console.log("toggles."+this.target_selector);c(window).trigger("toggles."+this.target_selector,[d.data("toggle-state")])};c.fn.toggles=function(a){return this.each(function(){c(this).data("jqueryToggle",new e(this,a))})}})(jQuery,window);

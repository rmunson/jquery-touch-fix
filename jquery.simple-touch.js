;(function(global){
	/**
	 * Very basic extension to jQuery events to ensure touches are monitored.  Simply for support right now
	 * but possibly an avenue for further extension at one point. 
	 * @author rmunson
	 */
	var jQuery=global.jQuery;
    if(jQuery && jQuery.event){
    	jQuery.event.touchHooks=$.extend(true,{},jQuery.event.mouseHooks,{props:['touches']});

    	$.each('touchstart touchend touchmove touchcancel pinch'.split(' '),function(i,name) {
			jQuery.event.fixHooks[name] = jQuery.event.touchHooks;
	    });
    }
})(this);
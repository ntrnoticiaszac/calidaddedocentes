jQuery(function($){$(document).ready(function(){console.log('custom.js loaded');$url=$("div#diario-ntr-embedded").data("url");$('#diario-ntr-embedded .loader').load($url).first;$ntr_video_player=$("div#ntr-video-streaming").find(".clickable-on-top");$ntr_video_player.click(function(){console.log('ntr_video_player clicked');});});});
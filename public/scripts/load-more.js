(self.webpackChunk=self.webpackChunk||[]).push([[893],{9:function(t,e,o){var i=o(609);function a(){console.log("Set Viewport Width Function"),viewportWidth=document.documentElement.clientWidth||window.innerWidth||window.outerWidth}function d(){console.log("Log Width Function"),viewportWidth>768?(console.log("Large Viewport Width:"+viewportWidth),i("#blog-card:nth-child(4n + 1)").addClass("half-div-left"),i("#blog-card:nth-child(4n + 2)").addClass("half-div-right")):(console.log("Small Viewport Width:"+viewportWidth),i("#blog-card:nth-child(4n + 1)").removeClass("half-div-left"),i("#blog-card:nth-child(4n + 2)").removeClass("half-div-right"))}a(),d(),window.addEventListener("resize",(function(){a(),d()}),!1);var n=1;i("#more-posts").on("click",(function(){var t;i("#more-posts").attr("disabled",!0),i("#loader").removeClass("hidden"),t="&pageNumber="+ ++n+"&ppp=8&action=more_news_ajax",i.ajax({type:"POST",dataType:"html",url:"/wp-admin/admin-ajax.php",data:t,success:function(t){var e=i(t);e.length?(i("#ajax-posts").append(e),i("#more-posts").attr("disabled",!1),i("#loader").addClass("hidden")):(i("#more-posts").attr("disabled",!0),i("#more-posts").addClass("opacity-30"),i("#more-posts").html("All Loaded!"))}}),a(),d(),i(this).insertAfter("#ajax-posts")}))},609:function(t){"use strict";t.exports=window.jQuery}},function(t){"use strict";var e;e=9,t(t.s=e)}]);
//# sourceMappingURL=load-more.js.map
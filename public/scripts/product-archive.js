(self.webpackChunk=self.webpackChunk||[]).push([[338],{434:function(t,e,a){"use strict";a(609);var n=a(711),o=a.n(n),r=a(609);function s(){for(var t=r(".single-product-grid"),e=0;e<t.length;e+=4)t.slice(e,e+4).wrapAll("<div class='product-row grid md:grid-cols-4' data-aos='fade-up'></div>");r(".product-row").each((function(t){r(this).addClass("row-"+(t+1))}))}o().init({disable:"mobile",startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:0,delay:0,duration:1e3,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-center"}),r((function(){var t=jQuery(undefined).attr("product-id");r.ajax({type:"post",url:"/wp-admin/admin-ajax.php",data:{action:"filterproducts",categoryfilter:t},success:function(t){r("#products").html(t),s(),console.log("Got Data")}}).done((function(){document.getElementById("loader-product").style.display="none",r("#products").removeClass("hidden")})),r(".prod-filter").click((function(t){var e=jQuery(this).attr("product-id");r.ajax({type:"post",url:"/wp-admin/admin-ajax.php",data:{action:"filterproducts",categoryfilter:e},success:function(t){r("#products").html(t),s(),document.getElementById("loader-product").style.display="none",r("#products").removeClass("hidden")}}),t.preventDefault()}))}))},609:function(t){"use strict";t.exports=window.jQuery}},function(t){"use strict";t.O(0,[941],(function(){return e=434,t(t.s=e);var e}));t.O()}]);
//# sourceMappingURL=product-archive.js.map
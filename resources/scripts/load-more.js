// Log the viewport width into the 

function logWidth() {

  //console.log('Log Width Function')  

  let viewportWidth =  document.documentElement.clientWidth || window.innerWidth || window.outerWidth;


  if (viewportWidth > 768) {
    
    //console.log("Large Viewport Width:" + viewportWidth);

    $("#blog-card:nth-child(4n + 1)").addClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").addClass("half-div-right");

  } else {
    //console.log("Small Viewport Width:" + viewportWidth);

    $("#blog-card:nth-child(4n + 1)").removeClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").removeClass("half-div-right");
  }
};

// Set our initial width and log it
//setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener(
  "resize",
  function () {
    logWidth();
  },
  false
);

let ppp = 4; // Post per page
let pageNumber = 1;


function loadPosts(){
    pageNumber++;
    var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=more_news_ajax';
    $.ajax({
        type: "POST",
        dataType: "html",
        url: "/wp-admin/admin-ajax.php",
        data: str,
        success: function(data){
           
            var $data = $(data);
            if($data.length){
                $("#ajax-posts").append($data);
                $("#more-posts").attr("disabled",false);
                $("#loader").addClass("hidden"); // Hide loader.

                //setViewportWidth();
                logWidth();
                
               
            } else{
                $("#more-posts").attr("disabled",true);
                $("#more-posts").addClass("opacity-30");
                $("#more-posts").html("All Loaded!");
            }
        }

    });
    return false;
}


const morePosts = document.getElementById("more-posts");
const getLoader = document.getElementById("loader");

// On resize events, recalculate and log
morePosts.addEventListener(
  "click",
  function () {

    this.setAttribute("disabled",true);

    getLoader.classList.remove("hidden"); // Show loader.

    //console.log('Click');
    // setViewportWidth();

    // setInterval(function(){ logWidth() }, 100);

   
    loadPosts();
  },
  false
);



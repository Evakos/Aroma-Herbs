var ppp = 4; // Post per page
var pageNumber = 1;


function load_posts(){
    pageNumber++;
    var str = '&pageNumber=' + pageNumber + '&ppp=' + ppp + '&action=more_post_ajax';
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
                $("#loader").addClass("hidden"); // Show loader.
                
               
            } else{
                $("#more-posts").attr("disabled",true);
                $("#more-posts").addClass("opacity-30");
                $("#more-posts").html("All Loaded!");
            }
        }

    });
    return false;
}

$("#more-posts").on("click",function(){ // When btn is pressed.
    $("#more-posts").attr("disabled",true); // Disable the button, temp.
    $("#loader").removeClass("hidden"); // Show loader.
    load_posts();
    logWidth();
    $(this).insertAfter('#ajax-posts'); // Move the 'Load More' button to the end of the the newly added posts.
});



// Define our viewportWidth variable
let viewportWidth;

// Set/update the viewportWidth value
let setViewportWidth = function () {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};

// Log the viewport width into the console
const logWidth = function () {
  if (viewportWidth > 768) {
    console.log("Wide viewport");

    $("#blog-card:nth-child(4n + 1)").addClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").addClass("half-div-right");
  } else {
    console.log("Small viewport");

    $("#blog-card:nth-child(4n + 1)").removeClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").removeClass("half-div-right");
  }
};

// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener(
  "resize",
  function () {
    setViewportWidth();
    logWidth();
  },
  false
);
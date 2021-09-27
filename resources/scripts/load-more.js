var ppp = 4; // Post per page
var pageNumber = 1;


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
    loadPosts();
    logWidth();
    $(this).insertAfter('#ajax-posts'); // Move the 'Load More' button to the end of the the newly added posts.
});



// Define our viewportWidth variable
let viewportWidth;

// Set/update the viewportWidth value
let setViewportWidth = function () {

viewportWidth =  document.documentElement.clientWidth || window.innerWidth || window.outerWidth;

};

// Log the viewport width into the 

const logWidth = function () {
  if (viewportWidth > 768) {
    //console.log("Checking viewport");

    $("#blog-card:nth-child(4n + 1)").addClass("half-div-left");

    $("#blog-card:nth-child(4n + 2)").addClass("half-div-right");
  } else {
    //console.log("Small viewport");

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
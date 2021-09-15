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
            } else{
                $("#more-posts").attr("disabled",true);
                $("#more-posts").addClass("opacity-20");
                $("#more-posts").html("All Loaded!");
            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            $loader.html(jqXHR + " :: " + textStatus + " :: " + errorThrown);
        }

    });
    return false;
}

$("#more-posts").on("click",function(){ // When btn is pressed.
    $("#more-posts").attr("disabled",true); // Disable the button, temp.
    load_posts();
    $(this).insertAfter('#ajax-posts'); // Move the 'Load More' button to the end of the the newly added posts.
});
jQuery(function ($) {
	
  $("#recipefilter").change(function () {
    var recipefilter = $("#recipefilter");

	$("#recipe-response").toggleClass('fade-in-fast'); 
   
    if ($("input[name='viewall']").prop("checked")) {
      //console.log("Checked");

      $("select").val("select");
    }

    $.ajax({
      url: recipefilter.attr("action"),
      data: recipefilter.serialize(), // form data
      type: recipefilter.attr("method"), // POST
      beforeSend: function (xhr) {
        recipefilter.find("button").text("Processing..."); // changing the button label
      },
      success: function (data) {
        //console.log(data);
        recipefilter.find("button").text("Apply filter"); // changing the button label back
        $("#recipe-response").html(data); // insert data
      },
    });
    return false;
  }).change();
})


$("select").change(function () {

	console.log("select changed");
   
    $("input[name='viewall']").removeAttr("checked") 

});

// $("input[name='viewall']").prop( "checked", true );

jQuery(function ($) {
	
  $("#recipiefilter").change(function () {
    var recipiefilter = $("#recipiefilter");

	$("#recipie-response").toggleClass('fade-in-fast'); 
   
    if ($("input[name='viewall']").prop("checked")) {
      //console.log("Checked");

      $("select").val("select");
    }

    $.ajax({
      url: recipiefilter.attr("action"),
      data: recipiefilter.serialize(), // form data
      type: recipiefilter.attr("method"), // POST
      beforeSend: function (xhr) {
        recipiefilter.find("button").text("Processing..."); // changing the button label
      },
      success: function (data) {
        //console.log(data);
        recipiefilter.find("button").text("Apply filter"); // changing the button label back
        $("#recipie-response").html(data); // insert data
      },
    });
    return false;
  }).change();
})


$("select").change(function () {

	console.log("select changed");
   
    $("input[name='viewall']").removeAttr("checked") 

});

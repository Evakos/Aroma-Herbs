jQuery(function ($) {
	
  $("#recipefilter").change(function () {
    var recipefilter = $("#recipefilter");

	$("#recipe-response").toggleClass('fade-in-fast'); 
   
    if ($("input[name='viewall']").prop("checked")) {
      //console.log("Checked");

      $('select').removeClass("style-select");

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

  // $(".sub-menu li").click(function(){
  //   $(".sub-menu li").removeClass('active');//to make sure there will be only one with the class 'active'
  //   $(this).addClass('active');
  // });

  $(this).removeClass("style-select");


  $('option', this).removeClass("select-active");
  $('option:checked', this).addClass("select-active");

  $('option', this).parent('select').removeClass("style-select");
  $('option:checked:not(.initial)', this).parent('select').addClass("style-select");

  

  //$(this).addClass('dark');
  $("input[name='viewall']").removeAttr("checked") 

});
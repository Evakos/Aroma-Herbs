
/**
 * External Dependencies
 */
 import "jquery";


  function getRecipes () {
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
        console.log(data.node);
        recipefilter.find("button").text("Apply filter"); // changing the button label back
        $("#recipe-response").html(data); // insert data
      },
    });
    return false;

  }

  getRecipes();

  $("#recipefilter").change(function (e) {

 e.preventDefault();
    getRecipes();

    console.log("changed 1"); 
  

  });



$("select").change(function (e) {

  e.preventDefault();

	console.log("select changed");

  $(this).removeClass("style-select");
  $('option', this).removeClass("select-active");
  $('option:checked', this).addClass("select-active");

  $('option', this).parent('select').removeClass("style-select");
  $('option:checked:not(.initial)', this).parent('select').addClass("style-select");

  //$(this).addClass('dark');
  $("input[name='viewall']").removeAttr("checked") 

});
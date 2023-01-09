$(document).ready(function () {
  $(".accordion-content").hide();
  $("#accordion-button-1").on("click", () => {
    $("#accordion-content-1").toggle(500, "linear");
    $("#up1").toggleClass("rotate");
    $("#accordion-content-2").hide();
    $("#accordion-content-3").hide();
    $("#accordion-content-4").hide();
    $("#up2").removeClass("rotate");
    $("#up3").removeClass("rotate");
    $("#up4").removeClass("rotate");
  });
  $("#accordion-button-2").on("click", () => {
    $("#accordion-content-2").toggle(500, "linear");
    $("#accordion-content-1").hide();
    $("#accordion-content-3").hide();
    $("#accordion-content-4").hide();
    $("#up2").toggleClass("rotate");
    $("#up1").removeClass("rotate");
    $("#up3").removeClass("rotate");
    $("#up4").removeClass("rotate");
  });
  $("#accordion-button-3").on("click", () => {
    $("#accordion-content-3").toggle(500, "linear");
    $("#accordion-content-1").hide();
    $("#accordion-content-2").hide();
    $("#accordion-content-4").hide();
    $("#up3").toggleClass("rotate");
    $("#up1").removeClass("rotate");
    $("#up2").removeClass("rotate");
    $("#up4").removeClass("rotate");
  });
  $("#accordion-button-4").on("click", () => {
    $("#accordion-content-4").toggle(500, "linear");
    $("#accordion-content-1").hide();
    $("#accordion-content-2").hide();
    $("#accordion-content-3").hide();
    $("#up4").toggleClass("rotate");
    $("#up1").removeClass("rotate");
    $("#up2").removeClass("rotate");
    $("#up3").removeClass("rotate");
  });
});

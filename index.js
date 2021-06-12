$(function () {
  $.ajax({
    url: "./lessons.json",
    type: "GET",
    dataType: "json",
    success: allTables,
    error: function () {
      console.log("Error in the request");
    },
  });
});

// function innerTables(data) {
//   var arr = data.content[0].lesson_sub[0].lessons;
//   $.each(arr, function (key, value) {
//     $("#container").append("<p>" + value.lesson_title + "</p>");
//   });
// }

function allTables(data) {
  var arr = data.content;
  $.each(arr, function (key, value) {
    $("#container").append("<div class='anatema' id='tema" + key + "'>" + "</div>");
    $("#tema" + key).append(
      "<table class='temabaslik align-middle container-fluid'>" +
        "<td class='konu ps-4 border-end'>" +
        "Tema:" +
        value.lesson_cat_id +
        "<br />" +
        value.lesson_cat_title +
        "</td>" +
        "<td class='tarih text-center border-end'>" +
        value.lesson_start_date +
        "</td>" +
        "<td class='toplam text-center border-end'>" +
        "Toplam <br />" +
        "<span class='bold'>N/A</span>" +
        "</td>" +
        "<td class='çözülen text-center border-end'>" +
        "Çözülen <br />" +
        "<span class='bold'>" +
        value.lesson_solved +
        "</span>" +
        "</td>" +
        "<td class='doğru text-center border-end'>" +
        "Doğru <br />" +
        "<span class='bold'>" +
        value.lesson_correct +
        "</span>" +
        "</td>" +
        "<td class='yanlış text-center border-end'>" +
        "Yanlış <br />" +
        "<span class='bold'>" +
        value.lesson_wrong +
        "</span>" +
        "</td>" +
        "<td class='oranlar text-center border-end'>" +
        "<div class='başarı border-bottom'>Başarı Oranı " +
        value.lesson_success +
        "%</div>" +
        "<div class='kazanım'>Kazanım " +
        value.lesson_earnings +
        "%</div>" +
        "</td>" +
        "<td class='butonartı text-center'>" +
        '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#temaaltı' +
        key +
        '" aria-expanded="false" aria-controls="temaaltı0"></button>' +
        "</td>" +
        "</table>"
    );
    $("#tema" + key).append("<table class='collapse table table-hover table-bordered align-middle' id='temaaltı" + key + "'>" + "</table>");
    $("#temaaltı" + key).append(
      '<thead><tr class="theader text-center">' +
        "<td class='tdkonu ps-5'>Konu</td>" +
        "<td class='tdwidth'>Toplam</td>" +
        "<td class='tdwidth'>Doğru</td>" +
        "<td>Yanlış</td>" +
        "<td>Başarı</td>" +
        "<td>Kazanım</td>" +
        "</tr></thead>"
    );
    $("#temaaltı" + key).append("<tbody>");
    $.each(value.lesson_sub, function (key2, value2) {
      $("#temaaltı" + key).append(
        "<tr class='baslik'>" +
          "<th>" +
          '<button class="btn plus-button" type="button" data-bs-toggle="collapse" data-bs-target="#entemaaltı' +
          value2.lesson_sub_cat_id +
          '" aria-expanded="false" aria-controls="entemaaltı' +
          value2.lesson_sub_cat_id +
          '">+</button>' +
          value2.lesson_cat_title +
          "</th>" +
          "<td>" +
          "N/A" +
          "</td>" +
          "<td>" +
          value2.lesson_correct +
          "</td>" +
          "<td>" +
          value2.lesson_wrong +
          "</td>" +
          "<td>" +
          value2.lesson_success +
          "%</td>" +
          "<td>" +
          value2.lesson_earnings +
          "%</td></tr>"
      );
      // $("#temaaltı" + key).append("<tr class='collapse' id='entemaaltı" + value2.lesson_sub_cat_id + "'>" + "</tr>");
      $.each(value2.lessons, function (key3, value3) {
        $("#temaaltı" + key).append(
          "<tr class='altbaslik collapse' id='entemaaltı" +
            value2.lesson_sub_cat_id +
            "'><td class='enaltbaslik ps-5'>" +
            value3.lesson_title +
            "</td>" +
            "<td>" +
            value3.lesson_learning_question +
            "</td>" +
            "<td>" +
            value3.lesson_correct +
            "</td>" +
            "<td>" +
            value3.lesson_wrong +
            "</td>" +
            "<td class='bold'>" +
            value3.lesson_success +
            "%</td>" +
            "<td class='bold'>" +
            value3.lesson_earnings +
            "%</td></tr>"
        );
      });
      $("#temaaltı" + key).append("</tbody>");
    });
  });
}

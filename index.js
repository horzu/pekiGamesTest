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
      "<tr class='d-flex justify-content-between align-items-center temabaslik' id='tema'>" +
        "<td class='konu border-end'>" +
        "Tema:" +
        value.lesson_cat_id +
        "<br />" +
        value.lesson_cat_title +
        "</td>" +
        "<td class='tarih border-end'>" +
        value.lesson_start_date +
        "</td>" +
        "<td class='toplam border-end'>" +
        "Toplam <br />" +
        "N/A" +
        "</td>" +
        "<td class='çözülen border-end'>" +
        "Çözülen <br />" +
        value.lesson_solved +
        "</td>" +
        "<td class='doğru border-end'>" +
        "Doğru <br />" +
        value.lesson_correct +
        "</td>" +
        "<td class='yanlış border-end'>" +
        "Yanlış <br />" +
        value.lesson_wrong +
        "</td>" +
        "<td class='oranlar border-end'>" +
        "<div class='başarı border-bottom'>Başarı Oranı " +
        value.lesson_success +
        "%</div>" +
        "<div class='kazanım border-end'>Kazanım " +
        value.lesson_earnings +
        "%</div>" +
        "</td>" +
        "<td class='butonartı'>" +
        '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#temaaltı' +
        key +
        '" aria-expanded="false" aria-controls="temaaltı0"></button>' +
        "</td>" +
        "</tr>"
    );
    $("#tema" + key).append("<table class='collapse table table-bordered align-middle table-responsive' id='temaaltı" + key + "'>" + "</table>");
    $("#temaaltı" + key).append(
      '<thead><tr class="theader">' +
        "<td class='tdkonu'>Konu</td>" +
        "<td>Toplam</td>" +
        "<td>Doğru</td>" +
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
          '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#entemaaltı' +
          value2.lesson_sub_cat_id +
          '" aria-expanded="false" aria-controls="entemaaltı' +
          value2.lesson_sub_cat_id +
          '">+</button>' +
          value2.lesson_cat_title +
          "<th>" +
          "N/A" +
          "</th>" +
          "<td>" +
          value2.lesson_correct +
          "</td>" +
          "<td>" +
          value2.lesson_wrong +
          "</td>" +
          "<td>" +
          value2.lesson_success +
          "</td>" +
          "<td>" +
          value2.lesson_earnings +
          "</td></tr>"
      );
      // $("#temaaltı" + key).append("<tr class='collapse' id='entemaaltı" + value2.lesson_sub_cat_id + "'>" + "</tr>");
      $.each(value2.lessons, function (key3, value3) {
        $("#temaaltı" + key).append(
          "<tr class='altbaslik collapse' id='entemaaltı" +
            value2.lesson_sub_cat_id +
            "'><td>" +
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
            "<td>" +
            value3.lesson_success +
            "</td>" +
            "<td>" +
            value3.lesson_earnings +
            "</td></tr>"
        );
      });
      $("#temaaltı" + key).append("</tbody>");
    });
  });
}

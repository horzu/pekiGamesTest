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
    $("#container").append(
      "<tr id='tema'>" +
        "<td>" +
        "Tema:" +
        value.lesson_cat_id +
        "<br />" +
        value.lesson_cat_title +
        "</td>" +
        "<td>" +
        value.lesson_start_date +
        "</td>" +
        "<td>" +
        "Toplam <br />" +
        "N/A" +
        "</td>" +
        "<td>" +
        "Çözülen <br />" +
        value.lesson_solved +
        "</td>" +
        "<td>" +
        "Doğru <br />" +
        value.lesson_correct +
        "</td>" +
        "<td>" +
        "Yanlış <br />" +
        value.lesson_wrong +
        "</td>" +
        "<td>" +
        "<div>Başarı Oranı " +
        value.lesson_success +
        "%</div>" +
        "<div>Kazanım " +
        value.lesson_earnings +
        "%</div>" +
        "</td>" +
        "<td>" +
        '<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button</button>' +
        "</td>" +
        "</tr>" +
        '<tr class="bg-primary theader">' +
        "<td>Konu</td>" +
        "<td>Toplam</td>" +
        "<td>Doğru</td>" +
        "<td>Yanlış</td>" +
        "<td>Başarı</td>" +
        "<td>Kazanım</td>" +
        "</tr>"
    );
    $.each(value.lesson_sub, function (key2, value2) {
      $("#container").append(
        "<tr class='baslik'><th><strong>" +
          value2.lesson_cat_title +
          "</strong></th>" +
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
          "</td>" +
          "<td>" +
          value2.lesson_earnings +
          "</td></tr>"
      );
      $.each(value2.lessons, function (key3, value3) {
        $("#container").append(
          "<tr class='altbaslik'><td>" +
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
    });
  });
}

$("tr.baslik").click(function () {
  /* get all the subsequent 'tr' elements until the next 'tr.header',
     set the 'display' property to 'none' (if they're visible), to 'table-row'
     if they're not: */
  $(this)
    .nextUntil("tr.baslik")
    .css("display", function (i, v) {
      return this.style.display === "table-row" ? "none" : "table-row";
    });
});

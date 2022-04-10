function answer(key){
    let answer = key.val()
    $.ajax({
        url: "/k4rdle",
        method: "POST",
        data: {
            answer: answer
        },
        dataType : "json",
        contentType:"application/json"
    })
    .done(function (data) {
        alert(data);
    })
    .fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

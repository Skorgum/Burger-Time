$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim,
            eaten: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New burger added!");
            location.reload();
        });
    });

    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var eatenState = {
            eaten: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenState
        }).then(function() {
            console.log("Burger eaten!");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers" + id
        }).then(location.reload());
    });
});
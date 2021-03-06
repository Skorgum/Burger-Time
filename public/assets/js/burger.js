$(document).ready(function() { 
    $('#button1').click(function(){ 

        var newBurger = {
            burger_name: $('#ddid :selected').text(),
            eaten: 0
        };
       console.log(newBurger)





        event.preventDefault();
        console.log(newBurger)

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
        var id = $(this).attr("data-id");
        console.log(id)

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});
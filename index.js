$(function addrem (){

    $("#js-shopping-list-form").submit(function (event){
        event.preventDefault();

        let inputVal = $(this).find("#shopping-list-entry").val();
        let newItem = "<li> <span class='shopping-item'>" + inputVal + "</span> <div class='shopping-item-controls'> <button class='shopping-item-toggle'> <span class='button-label'>check</span> </button> <button class='shopping-item-delete'> <span class='button-label'>delete</span> </button> </div> </li>";
        $(".shopping-list").prepend(newItem);
        $("#shopping-list-entry").val("");

    } 
    );

    $(".shopping-list").on("click", ".shopping-item-toggle", function (event){
      
        $(this).closest(".shopping-item-controls").siblings(".shopping-item").toggleClass("shopping-item__checked");
           
    })

    $(".shopping-list").on("click", ".shopping-item-delete", function(event){
        $(this).closest("li").remove();
    }) 
});


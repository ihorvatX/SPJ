$(document).ready(function()
{
    
    $("#TODOInput").keypress(function(e){
        var key = e.which;
        if (key == 13) 
        {
            AddList();
        }
    })

    $("#TODOSubmit").on('click', function()
    {
        AddList();
    })
})

function AddList()
{
    let input = $("#TODOInput");
        if(input.val() === "")
        {
          alert("Prazan input");
        } 
        else
        {
            $("#TODOList").append(` <li > <input type="checkbox" style="cursor: pointer;" name="${input.val()}"> <i class="fas fa-trash" style="padding-left: 5px;cursor: pointer;"></i> <span style="padding: 0 10px 0 10px">&bull;</span> ${input.val()} </li`)
            input.val("");
        }         

    $(".fa-trash").on("click",function()
    {
        $(this).parent().remove();
    })
}
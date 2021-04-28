(function()
{
    CreateElement($('#selector').val());
    

    $('#selector').on('change', function()
    {
        CreateElement($(this).val());
    })

    
})();


function CreateElement(elementVal)
{
    $('#input').empty();
    $('#input').append(`<input type="${elementVal}" required>`);
}


function Save()
{
    alert($('input').val())
    console.log($('input').val());
    $('input').val('');
}
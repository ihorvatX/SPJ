(function()
{
    $('a').on('click', function()
    {
        $('#image').attr('src', `/img/lista/${$(this).attr('data-picture')}`);
    })
})();
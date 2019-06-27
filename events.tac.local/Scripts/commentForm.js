function createCommentItem(form,path)
{
    var service = new ItemService({ url: '/sitecore/api/ssc/item' });
    var obj = {
        ItemName='comment-' + form.name.value,
        TemplateID: '{74E0F4A1-6646-4A8A-9595-A87A4A0438C3}',
        Name: form.name.value,
        Comment: form.comment.value
    };
    service.create(obj)
        .path(path)
        .excute()
        .then(function (item){
        form.name.value = form.comment.value = '';
        window.alert('Thanks');
    })
    .fail(function (err) { window.alert(err); });
    event.preventDefault();
    return false;
}
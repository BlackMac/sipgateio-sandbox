sipgate.get("/v1/groups", (res) => {
    let contacts = res.items;
    contacts.forEach((item) => {
        var li = $("<li>");
        li.html(item.alias);
        $("#groups").append(li);
    });
});

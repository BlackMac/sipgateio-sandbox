// This will change the sipgate.io setting of the connected sipgate account
// only enable it when you know what you are doing

I_know_what_I_am_doing = false
really = false

if (I_know_what_I_am_doing === true && really === true) {
    // ATTENTION: onPush changes the sipgate.io push URL for incoming and outgoing calls
    sipgate.onPush(function (data) {
        var li = $("<li>");
        li.text(JSON.stringify(data));
        $("#callevents").append(li);
    })
} else {
    var li = $("<li>");
    li.text("Disabled. Please read the comments!");
    $("#callevents").append(li);
}
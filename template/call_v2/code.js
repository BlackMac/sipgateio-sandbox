var sessionId=null;
var muted=false;
var onhold=false;
function dial(btn) {
    let numa = $("#number_a_leg").val();
    let numb = $("#number_b_leg").val();
    sipgate.post("/v2/sessions/calls", {
        deviceId: "e0", // use a valid register extension
        caller: numa,
        callee: numb,
        callerId: numa
    },
    (res) => {
        $('#callactions').removeClass("hidden");
        sessionId = res.sessionId;
    });
}

function hangup(btn) {
    sipgate.delete("/v2/calls/"+sessionId, (res) => {
        $('#callactions').addClass("hidden");
    });
}

function mute(btn) {
    sipgate.put("/v2/calls/"+sessionId+"/muted", {value:!muted}, (res) => {
        $(btn).toggleClass("btn-success");
        muted=!muted;
    });
}

function hold(btn) {
    sipgate.put("/v2/calls/"+sessionId+"/hold", {value:!onhold}, (res) => {
        $(btn).toggleClass("btn-success");
        onhold=!onhold;
    });
}

function transfer(btn, attended) {
    let number = $("#transfernumber").val();
    
    sipgate.post("/v2/calls/"+sessionId+"/transfer", {
        attended:attended,
        phoneNumber: number
    }, (res) => {
        $('#callactions').addClass("hidden");
    });
}

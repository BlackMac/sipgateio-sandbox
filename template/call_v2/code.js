var sessionId=null;
var muted=false;
var onhold=false;
function dial() {
    let numa = $("#number_a_leg").val();
    let numb = $("#number_b_leg").val();
    sipgate.post("/v2/sessions/calls",
        {
            deviceId: "e0", // use a valid register extension
            caller: numa,
            callee: numb,
            callerId: numa
        },
        (res) => {
            sessionId = res.sessionId;
        });
}

function hangup() {
    sipgate.delete("/v2/calls/"+sessionId, (res) => {
        
    });
}

function mute(btn) {
    sipgate.put("/v2/calls/"+sessionId+"/muted", {value:!muted}, (res) => {
        $(btn).toggleClass("active");
        muted=!muted;
    });
}

function hold(btn) {
    sipgate.put("/v2/calls/"+sessionId+"/hold", {value:!onhold}, (res) => {
        $(btn).toggleClass("active");
        onhold=!onhold;
    });
}


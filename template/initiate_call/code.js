var sessionId=null
function dial() {
    let numa = $("#number_a_leg").val();
    let numb = $("#number_b_leg").val();
    sipgate.post("/v1/sessions/calls",
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
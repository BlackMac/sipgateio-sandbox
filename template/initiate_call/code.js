function dial() {
    let numa = $("#number_a_leg").val();
    let numb = $("#number_b_leg").val();

    sipgate.post("/v1/sessions/calls", {
            deviceId: "e0", // use a valid register extension
            caller: numa,
            callee: numb
        },
        function (res) {
            let sessionId = res.sessionId;
        });
}
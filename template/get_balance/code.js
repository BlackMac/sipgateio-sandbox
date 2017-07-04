sipgate.get("/v1/balance", (res) => {
    document.getElementById("balance").innerText=res.amount/10000;
});

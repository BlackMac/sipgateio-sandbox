// Welcome to the sipgate.io playground.
// =====================================

// You can use __jQuery__ and __Bootstrap__

// these sipgate helper functions are available:

// sipgate.get(path:string, callback:function)

// sipgate.delete(path:string, callback:function)

// sipgate.put(path:string, parameters:object, callback:function)

// sipgate.post(path:string, parameters:object, callback:function)


// here is a sample on how to use sipgate.get

sipgate.get("/v1/balance", function(res) {
    $("#balance").text((res.amount/10000+" "+res.currency))
}) 
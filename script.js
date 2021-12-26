function defaultDateAndTimestamp() {

    const currentDate = new Date();
    
    //To populate default date
    document.getElementById("dateInput").value = currentDate.toISOString().substr(0, 10);
    document.getElementById("dateOutput").innerHTML = currentDate.toLocaleDateString("en-AU"); 

    //To populate default timestamp
    const importObject = { env: {} };
 
    WebAssembly.instantiateStreaming(fetch("unixtimestamp.wasm"), importObject)
    .then(wasm_binary => {
        
        const date = new Date();
        const number = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
        const timestamp = wasm_binary.instance.exports.number_to_timestamp(number);
        document.getElementById("timestampOutput").innerHTML = timestamp;
        document.getElementById("timestampInput").value = timestamp;    
        
    });

}

function convertDateToTimestamp() {
    
    const importObject = { env: {} };
 
    WebAssembly.instantiateStreaming(fetch("unixtimestamp.wasm"), importObject)
    .then(wasm_binary => {
        
        const date = new Date(document.getElementById("dateInput").value);
        const number = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
        const timestamp = wasm_binary.instance.exports.number_to_timestamp(number);
        document.getElementById("timestampOutput").innerHTML = timestamp;    
       
    });
}

function convertTimestampToDate() {
    
    const importObject = { env: {} };
 
    WebAssembly.instantiateStreaming(fetch("unixtimestamp.wasm"), importObject)
    .then(wasm_binary => {
        
        const timestamp = document.getElementById("timestampInput").value;
        const number = wasm_binary.instance.exports.timestamp_to_number(BigInt(timestamp)); 
        const year = Math.trunc(number / 10000);
        const month = Math.trunc((number - year * 10000)/100);
        const day = (number - year * 10000) - month * 100;
        const date = new Date(year, month - 1, day);  
        document.getElementById("dateOutput").innerHTML = date.toLocaleDateString("en-AU");    
   
    });
}


const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;   //by default
});  

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);  // Remove event listeners
    document.removeEventListener("keyup", handleUp);      // Remove event listeners
    logDiv.textContent = " ";    // Clear logDiv content
    stateDiv.textContent = " ";  // Clear stateDiv content
    startBtn.disabled = false;
    stopBtn.disabled = true;   //by default
});

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`;   // Use backticks for template literals
    stateDiv.textContent = "Key is down";
}

function handleUp(e) {
    logDiv.textContent = `Key ${e.key} pressed up`;     // Use backticks for template literals
    stateDiv.textContent = "Key is up";
}

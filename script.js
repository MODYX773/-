let counter = 0;

document.getElementById("tasbeehButton").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").innerText = counter;
});

document.getElementById("resetButton").addEventListener("click", function() {
    counter = 0;
    document.getElementById("counter").innerText = counter;
});
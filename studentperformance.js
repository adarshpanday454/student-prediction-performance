function predictPerformance() {
    const attendance = parseInt(document.getElementById("attendance").value);
    const assignments = parseInt(document.getElementById("assignments").value);
    const studyHours = parseInt(document.getElementById("studyHours").value);
    let prediction = "";

    // Simple rule-based prediction logic
    if (attendance >= 80 && assignments >= 70 && studyHours >= 10) {
        prediction = "High probability of good performance";
    } else if (attendance >= 50 && assignments >= 50 && studyHours >= 5) {
        prediction = "Moderate probability of good performance";
    } else {
        prediction = "Low probability of good performance";
    }

    // Display the result
    document.getElementById("predictionResult").innerText = prediction;
     var typed2 = new Typed('#typed2', {
    strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true,
    loop: true
  });
}

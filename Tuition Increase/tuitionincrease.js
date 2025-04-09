function TuitionIncrease() {
    var yearTuition = 12000;

    for (var i = 1; i <= 5; i++) {
        yearTuition *= 1.02; // Increase by 2%
        document.write("The tuition for year " + i + " is $" + yearTuition.toFixed(2) + ".<br>");
    }
}

TuitionIncrease();

function main() {
    const gpa = parseFloat(prompt("Enter your GPA"));
    const height = parseFloat(prompt("Enter your height: "));
    const weight = parseFloat(prompt("Enter your weight: "));

    console.log(`GPA : ${gpa.toFixed(2)}`);
    console.log(`Height: ${height.toFixed(2)}`);
    console.log(`Weight: ${weight.toFixed(2)}`);
}

main();
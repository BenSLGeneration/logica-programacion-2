function convertirTemperatura() {
    let input = document.getElementById("tempInput").value.trim();

    document.body.style.color = "red"; 

    if (input === "" || isNaN(Number(input))) {
        alert("Error: Ingrese un número válido.");
    } else {
        let celsius = Number(input);
        let kelvin = celsius + 273.15;
        let fahrenheit = (9 / 5) * celsius + 32;

        document.getElementById("kelvinOutput").innerText = `Temperatura en grados Kelvin: ${kelvin}`;
        document.getElementById("fahrenheitOutput").innerText = `Temperatura en grados Fahrenheit: ${fahrenheit}`;

        // Mostrar elementos al presionar el botón
        document.getElementById("kelvinOutput").style.display = "block";
        document.getElementById("fahrenheitOutput").style.display = "block";
        document.getElementById("fireGif").style.display = "block";
    }
}
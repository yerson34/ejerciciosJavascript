function bmi(peso, altura) {
    const indice = peso / (altura ** 2);
    
    if (indice < 18.5) {
        return "Bajo de peso";
    } else if (indice >= 18.5 && indice < 25) {
        return "Normal";
    } else if (indice >= 25 && indice < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
function calculateTriangle() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert('Mohon masukkan semua nilai sisi.');
        return;
    }

    // Menghitung keliling
    const keliling = sideA + sideB + sideC;

    // Menghitung luas menggunakan rumus Heron
    const s = keliling / 2;
    const luas = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById('result').innerHTML = `
        <p>Keliling Segitiga: ${keliling.toFixed(2)}</p>
        <p>Luas Segitiga: ${luas.toFixed(2)}</p>
    `;
}
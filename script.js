const luasForm = document.getElementById('luasForm');
const kelilingForm = document.getElementById('kelilingForm');
const luasValue = document.getElementById('luasValue');
const kelilingValue = document.getElementById('kelilingValue');

luasForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    const luas = 0.5 * alas * tinggi;
    luasValue.textContent = luas.toFixed(2); // Display luas with 2 decimal places
});

kelilingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    const keliling = sisi1 + sisi2 + sisi3;
    kelilingValue.textContent = keliling.toFixed(2); // Display keliling with 2 decimal places
});
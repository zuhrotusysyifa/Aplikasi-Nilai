function calculateGrade() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;

    const presensiTeori = parseFloat(document.getElementById('presensiTeori').value);
    const tugasTeori = parseFloat(document.getElementById('tugasTeori').value);
    const utsTeori = parseFloat(document.getElementById('utsTeori').value);
    const uasTeori = parseFloat(document.getElementById('uasTeori').value);

    const presensiPraktik = parseFloat(document.getElementById('presensiPraktik').value);
    const tugasPraktik = parseFloat(document.getElementById('tugasPraktik').value);
    const utsPraktik = parseFloat(document.getElementById('utsPraktik').value);
    const uasPraktik = parseFloat(document.getElementById('uasPraktik').value);

    const presensi = (presensiTeori + presensiPraktik) / 2;
    const tugas = (tugasTeori + tugasPraktik) / 2;
    const uts = (utsTeori + utsPraktik) / 2;
    const uas = (uasTeori + uasPraktik) / 2;
    const nilaiAkhirTeori = (presensiTeori + tugasTeori + utsTeori + uasTeori) / 4;
    const nilaiAkhirPraktik = (presensiPraktik + tugasPraktik + utsPraktik + uasPraktik) / 4;

    const nilaiAkhir = (nilaiAkhirTeori + nilaiAkhirPraktik) / 2;

    let grade;
    if (nilaiAkhir >= 80) grade = 'A';
    else if (nilaiAkhir >= 70) grade = 'B';
    else if (nilaiAkhir >= 60) grade = 'C';
    else if (nilaiAkhir >= 50) grade = 'D';
    else grade = 'E';

    const resultTableBody = document.getElementById('resultTableBody');
    const newRow = resultTableBody.insertRow();
    newRow.insertCell(0).textContent = resultTableBody.rows.length; 
    newRow.insertCell(1).textContent = nim;
    newRow.insertCell(2).textContent = nama; 
    newRow.insertCell(3).textContent = presensi; 
    newRow.insertCell(4).textContent = tugas; 
    newRow.insertCell(5).textContent = uts; 
    newRow.insertCell(6).textContent = uas; 
    newRow.insertCell(7).textContent = nilaiAkhir.toFixed(2); 
    newRow.insertCell(8).textContent = grade;

    document.getElementById('nilaiForm').reset();
}

function resetTable() {
    const resultTableBody = document.getElementById('resultTableBody');
    resultTableBody.innerHTML = '';
}
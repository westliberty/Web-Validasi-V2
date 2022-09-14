function enter() {
    var name = document.getElementById("name").value;
    var semester = document.getElementById("semester").value;

    if (name == '') {
        Swal.fire('Isikan nama anda!');
        return false;

    } else if (semester == '') {
        Swal.fire('Isikan semester anda!');
        return false;

    } else if (semester >= 1 && semester <= 2) {
        var txt= ('Anda Mahasiswa Tahun Pertama, Mahasiswa Baru!');
        document.getElementById("sub").innerHTML=txt;
        return false;

    } else if (semester >= 3 && semester <= 4) {
        var txt= ('Anda Mahasiswa tahun kedua, Semangat!');
        document.getElementById("sub").innerHTML=txt;
        return false;

    } else if (semester >= 5 && semester <= 6) {
        var txt= ('Anda mahasiswa tahun ketiga, Tetap semangat!');
        document.getElementById("sub").innerHTML=txt;
        return false;

    } else if (semester >= 7 && semester <= 8) {
        var txt= ('Anda Mahasiswa tahun keeempat, Lulus tahun ini!');
        document.getElementById("sub").innerHTML=txt;
        return false;

    } else if (semester >= 9 && semester <= 99) {
        var txt= ('Lohh belom lulus kah??');
        document.getElementById("sub").innerHTML=txt;
        return false;

    } else if (semester <= 0) {
        var txt= ('Maaf Anda bukan Mahasiswa di Universitas ini!');
        document.getElementById("sub").innerHTML=txt;
        return false;
    }
}
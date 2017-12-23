$(document).ready(function(){
  console.log('masuk');
  $('#list_barang').hide();
  $('#tambah_barang').hide();
  $('#list_peminjam').hide();
  $('#reservasi').hide();
});

$('#invenList').click(function(){changeListBarang();return false;});
$('#invenAdd').click(function(){changeTambahBarang();return false;});
$('#resList').click(function(){changeListPeminjam();return false;});
$('#resRes').click(function(){changeReservasi();return false;});

function changeListBarang(){
  $('#dashboard').hide();
  $('#tambah_barang').hide();
  $('#list_peminjam').hide();
  $('#reservasi').hide();

  $('#list_barang').show();
}

function changeTambahBarang(){
  $('#dashboard').hide();
  $('#list_peminjam').hide();
  $('#reservasi').hide();
  $('#list_barang').hide();

  $('#tambah_barang').show();
}

function changeListPeminjam(){
  $('#dashboard').hide();
  $('#tambah_barang').hide();
  $('#reservasi').hide();
  $('#list_barang').hide();

  $('#list_peminjam').show();
}

function changeReservasi(){
  $('#dashboard').hide();
  $('#tambah_barang').hide();
  $('#list_barang').hide();
  $('#list_peminjam').hide();

  $('#reservasi').show();
}

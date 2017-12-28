$(document).ready(function(){
  $( "#divData" ).load( "/root/views/partials/body.ejs #dashboard" );
});

$('#invenList').click(function(){changeListBarang();return false;});
$('#invenAdd').click(function(){changeTambahBarang();return false;});
$('#resList').click(function(){changeListPeminjam();return false;});
$('#resRes').click(function(){changeReservasi();return false;});

function changeListBarang(){
  $( "#divData" ).load( "/root/views/partials/body.ejs #list_barang" );
}

function changeTambahBarang(){
  $( "#divData" ).load( "/root/views/partials/body.ejs #tambah_barang" );
}

function changeListPeminjam(){
  $( "#divData" ).load( "/root/views/partials/body.ejs #list_peminjam" );
}

function changeReservasi(){
  $( "#divData" ).load( "/root/views/partials/body.ejs #reservasi" );
}
<!--index.js end-->

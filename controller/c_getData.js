$("#callDetail").click(function(){
	var id = $(this).data("id");
	$.post("/getDetail/"+id, function(data){
		$("#tableDetail").html("<tr><th>ID</th><td>:</td><td>"
			+data.id+"</td></tr><tr><th>Nama</th><td>:</td><td>"
			+data.nama+"</td></tr><tr><th>Domain</th><td>:</td><td>"
			+data.domain+"</td></tr><tr><th>Port</th><td>:</td><td>"
			+data.port+"</td></tr><tr><th>Folder</th><td>:</td><td>"
			+data.folder+"</td></tr><tr><th>Webserver</th><td>:</td><td>"
			+data.webserver+"</td></tr><tr><th>Deskripsi</th><td>:</td><td>"
			+data.deskripsi+"</td></tr><tr><th>HTTPS</th><td>:</td><td>"
			+data.https+"</td></tr><tr><th>Status</th><td>:</td><td>"
			+data.active+"</td></tr>");
	},"json");
	$("#modalDetail").modal("show");
	//e.preventDefault();
});
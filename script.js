alert("Selamat Datang Di Pendaftaran hiGurls!")
function sub(){
  
  var nama = document.getElementById('nama').value;
  var email = document.getElementById("email").value;
  var negara = document.getElementById("negara").value;
  var tahun = document.getElementById("tahun").value;
  var jk = document.getElementsByName("gender");
  var gender = '';
  var umur = 2020 - tahun;

  
  for (var a = 0; a < jk.length; a++) {
    if(jk[a].checked == true){
      gender = jk[a].value;
      break;
    }
  }
  
  
  let x = document.getElementById('hem');
  let y = '';

  
  if( nama == '' || email == '' || negara == '' || tahun == '' || gender == '') {
	        if(nama == '') y += '<p><b>Nama Belum Di Isi</b></p>'; 
	        if(email == '') y += '<p><b>Email Belum Di Isi</b></p>'; 
	        if(negara == '') y += '<p><b>Negara Belum Di Isi</b></p>'; 
	        if(tahun == '') y += '<p><b>Tahun Belum Di Isi</b></p>'; 
	        if(gender == '') y += '<p><b>Jenis Kelamon Belum Di Isi</b></p>'; 
      }else{ 
        
		    y += `<b><h2>Selamat Datang Di hiGirls!</h2> 
		    <table>
		      <tr>
		        <td>Nama Lengkap </td>
		        <td>:</td>
		        <td>${nama}</td>
		      </tr>
		      <tr>
		        <td>Email </td>
		        <td>:</td>
		        <td>${email}</td>
		      </tr>
		      <tr>
		        <td>Jenis Kelamin </td>
		        <td>:</td>
		        <td>${gender}</td>
		      </tr>
		      <tr>
		        <td>Negara </td>
		        <td>:</td>
		        <td>${negara}</td>
		      </tr>
		      <tr>
		        <td>Umur Anda </td>
		        <td>:</td>
		        <td>${umur} Tahun</td>
		      </tr>
		    </table>`;
		  }
    x.innerHTML = y; 
    console.log(`
    Nama Lengkap    = ${nama}
    Email           = ${email}
    Jenis Kelamin   = ${gender}
    Negara          = ${negara}
    Umur Anda       = ${umur}`);

    
    alert("Thanks For Registration " + nama);
}

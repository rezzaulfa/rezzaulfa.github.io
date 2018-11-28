function terimainput() {
  var x = document.forms['form']['nama'].value;
  var y = document.forms['form']['tempat'].value;
  var z = document.forms['form']['tanggal'].value;
  var a = document.forms['form']['agama'].value;
  var b = document.forms['form']['email'].value;
  var c = document.forms['form']['orangtua'].value;
  var d = document.forms['form']['deskripsi'].value;


  var tabel = document.getElementById("tabelinputan");
  var row = tabel.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);


  cell1.innerHTML = x;
  cell2.innerHTML = y;
  cell3.innerHTML = z;
  cell4.innerHTML = a;
  cell5.innerHTML = b;
  cell6.innerHTML = c;
  cell7.innerHTML = d;

  alert("Data Berhasil Dientry");
}

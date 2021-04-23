setTimeout( function(){
  cnt1 = (document.body.innerHTML.match( /。/g) || []).length
  for (let i = 1; i <= cnt1; i++) {
    if ((i % 2) != 0) {document.body.innerHTML = document.body.innerHTML.replace("。", "&#x1f917;");} // パァ
    else {document.body.innerHTML = document.body.innerHTML.replace("。", "&#x1f497;");}
  }
  cnt2 = (document.body.innerHTML.match( /\<br\>/g) || []).length
  for (let i = 1; i <= cnt2; i++) {
    if ((i % 2) != 0) {document.body.innerHTML = document.body.innerHTML.replace("<br>", "&#x1f647;<p style='margin:0;'></p>");} // パァ
    else {document.body.innerHTML = document.body.innerHTML.replace("<br>", "&#x1f603;<p style='margin:0;'></p>");}
  }
  document.body.innerHTML = document.body.innerHTML.replace( /、/g, "&#x1f3b5;");
}, 300);
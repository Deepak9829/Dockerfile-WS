function op() {
    var xhr = new XMLHttpRequest();
    i=document.getElementById("box1").value
    xhr.open("GET","http://172.17.0.2/cgi-bin/info.py?info="+i,true);
    xhr.send();

    xhr.onload=function(){
        var output = xhr.responseText;
    document.getElementById('output').innerHTML = output;
    }
}

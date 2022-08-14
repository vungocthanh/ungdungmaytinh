function myfunc(){
    var x = document.getElementById('oneNum').value;
    var y = document.getElementById('seconNum').value;
    var opt = document.getElementById('opt').value;
    var ans = eval( x + opt + y);
    document.getElementById('ans').value = ans;
}
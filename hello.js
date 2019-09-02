function concat(){
    var input1 = document.getElementById("myInput1").value;
    var input2 = document.getElementById("myInput2").value;

    var arr1 = document.getElementById("array1");
    var arr2 = document.getElementById("array2");
    var conc = document.getElementById("concat");

    var input1split = input1.split("");
    var input2split = input2.split("");

    var array1 = arr1.innerHTML = input1split;
    var array2 = arr2.innerHTML = input2split;

    var x = array1;
    var y = array2;
    var z = [];
    var i;

    for(i=0; i<x.length; i++){
        z[i]=x[i];
        }
    for(i=0; i<y.length; i++){
        z[z.length]=y[i];
        }
    conc.innerHTML = z;
    }
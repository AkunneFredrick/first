function doFirst(){
    var x =document.getElementById('canvas');
    canvas = x.getContext('2d');
    canvas = fillcircle(50.20,90,90);
    canvas = clearcircle(100,40,70,70);
}
window.addEventListener("load",doFirst,false)
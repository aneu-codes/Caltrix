// tooltip
var tps = document.querySelectorAll('.tooltip');
tps.forEach(function (tp) {
    tp.addEventListener('click', function () {
        var i = this.querySelector('.info').textContent;
        alert(''+i);
    });
});
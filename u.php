
<!DOCTYPE html>

<html>

<body>

<div oncontextmenu="return monmenu(this)">
    Démonstration : Cliquez le bouton droit
</div>
</body>
<style>
    .ctxmenu
    {
        position:absolute;
        min-width: 128px;
        height:auto;
        padding: 8px;
        margin:0;
        margin-left:32px;
        margin-top:-16px;
        border: 1px solid #999;
        background: #F8F8F8;
        box-shadow: 2px 2px 2px #AAA;
        z-index:11;
        overflow: visible;
    }
    .ctxline
    {
        display:block;
        margin:0px;
        padding:2px 2px 2px 8px;
        border:1px solid #F8F8F8;
        border-radius:3px;
        font-size:13px;
        font-family:Arial, Helvetica, sans-serif;
        overflow:visible;
    }
    .ctxline:hover
    {
        border:1px solid #BBB;
        background-color: #F0F0F0;
        background-image: -moz-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -ms-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -webkit-gradient(linear, 0 0, 0 100%,
        from(#ffffff), to(#e6e6e6));
        background-image: -webkit-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: -o-linear-gradient(top, #ffffff, #e6e6e6);
        background-image: linear-gradient(top, #ffffff, #e6e6e6);
        background-repeat: repeat-x;
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',
        endColorstr='#e6e6e6', GradientType=0);
    }
</style>
<script>
    var xMousePosition = 0;
    var yMousePosition = 0;
    document.onmousemove = function(e)
    {
        xMousePosition = e.clientX + window.pageXOffset;
        yMousePosition = e.clientY + window.pageYOffset;
    };


    function rename(element)
    {
        alert("Renommer");
    }

    function edit(element)
    {
        alert("Editer");
    }

    function monmenu(element)
    {
        var x = document.getElementById('ctxmenu1');
        if(x) x.parentNode.removeChild(x);

        var d = document.createElement('div');
        d.setAttribute('class', 'ctxmenu');
        d.setAttribute('id', 'ctxmenu1');
        element.parentNode.appendChild(d);
        d.style.left = xMousePosition + "px";
        d.style.top = yMousePosition + "px";
        d.onmouseover = function(e) { this.style.cursor = 'pointer'; }
        d.onclick = function(e) { element.parentNode.removeChild(d);  }
        document.body.onclick = function(e) { element.parentNode.removeChild(d);  }

        var p = document.createElement('p');
        d.appendChild(p);
        p.onclick=function() { rename(element) };
        p.setAttribute('class', 'ctxline');
        p.innerHTML = "Renommer";

        var p2 = document.createElement('p');
        d.appendChild(p2);
        p2.onclick=function() { edit(element) };
        p2.setAttribute('class', 'ctxline');
        p2.innerHTML = "Editer";

        return false;
    }
</script>
</html>
window.onload = ()=>{
    var btn = document.getElementById('btnadd') ;
    btn.onclick = ()=>{
        var input = document.getElementById('task') ;
        var list = document.getElementById('list') ;
        list.innerHTML += `<li>${input.value}</li>`
    }
}

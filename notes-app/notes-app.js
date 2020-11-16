document.querySelector('button').addEventListener('click', function(e) {
    console.log(e)
    e.target.innerHTML = '<img src="0" onerror="alert(1)" ></img>'
})
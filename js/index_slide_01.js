document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((t,i)=>{
    t.addEventListener('show.bs.tab', function (e) {
        let targetClass = t.dataset.bsTarget
        var pane = document.querySelector('#tabB '+targetClass)
        var sibling = document.querySelector('#tabB .tab-pane.active')
        // hide 2nd pane sibling
        sibling.classList.remove('show')
        sibling.classList.remove('active')
        // show 2nd pane
        pane.classList.add('show')
        pane.classList.add('active')
    })  
})
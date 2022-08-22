/*window.addEventListener('load', function(){
    var el = document.getElementById('touchsurface')
    var inner = document.getElementById('inner')
    var hidetimer = null
    swipedetect(el, function(swipedir){
        if (swipedir != 'none'){
            clearTimeout(hidetimer)
            // префиксы для имен, прим. "leftarrow.png", "rightarrow.png" и т.д.
            var bgimage = swipedir + 'arrow.png'
            inner.style.background = 'transparent url(' + bgimage + ') center center no-repeat'
            hidetimer = setTimeout(function(){ // вернуть фон через 1 сек.
                inner.style.background = ''
            }, 1000)
        }
    })
}, false)*/
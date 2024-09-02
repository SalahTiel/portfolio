let light = true
function toggleTheme(){
    let mobileTheme = document.getElementsByClassName('toggleTheme')[0]
    let desktopTheme = document.getElementsByClassName('toggleTheme')[1]

    if(light){
        mobileTheme.style.justifyContent = 'end'
        desktopTheme.style.justifyContent = 'end'
        document.querySelector('html').classList.add('darkTheme')
    }else{
        mobileTheme.style.justifyContent = 'start'
        desktopTheme.style.justifyContent = 'start'
        document.querySelector('html').classList.remove('darkTheme')
    }

    light = !light
}


let opened = false
function toggleMenu(){
    let menu = document.getElementsByClassName('mobileMenu')[0]
    if(opened){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
    opened = !opened
}
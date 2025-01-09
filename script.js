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

function targetButton(element){
    let target = document.getElementById(element)
    target.click()
}

let openMenu = false
function toggleMenu(){
    const menu = document.getElementsByClassName('mobileMenu')[0]
    if(openMenu){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
    openMenu = !openMenu
}

let openOverlay = false
function toogleOverlay (){
    const background = document.querySelector('.projectsOverlay .background')
    const projectOverlay = document.querySelector('.projectsOverlay .wrapper');
    if(openOverlay){
        background.style.display = 'none'
        projectOverlay.style.display = 'none'
    }else{
        background.style.display = 'block'
        projectOverlay.style.display = 'block'
    }
    openOverlay = !openOverlay
}

function developmentAlert (){
    alert('Este projeto está em fase de desenvolvimento. Continue acompanhando!  : )')
}

function copyEmail(){
    const email = "salatielmf49@gmail.com"
    navigator.clipboard.writeText(email)
        .then(
            alert(`email "salatielmf19@gmail.com" foi copiado para a área de transferência.`)
        )
}
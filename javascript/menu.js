const $menu = document.querySelector('.menu')
const $btnMenu = document.querySelector('.btnMenu')
const $btnSair = document.querySelector('.btnSair')

$btnMenu.addEventListener('click', function() {
	$menu.classList.add('menu_opem')
})

$btnSair.addEventListener('click', function() {
	$menu.classList.remove('menu_opem')
})
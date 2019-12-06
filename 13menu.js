const menuElement = document.querySelector('.menu');

const buttons = menuElement.querySelectorAll('button');
const subMenus = menuElement.querySelectorAll('ul');

for(const button of buttons) {
    button.addEventListener('click', function(){
        for(subMenu of subMenus) {
            subMenu.classList.remove('active');
        }
        this.nextElementSibling.classList.add('active');
    })
}

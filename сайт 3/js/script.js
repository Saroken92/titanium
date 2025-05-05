document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const mainMenu = document.querySelector('.main-menu ul');
    
    menuToggle.addEventListener('click', function() {
        mainMenu.style.display = mainMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if(this.getAttribute('href') === '#') return;
            
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Закрываем меню на мобильных
                if(window.innerWidth < 992) {
                    mainMenu.style.display = 'none';
                }
            }
        });
    });
    
    // Фиксированная шапка при скролле
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if(window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Анимации при прокрутке
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Запускаем при загрузке
    
    // Предзагрузка изображений
    const images = ['img/slide1.jpg', 'img/about.jpg', 'img/form-bg.jpg'];
    images.forEach(img => {
        const image = new Image();
        image.src = img;
    });
});
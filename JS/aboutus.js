const buttons = document.querySelectorAll('.nav-btn');
function Button_hover(){
    buttons.forEach(button => {
            button.style.background = 'linear-gradient(90deg, #1093da, #5e2ce0, #9d00ff, #1093da)';
            button.style.color = "#ffffff";
            button.style.border = "2px solid #e1e1e1";
            button.style.backgroundSize = '300% 100%';
            button.style.backgroundPosition = '0% 0%';
            button.style.transition = 'background-position 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease';
    });
    button.onmouseenter = function() {
            this.style.backgroundPosition = '100% 0';
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow =  '0 0 15px #9d00ff, 0 0 10px #5e2ce0';
        };

    button.onmouseleave = function() {
        this.style.backgroundPosition = '0% 0%';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    };
}
Button_hover()
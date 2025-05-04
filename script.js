// Tạo các ngôi sao
function createStars() {
    const stars = document.querySelector('.stars');
    const count = 200;
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${5 + Math.random() * 5}s infinite alternate`;
        
        // Thêm animation twinkle
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes twinkle {
                0% { opacity: ${Math.random()}; }
                100% { opacity: ${Math.random()}; }
            }
        `;
        document.head.appendChild(style);
        
        stars.appendChild(star);
    }
}

// Tạo bong bóng
function createBubbles() {
    const bubbles = document.querySelector('.bubbles');
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = 10 + Math.random() * 40;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${8 + Math.random() * 12}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        
        // Màu sắc ngẫu nhiên cho bong bóng
        const hue = Math.random() * 360;
        bubble.style.background = `hsla(${hue}, 80%, 60%, 0.2)`;
        bubble.style.boxShadow = `0 0 ${size/2}px hsla(${hue}, 80%, 60%, 0.5)`;
        
        bubbles.appendChild(bubble);
    }
}

// Khởi tạo hiệu ứng
window.onload = function() {
    createStars();
    createBubbles();
};


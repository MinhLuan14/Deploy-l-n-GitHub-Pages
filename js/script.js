document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Nguyễn Minh Luân đã load xong!');

    initContactForm();
    initScrollAnimations();
    initNavHighlight();

    console.log('Chào mừng bạn đến với portfolio của Nguyễn Minh Luân! 👋');
    alert("Chào mừng bạn đến Portfolio thật trên internet của mình");
});

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        if (!name || !email || !subject || !message) {
            showFormMessage('Vui lòng điền đầy đủ tất cả các trường!', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Email không hợp lệ!', 'error');
            return;
        }

        console.log('Form data:', { name, email, subject, message });

        showFormMessage('Cảm ơn bạn! Tin nhắn của bạn đã được gửi. Tôi sẽ phản hồi sớm nhất có thể.', 'success');

        contactForm.reset();

        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.classList.remove('success', 'error');
        }, 5000);
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

function initNavHighlight() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('load', () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
});

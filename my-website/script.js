// رسالة ترحيبية في الكونسول
console.log('🎉 موقع QVR STUDIO يعمل بنجاح!');
console.log('🚀 تم التحميل بنجاح');

// ====== الدالة المفقودة: زر "شاهد أعمالنا" ======
function scrollToWorks() {
    const target = document.getElementById('work');
    if (target) {
        // حساب دقيق مع مراعاة الهيدر
        const headerHeight = 100;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // إضافة hash للرابط (اختياري)
        window.history.pushState(null, null, '#work');
    }
}

// ====== الدالة المفقودة: زر تبديل اللغة (إن وجدت) ======
function toggleLanguage() {
    console.log('تبديل اللغة - هذه دالة احتياطية إذا كنت تحتاجها');
    // يمكنك إضافة كود تبديل اللغة هنا لاحقاً
}

// تأثير عند تحميل الصفحة
window.addEventListener('load', function() {
    console.log('✅ الصفحة جاهزة');
    
    // إضافة تأثير على العنوان
    const title = document.querySelector('.hero h1');
    if (title) {
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'fadeIn 2s';
        }, 100);
    }
    
    // تأكيد تحميل الدوال
    console.log('✅ الدوال المحملة:', {
        scrollToWorks: typeof scrollToWorks,
        toggleLanguage: typeof toggleLanguage
    });
});

// التنقل السلس
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // استخدام نفس حساب دالة scrollToWorks
            const headerHeight = 100;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// تأثير على البطاقات
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.03)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// إرسال نموذج التواصل
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا يمكنك إضافة كود إرسال البريد لاحقاً
        alert('🎊 شكراً لك! تم إرسال رسالتك بنجاح.\nسأتواصل معك خلال 24 ساعة.');
        
        // مسح النموذج
        this.reset();
        
        // تأثير على الزر
        const button = this.querySelector('button');
        button.innerHTML = '<i class="fas fa-check"></i> تم الإرسال!';
        button.style.background = '#00cc99';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-paper-plane"></i> إرسال';
            button.style.background = '';
        }, 3000);
    });
}

// تأثير الشريط العلوي عند التمرير
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(255, 51, 102, 0.3)';
    } else {
        header.style.background = 'rgba(20, 20, 20, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// إضافة أنيميشن بسيطة
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .hero h1, .portfolio, .contact {
        animation: fadeIn 1s ease-out;
    }
    
    /* تحسين كبسة الأزرار */
    button, .social-btn, .watch-works-btn, .project-video-btn, .nav-work-btn {
        padding: 15px 30px !important;
        border-radius: 12px !important;
        transition: all 0.3s ease !important;
    }
    
    button:hover, .social-btn:hover, .watch-works-btn:hover {
        transform: translateY(-5px) !important;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2) !important;
    }
`;
document.head.appendChild(style);

// رسالة سرية في الكونسول 😉
console.log('%c 🔥 مبروك! موقعك جاهز!', 
    'color: #ff3366; font-size: 20px; font-weight: bold; background: black; padding: 10px;');
console.log('%c 👨‍💻 المطور: QVR STUDIO', 
    'color: #00ccff; font-size: 16px;');
console.log('📍 الزر "شاهد أعمالنا" جاهز للاستخدام!');
{
// رسالة ترحيبية في الكونسول
console.log('🎉 موقع QVR STUDIO يعمل بنجاح!');
console.log('🚀 تم التحميل بنجاح');

// ====== الدالة المفقودة: زر "شاهد أعمالنا" ======
function scrollToWorks() {
    const target = document.getElementById('work');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ====== الدالة المفقودة: زر تبديل اللغة ======
function toggleLanguage() {
    // كود تبديل اللغة يضاف هنا لاحقاً
    console.log('تبديل اللغة');
}

window.addEventListener('DOMContentLoaded', function() {
    console.log('✅ الصفحة جاهزة');
    
    // تأكيد أن الدوال شغالة
    const watchBtn = document.querySelector('.watch-works-btn');
    if (watchBtn) {
        watchBtn.addEventListener('click', scrollToWorks);
        console.log('✅ زر "شاهد أعمالنا" مربوط');
    }
});

// باقي السكربت...
// تأثير على البطاقات
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.03)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// إضافة أنيميشن بسيطة
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .hero h1, .portfolio, .contact {
        animation: fadeIn 1s ease-out;
    }
`;
document.head.appendChild(style);
}

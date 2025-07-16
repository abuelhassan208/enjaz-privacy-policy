// Language Management
let currentLanguage = 'en';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setLastUpdatedDate();
    detectUserLanguage();
});

// Initialize page functionality
function initializePage() {
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
}

// Set the last updated date
function setLastUpdatedDate() {
    const lastUpdatedElement = document.getElementById('last-updated-date');
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    lastUpdatedElement.textContent = formattedDate;
}

// Detect user's preferred language
function detectUserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('ar')) {
        setLanguage('ar');
    } else {
        setLanguage('en');
    }
}

// Toggle between languages
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
}

// Set language and update content
function setLanguage(language) {
    currentLanguage = language;
    
    // Update HTML attributes
    const html = document.documentElement;
    const body = document.body;
    
    if (language === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        body.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        body.setAttribute('dir', 'ltr');
    }
    
    // Update content visibility
    updateContentVisibility(language);
    
    // Update translatable text
    updateTranslatableText(language);
    
    // Update language toggle button
    updateLanguageToggle(language);
    
    // Update page title
    updatePageTitle(language);
    
    // Add transition effect
    addLanguageTransition();
}

// Update content visibility based on language
function updateContentVisibility(language) {
    const englishContent = document.getElementById('content-en');
    const arabicContent = document.getElementById('content-ar');
    
    if (language === 'ar') {
        englishContent.classList.remove('active');
        arabicContent.classList.add('active');
    } else {
        arabicContent.classList.remove('active');
        englishContent.classList.add('active');
    }
}

// Update translatable text elements
function updateTranslatableText(language) {
    const translatableElements = document.querySelectorAll('[data-en][data-ar]');
    
    translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) {
            element.textContent = text;
        }
    });
}

// Update language toggle button
function updateLanguageToggle(language) {
    const languageText = document.getElementById('language-text');
    if (language === 'ar') {
        languageText.textContent = 'English';
    } else {
        languageText.textContent = 'العربية';
    }
}

// Update page title
function updatePageTitle(language) {
    const title = language === 'ar' 
        ? 'إنجاز - سياسة الخصوصية' 
        : 'ENJAZ - Privacy Policy';
    document.title = title;
}

// Add smooth transition effect when changing language
function addLanguageTransition() {
    const contentCard = document.querySelector('.content-card');
    contentCard.style.transform = 'scale(0.98)';
    contentCard.style.opacity = '0.8';
    
    setTimeout(() => {
        contentCard.style.transition = 'all 0.3s ease';
        contentCard.style.transform = 'scale(1)';
        contentCard.style.opacity = '1';
    }, 150);
}

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button functionality
function addScrollToTopButton() {
    // Create scroll to top button
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<span class="material-icons">keyboard_arrow_up</span>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.onclick = scrollToTop;
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    
    // Add styles
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: var(--shadow);
        display: none;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    
    // Add hover effect
    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
        scrollButton.style.boxShadow = 'var(--shadow-hover)';
    });
    
    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
        scrollButton.style.boxShadow = 'var(--shadow)';
    });
}

// Add keyboard navigation support
function addKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Toggle language with Ctrl/Cmd + L
        if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
            e.preventDefault();
            toggleLanguage();
        }
        
        // Scroll to top with Home key
        if (e.key === 'Home') {
            e.preventDefault();
            scrollToTop();
        }
    });
}

// Add print functionality
function addPrintFunctionality() {
    // Add print button (optional)
    const printButton = document.createElement('button');
    printButton.innerHTML = '<span class="material-icons">print</span>';
    printButton.className = 'print-button';
    printButton.onclick = () => window.print();
    printButton.setAttribute('aria-label', 'Print page');
    
    // You can add this button to the header if needed
    // document.querySelector('.header-actions').appendChild(printButton);
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    addScrollToTopButton();
    addKeyboardNavigation();
    addPrintFunctionality();
});

// Handle browser back/forward navigation
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.language) {
        setLanguage(e.state.language);
    }
});

// Save language preference to localStorage
function saveLanguagePreference(language) {
    try {
        localStorage.setItem('enjaz-privacy-language', language);
    } catch (e) {
        // Handle localStorage not available
        console.log('localStorage not available');
    }
}

// Load language preference from localStorage
function loadLanguagePreference() {
    try {
        return localStorage.getItem('enjaz-privacy-language');
    } catch (e) {
        // Handle localStorage not available
        return null;
    }
}

// Enhanced language detection with preference saving
function detectUserLanguage() {
    const savedLanguage = loadLanguagePreference();
    if (savedLanguage) {
        setLanguage(savedLanguage);
        return;
    }
    
    const userLang = navigator.language || navigator.userLanguage;
    const language = userLang.startsWith('ar') ? 'ar' : 'en';
    setLanguage(language);
}

// Enhanced toggle language with preference saving
function toggleLanguage() {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    saveLanguagePreference(newLanguage);
    
    // Update browser history
    history.pushState({ language: newLanguage }, '', window.location.href);
}

// Add loading states and error handling
function addLoadingStates() {
    // Add loading class to body
    document.body.classList.add('loading');
    
    // Remove loading class after content is ready
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 500);
    });
}

// Initialize loading states
document.addEventListener('DOMContentLoaded', addLoadingStates);

// Add accessibility improvements
function improveAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content id
    const main = document.querySelector('.main');
    if (main) {
        main.id = 'main-content';
    }
}

// Initialize accessibility improvements
document.addEventListener('DOMContentLoaded', improveAccessibility);

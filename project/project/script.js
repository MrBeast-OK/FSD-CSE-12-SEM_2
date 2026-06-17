document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------------------
    // Language Translation Handler & Dictionary
    // -------------------------------------------------------------------------
    const langSelectTop = document.getElementById('lang-select-top');
    const langSelectBottom = document.getElementById('lang-select-bottom');

    const translations = {
        en: {
            'signin-btn': 'Sign in',
            'hero-title': 'Unlimited movies, TV shows and more',
            'hero-subtitle': 'Starts at ₹149. Cancel at any time.',
            'hero-desc': 'Ready to watch? Enter your email to create or restart your membership.',
            'email-placeholder': 'Email address',
            'error-email-required': 'Email is required.',
            'error-email-invalid': 'Please enter a valid email address.',
            'get-started': 'Get Started >',
            'trend-title': 'Trending Now',
            'reason-title': 'More reasons to join',
            'reason-tv-title': 'Enjoy on your TV',
            'reason-tv-desc': 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'reason-download-title': 'Download your shows to watch offline',
            'reason-download-desc': 'Save your favourites easily and always have something to watch.',
            'reason-everywhere-title': 'Watch everywhere',
            'reason-everywhere-desc': 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
            'reason-kids-title': 'Create profiles for kids',
            'reason-kids-desc': 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
            'faq-title': 'Frequently Asked Questions',
            'faq-q1': 'What is Netflix?',
            'faq-a1-p1': 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
            'faq-a1-p2': "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
            'faq-q2': 'How much does Netflix cost?',
            'faq-a2': 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
            'faq-q3': 'Where can I watch?',
            'faq-a3-p1': 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
            'faq-a3-p2': "You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            'faq-q4': 'How do I cancel?',
            'faq-a4': 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
            'footer-call-prefix': 'Questions? Call ',
            'link-faq': 'FAQ',
            'link-help': 'Help Center',
            'link-account': 'Account',
            'link-media': 'Media Center',
            'link-investor': 'Investor Relations',
            'link-jobs': 'Jobs',
            'link-ways': 'Ways to Watch',
            'link-terms': 'Terms of Use',
            'link-privacy': 'Privacy',
            'link-cookie': 'Cookie Preferences',
            'link-corp': 'Corporate Information',
            'link-contact': 'Contact Us',
            'link-speed': 'Speed Test',
            'link-legal': 'Legal Notices',
            'link-only': 'Only on Netflix',
            'footer-country': 'Netflix India',
            'recaptcha-text': "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
            'recaptcha-link': 'Learn more.',
            'modal-signin-title': 'Sign In',
            'modal-email-placeholder': 'Email or phone number',
            'modal-password-placeholder': 'Password',
            'modal-signin-btn': 'Sign In',
            'modal-remember': 'Remember me',
            'modal-help': 'Need help?',
            'modal-new-to-netflix': 'New to Netflix?',
            'modal-signup-link': 'Sign up now.',
            'modal-email-error-required': 'Please enter a valid email or phone number.',
            'modal-email-error-invalid': 'Please enter a valid email.',
            'modal-pass-error-required': 'Your password must contain between 4 and 60 characters.',
            'modal-pass-error-short': 'Password must be at least 4 characters.',
            'modal-success': 'Welcome back! Logged in as: ',
            'email-success': 'Success! Email submitted: '
        },
        hi: {
            'signin-btn': 'साइन इन करें',
            'hero-title': 'असीमित फ़िल्में, टीवी शो और बहुत कुछ',
            'hero-subtitle': '₹149 से शुरू। किसी भी समय रद्द करें।',
            'hero-desc': 'देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या फिर से शुरू करने के लिए अपना ईमेल डालें।',
            'email-placeholder': 'ईमेल पता',
            'error-email-required': 'ईमेल आवश्यक है।',
            'error-email-invalid': 'कृपया एक मान्य ईमेल पता दर्ज करें।',
            'get-started': 'शुरू करें >',
            'trend-title': 'अभी ट्रेंड कर रहा है',
            'reason-title': 'शामिल होने के और अधिक कारण',
            'reason-tv-title': 'अपने टीवी पर आनंद लें',
            'reason-tv-desc': 'स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर और अन्य पर देखें।',
            'reason-download-title': 'ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें',
            'reason-download-desc': 'अपने पसंदीदा शो को आसानी से सहेजें और हमेशा कुछ देखने के लिए रखें।',
            'reason-everywhere-title': 'हर जगह देखें',
            'reason-everywhere-desc': 'अपने फोन, टैबलेट, लैपटॉप और टीवी पर असीमित फ़िल्में और टीवी शो स्ट्रीम करें।',
            'reason-kids-title': 'बच्चों के लिए प्रोफ़ाइल बनाएं',
            'reason-kids-desc': 'बच्चों को उनकी सदस्यता के साथ मुफ्त में उनके पसंदीदा पात्रों के साथ रोमांच पर भेजें।',
            'faq-title': 'अक्सर पूछे जाने वाले प्रश्न',
            'faq-q1': 'नेटफ्लिक्स क्या है?',
            'faq-a1-p1': 'नेटफ्लिक्स एक स्ट्रीमिंग सेवा है जो हजारों इंटरनेट से जुड़े उपकरणों पर विभिन्न प्रकार के पुरस्कार विजेता टीवी शो, फिल्में, एनीमे, वृत्तचित्र और बहुत कुछ प्रदान करती है।',
            'faq-a1-p2': 'आप बिना किसी विज्ञापन के जितना चाहें, जब चाहें देख सकते हैं - सभी एक कम मासिक शुल्क में। खोजने के लिए हमेशा कुछ नया होता है और हर हफ्ते नए टीवी शो और फिल्में जोड़ी जाती हैं!',
            'faq-q2': 'नेटफ्लिक्स की कीमत कितनी है?',
            'faq-a2': 'एक निश्चित मासिक शुल्क पर अपने स्मार्टफोन, टैबलेट, स्मार्ट टीवी, लैपटॉप या स्ट्रीमिंग डिवाइस पर नेटफ्लिक्स देखें। योजनाएं ₹149 से ₹649 प्रति माह तक हैं। कोई अतिरिक्त लागत नहीं, कोई अनुबंध नहीं।',
            'faq-q3': 'मैं कहाँ देख सकता हूँ?',
            'faq-a3-p1': 'कहीं भी, कहीं भी देखें। अपने नेटफ्लिक्स खाते से साइन इन करके नेटफ्लिक्स डॉट कॉम पर अपने कंप्यूटर से या स्मार्ट टीवी, स्मार्टफोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित नेटफ्लिक्स ऐप की पेशकश करने वाले किसी भी इंटरनेट से जुड़े डिवाइस पर तुरंत देखें।',
            'faq-a3-p2': 'आप आईओएस या एंड्रॉइड ऐप से अपने पसंदीदा शो भी डाउनलोड कर सकते हैं। जब आप यात्रा पर हों और इंटरनेट कनेक्शन न हो तो देखने के लिए डाउनलोड का उपयोग करें। नेटफ्लिक्स को अपने साथ कहीं भी ले जाएं।',
            'faq-q4': 'मैं कैसे रद्द करूं?',
            'faq-a4': 'नेटफ्लिक्स लचीला है। कोई कष्टप्रद अनुबंध और कोई प्रतिबद्धता नहीं है। आप आसानी से दो क्लिक में अपना खाता ऑनलाइन रद्द कर सकते हैं। कोई रद्दीकरण शुल्क नहीं है - अपना खाता कभी भी शुरू या बंद करें।',
            'footer-call-prefix': 'प्रश्न हैं? कॉल करें ',
            'link-faq': 'अक्सर पूछे जाने वाले प्रश्न (FAQ)',
            'link-help': 'सहायता केंद्र',
            'link-account': 'खाता',
            'link-media': 'मीडिया केंद्र',
            'link-investor': 'निवेशक संबंध',
            'link-jobs': 'नौकरियां',
            'link-ways': 'देखने के तरीके',
            'link-terms': 'उपयोग की शर्तें',
            'link-privacy': 'गोपनीयता',
            'link-cookie': 'कुकी प्राथमिकताएं',
            'link-corp': 'कॉर्पोरेट जानकारी',
            'link-contact': 'हमसे संपर्क करें',
            'link-speed': 'स्पीड टेस्ट',
            'link-legal': 'कानूनी सूचनाएं',
            'link-only': 'केवल नेटफ्लिक्स पर',
            'footer-country': 'नेटफ्लिक्स इंडिया',
            'recaptcha-text': 'यह पृष्ठ आपकी सुरक्षा के लिए गूगल reCAPTCHA द्वारा सुरक्षित है ताकि यह सुनिश्चित हो सके कि आप रोबोट नहीं हैं।',
            'recaptcha-link': 'अधिक जानें।',
            'modal-signin-title': 'साइन इन करें',
            'modal-email-placeholder': 'ईमेल या फोन नंबर',
            'modal-password-placeholder': 'पासवर्ड',
            'modal-signin-btn': 'साइन इन करें',
            'modal-remember': 'मुझे याद रखें',
            'modal-help': 'मदद चाहिए?',
            'modal-new-to-netflix': 'नेटफ्लिक्स पर नए हैं?',
            'modal-signup-link': 'अभी साइन अप करें।',
            'modal-email-error-required': 'कृपया एक मान्य ईमेल या फ़ोन नंबर दर्ज करें।',
            'modal-email-error-invalid': 'कृपया एक मान्य ईमेल दर्ज करें।',
            'modal-pass-error-required': 'आपके पासवर्ड में 4 से 60 वर्ण होने चाहिए।',
            'modal-pass-error-short': 'पासवर्ड कम से कम 4 वर्णों का होना चाहिए।',
            'modal-success': 'वापसी पर स्वागत है! लॉगिन किया गया: ',
            'email-success': 'सफलता! ईमेल सबमिट किया गया: '
        }
    };

    function translatePage(lang) {
        // Translate text elements
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // Keep inner HTML tags if they exist (like <u> in phone calls)
                const underline = el.querySelector('u');
                if (underline) {
                    el.innerHTML = translations[lang][key] + ' <u>' + underline.innerHTML + '</u>';
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    // Sync dropdown values and run translation
    function handleLanguageChange(lang) {
        langSelectTop.value = lang;
        langSelectBottom.value = lang;
        translatePage(lang);
    }

    langSelectTop.addEventListener('change', (e) => handleLanguageChange(e.target.value));
    langSelectBottom.addEventListener('change', (e) => handleLanguageChange(e.target.value));


    // -------------------------------------------------------------------------
    // FAQ Accordion Handler
    // -------------------------------------------------------------------------
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.btn2');
        const answer = item.querySelector('.faq-answer');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close other active items for clean behavior
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = null;
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });


    // -------------------------------------------------------------------------
    // Email Validation Handler
    // -------------------------------------------------------------------------
    const emailForms = document.querySelectorAll('.email-form');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    emailForms.forEach(form => {
        const input = form.querySelector('input[type="email"]');
        const errorMsg = form.querySelector('.error-msg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = input.value.trim();
            const currentLang = langSelectTop.value;

            if (!emailValue) {
                showError(translations[currentLang]['error-email-required']);
            } else if (!emailRegex.test(emailValue)) {
                showError(translations[currentLang]['error-email-invalid']);
            } else {
                clearError();
                alert(translations[currentLang]['email-success'] + emailValue);
                input.value = '';
            }
        });

        input.addEventListener('input', () => {
            clearError();
        });

        function showError(message) {
            input.classList.add('input-error');
            errorMsg.textContent = message;
            errorMsg.style.display = 'block';
            input.focus();
        }

        function clearError() {
            input.classList.remove('input-error');
            errorMsg.textContent = '';
            errorMsg.style.display = 'none';
        }
    });


    // -------------------------------------------------------------------------
    // Sign In Modal Toggle & Validation
    // -------------------------------------------------------------------------
    const signInBtn = document.getElementById('signin-btn');
    const signInModal = document.getElementById('signin-modal');
    const closeModalBtn = signInModal.querySelector('.close-modal');
    const signInForm = document.getElementById('signin-form');
    const modalEmailInput = document.getElementById('modal-email');
    const modalPasswordInput = document.getElementById('modal-password');
    const modalEmailError = document.getElementById('modal-email-error');
    const modalPasswordError = document.getElementById('modal-password-error');

    // Open Modal
    signInBtn.addEventListener('click', () => {
        signInModal.classList.add('show');
        modalEmailInput.focus();
    });

    // Close Modal via close button
    closeModalBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close Modal by clicking outside
    signInModal.addEventListener('click', (e) => {
        if (e.target === signInModal) {
            closeModal();
        }
    });

    // Validate Modal Input on Submit
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        const currentLang = langSelectTop.value;

        const emailVal = modalEmailInput.value.trim();
        const passwordVal = modalPasswordInput.value.trim();

        // Email / Phone Validation
        if (!emailVal) {
            showModalError(modalEmailInput, modalEmailError, translations[currentLang]['modal-email-error-required']);
            isValid = false;
        } else if (emailVal.includes('@') && !emailRegex.test(emailVal)) {
            showModalError(modalEmailInput, modalEmailError, translations[currentLang]['modal-email-error-invalid']);
            isValid = false;
        } else {
            clearModalError(modalEmailInput, modalEmailError);
        }

        // Password Validation
        if (!passwordVal) {
            showModalError(modalPasswordInput, modalPasswordError, translations[currentLang]['modal-pass-error-required']);
            isValid = false;
        } else if (passwordVal.length < 4) {
            showModalError(modalPasswordInput, modalPasswordError, translations[currentLang]['modal-pass-error-short']);
            isValid = false;
        } else {
            clearModalError(modalPasswordInput, modalPasswordError);
        }

        if (isValid) {
            alert(translations[currentLang]['modal-success'] + emailVal);
            closeModal();
        }
    });

    modalEmailInput.addEventListener('input', () => {
        clearModalError(modalEmailInput, modalEmailError);
    });

    modalPasswordInput.addEventListener('input', () => {
        clearModalError(modalPasswordInput, modalPasswordError);
    });

    function closeModal() {
        signInModal.classList.remove('show');
        signInForm.reset();
        clearModalError(modalEmailInput, modalEmailError);
        clearModalError(modalPasswordInput, modalPasswordError);
    }

    function showModalError(inputEl, errorEl, message) {
        inputEl.classList.add('modal-input-error');
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }

    function clearModalError(inputEl, errorEl) {
        inputEl.classList.remove('modal-input-error');
        errorEl.textContent = '';
        errorEl.style.display = 'none';
    }
});

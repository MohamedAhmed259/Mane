let currentLanguage = 'ar'; // اللغة الافتراضية

        function toggleLanguage() {
            if (currentLanguage === 'ar') {
                currentLanguage = 'en';
                document.documentElement.lang = 'en';
                document.getElementById('welcome-message').innerText = 'Welcome to my website!';
                document.getElementById('language-icon').innerText = 'ar'; // أيقونة العربية
            } else {
                currentLanguage = 'ar';
                document.documentElement.lang = 'ar';
                document.getElementById('welcome-message').innerText = 'مرحباً بك في موقعي!';
                document.getElementById('language-icon').innerText = 'en'; // أيقونة الإنجليزية
            }
        }
        // <div id="language-icon" class="icon" onclick="toggleLanguage()">en</div>
    // <h1 id="welcome-message">مرحباً بك في موقعي!</h1>

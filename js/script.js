const btnDarkMode = document.querySelector(".dark-mode-btn");

//  Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Если меняются системные натсройки, меняем тему 

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

    alert('Change!!!')

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', 'dark')
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
    }
})

// 3. Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem("darkMode", "light");
    }
}
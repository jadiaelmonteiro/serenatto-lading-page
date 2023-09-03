const bodySerematto = document.getElementById('body-serenatto');
const modeDark = document.getElementById("mode-dark");

modeDark.addEventListener('click', () => {
    const mode = modeDark.checked ? 'dark' : 'light';
    bodySerematto.setAttribute("data-bs-theme", mode);
})


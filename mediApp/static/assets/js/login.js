(function() {
    const form = document.getElementById('form');
    const toggle = document.querySelector('.show-password');
    const pass = document.getElementById('password');

    function handleSubmit(e) {

        e.preventDefault();
    }

    form.addEventListener('submit', handleSubmit);

    toggle.addEventListener('mousedown', function() {
        pass.setAttribute('type', 'text');
    });
    toggle.addEventListener('mouseup', function() {
        pass.setAttribute('type', 'password');
    });
})();

function toggleMenu() {
    var x = document.getElementById("topMenu");
    if (x.className === "flex-between") {
        x.className += " menu--active";
    } else {
        x.className = "flex-between";
    }
}
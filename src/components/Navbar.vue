<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://tori.codes">
                <img src="../assets/tc-icon.png" alt="Logo"/>
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-items">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" id="navbar-items">
            <div class="navbar-start">
            </div>
            <div class="navbar-end">
                <a class="navbar-item">Home</a>
                <a class="navbar-item">About</a>
                <a class="navbar-item">Contact</a>
                <a class="navbar-item">Blog</a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
    document.addEventListener('DOMContentLoaded', () => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    });
</script>

<style scoped>
    .navbar {
        background-color: rgba(249, 251, 255, 0.15) !important;
    }
</style>
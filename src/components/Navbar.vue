<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">
                <img id="icon" alt="Tori Codes Icon" src=".././assets/tc-icon.png"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav_collapse"/>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item href="#">Home</b-nav-item>
                        <b-nav-item href="#">About</b-nav-item>
                        <b-nav-item href="#">Work</b-nav-item>
                        <b-nav-item href="#">Contact</b-nav-item>
                    </b-navbar-nav>
                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">PT</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    #icon {
        max-width: 50px;
    }
    .bg-light {
        background-color: rgba(249, 251, 255, 0.3) !important;
    }
</style>
<template>
    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Hi! My name is <br/> Victoria &lt;Tori/&gt; Rodríguez</h1>
                <br/>
                <h2 class="subtitle" id="text">
                    <vue-typer :text='["I am a Full-Stack Developer", "I am a Laboratorian", "I am a Tech Enthusiast", "I am an Eternal Autodidact"]'></vue-typer>
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Masthead"
    };
</script>

<style scoped>
    div {
        width: 100%;
    }
    .hero.is-primary.is-bold {
        background: transparent;
    }
    .title {
        color: #E93EA4 !important;
        font-family: 'Patrick Hand', cursive;
        text-shadow: #fcf9ef 2px 7px 2px;
        font-weight: 300;
        font-size: 3em;
    }
</style>
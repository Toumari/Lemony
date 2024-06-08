<template>
    <section class="portfolio container">

        <div class="projects">

            <h2 class="title project__section__title " id="project__section__title">Latest <br class="line__break" />
                Projects</h2>
            <article class="project" id="proj__1">
                <h4 class="project__title">Project Title</h4>
                <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                    perferendis.
                </p>
                <img src="@/assets/mp2.png" alt="">
            </article>
            <article class="project" id="proj__2">
                <h4 class="project__title">Project Title</h4>
                <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                    perferendis.
                </p>
                <img src="@/assets/mp2.png" alt="">
            </article>
            <article class="project" id="proj__3">
                <h4 class="project__title">Project Title</h4>
                <p class="project__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                    perferendis.
                </p>
                <img src="@/assets/mp2.png" alt="">
            </article>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.project {
    margin-top: 2rem;
}







.line__break {
    display: none;
}


/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {}

/* lg */
@media (min-width: 1024px) {

    .portfolio {
        padding-bottom: 5rem;
    }

    img {
        width: 100%;
        margin-top: 1rem;

        border-radius: 8px;
    }

    .line__break {
        display: block;
    }


    .project {
        border-top: 2px solid #333;
        padding-top: 1rem;
        max-height: 400px;
        max-width: 400px;
        justify-self: start;
        align-self: center;
        margin-top: 3rem;
    }

    .project__title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .project__description {
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
    }

    .project__section__title {
        grid-area: t;
        align-self: start;
        justify-self: start;
        font-size: calc(2rem + 0.1vw);
        font-weight: 900;
    }

    #proj__1 {
        grid-area: a;
    }

    #proj__2 {
        grid-area: b
    }

    #proj__3 {
        grid-area: c;
    }

    .projects {

        display: grid;
        justify-content: center;
        column-gap: 3rem;
        align-items: center;
        min-height: 0;
        min-width: 0;
        grid-template-areas:
            "t . ."
            "t . ."
            "t b c"
            "a b c"
            "a b ."
            ". . .";


    }

    .project__section__title {
        grid-area: t;
        align-self: start;
        justify-self: start;

        font-size: calc(3rem + 0.1vw);
        font-weight: 900;
    }

    #proj__1 {
        grid-area: a;
    }

    #proj__2 {
        grid-area: b
    }

    #proj__3 {
        grid-area: c;
    }


}

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
/* @media (min-width: 1536px) {} */
</style>
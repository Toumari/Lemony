<template>
    <div class="wrapper">
        <section class="portfolio container">
            <div class="projects">
                <h2 class="title project__section__title" id="project__section__title">
                    Latest <br class="line__break" />
                    Projects.
                </h2>
                <article class="project" id="proj__1">
                    <a href="https://tubular-moxie-46f1e2.netlify.app/">
                        <h3 class="project__title">Bourne</h3>
                        <p class="project__description">
                            A travel website for a fictional travel agency.
                        </p>
                        <img src="@/assets/bourne2.png" alt="" />
                    </a>
                </article>
                <article class="project" id="proj__2">
                    <a href="https://timely-empanada-1b6f1c.netlify.app/">
                        <h3 class="project__title">Personal Portfolio</h3>
                        <p class="project__description">
                            A personal portfolio site to showcase my work and skills.
                        </p>
                        <img src="@/assets/port3.png" alt="" />
                    </a>
                </article>
                <article class="project" id="proj__3">
                    <a href="https://fancy-queijadas-cd2178.netlify.app/">
                        <h3 class="project__title">M.P. Marketing</h3>
                        <p class="project__description">
                            A marketing site for a fictional marketing agency.
                        </p>
                        <img src="@/assets/mp2.png" alt="" />
                    </a>
                </article>
            </div>
        </section>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted } from "vue";

onMounted(() => {
    gsap.context(() => {
        gsap.from("#project__section__title", {
            scrollTrigger: "#project__section__title",
            duration: 0.5,

            y: -50,
            autoAlpha: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
        });

        gsap.from(".project", {
            scrollTrigger: ".project",
            duration: 0.5,
            y: -50,
            autoAlpha: 1,
            ease: "back.out(1)",
            stagger: 0.2,
        });
    });
});
</script>

<style scoped>
.wrapper {}

.projects {
    padding-top: 2rem;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-template-columns: 1fr;
    align-items: center;
}

.title {
    margin-bottom: 0;
}

.project__title {
    border-top: 1px solid #4d4d4d;
    margin-top: 2rem;
    padding-top: 1rem;
    margin-bottom: 0rem;
    font-size: calc(1.25rem + 0.1vw);
}

.project:first-of-type .project__title {
    margin-top: 0;
}


.project__description {
    margin-bottom: 1rem;
    font-size: calc(1rem + 0.1vw);
}

img {
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
}

.line__break {
    display: none;
}

@media (min-width: 640px) {

    .projects {
        row-gap: 3rem;
    }

    .project__title {

        margin-top: 0;
    }

}

@media (min-width: 1024px) {

    .projects {
        padding-top: 0rem;
    }

    .project {
        justify-self: start;
        align-self: center;
    }

    .project__title {
        padding-top: 0.25rem;
    }

    img {
        margin-top: 1rem;

    }

    .line__break {
        display: block;
    }

    .projects {
        row-gap: 2rem;

    }

    .project {
        border-top: 2px solid #4d4d4d;
        max-height: 400px;
        max-width: 400px;
        justify-self: start;
        align-self: center;
    }

    .project__title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
    }

    .project__description {
        font-size: calc(1rem + 0.1vw);
        margin-bottom: 0.25rem;
    }



    #proj__1 {
        grid-area: a;
    }

    #proj__2 {
        grid-area: b;
    }

    #proj__3 {
        grid-area: c;
    }

    .projects {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 2rem;

        min-height: 0;
        min-width: 0;
        grid-template-areas:
            "t . ."
            "t b c"
            "a b c"
            "a b .";
    }

    .project__section__title {
        text-align: left;
        grid-area: t;
        align-self: center;
        justify-self: start;
        font-size: calc(4rem + 0.1vw);
        font-weight: 900;
    }

    #proj__1 {
        grid-area: a;
    }

    #proj__2 {
        grid-area: b;
    }

    #proj__3 {
        grid-area: c;
    }
}
</style>

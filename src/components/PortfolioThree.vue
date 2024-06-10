<template>
    <div class="wrapper">
        <section class="portfolio container">
            <div class="projects">
                <h2 class="title project__section__title" id="project__section__title">
                    Latest <br class="line__break" />
                    Projects.
                </h2>
                <article class="project" id="proj__1">
                    <h4 class="project__title">Dominik Lorenzo</h4>
                    <p class="project__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                        perferendis.
                    </p>
                    <img src="@/assets/dom.png" alt="" />
                </article>
                <article class="project" id="proj__2">
                    <h4 class="project__title">Personal Portfolio</h4>
                    <p class="project__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                        perferendis.
                    </p>
                    <img src="@/assets/port3.png" alt="" />
                </article>
                <article class="project" id="proj__3">
                    <h4 class="project__title">M.P. Marketing</h4>
                    <p class="project__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                        perferendis.
                    </p>
                    <img src="@/assets/mp2.png" alt="" />
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
            scrub: 1,
        });
    });
});
</script>

<style scoped>
.wrapper {
    background-color: #f5f5f5;
}

.projects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-template-columns: 1fr;
    align-items: center;
    row-gap: 2rem;
}

.title {
    margin-bottom: 0;
}

.project__title {
    margin-bottom: 0rem;
}

.project__description {
    margin-bottom: 1rem;
}

img {
    border-radius: 8px;
    object-fit: cover;
    object-position: center;
}

.line__break {
    display: none;
}

@media (min-width: 1024px) {
    .project {
        justify-self: start;
        align-self: center;
    }

    .portfolio {
        padding-bottom: 5rem;
    }

    img {
        margin-top: 1rem;
        border-radius: 8px;
    }

    .line__break {
        display: block;
    }

    .project {
        border-top: 2px solid #333;
        max-height: 400px;
        max-width: 400px;
        justify-self: start;
        align-self: center;
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
        font-size: calc(5rem + 0.1vw);
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
        grid-area: t;
        align-self: start;
        justify-self: start;
        font-size: calc(5rem + 0.1vw);
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

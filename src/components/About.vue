<template>
    <section class="about container section" id="about" role="region" aria-label="About Me Section" ref="about">
        <h2 class="title">About Me</h2>
        <div class="about__content__wrapper">
            <img class="about__img hidden" src="/images/me.jpg" alt="A photo of Jack" />
            <div class="about__content__text__wrapper">
                <p class="about__description-header">
                    Hi, I'm Jack <span class="waving__hand" aria-hidden="true">👋</span>
                </p>
                <p class="about__description" ref="aboutText">
                    I'm a web developer based in the UK. I have a passion for creating
                    beautiful, responsive websites that are both user-friendly and
                    accessible. Whether you're looking for a simple landing page or a logo
                    for your brand, I'm here to help. I have experience working with a
                    range of industry standard tools and technologies enabling me to bring
                    your ideas to life and strengthen your brand.
                </p>
                <h4 class="technologies__header" ref="aboutTech">Technologies</h4>
                <div class="about__technologies" ref="technologies">
                    <span ref="skill" class="skill">JavaScript</span>
                    <span ref="skill" class="skill">HTML</span>
                    <span ref="skill" class="skill">CSS</span>
                    <span ref="skill" class="skill">Vue.js</span>
                    <span ref="skill" class="skill">SCSS</span>
                    <span ref="skill" class="skill">Tailwind CSS</span>
                    <span ref="skill" class="skill">Bootstrap</span>
                    <span ref="skill" class="skill">Sass</span>
                    <span ref="skill" class="skill">Git</span>
                    <span ref="skill" class="skill">GitHub</span>
                    <span ref="skill" class="skill">Figma</span>
                    <span ref="skill" class="skill">Photoshop</span>
                    <span ref="skill" class="skill">Node</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
        gsap.from(".about", {
            scrollTrigger: ".about",
            duration: 1,
            y: -50,
            autoAlpha: 1,
            ease: "back.out(1.7)",
            stagger: 0.2,
        });

        gsap.fromTo(
            ".about__technologies",
            {
                scrollTrigger: ".technologies__header",
                duration: 0.5,
                opacity: 0,
                y: 50,
                autoAlpha: 1,
                stagger: 0.05,
                ease: "back.out(1.7)",
            },
            {
                scrollTrigger: {
                    trigger: ".technologies__header",
                    end: "bottom 20%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                stagger: 0.05,
                ease: "back.out(1.7)",
            }
        );
    });
});
</script>

<style scoped>
.about {
    z-index: 10;
    overflow: hidden;
}

.skill:hover {
    background-color: #ffeb3b;
    color: #333;
}

.waving__hand {
    font-size: 1.5rem;
    animation: wavingHand 1s infinite linear;
    display: inline-block;
}

@keyframes wavingHand {
    0% {
        transform: rotate(0deg);
    }

    25% {
        transform: rotate(20deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.about__title {
    width: fit-content;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: var(--fs-xl);
}

.about__img {
    border-radius: 8px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.about__description-header {
    font-size: var(--fs-lg);
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: #2d2d2d;
}

.about__description {
    font-size: calc(1rem + 0.05vw);
    font-weight: 400;
    line-height: 1.6;
    color: #2d2d2d;
    letter-spacing: 0.2px;
}

.about__description::selection {
    background-color: #ffe200;
    color: #333;
}

.technologies__header {
    font-size: var(--fs-sm);
    font-weight: 700;
    margin-top: 2rem;
    color: #4b4b4b;
}

.skill {
    background-color: #ffe200;
    color: #2d2d2d;
    display: inline-block;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: var(--fs-sm);
    font-weight: 900;
}

.technologies__header {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: var(--fs-md);
}

/* sm */
@media (min-width: 640px) {
    .about__title {
        font-size: var(--fs-2xl);
    }

    .about__img {
        margin-bottom: 1.5rem;
        flex: 1;
        order: 0;
    }

    .about__description-header {
        margin-bottom: 1rem;
    }

    .about__description {
        max-width: 70ch;
        flex: 1;
    }

    .about__description-header {
        font-size: var(--fs-xl);
    }
}

/* md */
@media (min-width: 768px) {
    .about__content__wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2rem;
        justify-content: space-between;
    }

    .about__technologies {
        margin: 0;
    }

    .about__img {
        height: 440px;
        width: 300px;
        flex: 1;
        margin-bottom: 0;
    }

    .about__description-header {
        margin-top: 0;
    }
}

/* lg */
@media (min-width: 1024px) {
    .about__img {
        height: 350px;
        flex: 1;
    }

    .about__content__text__wrapper {
        display: flex;
        flex-direction: column;
        max-width: 65ch;
        justify-content: center;
    }
}

/* xl */
@media (min-width: 1280px) {
    .about__title {
        text-align: center;
    }

    .about__content__wrapper {
        justify-content: flex-start;
    }

    .about__content__wrapper {
        gap: 3rem;
    }

    .about__img {
        height: 350px;
        flex-grow: 0;
        flex-basis: 25%;
    }

    .technologies__header {
        margin-top: 3rem;
        margin-bottom: 1rem;
        font-size: var(--fs-md);
    }

    .about__technologies {
        font-size: var(--fs-sm);
        max-width: 65ch;
    }

    .skill {
        font-size: var(--fs-md);
    }
}
</style>

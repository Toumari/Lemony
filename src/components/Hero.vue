<template>
    <div class="hero__wrapper">
        <span class="title__lemon" ref="titleLemon">🍋</span>
        <section class="hero container" role="region" aria-label="Hero Section" ref="hero">
            <h1 class="hero__title">We build the website your brand deserves</h1>
            <p ref="myElement" class="hero__description">
                Bring your brand into the modern world with a website that is as unique
                as you are.
            </p>
            <p class="learn__more">Learn More</p>
            <img src="@/assets/down2.png" class="chevron" alt="" />
        </section>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

import { gsap } from "gsap";

onMounted(() => {
    let ctx = gsap.context(() => {
        gsap.fromTo(
            ".title__lemon",
            {
                x: "-10vw",
            },
            {
                duration: 15,
                x: "105vw",
                y: gsap.utils.random(-100, 100),
                ease: "linear",
                rotation: 360,
                repeat: -1,
                yoyo: true,
            }
        );

        gsap.from(".chevron", {
            duration: 0.5,
            y: 10,
            repeat: -1,
            yoyo: true,
            ease: "back.out(1)",
        });
    });

    onUnmounted(() => {
        ctx.pause() && ctx.revert();
    });
});

const scrollToKeyFeatures = () => {
    document
        .querySelector(".key__article")
        .scrollIntoView({ behavior: "smooth", block: "nearest" });
};
</script>

<style scoped>
.hero__wrapper {
    position: relative;
    overflow: hidden;
}

.learn__more {
    margin-top: 1rem;
    font-weight: 500;
    font-size: calc(1.2rem + 0.1vw);
    margin-bottom: 1rem;
}

.chevron {
    width: 2rem;
    padding-bottom: 1rem;
}

.hero__wrapper,
.hero {
    position: relative;
    z-index: 1;
    overflow: hidden;
}

.hero {
    text-align: center;
    min-height: calc(10rem + 35vh);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
}

.title__lemon {
    position: absolute;
    font-size: 7.5rem;
    transform: rotate(10deg);
    left: 0rem;
    opacity: 0.4;
    top: 36%;
}

.hero__title {
    font-weight: 900;
    margin: 0 auto;
    letter-spacing: 0.25px;
    max-width: 25ch;
    margin-inline: auto;
    color: #2d2d2d;
    z-index: 1;
    font-size: calc(3rem + 0.1vw);
}

.hero__description {
    font-size: calc(1.2rem + 0.1vw);
    font-weight: 400;
    margin-block: var(--size-2xl);
    max-width: 30ch;
    color: #2d2d2d;
}

/* xs */
@media (min-width: 475px) {
    .hero__description {
        max-width: 32ch;
    }
}

/* sm */
@media (min-width: 640px) {
    .hero__description {
        max-width: 35ch;
    }
}

/* md */
@media (min-width: 768px) {
    .hero__title {
        font-size: calc(2.6rem + 2.5vw);
        max-width: 20ch;
    }

    .hero__description {
        font-size: calc(1.4rem + 0.1vw);
    }
}

@media (min-width: 1024px) {
    .hero {
        margin-top: 5rem;
    }
}

@media (min-width: 1536px) {
    .hero__title {
        line-height: 1;
    }

    .hero__description {
        margin-top: var(--size-xl);
        margin-bottom: var(--size-3xl);
        max-width: 28ch;
    }
}
</style>

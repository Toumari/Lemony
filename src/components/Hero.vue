<template>
    <div class="hero__wrapper">
        <span class="title__lemon" ref="titleLemon">🍋</span>
        <section class="hero container" role="region" aria-label="Hero Section" ref="hero">
            <h1 class="hero__title">
                We build the website your brand deserves.
            </h1>
            <p ref="myElement" class="hero__description">
                Bring your brand into the modern world, with a website that is as unique as you are.
            </p>
            <a ref="moreBtn" @click=scrollToKeyFeatures class="hero__btn btn" role="button">Learn More</a>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const moreBtn = ref(null)

import { gsap } from 'gsap'

onMounted(() => {

    let ctx = gsap.context(() => {
        let btnPulse = gsap.to('.hero__btn', {
            scale: 1.1,
            y: 5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            paused: true
        })

        moreBtn.value.addEventListener('mouseenter', () => {
            btnPulse.play()
        })

        moreBtn.value.addEventListener('mouseleave', () => {
            btnPulse.restart()
            btnPulse.pause()
        })

        const tl = gsap.timeline()
        tl.from('.hero', {
            delay: 0.1,
            duration: 0.8,
            y: 100,
            autoAlpha: 0,
            ease: "back.out(1.7)"
        }).from('.hero__btn', {
            delay: 0.2,
            duration: 1,
            ease: "back.out(1.7)",
        }, "<")

        gsap.fromTo('.title__lemon',
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
            })



    })

    onUnmounted(() => {
        ctx.pause() && ctx.revert();
    })


})

const scrollToKeyFeatures = () => {
    // Smooth scrolling behavior (optional):
    document.querySelector('#keyfeatures').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

</script>

<style scoped>
section {
    margin: 0;
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
    margin-inline: auto;

}

.title__lemon {
    position: absolute;
    font-size: 7.5rem;
    transform: rotate(10deg);
    left: 0rem;
    opacity: 0.4;
    top: 36%;

}

.lemons {
    color: #333;
    display: inline-block;
    position: relative;
}

.hero__title {
    font-weight: 900;
    margin: 0 auto;
    letter-spacing: 0.25px;
    max-width: 25ch;
    margin-inline: auto;
    color: #141414;
    z-index: 1;
    /* font-family: 'Playfair Display', serif; */
    font-size: calc(3rem + 0.1vw);
}

.hero__description {
    font-size: calc(1.2rem + 0.1vw);
    font-weight: 400;
    margin-top: var(--size-2xl);
    margin-bottom: var(--size-2xl);
    max-width: 30ch;
    color: #333;
    margin-inline: auto;
}

.hero__btn {
    background-color: rgb(255, 217, 19);
    padding: 0.7rem 2rem;
    border-radius: 8px;
    color: #333;
    font-weight: 700;
    margin-top: 0.75rem;
    font-size: calc(1rem + 0.1vw);
    margin-inline: auto;
    transition: all 0.3s ease;
}

.hero__btn:hover {
    background-color: #FFD913;
    color: #333;
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

/* xs */
@media (min-width: 475px) {
    /* .hero__title {
        font-size: var(--fs-4xl);
    } */

    .hero__description {
        /* font-size: var(--fs-md); */
        max-width: 32ch;
    }

    .hero__btn {
        /* font-size: var(--fs-xs); */
    }
}

/* sm */
@media (min-width: 640px) {
    /* .hero__title {
        font-size: var(--fs-5xl);
    } */

    .hero__description {
        max-width: 35ch;
    }
}

/* md */
@media (min-width: 768px) {

    .hero__title {
        font-size: calc(3.5rem + 2.5vw);
    }

    /* .hero__title {
        font-size: var(--fs-5xl);
        letter-spacing: -2.2px;
    } */

    .hero__description {
        /* font-size: var(--fs-lg); */
        font-size: calc(1.4rem + 0.1vw);
    }

    .hero__btn {
        /* font-size: var(--fs-xs); */
    }

    .lemon__background {
        right: -50%;
        opacity: 0.1;
    }
}

/* lg */
@media (min-width: 1024px) {

    .hero {
        margin-top: 5rem;
    }

    /* .hero__title {
        font-size: var(--fs-6xl);
    } */

    .title__lemon {
        animation: floatAcrossScreen 50s infinite ease-in-out alternate;
    }
}

/* xl */
@media (min-width: 1280px) {
    /* .hero__title {
        font-size: var(--fs-7xl);
    } */

    .hero__description {
        /* font-size: var(--fs-xl); */
    }
}

/* xxl */
@media (min-width: 1536px) {
    .hero__title {
        line-height: 1;
    }

    .hero__description {
        /* font-size: var(--fs-xl); */
        margin-top: var(--size-xl);
        margin-bottom: var(--size-3xl);
        max-width: 28ch;
    }

    .hero__btn {
        /* font-size: var(--fs-md); */
    }
}
</style>
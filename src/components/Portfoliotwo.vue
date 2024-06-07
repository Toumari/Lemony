<template>
    <section class="container portfolio" ref="portfolio">
        <h2 class="title">Websites We've Built</h2>
        <div class="card__container">


            <div class="card">
                <a href="https://6657151420f20ca6b62d908c--timely-empanada-1b6f1c.netlify.app/">
                    <div class="card__img">
                    </div>
                    <div class="card__text__content">
                        <h4 class="card__title">Personal Portfolio</h4>
                        <p class="card__description">My personal developer portfolio website. Built using industry
                            standard tooling</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="https://fancy-queijadas-cd2178.netlify.app/">


                    <div class="card__img__2">
                    </div>
                    <div class="card__text__content">
                        <h4 class="card__title">M.P. Marketing</h4>
                        <p class="card__description">A website built for a small local business that specialises in
                            video
                            editing</p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="https://venerable-ganache-ed2f4a.netlify.app/">


                    <div class="card__img__3">
                    </div>
                    <div class="card__text__content">
                        <h4 class="card__title">Dominik Lorenzo</h4>
                        <p class="card__description">A website designed for a local chef who cooks at a michelin
                            standard
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const portfolio = ref(null)

onMounted(() => {
    gsap.from(portfolio.value, {
        scrollTrigger: portfolio.value,
        duration: 0.5,
        x: -50,
        autoAlpha: 1,
        ease: "back.out(1)",
        stagger: 0.2
    })
})



</script>

<style scoped>
.portfolio {
    overflow: hidden;
    padding-bottom: 1rem;
}

.portfolio__title {
    width: fit-content;
    font-weight: 700;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
    font-size: var(--fs-xl);
}

.card {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    transition: all 0.3s ease;
    overflow: hidden;
    margin-bottom: 2rem;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}


.card__img {
    background: url('@/assets/portfolio2.png');
    height: 300px;
    background-size: cover;
    background-position: center;
}

.card__img__2 {
    background: url('@/assets/mp2.png');
    height: 300px;
    background-size: cover;
    background-position: center;
}

.card__img__3 {
    background: url('@/assets/dom.png');
    background-position: center;
    height: 300px;
    background-size: cover;
}



.card__title {
    font-size: var(--fs-lg);
    font-weight: 700;

}

.card__description {
    font-size: var(--fs-base);
    color: #333;

}

.card__text__content {
    padding: 1.5rem;
    background-color: #fff;
}

/* xs */
@media (min-width: 475px) {
    .card__container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        width: 100%;
        gap: 2rem;
    }

    .card {
        margin: 0;
    }
}

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {
    .card__container {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }




    .card__title {
        font-size: var(--fs-xl);
    }

    .card__description {
        font-size: var(--fs-base);
    }

    .card__img,
    .card__img__2,
    .card__img__3 {
        height: 300px;
    }
}

/* lg */
/* @media (min-width: 1024px) {} */

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
@media (min-width: 1536px) {
    .card__container {
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    .portfolio__title {
        font-size: var(--fs-2xl);
    }

    .card__title {
        font-size: var(--fs-lg);
    }

    .card__description {
        margin-top: 0.3rem;
        font-size: var(--fs-md);
    }

    .card__img,
    .card__img__2,
    .card__img__3 {
        height: 400px;
    }
}
</style>
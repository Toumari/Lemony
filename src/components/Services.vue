<template>
    <div class="services__wrapper" id="services" role="region" aria-label="Services Section">
        <section class="services container" ref="services">
            <h2 class="title" :class="{ 'service__title__scale': titleY }">What We offer</h2>
            <div class="cards" role="list">
                <div class="card__yellow card" role="listitem">
                    <h2 class="card__title">Web Design.</h2>
                    <p class="card__description__grey">
                        Get a professional website designed to your needs.
                    </p>
                    <h3 class="list__header">What's included</h3>
                    <ul class="list" role="list">
                        <li class="list__item">A website tailored to your brand identity and target audience</li>
                        <li class="list__item">Fully responsive design, your website will look great on any device!</li>
                        <li class="list__item">SEO optimisation, including on-page optimisation to improve your
                            website's ranking in search results</li>
                        <li class="list__item">Full source files, you own your website!</li>
                        <li class="list__item">Free SSL Encryption to protect your website and visitor information</li>
                        <li class="list__item">Free website hosting</li>
                        <li class="list__item">Free Domain name (subject to availability)</li>
                        <li class="list__item">Post launch support and maintenance</li>
                    </ul>
                </div>
                <div class="card__dark card" role="listitem">
                    <h2 class="card__title">Logo Design.</h2>
                    <p class="card__description__grey">
                        Build your brand identity with a professional logo.
                    </p>
                    <h3 class="list__header">What's included</h3>
                    <ul class="list" role="list">
                        <li class="list__item">Professional logo designed by us</li>
                        <li class="list__item">Unlimited revisions to design</li>
                        <li class="list__item">High quality files to use for all media</li>
                        <li class="list__item">Future revisions (up to 12 months after completion date)</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollY = ref(0)
const titleY = ref(false)
const services = ref(null)


onMounted(() => {
    window.addEventListener('scroll', () => {
        scrollY.value = window.scrollY
    })

    titleY.value = document.querySelector('.services__title').offsetTop
})

watch(scrollY, (newVal) => {
    if (newVal > titleY.value + 500) {
        titleY.value = true
    } else {
        titleY.value = false
    }
})

onMounted(() => {
    gsap.from(services.value, {
        scrollTrigger: services.value,
        duration: 0.5,
        x: 50,
        autoAlpha: 1,
        ease: "back.out(1)",
        stagger: 0.2
    })
})





</script>

<style scoped>
.services,
.services__wrapper {
    overflow: hidden;
}

.services__title {
    width: fit-content;
    font-weight: 700;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
    font-size: var(--fs-xl);
}

.card {
    padding: 2.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.card:last-of-type {
    margin-bottom: 0;
}

.card:hover {
    transform: translateY(-0.2rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
}

.card__yellow {
    background-color: #FFD913;
    color: #3c3c3c
}

.card__dark {
    background-color: #2e2e2e;
    color: #fafafa;
}

.card__title {
    font-size: var(--fs-2xl);
    line-height: 1.2;
    margin-bottom: 0.25rem
}

.card__small-text {
    font-size: calc(1.25 * var(--fs-xxs));
    margin-top: 1rem;
    margin-bottom: 0rem;
    line-height: 1rem;
    display: block;
    font-weight: bold;
}

.card__description {
    font-size: var(--fs-sm);
    line-height: 1.25rem;
}

.card__description__grey {
    line-height: 1rem;
    margin-top: 1rem;
    font-size: var(--fs-sm);

}

.finance__info {
    font-size: var(--fs-lg);
    margin-top: 1rem;
}

.finance__price {
    font-size: var(--fs-2xl);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
}

.list__header {
    font-size: var(--fs-lg);
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}

.list__item {
    font-size: var(--fs-sm);
    margin-block: 0.5rem;
    margin-left: 1.5rem;
    list-style: square;
    font-weight: 500;
}

@media (min-width: 475px) {
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1rem;
    }
}

/* md */
@media (min-width: 768px) {
    .services {
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
    }

    .services__title {
        font-size: var(--fs-2xl);
    }

    .card {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
}

/* lg */
@media (min-width: 1024px) {
    .card {
        padding: 2rem;
    }

    .card__title {
        font-size: var(--fs-3xl);
    }
}

/* xl */
@media (min-width: 1280px) {
    .card p {
        margin: 0;
    }
}
</style>
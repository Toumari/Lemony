<template>
    <div class="services__wrapper" id="services" role="region" aria-label="Services Section">
        <section class="services container" ref="services">
            <h2 class="title">Our Services</h2>
            <div class="cards" role="list">
                <div class="card__yellow card" role="listitem">
                    <h2 class="card__title">Web Design.</h2>
                    <p class="card__description__grey">
                        Get a professional website designed to your needs.
                    </p>
                    <h3 class="list__header">What you get:</h3>
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
                    <h3 class="list__header">What you get:</h3>
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


const titleY = ref(false)
const services = ref(null)

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
.services__wrapper {
    overflow: hidden;
}

.services__title {
    width: fit-content;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: var(--fs-xl);
}

.card {
    border-radius: 8px;
    padding: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
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
    color: #4b4b4b
}

.card__dark {
    background-color: #2e2e2e;
    color: #fafafa;
}

.card__title {
    font-size: calc(1.5rem + 0.5vw);
    line-height: 1.2;
    font-weight: 900;
    margin-bottom: 0.75rem
}

.card__description {
    font-size: calc(1rem + 0.1vw);
    line-height: 1.25rem;
}

.card__description__grey {

    margin-top: 1rem;
    font-size: calc(1rem + 0.05vw);
    font-weight: 500;
}

.list__header {
    text-align: left;
    padding-bottom: 0.2s5rem;
    font-size: calc(1.1rem + 0.5vw);
    font-weight: 900;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}

.list__item {
    list-style: circle;
    font-size: calc(1rem + 0.1vw);
    margin-block: 0.75rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #847f7fb8;
    text-align: left;
    font-weight: 500;
    margin-left: 1rem;
}

.list__item:last-of-type {
    margin-block: 0;
    border-bottom: none;
}

@media (min-width: 475px) {
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
}

/* md */
@media (min-width: 768px) {
    .services {
        justify-content: space-between;
        align-items: flex-start;
    }

    .card__title {
        font-size: calc(1.2rem + 0.5vw);
    }

    .list__header {
        font-size: calc(1rem + 0.3vw);
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
}

/* xl */
@media (min-width: 1280px) {
    .card p {
        margin: 0;
    }
}
</style>
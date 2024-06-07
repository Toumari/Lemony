<template>
    <header class="header container" :class="{ hidden: !isMobile }" role="banner">
        <p class="logo">Lemony</p>
        <ul class="header__menu" role="menu">
            <li><a :href="'#about'" @click.prevent="scrollToAbout" role="menuitem">About</a></li>
            <li><a :href="'#services'" @click.prevent="scrollToServices" role="menuitem">Services</a></li>
            <li><a :href="'#contact'" @click.prevent="scrollToContact" role="menuitem">Contact</a></li>
        </ul>
        <button aria-label="Toggle Mobile Navigation" class="header__bars" id="header__bars" @click="toggleNav"
            aria-expanded="false" aria-controls="mobile-nav">
            {{ isMobile ? 'X' : '☰' }}
        </button>
    </header>
    <div v-if="isMenuOpen" class="mobile-nav" :class="{ hidden: !isMobile }" role="navigation" id="mobile-nav">
        <nav>
            <ul class="mobile-nav__menu" role="menu">
                <li class="mobile__nav-link" role="none">
                    <a :href="'#about'" @click.prevent="scrollToAbout" role="menuitem" class="mobile-link">About</a>
                </li>
                <li class="mobile__nav-link" role="none">
                    <a :href="'#services'" @click.prevent="scrollToServices" role="menuitem"
                        class="mobile-link">Services</a>
                </li>
                <li class="mobile__nav-link" role="none">
                    <a :href="'#contact'" @click.prevent="scrollToContact" role="menuitem"
                        class="mobile-link">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

import { ref, onMounted, watch } from 'vue'

const isMobile = ref(false)
const isMenuOpen = ref(false)

const scrollToAbout = () => {
    // Smooth scrolling behavior (optional):
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'center' });
    isMenuOpen.value = false
    isMobile.value = false
}

const scrollToServices = () => {
    // Smooth scrolling behavior (optional):
    document.querySelector('.services__title').scrollIntoView({ behavior: 'smooth', block: 'center' });
    isMenuOpen.value = false
    isMobile.value = false
}

const scrollToContact = () => {
    // Smooth scrolling behavior (optional):
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'center' });
    isMenuOpen.value = false
    isMobile.value = false
}

const toggleNav = () => {
    console.log("clicked")
    isMobile.value = !isMobile.value
    isMenuOpen.value = !isMenuOpen.value
}

watch(isMobile, (newVal) => {
    if (newVal) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
})

</script>

<style scoped>
/* Header */

.header {

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    color: var(--clr-dark);
    z-index: 999;
    background-color: transparent;
}

.logo__img {
    width: 100px;
    object-fit: contain;
    margin-right: 1rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bolder;
    color: var(--clr-dark);

    z-index: 999;
}

.header__menu {
    display: none;
}

.header__menu li {
    font-weight: 600;
}

.header__menu li a {
    color: var(--clr-dark);
    cursor: pointer;
    padding: 0.1rem 0.5rem;
    border-radius: 8px;
}

a {
    color: var(--clr-dark);
    text-decoration: none;
    cursor: pointer;
}

.header__bars {
    background-color: none !important;
    color: var(--clr-dark);
    display: block;
    z-index: 999;
    font-size: 1.5rem;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
}

.header__bars:hover {
    transform: scale(1.1);
}

/* Mobile Nav */

.mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 997;
    width: 100%;
    height: 100%;
    scroll-behavior: no-scroll;
    background-color: var(--clr-white);
    color: var(--clr-dark);
    text-align: center;
    animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0);
    }
}

.mobile-nav__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    height: 100vh;
    list-style: none;
}


.header__line {
    border: 0.05rem solid #b2b3b7;
    padding-top: 1.5rem;
}

/* md */
@media (min-width: 768px) {
    .header__bars {
        display: none;
    }

    .header__menu {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1rem;
        list-style: none;
    }

    .header__menu li:last-child {
        margin-left: 0
    }
}
</style>
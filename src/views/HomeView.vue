<script setup>

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import KeyPoints from '@/components/KeyPoints.vue'
import FAQ from '@/components/FAQ.vue'
import PortfolioThree from '@/components/PortfolioThree.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import Lenis from 'lenis'

const lenis = new Lenis()



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


</script>

<template>
  <main>
    <div class="top-section">
      <div class="hero">
        <Header />
        <Hero />
      </div>
    </div>
    <KeyPoints />
    <Services />
    <About />
    <PortfolioThree />
    <FAQ />
    <Contact />

    <Footer />

  </main>

</template>

<style scoped>
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

.top-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}






html,
body,
section {
  scroll-behavior: smooth;
}
</style>
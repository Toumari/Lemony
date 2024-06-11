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




</script>

<template>
  <main v-smooth-scroll>
    <div class="top-section">


      <Header />
      <Hero />
      <KeyPoints />
      <!-- <About /> -->

      <Services />

      <!-- <Portfoliotwo /> -->
      <PortfolioThree />
      <FAQ />
      <Contact />

      <Footer />
    </div>
  </main>

</template>

<style scoped>
.top-section {

  background-color: #fdfbf9;
  padding: 0rem 0;
}

html,
body,
section {
  scroll-behavior: smooth;
}
</style>
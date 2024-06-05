<script setup>

import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'

import Portfoliotwo from '@/components/Portfoliotwo.vue'
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
  <main>
    <div class="top-section">


      <Header />
      <Hero />

      <About />

      <Services />
      <Portfoliotwo />
      <Contact />

      <Footer />
    </div>
  </main>

</template>

<style scoped>
.top-section {

  background-color: #FFFAFF;
  padding: 0rem 0;

}
</style>
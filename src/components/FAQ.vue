<template>
    <div class="wrapper">
        <section class="container">
            <h4 class="title">FAQ's</h4>
            <div v-for="(item, index ) in data" :key="index" class="accordions">
                <Accordian :title="item.title" :content="item.content" class="accordion" />
            </div>
        </section>
    </div>
</template>

<script setup>



import Accordian from '@/components/Accordian.vue'

const data = ref([
    {
        title: 'How long will it take to get my new website?',
        content: 'We aim to have a first draft of your website to you within 7 days of receiving all the necessary information. Once you have approved the design, we aim to have the website fully functional within 14 days. However, this can vary depending on the complexity of the website.'
    },
    {
        title: 'Will my website look great on any device?',
        content: 'Yes! We build all our websites to be fully responsive, meaning they will look great on any device, whether it be a desktop, tablet or mobile phone. We also test our websites on multiple devices to ensure they look great on all screen sizes.'
    },
    {
        title: 'Will I own my website?',
        content: 'Yes! Once your website is complete, you will own the website and all the source files. This means you are free to host your website with any provider you choose.'
    },
    {
        title: 'Do you offer support after my website is live?',
        content: 'Yes! We offer post-launch support and maintenance to all our clients. This includes any bug fixes, updates or changes you may need to make to your website.'
    }
])

import { ref } from 'vue'
</script>

<style scoped>
.wrapper {
    background-color: #f5f5f5
}

.accordions:last-child .accordion-menu {
    margin-bottom: 0;
}
</style>
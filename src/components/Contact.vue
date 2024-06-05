<template>
    <section class="section container contact" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" class="contact__title">Contact Me</h2>
        <p class="contact__description">Get in touch with me via email and I'll reply as fast as I can to your enquiry!
        </p>
        <form action="https://api.web3forms.com/submit" method="POST" aria-label="Contact Form">
            <!-- Replace with your Access Key -->
            <input type="hidden" name="access_key" value="7364cf4f-a2d8-4e74-87fd-8f078b9b10a4">
            <!-- Form Inputs. Each input must have a name="" attribute -->
            <label for="name">Name</label>
            <input class="contact__name" type="text" name="name" required aria-required="true">
            <label for="email">Email</label>
            <input class="contact__email" type="email" name="email" required aria-required="true">
            <label for="message">Message</label>
            <textarea class="contact__message" name="message" required aria-required="true"></textarea>
            <!-- hCaptcha Spam Protection -->
            <div class="h-captcha" data-captcha="true" aria-label="hCaptcha Spam Protection"></div>
            <button class="contact__submit" type="submit">Submit</button>
        </form>
    </section>

</template>

<script setup>

</script>

<style scoped>
.contact {
    width: 100%;
    max-width: 800px;
    margin: auto;
    margin-top: 3rem;
    text-align: center;
}

.contact__title {
    display: block;
    width: fit-content;
    margin-inline: auto;
    font-weight: 700;
    transition: all 0.3s ease;
    margin-bottom: .5rem;
    font-size: var(--fs-xl);
    text-align: center;
}

.contact__description {
    font-size: calc(var(--fs-base) * 0.95);
    font-weight: 300;
    line-height: 1.6;
    max-width: 40ch;
    margin-inline: auto;

    color: #333;
    letter-spacing: 0.2px;
    margin-bottom: 1.5rem
}

.contact__name {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.contact__email {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.contact__message {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    height: 200px;
}

.contact__submit {
    background-color: #FFD913;
    padding: 0.5rem 1.1rem;
    border-radius: 8px;
    font-weight: bold;
    color: #333;
    display: block;
    font-size: var(--fs-sm);
    margin-inline: auto;
    transition: all 0.3s ease;
}

textarea {
    resize: none;

}

form {
    max-width: 800px;
}


/* xs */
/* @media (min-width: 475px) {} */

/* sm */
/* @media (min-width: 640px) {} */

/* md */
@media (min-width: 768px) {

    .contact {
        margin-top: 5rem;
    }

    .contact__title {
        font-size: var(--fs-2xl);
    }

    .contact__description {
        font-size: var(--fs-base);
        max-width: 40ch;
    }
}

/* lg */
@media (min-width: 1024px) {}

/* xl */
/* @media (min-width: 1280px) {} */

/* xxl */
@media (min-width: 1536px) {
    .contact__description {
        font-size: var(--fs-lg);
    }
}
</style>
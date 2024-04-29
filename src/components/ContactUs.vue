<template>
    <section id="contact-us">
        <div class="contact-us-container">
            <h2 class="contact-us-header">
                {{ language == 'en' ? 'Contact Us' : 'Skontaktuj się z nami' }}
            </h2>
            <p class="contact-us-paragraph">
                {{
                    language == 'en'
                        ? 'For expert aircraft maintenance and repair services tailored to your needs, reach out to our team today. Whether you have questions about our services or need assistance with your aircraft, we are here to help.'
                        : 'Aby uzyskać fachowe usługi konserwacji i naprawy samolotów dostosowane do Twoich potrzeb, skontaktuj się z naszym zespołem już dziś. Niezależnie od tego, czy masz pytania dotyczące naszych usług, czy potrzebujesz pomocy związanej ze swoim samolotem, jesteśmy tu, aby Ci pomóc.'
                }}
            </p>

            <a
                class="contact-us-button"
                href="mailto:rybaczekaircraftmechanicsltd@gmail.com"
            >
                Gmail
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    language: string
}>()
</script>

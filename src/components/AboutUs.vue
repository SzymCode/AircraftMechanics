<template>
    <section id="about-us">
        <div class="container">
            <div class="about-us-container">
                <div class="about-us-image-container">
                    <Image src="/reka_na_pulsie.png" />
                    <h5>
                        {{
                            language === 'en'
                                ? 'We keep our finger on the pulse'
                                : 'Trzymamy rękę na pulsie'
                        }}
                    </h5>
                </div>
                <div>
                    <h1>RYBACZEK AIRCRAFT MECHANICS</h1>
                    <h2 class="about-us-description">
                        {{
                            language === 'en'
                                ? 'A team of experienced aircraft mechanics specializing in the operation, repair and maintenance of aircraft and aircraft engines. We provide comprehensive failure diagnostics, ensuring the highest flight safety standards. Our services include aircraft servicing and access to the latest technologies in the field of avionics and propulsion systems. We are committed to ensuring the efficiency and safety of every flight.'
                                : 'Zespół doświadczonych mechaników lotniczych specjalizujących się w obsłudze, naprawie i konserwacji samolotów oraz silników lotniczych. Zapewniamy kompleksową diagnostykę awarii, dbając o najwyższe standardy bezpieczeństwa lotów. Nasze usługi obejmują serwisowanie samolotów oraz dostęp do najnowszych technologii w dziedzinie awioniki i systemów napędowych. Jesteśmy zaangażowani w zapewnienie sprawności i bezpieczeństwa każdego lotu.'
                        }}
                    </h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    language: string
}>()
</script>

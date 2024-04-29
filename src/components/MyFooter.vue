<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-brand-info">
                <div class="footer-brand">
                    <Image
                        class="footer-brand-logo"
                        src="/favicon.ico"
                        alt="logo"
                        width="20"
                    />
                    <a
                        class="footer-brand-name"
                        href="https://www.facebook.com/mateuszrybaczek007"
                        :title="
                            language === 'en' ? 'Brand name' : 'Nazwa firmy'
                        "
                    >
                        Rybaczek Aircraft Mechanics
                    </a>
                </div>

                <a
                    @click="handleCopy('email')"
                    class="footer-brand-email"
                    :title="language === 'en' ? 'Copy' : 'Kopiuj'"
                >
                    rybaczekaircraftmechanicsltd@gmail.com
                </a>
                <p
                    @click="handleCopy('phone')"
                    class="footer-brand-phone-number"
                    :title="language === 'en' ? 'Copy' : 'Kopiuj'"
                >
                    +48 721 067 213
                </p>

                <div class="footer-social-media">
                    <a
                        class="pi pi-facebook"
                        href="https://www.facebook.com/mateuszrybaczek007"
                        title="Facebook"
                    />
                    <a
                        class="pi pi-linkedin"
                        href="https://www.linkedin.com/in/mateusz-rybaczek-19a917298"
                        title="LinkedIn"
                    />
                </div>
            </div>

            <div class="footer-made-by-author-name">
                <span class="footer-made-by"> Made by </span>
                <a
                    class="footer-author-name"
                    href="https://github.com/SzymCode"
                    :title="
                        language === 'en' ? 'Website author' : 'Autor strony'
                    "
                >
                    SzymCode
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { handleCopy } from '@/utils'

defineProps<{
    language: string
}>()
</script>

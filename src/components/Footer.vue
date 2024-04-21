<template>
    <footer>
        <div class="container footer-container">
            <div class="footer-brand-info">
                <div class="footer-brand">
                    <Image
                        class="footer-brand-logo"
                        src="/favicon.ico"
                        width="20"
                    />
                    <a
                        class="footer-brand-name"
                        href="https://www.facebook.com/mateuszrybaczek007"
                        title="Nazwa firmy"
                    >
                        Rybaczek Aircraft Mechanics
                    </a>
                </div>

                <p
                    @click="handleCopy('phone')"
                    class="footer-brand-phone-number"
                    title="Skopiuj numer"
                >
                    +48 721 067 213
                </p>
                <a
                    @click="handleCopy('email')"
                    class="footer-brand-email"
                    title="Skopiuj maila"
                >
                    mateuszrybaczek@gmail.com
                </a>
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
                    title="Autor strony"
                >
                    SzymCode
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { handleCopy } from '../utils'
</script>

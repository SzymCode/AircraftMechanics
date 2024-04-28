<!--suppress HtmlUnknownAnchorTarget -->
<template>
    <nav class="navbar">
        <Menubar class="container">
            <template #start>
                <router-link link to="/" :title="'Rybaczek Aircraft Mechanics'">
                    <Image
                        src="/navbar_logo.png"
                        alt="Rybaczek Aircraft Mechanics"
                        width="115"
                    />
                </router-link>
            </template>
            <template #end>
                <div class="nav-right-side">
                    <div class="sections">
                        <router-link
                            to="#about-us"
                            :title="
                                language == 'en'
                                    ? 'Go to section'
                                    : 'Przejdż do sekcji'
                            "
                            class="section-link"
                        >
                            {{ language === 'en' ? 'About' : 'O nas' }}
                        </router-link>
                        <router-link
                            to="#contact-us"
                            :title="
                                language == 'en'
                                    ? 'Go to section'
                                    : 'Przejdż do sekcji'
                            "
                            class="section-link"
                        >
                            {{ language === 'en' ? 'Contact' : 'Kontakt' }}
                        </router-link>
                    </div>
                    <div class="languages">
                        <a href="/" class="language">
                            <Image
                                src="/polish.png"
                                :title="
                                    language == 'en'
                                        ? 'Change language'
                                        : 'Zmień język'
                                "
                                :alt="language == 'en' ? 'Polish' : 'Polski'"
                                height="27"
                            />
                        </a>
                        <a href="/en" class="language">
                            <Image
                                src="/english.png"
                                :title="
                                    language == 'en'
                                        ? 'Change language'
                                        : 'Zmień język'
                                "
                                :alt="
                                    language == 'en' ? 'English' : 'Angielski'
                                "
                                height="27"
                            />
                        </a>
                    </div>
                </div>
            </template>
        </Menubar>
    </nav>
</template>

<script setup lang="ts">
defineProps<{
    language: string
}>()
</script>

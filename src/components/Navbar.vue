<!--suppress HtmlUnknownAnchorTarget -->
<template>
    <nav class="navbar">
        <Menubar class="container">
            <template #start>
                <a href="/" title="Rybaczek Aircraft Mechanics">
                    <Image
                        src="/navbar_logo.png"
                        alt="Rybaczek Aircraft Mechanics logo"
                        width="105"
                    />
                </a>
            </template>
            <template #end>
                <div class="nav-right-side">
                    <a href="#about-us" title="Przejdż do sekcji"> O nas </a>
                    <a href="#contact-us" title="Przejdż do sekcji">
                        Kontakt
                    </a>
                </div>
            </template>
        </Menubar>
    </nav>
</template>

<script setup lang="ts"></script>

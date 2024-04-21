<template>
    <nav>
        <Menubar class="container">
            <template #start>
                <Image
                    src="/navbar_logo.png"
                    alt="Rybaczek Aircraft Mechanics logo"
                    width="105"
                />
            </template>
            <template #end>
                <div class="nav-right-side">
                    <a href="#about-us"> O nas </a>
                    <a href="#contact-us"> Kontakt </a>
                </div>
            </template>
        </Menubar>
    </nav>
</template>
<script setup lang="ts"></script>

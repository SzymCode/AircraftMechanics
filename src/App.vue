<template>
    <Welcome />
    <Navbar />
    <AboutUs />
    <Footer />
</template>

<script setup lang="ts">
import { Welcome, Navbar, AboutUs, Footer } from './components'
import { handleOpacity } from './utils'

handleOpacity('.welcome-image', '1', 500)
handleOpacity('.welcome-image', '0', 2200)

handleOpacity('.navbar', '1', 3000)
handleOpacity('#about-us', '1', 3500)
handleOpacity('.footer', '1', 4000)
</script>

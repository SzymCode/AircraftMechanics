<template>
    <Welcome />
    <Navbar />
    <Footer />
</template>

<script setup lang="ts">
import { Welcome, Navbar, Footer } from './components'
import { handleOpacity } from './utils'

handleOpacity('.welcome-image', '1', 500)
handleOpacity('.welcome-image', '0', 2200)

handleOpacity('.navbar', '1', 3000)
handleOpacity('.footer', '1', 3000)
</script>

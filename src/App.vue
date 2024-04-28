<template>
    <Welcome />
    <MyNavbar :language="language" />
    <AboutUs :language="language" />
    <Gallery :language="language" />
    <MyFooter :language="language" />
</template>

<script setup lang="ts">
import { Welcome, MyNavbar, AboutUs, Gallery, MyFooter } from '@/components'
import { language } from '@/constants'
import { handleOpacity } from '@/utils'

handleOpacity('.welcome-image', '1', 500)
handleOpacity('.welcome-image', '0', 2200)
handleOpacity('.welcome-container', '0', 2700)

handleOpacity('.navbar', '1', 3000)
handleOpacity('#about-us', '1', 3500)
handleOpacity('.gallery-container', '1', 4000)
handleOpacity('.footer', '1', 4500)
</script>

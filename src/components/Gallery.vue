<template>
    <div class="gallery-container">
        <h3 class="gallery-header">Certyfikaty</h3>
        <Carousel :value="indices" :numVisible="numVisible">
            <template #item="{ index }">
                <Image :src="`/certificates/image${index}.png`" width="200" />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

import { useCarousel } from '../utils'

const { indices, numVisible, resizeHandler } = useCarousel()

onMounted(() => {
    window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
})
</script>

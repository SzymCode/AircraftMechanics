<template>
    <div class="gallery-container">
        <h3 class="gallery-header">Certyfikaty</h3>
        <Carousel :value="indices" :numVisible="numVisible">
            <template #item="{ index }">
                <Image
                    :src="`/certificates/image${index}.png`"
                    width="200"
                    @click="handleImageClick(index)"
                />
            </template>
        </Carousel>
    </div>
    <Dialog class="gallery-dialog" v-model:visible="visible" modal>
        <Image
            v-if="clickedImageIndex !== null"
            :src="`/certificates/image${clickedImageIndex}.png`"
        />
    </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { useCarousel } from '../utils'

const visible = ref(false)
const clickedImageIndex = ref<number | null>(null)

const { indices, numVisible, resizeHandler } = useCarousel()

function handleImageClick(index: number) {
    clickedImageIndex.value = index
    visible.value = true
}

onMounted(() => {
    window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
    <div class="gallery-container">
        <h3 class="gallery-header">
            {{ language === 'en' ? 'Certificates' : 'Certyfikaty' }}
        </h3>
        <Carousel
            :value="indices"
            :numVisible="numVisible"
            :autoplayInterval="4000"
        >
            <template #item="{ index }">
                <Image
                    :src="`/certificates/certificate-${index}.png`"
                    :alt="
                        language === 'en'
                            ? `certificate-${index}`
                            : `certyfikat-${index}`
                    "
                    @click="handleImageClick(index)"
                />
            </template>
        </Carousel>
    </div>
    <Dialog class="gallery-dialog" v-model:visible="visible" modal>
        <Image
            v-if="clickedImageIndex !== null"
            :alt="
                language === 'en'
                    ? `certificate-${clickedImageIndex}`
                    : `certyfikat-${clickedImageIndex}`
            "
            :src="`/certificates/certificate-${clickedImageIndex}.png`"
        />
    </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

import { useCarousel } from '@/utils'

const visible = ref(false)
const clickedImageIndex = ref<number | null>(null)

defineProps<{
    language: string
}>()

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

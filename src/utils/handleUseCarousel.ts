import { ref, Ref, UnwrapRef } from 'vue'
import { CarouselInterface } from '../types'

export default function useCarousel(): CarouselInterface {
    const indices: number[] = Array.from(
        { length: 15 },
        (_, index: number) => index
    )
    const windowWidth: Ref<UnwrapRef<number>> = ref(window.innerWidth)
    const numVisible: Ref<UnwrapRef<number>> = ref(3)

    function updateNumVisible(): void {
        if (windowWidth.value < 600) {
            numVisible.value = 1
        } else if (windowWidth.value < 1000) {
            numVisible.value = 2
        } else {
            numVisible.value = 3
        }
    }

    updateNumVisible()

    function resizeHandler(): void {
        windowWidth.value = window.innerWidth
        updateNumVisible()
    }

    return {
        indices,
        windowWidth,
        numVisible,
        resizeHandler,
    }
}

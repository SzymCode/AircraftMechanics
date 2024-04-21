import { Ref, UnwrapRef } from 'vue'

export interface CarouselInterface {
    indices: number[]
    windowWidth: Ref<UnwrapRef<number>>
    numVisible: Ref<UnwrapRef<number>>
    resizeHandler: () => void
}

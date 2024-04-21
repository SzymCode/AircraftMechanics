export default function handleOpacity(
    selector: string,
    opacity: string,
    delay: number
): void {
    setTimeout((): void => {
        const element: HTMLElement = document.querySelector(
            selector
        ) as HTMLElement
        if (element) {
            element.style.opacity = opacity
            if (opacity === '0') {
                setTimeout((): void => {
                    element.style.display = 'none'
                }, 500)
            }
        }
    }, delay)
}

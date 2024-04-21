export default function setOpacityWithDelay(
    selector: string,
    opacity: string,
    delay: number
): void {
    setTimeout((): void => {
        const element = document.querySelector(selector) as HTMLElement
        if (element) {
            element.style.opacity = opacity
        }
    }, delay)
}

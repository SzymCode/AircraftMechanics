export default async function handleCopy(action: string): Promise<void> {
    switch (action) {
        case 'phone':
            await navigator.clipboard.writeText('721 067 213')
            break
        case 'email':
            await navigator.clipboard.writeText('mateuszrybaczek@gmail.com')
            break
        default:
            alert('Invalid action')
    }
}

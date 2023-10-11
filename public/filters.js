export function capitalize(value) {
    return value.toString().charAt(0).toUpperCase() + value.slice(1)
}

export function date() {
    return new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(new Date())
}

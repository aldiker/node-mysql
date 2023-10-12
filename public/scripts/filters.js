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

export function pluralizeTasks(count) {
    if (count === 1) {
        return 'задача'
    } else if (count >= 2 && count <= 4) {
        return 'задачи'
    } else {
        return 'задач'
    }
}

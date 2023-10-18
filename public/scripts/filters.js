export function capitalize(value) {
    return value.toString().charAt(0).toUpperCase() + value.slice(1)
}

export function date(inputDate = new Date(), withTime = false) {
    const inputDateToDate = new Date(inputDate)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    if (withTime) {
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.second = '2-digit'
    }

    if (!isNaN(inputDateToDate.getTime())) {
        // Это допустимая дата, теперь вы можете использовать createdAtDate
        return new Intl.DateTimeFormat('ru-RU', options).format(inputDateToDate)
    } else {
        // inputDate не является допустимой датой, обрабатывайте эту ситуацию
        console.error('Недопустимая дата:', inputDate)
    }
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

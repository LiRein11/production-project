export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search); // Создание объекта URLSearchParams и передача строки, которая распарсится и будет объект уже с существующими параматрами, которые есть в строке запроса

    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    }); // Затем добавляем параметры, которые пришли, к уже существующим в строке запроса
    return `?${searchParams.toString()}`;
}

// Функция добавления параметров строки запроса в URL

export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}

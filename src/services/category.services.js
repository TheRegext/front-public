async function find() {
    return fetch('https://back-public.vercel.app/api/categorias')
        .then(response => response.json())
}

export {
    find
}
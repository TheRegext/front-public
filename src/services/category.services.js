async function find() {
    return fetch('https://backend-zeta-ebon.vercel.app/api/categorias')
        .then(response => response.json())
}

export {
    find
}
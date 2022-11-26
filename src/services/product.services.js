async function find() {
    return fetch('https://back-public.vercel.app/api/productos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los productos')
            }
        })
}

async function findById(id) {
    return fetch(`https://back-public.vercel.app/api/productos/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los productos')
            }
        })
}

async function create(product) {
    return fetch('https://back-public.vercel.app/api/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(product)
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo obtener los productos')
            }
        })
}

export {
    find,
    findById,
    create
}
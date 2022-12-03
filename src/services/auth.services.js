async function login(email, password) {
    return fetch('https://backend-zeta-ebon.vercel.app/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                throw new Error('No se pudo autenticar')
            }
        })
}

// Path: src\components\login\login.component.js
async function logout() {
    return fetch('https://backend-zeta-ebon.vercel.app/api/users/logout', {
        method: 'POST',
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
                throw new Error('No se pudo cerrar sesión')
            }
        })
}

export {
    login,
    logout
}
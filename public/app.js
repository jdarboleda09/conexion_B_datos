document.getElementById('btn').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/first')
        const data = await response.json()

        document.getElementById('resultado').textContent =
            JSON.stringify(data, null, 2)

    } catch (error) {
        document.getElementById('resultado').textContent =
            'Error conectando con el servidor'
    }
})
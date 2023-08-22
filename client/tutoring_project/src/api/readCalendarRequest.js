const API_URL = 'http://localhost:8080'


export default () => {
    return fetch(`${API_URL}/calendar`)
        .then(response => response.json())
}
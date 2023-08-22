import { API_URL } from "./config"

export default (entry) => {
    return fetch(`${API_URL}/calendar/${entry._id}`, {
        method: 'GET',
        body: JSON.stringify({
            student: entry.student,
        })
    })
        .then(response => response.json())
}
import axios from 'axios';
import apiKey from './config';
function getQuote() {
    let category = 'knowledge'

    const config = {
        headers: {
            Accept: 'application/json',
            'X-Api-Key': apiKey,
        },
    }
    axios.get('https://api.api-ninjas.com/v1/quotes?category=' + category, config).then((response) => {
        document.querySelector('[data-quote]').textContent = response.data[0].quote
    })
}

export default getQuote;
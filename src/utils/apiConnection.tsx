import axios from 'axios';

const OWNER :string = "mevairmc"
const REPO :string = "ChatChat"
const BASE_URI :string = "https://api.github.com"

async function getData():Promise<[]> {
    const res = await axios.get(`${BASE_URI}/repos/${OWNER}/${REPO}/commits`)
    return await res.data
}

export default getData;
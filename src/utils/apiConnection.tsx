import axios from 'axios';

const OWNER :string = "mevairmc"
const REPO :string = "ChatChat"
const BASE_URI :string = "https://api.github.com"

async function getData():Promise<[]> {
    const data:any[]=[]
    const res =await axios.get(`${BASE_URI}/repos/${OWNER}/${REPO}/commits`)
    await res.data.map((row:any) => {
        data.push({
            author: row.author.login,
            description: row.commit.message,
            linkConnect: row.html_url,
            avatar: row.author.avatar_url
        })
    })
    // @ts-ignore
    return data
}

export default getData;
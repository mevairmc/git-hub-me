import axios from 'axios';

const OWNER :string = "mevairmc"
const REPO :string = "git-hub-me"
const BASE_URI :string = "https://api.github.com"

async function getData():Promise<[]> {
    const data:any[]=[]
    const res =await axios.get(`${BASE_URI}/repos/${OWNER}/${REPO}/commits`)
    await res.data.map((row:any,idx: number) => {
        data.push({
            description: row.commit.message,
            linkConnect: row.html_url,
        })
    })

    // @ts-ignore
    return data
}

export default getData;
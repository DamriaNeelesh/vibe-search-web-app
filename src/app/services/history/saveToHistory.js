export default async function saveToHistory(searchQuery){
    console.log(searchQuery)
    let history=localStorage.getItem('vibe-history')
    if(!history){
        history=[]
    }
    history.push(searchQuery)
    localStorage.setItem('vibe-history', JSON.stringify(history))
}
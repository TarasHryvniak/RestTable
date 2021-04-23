
const searcher = (name, members) => {
    let found = []
    members.forEach(element => {
        if(element.name.toLowerCase().includes(name.toLowerCase())){
            found.push(element)
        }
    });
    return found
}

export default searcher
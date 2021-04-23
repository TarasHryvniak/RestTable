const sorter = (members, sortBy) =>{
    let done = false
    while(!done){
        done = true
        for(let i = 0; i<members.length-1; i++){
            if(members[i][sortBy]>members[i+1][sortBy]){
                done = false
                members.splice(i+2,0,members[i])
                members.splice(i,1)
                i--
            }
        }
    }

    return members
}


export default sorter
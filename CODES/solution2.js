const array = [1,1,1,1,1,1,1,2,2,2,2,1,1,1,3,3,3,4,4,4,4,3,3,3,3]
const solution = () =>{
    let hashmap = {};
    for(let i=0;i<array.length;i++)
    {
        if(!hashmap[array[i]])
        {
            hashmap[array[i]]=1;
        }
        else
        {
            hashmap[array[i]] = hashmap[array[i]] + 1;
        }
    }
    return hashmap;
}
console.log(solution())
export const getUsers = async () => {
    return await fetch('http://localhost:5000/user',{
        method: 'get',
    })
        .then((res) => res.json())
}

export const deleteUsers = async (id) => {
    return await fetch(`http://localhost:5000/user?id=${id}`,{
        method: 'delete',
    })
        .then((res) => res.json())
}


export const addUsers = async (userName, password) => {
    return await fetch('http://localhost:5000/user',{
        method: 'put',
        body: JSON.stringify({
            "userName": "",
            "password": ""
        })
    })
        .then((res) => res.json())
}

export const updateUsers = async (userName, password) => {
    return await fetch('http://localhost:5000/user',{
        method: 'put',
        body: JSON.stringify({
            "userName": "",
            "password": ""
        })
    })
        .then((res) => res.json())
}
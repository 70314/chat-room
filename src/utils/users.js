const users = []

const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate
    if(!username || !room){
        return {
            error: 'Username and room are required'
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // error
    if(existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // store
    const user = { id, username, room }
    users.push(user)
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    const name = users.find((user) => user.id === id)
    return name
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    const members = users.filter((user) => user.room === room)
    return members
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
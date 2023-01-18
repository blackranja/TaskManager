const getAllTasks = (req, res) => {
    res.send("Get All Tasks");
}
const createTask = (req, res) => {
    res.send('Create Task');

}
const getTask = (req, res) => {
    res.send('Get Single Task');

}
const updateTask = (req, res) => {
    res.send("Update A Task");

}
const deleteTask = (req, res) => {
    res.send("Delete A Task");
}

module.exports = {
    getAllTasks
}
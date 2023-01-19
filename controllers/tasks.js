const Task = require('../models/Task');

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })

    } catch (error) {
        res.status(500).json({ msg: error });
    }

}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });

    } catch (error) {
        res.status(500).json({ msg: error })

    }


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
    getAllTask,
    getTask,
    updateTask,
    deleteTask,
    createTask
}
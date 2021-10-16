const status = require("http-status");
const Task = require("../models/tasks");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(status.OK).json({
    msg: "The list is fetched successfully",
    status: status.OK,
    body: tasks,
  });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id :taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, status.NOT_FOUND));
  }

  res.status(status.OK).json({
    msg: `Task with id : ${taskID} found successfully`,
    staus: status.Found,
    body: task,
  });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id :taskID} = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, status.NOT_FOUND));
  }

  res.status(status.OK).json({
    msg: `Task with id : ${taskID} Updated successfully`,
    staus: status.OK,
    body: task,
  });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id :taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, status.NOT_FOUND));
  }
  res.status(status.OK).json({
    msg: `Task with id : ${taskID} Deleted successfully`,
    staus: status.OK,
    body: task,
  });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(status.CREATED).json({
    msg: "A new Task has been created successfully",
    status: status.CREATED,
    body: task,
  });
});

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};

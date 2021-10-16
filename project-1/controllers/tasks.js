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
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return next(createCustomError(`No task with id : ${id}`, status.NOT_FOUND));
  }

  res.status(status.OK).json({
    msg: `Task with id : ${id} found successfully`,
    staus: status.Found,
    body: task,
  });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${id}`, status.NOT_FOUND));
  }

  res.status(status.OK).json({
    msg: `Task with id : ${id} Updated successfully`,
    staus: status.OK,
    body: task,
  });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return next(createCustomError(`No task with id : ${id}`, status.NOT_FOUND));
  }
  res.status(status.OK).json({
    msg: `Task with id : ${id} Deleted successfully`,
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

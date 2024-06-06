const _tasks = [
  {
    id: "0",
    text: "holy moly",
    isImportant: false,
    isDone: false,
  },
  {
    id: "1",
    text: "holyyy moly",
    isImportant: false,
    isDone: false,
  },
];

export default {
  getTasks(cb) {
    cb(_tasks);
  },
};

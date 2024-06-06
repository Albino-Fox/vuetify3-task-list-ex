const _tasks = [
  {
    id: "1",
    text: "holy moly",
    isImportant: false,
    isDone: false,
  },
  {
    id: "2",
    text: "holyyy moly",
    isImportant: false,
    isDone: false,
  },
];

export default {
  getTasks(cb) {
    setTimeout(() => cb(_tasks), 100);
  },
};

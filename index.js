const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,
    markComplete() {
      this.complete = true;
    },
    logTask() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    },
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTask(task1); // Clean Cat Litter has not been completed
task1.markComplete(task1);
task1.logTask(task1); // Clean Cat Litter has been completed

console.log(tasks);

export interface Task {
  id: string;
  title: string;
  priority: number;
  completed?: boolean;
  owner?: string;
}

export interface TaskSummary {
  id: string;
  title: string;
  priorityLabel: "low" | "medium" | "high";
  completed: boolean;
  owner: string;
}

// My solution:

export function normalizeTasks(tasks: Task[]): TaskSummary[] {
  const validTasks: TaskSummary[] = [];
  for (const task of tasks) {
    const id = task.id.trim();
    const title = task.title.trim();
    if (id === "" || 
        title === "" || 
        !Number.isInteger(task.priority) ||
        task.priority < 1 || 
        task.priority > 3) {
      continue;
    }
    let priority: "low" | "medium" | "high";
    switch (task.priority) {
      case 1:  
        priority = "low";
        break;
      case 2: 
        priority = "medium";
        break;
      default: 
        priority = "high";
    }
    const completed = task.completed ?? false;
    let owner = task.owner ?? "unassigned";
    owner = owner.trim() !== "" ? owner.trim() : "unassigned";
    validTasks.push({
      id,
      title,
      priorityLabel: priority,
      completed,
      owner,
    })
  }
  return validTasks;
}

// https://www.boot.dev/challenges/468ee8d9-e31d-4848-9b77-cfa729f3f585
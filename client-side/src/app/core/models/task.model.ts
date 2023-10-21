export interface Task {
    idTask: number;
    label: string;
    toDo: string;
    date: Date;
    startTime: string; // You can use a string or Date type, depending on your requirements
    endTime: string;   // You can use a string or Date type, depending on your requirements
  }
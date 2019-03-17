export class Task {
  name: string;
  description: string;
  owner: string;
  createdTime: Date;
  completedTime?: Date;
  status: number;
}

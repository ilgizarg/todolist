export enum TaskStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  DISABLED = 'DISABLED',
  TRASH = 'TRASH',
  DRAFT = 'DRAFT',
  ARCHIVE = 'ARCHIVE'
}

export interface TaskInterface {
  id: number;
  uuid: string;
  name: string;
  description: string;
  createDate: Date;
  status: TaskStatus;
  public: boolean;
}


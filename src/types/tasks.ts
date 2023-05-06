export interface ITask {
    id: number;
    title: string;
    done: boolean;
}

export type setTasksFn = (tasks: ITask[]) => void;

export interface TTask {
  id: string;
  folderid: string;
  text: string;
  status: boolean;
}

export interface TFolder {
  id: string;
  title: string;
  color: string;
  tasks: TTask[];
}

export type TToast = {
  id: string;
  message: string;
  type: "default" | "error" | "success";
  duration: number
};

export type TNewToastData = Omit<TToast, "id">;

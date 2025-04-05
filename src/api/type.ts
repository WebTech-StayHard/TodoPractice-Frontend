export type TServerResponse = {
  resultCode: number;
  messages: string[];
}

export type TRemoveTaskResponse = {
  id: string;
  folderid: string
} | null;
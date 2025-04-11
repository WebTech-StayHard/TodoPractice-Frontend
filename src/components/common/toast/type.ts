export type ToastProps = {
  id: string;
  type: 'default' | 'success' | 'error';
  text: string;
  duration: number;
}
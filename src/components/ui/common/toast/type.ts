export type ToastUIProps = {
  type: 'default' | 'success' | 'error';
  text: string;
  closeToast: () => void;
}
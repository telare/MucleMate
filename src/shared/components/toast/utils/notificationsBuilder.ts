import { toast } from "react-toastify";

type ToastType = "info" | "success" | "warning" | "error";

const customToast = (message: string, type: ToastType) => {
  return toast[type](message);
};

export { customToast };

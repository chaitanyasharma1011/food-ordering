import { ComponentType, memo } from "react";

export const onRenderInput = (
  form: Record<any, any>,
  setForm: (form: any) => any,
  name: string,
  defaultValue: string
): { name: string; value: string; onChange: (e: any) => void } => {
  return {
    name: name,
    // Appends comma in value (1200 -> 1,200)
    value: form[name] || defaultValue,

    onChange: (event: any) => {
      let { name, value } = event.target;

      setForm((prev = {}) => ({
        ...prev,
        [name]: value,
      }));
    },
  };
};

export const typedmemo = <T extends ComponentType<any>>(Component: T): T => {
  return memo(Component) as unknown as T;
};

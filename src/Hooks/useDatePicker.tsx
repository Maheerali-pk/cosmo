import { useCallback, useState } from "react";
export default function useDatePicker(initialValue: Date): [Date, (newVal: Date) => void] {
   const [value, setValue] = useState(initialValue);
   const onChange = useCallback((newVal: Date) => {
      setValue(newVal);
   }, []);
   return [value, onChange];
}

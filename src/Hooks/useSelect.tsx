import { useCallback, useState } from "react";

export default function useSelect(initialValue: string): [string, (newVal: string) => void] {
   const [value, setValue] = useState(initialValue);
   const onChange = useCallback((newVal: string) => {
      setValue(newVal);
   }, []);
   return [value, onChange];
}

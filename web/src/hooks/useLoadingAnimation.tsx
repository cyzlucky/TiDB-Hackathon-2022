import { useState, useEffect } from "react";

export default function useLoadingAnimation(millisecond?: number) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let id: NodeJS.Timeout;
    if (millisecond !== undefined) {
      setTimeout(() => setChecked(true), millisecond);
    } else {
      setChecked(true);
    }

    return () => {
      if (id) clearTimeout(id);
    };
  }, [millisecond]);

  return checked;
}

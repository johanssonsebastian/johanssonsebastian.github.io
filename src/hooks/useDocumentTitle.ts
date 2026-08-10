import { useEffect } from "react";

const BASE = "Sebastian Johansson";

/** Sätter dokumenttiteln (och meta description) per sida. */
export const useDocumentTitle = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title.includes(BASE) ? title : `${title} — ${BASE}`;
    if (description) {
      const el = document.querySelector('meta[name="description"]');
      if (el) el.setAttribute("content", description);
    }
  }, [title, description]);
};

export default useDocumentTitle;

import { useEffect, useRef, useState } from 'react';

export function useTypewriter(
  words: string[],
  { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {}
) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = words[index % words.length] ?? '';

    if (!deleting && text === word) {
      timeout.current = setTimeout(() => setDeleting(true), pause);
      return () => {
        if (timeout.current) clearTimeout(timeout.current);
      };
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const next = deleting
      ? word.slice(0, text.length - 1)
      : word.slice(0, text.length + 1);

    timeout.current = setTimeout(
      () => setText(next),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

import { MouseEvent, useRef, useState } from 'react';

export const useResize = () => {
  const leftPanel = useRef<HTMLDivElement | null>(null);

  const [unlock, setUnlock] = useState<boolean>(false);

  document.onmouseup = () => setUnlock(false);

  const mouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (unlock) {
      let currentWidth = leftPanel.current!.offsetWidth;

      let changeWidth = currentWidth + (e.clientX - currentWidth) - 125;

      if (changeWidth < 120 || changeWidth > 800) {
        return null;
      } else {
        leftPanel.current!.style.width = `${changeWidth}px`;
      }
    }
  };

  const mouseUp = () => setUnlock(false);
  const mouseDown = () => setUnlock(true);
  const dblClick = () => leftPanel.current!.removeAttribute('style');

  return { leftPanel, mouseMove, mouseUp, mouseDown, dblClick };
};

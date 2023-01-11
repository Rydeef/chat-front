import { useLayoutEffect, useState, FC } from 'react';
import { createPortal } from 'react-dom';

const createWrapper = (wrapperId : string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface Props {
    children: React.ReactNode;
    wrapperId?: string;
}

export const Portal: FC<Props> = ({ children, wrapperId = 'modal-window' }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapper(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === undefined) return null;

  return createPortal(children, wrapperElement);
};
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createWrapper = (wrapperId : any) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

// export const Portal = ({ children : any, wrapperId = 'modal-window' }) => {
//   const [wrapperElement, setWrapperElement] = useState(null);

//   useLayoutEffect(() => {
//     let element = document.getElementById(wrapperId);
//     let systemCreated = false;

//     if (!element) {
//       systemCreated = true;
//       element = createWrapper(wrapperId);
//     }
//     setWrapperElement(element);

//     return () => {
//       if (systemCreated && element.parentNode) {
//         element.parentNode.removeChild(element);
//       }
//     };
//   }, [wrapperId]);

//   if (wrapperElement === null) return null;

//   return createPortal(children, wrapperElement);
// };
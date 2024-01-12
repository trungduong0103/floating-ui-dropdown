import React from "react";
import {
  useDismiss,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";

export const Dropdown = ({ anchor, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
  });

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);

  const { isMounted } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      transform: "scale(0.8)",
    },
    duration: {
      open: 0,
      close: 0,
    },
  });

  return (
    <>
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        style={{ all: "unset", cursor: "pointer" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {anchor}
      </button>

      {isMounted && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            marginTop: `4px`,
            width: "max-content",
            borderRadius: 4,
            backgroundColor: "#fff",
            boxShadow:
              "0px 4px 8px 0px rgba(96, 97, 112, 0.16), 0px 0px 2px 0px rgba(40, 41, 61, 0.04)",
          }}
          {...getFloatingProps()}
        >
          {children}
        </div>
      )}
    </>
  );
};

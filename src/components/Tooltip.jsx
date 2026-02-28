import React, { useEffect, useRef } from "react";

export default function Tooltip({
  visible,
  onClose,
  children,
  position = "top",
  timeout = 5000,
}) {
  const timerRef = useRef(null);

  useEffect(() => {
    if (!visible) return;

    timerRef.current = setTimeout(() => {
      onClose?.();
    }, timeout);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, timeout, onClose]);

  if (!visible) return null;

  return (
    <div style={{ ...tooltipBaseStyle, ...positions[position] }}>
      {children}
    </div>
  );
}

const tooltipBaseStyle = {
  position: "absolute",
  backgroundColor: "#333",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "6px",
  fontSize: "14px",
  whiteSpace: "nowrap",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  zIndex: 1000,
};

const positions = {
  top: {
    bottom: "125%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  bottom: {
    top: "125%",
    left: "50%",
    transform: "translateX(-50%)",
  },
  left: {
    right: "125%",
    top: "50%",
    transform: "translateY(-50%)",
  },
  right: {
    left: "125%",
    top: "50%",
    transform: "translateY(-50%)",
  },
};
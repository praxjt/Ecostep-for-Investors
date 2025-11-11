import React, { createContext, useContext, useState, useRef } from "react";
import Notification from "@/components/ui/toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const nextIdRef = useRef(1);

  const addToast = (type, title, message, duration = 4000) => {
    const id = nextIdRef.current++;
    setNotifications((prev) => [
      ...prev,
      { id, type, title, message, duration, showIcon: true },
    ]);
  };

  const removeToast = (id) => {
    setNotifications((prev) => prev.filter((t) => t.id !== id));
  };

  const success = (title, message, duration = 3000) =>
    addToast("success", title, message, duration);
  const error = (title, message, duration = 5000) =>
    addToast("error", title, message, duration);
  const warning = (title, message, duration = 4000) =>
    addToast("warning", title, message, duration);
  const info = (title, message, duration = 4000) =>
    addToast("info", title, message, duration);
  const loading = (title, message) => addToast("loading", title, message, 0);

  return (
    <ToastContext.Provider
      value={{ notifications, success, error, warning, info, loading, removeToast }}
    >
      {children}
      {/* Toast container at bottom-right */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {notifications.map((n) => (
          <Notification
            key={n.id}
            id={n.id}
            type={n.type}
            title={n.title}
            message={n.message}
            duration={n.duration}
            showIcon={n.showIcon}
            onClose={() => removeToast(n.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);

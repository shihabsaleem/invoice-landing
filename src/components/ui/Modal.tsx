"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    primaryAction?: {
        label: string;
        onClick: () => void;
        variant?: "danger" | "primary";
    };
    secondaryAction?: {
        label: string;
        onClick: () => void;
    };
};

export function Modal({ isOpen, onClose, title, children, primaryAction, secondaryAction }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="flex justify-between items-center p-4 border-b border-slate-100">
                    <h3 className="font-semibold text-slate-900">{title}</h3>
                    <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 text-slate-600">
                    {children}
                </div>

                {(primaryAction || secondaryAction) && (
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                        {secondaryAction && (
                            <button
                                onClick={secondaryAction.onClick}
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
                            >
                                {secondaryAction.label}
                            </button>
                        )}
                        {primaryAction && (
                            <button
                                onClick={primaryAction.onClick}
                                className={`px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors shadow-sm ${primaryAction.variant === "danger"
                                        ? "bg-red-500 hover:bg-red-600"
                                        : "bg-brand-600 hover:bg-brand-700"
                                    }`}
                            >
                                {primaryAction.label}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Props = {
    value: string;
    onChange: (date: string) => void; // Expects YYYY-MM-DD
    className?: string;
    id?: string;
    placeholder?: string;
};

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function DatePicker({ value, onChange, className, id, placeholder = "Select date" }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Provide default date if value is invalid, otherwise parse value
    // value is YYYY-MM-DD
    const parseDate = (val: string) => {
        const d = new Date(val);
        return isNaN(d.getTime()) ? new Date() : d;
    };

    const [currentMonth, setCurrentMonth] = useState(parseDate(value));

    // Update internal state if value changes externally
    useEffect(() => {
        if (value) {
            setCurrentMonth(parseDate(value));
        }
    }, [value]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    };

    const handleDateSelect = (day: number) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth() + 1; // 0-indexed
        // Construct YYYY-MM-DD manually to avoid timezone issues with toISOString()
        const formatted = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        onChange(formatted);
        setIsOpen(false);
    };

    const formatDateDisplay = (val: string) => {
        if (!val) return "";
        const parts = val.split("-");
        if (parts.length !== 3) return val;
        // Expects YYYY-MM-DD, returns DD-MM-YYYY
        return `${parts[2]}-${parts[1]}-${parts[0]}`;
    };

    const renderCalendar = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const days = [];

        // Empty cells for days before the 1st
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
        }

        // Actual days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = new Date(year, month, day).toISOString().split("T")[0];
            const isSelected = value === dateStr;
            const isToday = new Date().toISOString().split("T")[0] === dateStr;

            days.push(
                <button
                    key={day}
                    onClick={(e) => { e.preventDefault(); handleDateSelect(day); }}
                    className={twMerge(
                        "h-8 w-8 rounded-full text-sm flex items-center justify-center transition-colors",
                        isSelected
                            ? "bg-brand-600 text-white font-medium shadow-md shadow-brand-200"
                            : isToday
                                ? "bg-slate-100 text-brand-600 font-bold"
                                : "text-slate-700 hover:bg-slate-100"
                    )}
                >
                    {day}
                </button>
            );
        }

        return days;
    };

    return (
        <div className="relative group" ref={containerRef}>
            <div
                className={twMerge(
                    "flex items-center gap-2 w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer transition-all duration-200 hover:border-brand-300",
                    isOpen ? "border-brand-500 ring-4 ring-brand-500/10" : "",
                    className
                )}
                onClick={() => setIsOpen(!isOpen)}
                id={id}
            >
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                <span className={value ? "text-slate-900" : "text-slate-400"}>
                    {value ? formatDateDisplay(value) : placeholder}
                </span>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 p-4 bg-white rounded-xl border border-slate-200 shadow-xl z-50 w-72 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex justify-between items-center mb-4">
                        <button onClick={(e) => { e.preventDefault(); handlePrevMonth(); }} className="p-1 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-slate-900 text-sm">
                            {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </span>
                        <button onClick={(e) => { e.preventDefault(); handleNextMonth(); }} className="p-1 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                        {DAYS.map(day => (
                            <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-slate-400">
                                {day}
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {renderCalendar()}
                    </div>
                </div>
            )}
        </div>
    );
}

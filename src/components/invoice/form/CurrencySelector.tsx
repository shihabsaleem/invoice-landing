"use client";

import { useState, useRef, useEffect } from "react";
import { currencies } from "@/lib/data";
import { Check, ChevronsUpDown, Search } from "lucide-react";

type Props = {
    value: string;
    onChange: (value: string) => void;
    className?: string; // Add className prop
};

export function CurrencySelector({ value, onChange, className }: Props) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCurrencies = currencies.filter(
        (c) =>
            c.code.toLowerCase().includes(search.toLowerCase()) ||
            c.name.toLowerCase().includes(search.toLowerCase())
    );

    const selectedCurrency = currencies.find((c) => c.symbol === value || c.code === value) || { code: value, symbol: value, name: "Custom" };

    // Use the passed className or default styling
    const triggerClass = className || "w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white text-slate-900 flex justify-between items-center cursor-pointer hover:border-slate-400";

    return (
        <div className="relative" ref={wrapperRef}>
            <div
                className={triggerClass}
                onClick={() => setOpen(!open)}
            >
                <span className="truncate">
                    {selectedCurrency.name !== "Custom" ? `${selectedCurrency.name} (${selectedCurrency.symbol})` : value || "Select Currency"}
                </span>
                <ChevronsUpDown className="w-4 h-4 opacity-50 shrink-0" />
            </div>

            {open && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-hidden flex flex-col">
                    <div className="p-2 border-b border-slate-100 flex items-center gap-2 sticky top-0 bg-white">
                        <Search className="w-4 h-4 text-slate-400" />
                        <input
                            className="w-full text-sm outline-none placeholder:text-slate-400 text-slate-900 bg-transparent"
                            placeholder="Search currency..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="overflow-y-auto flex-1">
                        {filteredCurrencies.length === 0 ? (
                            <div className="p-2 text-sm text-slate-500 text-center">No currency found.</div>
                        ) : (
                            filteredCurrencies.map((currency) => (
                                <div
                                    key={currency.code}
                                    className={`p-2 text-sm cursor-pointer hover:bg-slate-50 flex justify-between items-center ${value === currency.symbol ? "bg-slate-100 text-slate-900 font-medium" : "text-slate-700"
                                        }`}
                                    onClick={() => {
                                        onChange(currency.symbol);
                                        setOpen(false);
                                        setSearch("");
                                    }}
                                >
                                    <span>{currency.name} ({currency.symbol})</span>
                                    {value === currency.symbol && <Check className="w-4 h-4" />}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { countryCodes } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Props = {
    value: string;
    onChange: (value: string) => void;
    className?: string; // Add className prop
    id?: string;
};

export function PhoneInput({ value, onChange, className, id }: Props) {
    const [countryCode, setCountryCode] = useState(countryCodes[0].dial_code);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(""); // Add search state
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Initialize from existing value if present
    useEffect(() => {
        if (value) {
            // Simple heuristic to split code and number if meaningful space exists
            // Or try to match known codes. 
            // For now, if it starts with '+', we try to find the longest matching code.
            if (value.startsWith("+")) {
                const matched = countryCodes
                    .filter(c => value.startsWith(c.dial_code))
                    .sort((a, b) => b.dial_code.length - a.dial_code.length)[0];

                if (matched) {
                    setCountryCode(matched.dial_code);
                    setPhoneNumber(value.slice(matched.dial_code.length).trim());
                    return;
                }
            }
            // Fallback: entire value is number or code didn't match
            setPhoneNumber(value);
        }
    }, [value]); // Only run when value prop changes externally (mostly init)


    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newNum = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
        setPhoneNumber(newNum);
        triggerChange(countryCode, newNum);
    };

    const handleCodeSelect = (code: string) => {
        setCountryCode(code);
        setOpen(false);
        setSearch(""); // Reset search on select
        triggerChange(code, phoneNumber);
    };

    const triggerChange = (code: string, num: string) => {
        if (!num) onChange("");
        else onChange(`${code} ${num}`);
    };

    // Outside click to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedCountry = countryCodes.find(c => c.dial_code === countryCode) || countryCodes[0];

    // Filter countries based on search
    const filteredCountries = countryCodes.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.dial_code.includes(search) ||
        c.code.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex relative group" ref={wrapperRef}>
            <div className="relative">
                <button
                    type="button"
                    className="h-full px-3 py-2.5 border border-r-0 border-slate-300 rounded-l-lg bg-slate-50 text-slate-700 text-sm font-medium flex items-center gap-1 hover:bg-slate-100 transition-colors focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 focus:z-10 outline-none"
                    onClick={() => setOpen(!open)}
                >
                    <span className="font-bold text-slate-800">{selectedCountry.code}</span>
                    <span className="text-slate-500 text-xs">{countryCode}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400 ml-1" />
                </button>

                {open && (
                    <div className="absolute top-full left-0 mt-1 w-72 max-h-60 overflow-hidden bg-white border border-slate-200 rounded-lg shadow-xl z-50 flex flex-col">
                        {/* Search Input */}
                        <div className="p-2 border-b border-slate-100 bg-white sticky top-0">
                            <input
                                className="w-full text-sm p-2 text-slate-900 bg-slate-50 rounded-md border border-slate-200 outline-none focus:border-brand-500 transition-colors"
                                placeholder="Search country..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <div className="overflow-y-auto flex-1">
                            {filteredCountries.length === 0 ? (
                                <div className="p-3 text-sm text-slate-500 text-center">No results found.</div>
                            ) : (
                                filteredCountries.map((c) => (
                                    <button
                                        key={`${c.code}-${c.dial_code}`}
                                        type="button"
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex justify-between items-center transition-colors ${c.dial_code === countryCode ? "bg-slate-100 text-slate-900 font-medium" : "text-slate-700"}`}
                                        onClick={() => handleCodeSelect(c.dial_code)}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">{c.code}</span>
                                            <span className="text-slate-600 truncate max-w-[120px]" title={c.name}>{c.name}</span>
                                        </div>
                                        <span className="text-slate-400 font-mono text-xs">{c.dial_code}</span>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>
                )}
            </div>

            <input
                id={id}
                type="tel"
                className={twMerge(className, "flex-1 p-2.5 border border-slate-300 rounded-r-lg text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-200 rounded-l-none border-l-slate-300")}
                placeholder="123456789"
                value={phoneNumber}
                onChange={handleNumberChange}
            />
        </div>
    );
}

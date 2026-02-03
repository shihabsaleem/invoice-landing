"use client";

import { useState, useEffect } from "react";
import { InvoiceData, InvoiceItem, DEFAULT_INVOICE } from "@/types/invoice";

export function useInvoice() {
    const [data, setData] = useState<InvoiceData>(DEFAULT_INVOICE);
    const [isLoaded, setIsLoaded] = useState(false);

    // Generate a safe ID even in non-secure contexts
    const generateId = () => {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem("invoice_draft");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Merge with default to ensure structural integrity
                // Ensure items is an array if it exists in parsed
                if (parsed.items && !Array.isArray(parsed.items)) {
                    parsed.items = DEFAULT_INVOICE.items;
                }
                setData((prev) => ({ ...prev, ...parsed }));
            } catch (e) {
                console.error("Failed to load draft", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("invoice_draft", JSON.stringify(data));
        }
    }, [data, isLoaded]);

    const updateCompany = (field: keyof InvoiceData["company"], value: string) => {
        setData((prev) => ({ ...prev, company: { ...prev.company, [field]: value } }));
    };

    const updateClient = (field: keyof InvoiceData["client"], value: string) => {
        setData((prev) => ({ ...prev, client: { ...prev.client, [field]: value } }));
    };

    const updateDetails = (field: keyof InvoiceData["details"], value: string) => {
        setData((prev) => ({ ...prev, details: { ...prev.details, [field]: value } }));
    };

    const updateConfig = (field: keyof InvoiceData["config"], value: any) => {
        setData((prev) => ({ ...prev, config: { ...prev.config, [field]: value } }));
    };

    const addItem = () => {
        const newItem: InvoiceItem = {
            id: generateId(),
            desc: "",
            qty: 1,
            price: 0,
            tax: 0,
        };
        setData((prev) => ({ ...prev, items: [...prev.items, newItem] }));
    };

    const removeItem = (id: string) => {
        if (data.items.length <= 1) return;
        setData((prev) => ({ ...prev, items: prev.items.filter((i) => i.id !== id) }));
    };

    const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
        setData((prev) => ({
            ...prev,
            items: prev.items.map((i) => (i.id === id ? { ...i, [field]: value } : i)),
        }));
    };

    const resetInvoice = () => {
        setData(DEFAULT_INVOICE);
    };

    const clearClient = () => {
        setData((prev) => ({
            ...prev,
            client: {
                name: "",
                email: "",
                phone: "",
                address: "",
                tax: "",
            }
        }));
    };

    return {
        data,
        updateCompany,
        updateClient,
        updateDetails,
        updateConfig,
        addItem,
        removeItem,
        updateItem,
        resetInvoice,
        clearClient,
        setFullData: setData
    };
}

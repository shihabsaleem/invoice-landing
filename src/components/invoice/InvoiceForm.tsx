"use client";

import { useInvoice } from "@/hooks/useInvoice";
import { Plus, Trash2, RefreshCcw, GripHorizontal } from "lucide-react";
import { useId } from "react";

type Props = {
    data: ReturnType<typeof useInvoice>["data"];
    actions: Omit<ReturnType<typeof useInvoice>, "data" | "setFullData">;
};

const BRAND_COLORS = [
    "#e11d48", // Rose (Default)
    "#2563eb", // Blue
    "#16a34a", // Green
    "#9333ea", // Purple
    "#ea580c", // Orange
    "#0ea5e9", // Sky
    "#000000", // Black
];

export default function InvoiceForm({ data, actions }: Props) {
    const fileInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                if (ev.target?.result) {
                    actions.updateCompany("logo", ev.target.result as string);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    // Standardized Input Classes
    const inputClass = "w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-200";
    const smallInputClass = "p-2.5 border border-slate-300 rounded-lg text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 outline-none transition-all duration-200";
    const labelClass = "text-xs font-semibold text-slate-600 block mb-1";

    const baseId = useId();

    return (
        <div className="space-y-8 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            {/* 1. Company Info */}
            <section className="space-y-4">
                <h3 className="tex-sm font-semibold text-slate-400 uppercase tracking-wider">Your Company</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor={`${baseId}-co-name`} className={labelClass}>Company Name</label>
                        <input id={`${baseId}-co-name`} className={inputClass} value={data.company.name} onChange={(e) => actions.updateCompany("name", e.target.value)} placeholder="Your Business Name" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-co-logo`} className={labelClass}>Logo</label>
                        <input id={`${baseId}-co-logo`} type="file" accept="image/*" onChange={fileInputHandler} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor={`${baseId}-co-address`} className={labelClass}>Address</label>
                        <textarea id={`${baseId}-co-address`} className={`${inputClass} h-20`} value={data.company.address} onChange={(e) => actions.updateCompany("address", e.target.value)} placeholder="123 Business St, City, Country" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-co-email`} className={labelClass}>Email</label>
                        <input id={`${baseId}-co-email`} className={inputClass} value={data.company.email} onChange={(e) => actions.updateCompany("email", e.target.value)} placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-co-phone`} className={labelClass}>Phone</label>
                        <input id={`${baseId}-co-phone`} className={inputClass} value={data.company.phone} onChange={(e) => actions.updateCompany("phone", e.target.value)} placeholder="+1 234 567 890" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-co-tax`} className={labelClass}>Tax ID / VAT</label>
                        <input id={`${baseId}-co-tax`} className={inputClass} value={data.company.tax} onChange={(e) => actions.updateCompany("tax", e.target.value)} placeholder="TAX-123456" />
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* 2. Client Info */}
            <section className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="tex-sm font-semibold text-slate-400 uppercase tracking-wider">Bill To</h3>
                    <button onClick={() => actions.updateClient("name", "")} className="text-xs text-brand-600 hover:underline">Clear Client</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="col-span-full">
                        <label htmlFor={`${baseId}-cl-name`} className={labelClass}>Client Name</label>
                        <input id={`${baseId}-cl-name`} className={inputClass} value={data.client.name} onChange={(e) => actions.updateClient("name", e.target.value)} placeholder="Client Business Name" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor={`${baseId}-cl-address`} className={labelClass}>Address</label>
                        <textarea id={`${baseId}-cl-address`} className={`${inputClass} h-20`} value={data.client.address} onChange={(e) => actions.updateClient("address", e.target.value)} placeholder="Client Address" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-cl-email`} className={labelClass}>Email</label>
                        <input id={`${baseId}-cl-email`} className={inputClass} value={data.client.email} onChange={(e) => actions.updateClient("email", e.target.value)} placeholder="client@example.com" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-cl-phone`} className={labelClass}>Phone</label>
                        <input id={`${baseId}-cl-phone`} className={inputClass} value={data.client.phone} onChange={(e) => actions.updateClient("phone", e.target.value)} placeholder="+1 555 000 000" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-cl-tax`} className={labelClass}>Tax ID / VAT</label>
                        <input id={`${baseId}-cl-tax`} className={inputClass} value={data.client.tax} onChange={(e) => actions.updateClient("tax", e.target.value)} placeholder="TAX-987654" />
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* 3. Invoice Details */}
            <section className="space-y-4">
                <h3 className="tex-sm font-semibold text-slate-400 uppercase tracking-wider">Invoice Details</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor={`${baseId}-det-doctype`} className={labelClass}>Document Type</label>
                        <input id={`${baseId}-det-doctype`} className={inputClass} value={data.details.docType} onChange={(e) => actions.updateDetails("docType", e.target.value)} placeholder="Invoice, Quote..." />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-det-number`} className={labelClass}>Number</label>
                        <input id={`${baseId}-det-number`} className={inputClass} value={data.details.invoiceNumber} onChange={(e) => actions.updateDetails("invoiceNumber", e.target.value)} placeholder="INV-001" />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-det-date`} className={labelClass}>Date</label>
                        <input id={`${baseId}-det-date`} type="date" className={inputClass} value={data.details.invoiceDate} onChange={(e) => actions.updateDetails("invoiceDate", e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-det-due`} className={labelClass}>Due Date</label>
                        <input id={`${baseId}-det-due`} type="date" className={inputClass} value={data.details.dueDate} onChange={(e) => actions.updateDetails("dueDate", e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor={`${baseId}-det-currency`} className={labelClass}>Currency</label>
                        {/* Changed to input as requested */}
                        <input id={`${baseId}-det-currency`} className={inputClass} value={data.details.currency} onChange={(e) => actions.updateDetails("currency", e.target.value)} placeholder="$ or USD" />
                    </div>
                    <div className="col-span-2">
                        <span className={labelClass}>Brand Color</span>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                            {/* Swatches */}
                            {BRAND_COLORS.map(color => (
                                <button
                                    key={color}
                                    onClick={() => actions.updateDetails("brandColor", color)}
                                    className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${data.details.brandColor === color ? 'border-slate-900 shadow-md' : 'border-transparent'}`}
                                    style={{ backgroundColor: color }}
                                    title={`Select color ${color}`}
                                    aria-label={`Select color ${color}`}
                                />
                            ))}
                            {/* Custom Picker */}
                            <div className="relative group">
                                <label htmlFor={`${baseId}-custom-color`} className="sr-only">Custom Color</label>
                                <input id={`${baseId}-custom-color`} type="color" className="w-8 h-8 opacity-0 absolute inset-0 cursor-pointer" value={data.details.brandColor} onChange={(e) => actions.updateDetails("brandColor", e.target.value)} />
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-slate-300 flex items-center justify-center text-slate-500 group-hover:border-slate-400 pointer-events-none">
                                    <span className="text-xs">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="border-slate-100" />

            {/* 4. Items */}
            <section className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <h3 className="tex-sm font-semibold text-slate-400 uppercase tracking-wider">Items</h3>
                    <div className="flex gap-4">
                        {/* Styled Toggles */}
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" checked={data.config.enableTax} onChange={(e) => actions.updateConfig("enableTax", e.target.checked)} />
                                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600"></div>
                            </div>
                            <span className="text-xs font-semibold text-slate-700">Tax</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer select-none">
                            <div className="relative">
                                <input type="checkbox" className="sr-only peer" checked={data.config.enableDiscount} onChange={(e) => actions.updateConfig("enableDiscount", e.target.checked)} />
                                <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-600"></div>
                            </div>
                            <span className="text-xs font-semibold text-slate-700">Discount</span>
                        </label>
                    </div>
                </div>

                <div className="flex gap-2 mb-2 px-1">
                    {/* Spacer for Grip */}
                    <div className="w-4"></div>

                    <div className="flex-1 grid grid-cols-12 gap-2">
                        <div className={`${data.config.enableTax ? 'col-span-6 md:col-span-6' : 'col-span-8'}`}>
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Item</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Qty</span>
                        </div>
                        <div className="col-span-2">
                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</span>
                        </div>
                        {data.config.enableTax && (
                            <div className="col-span-2 md:col-span-2">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tax</span>
                            </div>
                        )}
                    </div>

                    {/* Spacer for Trash to match button width (p-2 + w-5 = ~36px = w-9) */}
                    <div className="w-9"></div>
                </div>

                <div className="space-y-3">
                    {data.items.map((item, idx) => (
                        <div key={item.id} className="flex gap-2 items-start group">
                            <div className="mt-3 text-slate-300 cursor-move hover:text-slate-400">
                                <GripHorizontal className="w-4 h-4" />
                            </div>
                            <div className="flex-1 grid grid-cols-12 gap-2">
                                <div className={`${data.config.enableTax ? 'col-span-6 md:col-span-6' : 'col-span-8'}`}>
                                    <input aria-label="Item description" className={`${inputClass}`} placeholder="Description" value={item.desc} onChange={(e) => actions.updateItem(item.id, "desc", e.target.value)} />
                                </div>
                                <div className="col-span-2">
                                    <input aria-label="Quantity" type="number" className={`${smallInputClass} w-full`} placeholder="0" value={item.qty} onChange={(e) => actions.updateItem(item.id, "qty", parseFloat(e.target.value))} />
                                </div>
                                <div className="col-span-2">
                                    <input aria-label="Price" type="number" className={`${smallInputClass} w-full`} placeholder="0.00" value={item.price} onChange={(e) => actions.updateItem(item.id, "price", parseFloat(e.target.value))} />
                                </div>
                                {data.config.enableTax && (
                                    <div className="col-span-2 md:col-span-2">
                                        <input aria-label="Tax percentage" type="number" className={`${smallInputClass} w-full`} placeholder="%" value={item.tax} onChange={(e) => actions.updateItem(item.id, "tax", parseFloat(e.target.value))} />
                                    </div>
                                )}
                            </div>
                            <button onClick={() => actions.removeItem(item.id)} className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded mt-1" disabled={data.items.length <= 1} aria-label="Remove item">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    ))}
                </div>

                <button onClick={actions.addItem} className="w-full py-2 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 hover:border-brand-500 hover:text-brand-600 flex items-center justify-center gap-2 text-sm font-medium transition-colors">
                    <Plus className="w-4 h-4" /> Add Item
                </button>

                {data.config.enableDiscount && (
                    <div className="flex items-center gap-2 justify-end mt-4">
                        <label htmlFor={`${baseId}-discount`} className="text-sm font-medium text-slate-700">Discount %</label>
                        <input id={`${baseId}-discount`} type="number" className={`${smallInputClass} w-24`} value={data.config.discountPercentage} onChange={(e) => actions.updateConfig("discountPercentage", parseFloat(e.target.value))} />
                    </div>
                )}
            </section>

            <hr className="border-slate-100" />

            <section>
                <label htmlFor={`${baseId}-notes-heading`} className={labelClass}>Notes / Terms</label>
                <input id={`${baseId}-notes-heading`} className={`${inputClass} mb-2 font-medium`} value={data.config.notesHeading} onChange={(e) => actions.updateConfig("notesHeading", e.target.value)} />
                <textarea id={`${baseId}-notes-body`} className={`${inputClass} h-24`} value={data.config.notes} onChange={(e) => actions.updateConfig("notes", e.target.value)} placeholder="Payment details, thank you note, etc." />
            </section>

            <button onClick={() => { if (confirm("Reset invoice?")) actions.resetInvoice() }} className="text-red-500 text-sm flex items-center gap-2 hover:underline">
                <RefreshCcw className="w-3 h-3" /> Reset Form
            </button>
        </div>
    );
}

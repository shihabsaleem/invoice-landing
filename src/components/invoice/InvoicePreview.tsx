"use client";

import { useInvoice } from "@/hooks/useInvoice";
import { calculateTotals } from "@/lib/invoice-utils";
import { RefObject } from "react";

type Props = {
    data: ReturnType<typeof useInvoice>["data"];
    invoiceRef: RefObject<HTMLDivElement | null>;
};

export default function InvoicePreview({ data, invoiceRef }: Props) {
    const { company, client, details, items, config } = data;
    const totals = calculateTotals(data);
    const defaults = { items: "Description", qty: "Qty", price: "Price", amount: "Amount" };
    const labels = { ...defaults, ...config.labels };

    return (
        <div className="bg-slate-100 p-8 rounded-xl overflow-auto h-full min-h-[600px] flex items-start justify-center">
            <div
                ref={invoiceRef}
                id="invoice-preview"
                className="bg-white shadow-lg w-[210mm] min-h-[297mm] p-[15mm] text-slate-900 box-border relative font-sans"
                style={{ fontSize: "14px" }}
            >
                {/* Header */}
                <div className="flex justify-between items-start border-b pb-8 mb-8" style={{ borderBottomColor: "#eeeeee" }}>
                    <div className="space-y-4 max-w-[50%]">
                        {company.logo && (
                            <img src={company.logo} alt="Logo" className="h-16 w-auto object-contain" />
                        )}
                        <div>
                            <h1 className="text-xl font-bold" style={{ color: details.brandColor }}>{company.name}</h1>
                            <p className="whitespace-pre-wrap text-slate-500 text-sm mt-2">{company.address}</p>
                            {company.tax && <p className="text-slate-500 text-sm mt-1">Tax ID: {company.tax}</p>}
                            {company.email && <p className="text-slate-500 text-sm">Email: {company.email}</p>}
                            {company.phone && <p className="text-slate-500 text-sm">Phone: {company.phone}</p>}
                        </div>
                    </div>

                    <div className="text-right">
                        <h2 className="text-4xl font-light uppercase tracking-widest mb-4" style={{ color: details.brandColor }}>{details.docType}</h2>
                        <div className="space-y-1 text-sm">
                            <p><span className="font-semibold text-slate-600">#:</span> {details.invoiceNumber}</p>
                            <p><span className="font-semibold text-slate-600">Date:</span> {details.invoiceDate}</p>
                            <p><span className="font-semibold text-slate-600">Due:</span> {details.dueDate}</p>
                        </div>
                    </div>
                </div>

                {/* Client */}
                <div className="mb-12">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Bill To</h3>
                    <div className="text-sm">
                        <p className="font-bold text-lg">{client.name}</p>
                        <p className="whitespace-pre-wrap text-slate-600 mt-1">{client.address}</p>
                        {client.tax && <p className="text-slate-600 mt-1">Tax ID: {client.tax}</p>}
                        {client.email && <p className="text-slate-600 mt-1">{client.email}</p>}
                        {client.phone && <p className="text-slate-600 mt-1">{client.phone}</p>}
                    </div>
                </div>

                {/* Table */}
                <table className="w-full mb-8">
                    <thead className="bg-slate-50 text-slate-600 font-semibold text-sm">
                        <tr>
                            <th className="text-left py-3 px-2">{labels.items}</th>
                            <th className="text-right py-3 px-2 w-[10%]">{labels.qty}</th>
                            <th className="text-right py-3 px-2 w-[15%]">{labels.price}</th>
                            {config.enableTax && <th className="text-right py-3 px-2 w-[10%]">Tax</th>}
                            <th className="text-right py-3 px-2 w-[15%]">{labels.amount}</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {items.map((item) => (
                            <tr key={item.id} className="border-b border-slate-100 last:border-0">
                                <td className="py-3 px-2 font-medium">{item.desc}</td>
                                <td className="text-right py-3 px-2">{item.qty}</td>
                                <td className="text-right py-3 px-2">{details.currency}{item.price.toFixed(2)}</td>
                                {config.enableTax && <td className="text-right py-3 px-2">{item.tax}%</td>}
                                <td className="text-right py-3 px-2">{details.currency}{((item.qty * item.price)).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end mb-12">
                    <div className="w-[40%] space-y-2 text-sm">
                        <div className="flex justify-between text-slate-600">
                            <span>Subtotal</span>
                            <span>{details.currency}{totals.subtotal.toFixed(2)}</span>
                        </div>
                        {config.enableDiscount && totals.discountAmount > 0 && (
                            <div className="flex justify-between text-slate-600">
                                <span>Discount ({config.discountPercentage}%)</span>
                                <span>- {details.currency}{totals.discountAmount.toFixed(2)}</span>
                            </div>
                        )}
                        {config.enableTax && (
                            <div className="flex justify-between text-slate-600">
                                <span>Tax</span>
                                <span>+ {details.currency}{totals.totalTax.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between font-bold text-lg border-t border-slate-200 pt-2" style={{ color: details.brandColor }}>
                            <span>Total</span>
                            <span>{details.currency}{totals.grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                {config.notes && (
                    <div className="border-l-4 pl-4 py-1" style={{ borderLeftColor: details.brandColor }}>
                        {config.notesHeading && <h4 className="font-bold text-sm mb-1">{config.notesHeading}</h4>}
                        <p className="text-sm text-slate-600 whitespace-pre-wrap">{config.notes}</p>
                    </div>
                )}

                {/* Footer */}
                <div className="absolute bottom-[15mm] left-[15mm] right-[15mm] text-center text-xs text-slate-400 border-t pt-4 flex flex-col items-center justify-center gap-1">
                    <p className="text-slate-500 font-medium mb-1">Thank you for your business!</p>
                    <p className="text-slate-400 text-[8px] uppercase tracking-wider">Generated with</p>
                    <img src="/assets/logo-jadbery.png" alt="Jadbery Logo" className="h-6 opacity-80" />
                </div>
            </div>
        </div>
    );
}

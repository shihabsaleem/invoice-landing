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
                className="bg-white w-[210mm] p-[10mm] text-slate-900 box-border relative font-sans"
                style={{
                    fontSize: "9px",
                    minHeight: "auto",
                    pageBreakAfter: "auto"
                }}
            >
                {/* Header */}
                <div className="flex justify-between items-start border-b pb-4 mb-4 pdf-item" style={{ borderBottomColor: "#eeeeee" }}>
                    <div className="space-y-2 max-w-[50%]">
                        {company.logo && (
                            <img src={company.logo} alt="Logo" className="h-16 w-auto object-contain" />
                        )}
                        <div>
                            <h1 className="text-[11px] font-bold" style={{ color: details.brandColor }}>{company.name}</h1>
                            <p className="whitespace-pre-wrap text-slate-500 text-[9px] mt-1">{company.address}</p>
                            {company.tax && <p className="text-slate-500 text-[9px] mt-0.5">Tax ID: {company.tax}</p>}
                            {company.email && <p className="text-slate-500 text-[9px]">Email: {company.email}</p>}
                            {company.phone && <p className="text-slate-500 text-[9px]">Phone: {company.phone}</p>}
                        </div>
                    </div>

                    <div className="text-right">
                        <h2 className="text-xl font-light uppercase tracking-widest mb-2" style={{ color: details.brandColor }}>{details.docType}</h2>
                        <div className="space-y-0.5 text-[9px]">
                            <p><span className="font-semibold text-slate-600">#:</span> {details.invoiceNumber}</p>
                            <p><span className="font-semibold text-slate-600">Date:</span> {details.invoiceDate}</p>
                            <p><span className="font-semibold text-slate-600">Due:</span> {details.dueDate}</p>
                        </div>
                    </div>
                </div>

                {/* Client */}
                <div className="mb-6 pdf-item">
                    <h3 className="text-[8px] uppercase tracking-wider font-bold text-slate-400 mb-1">Bill To</h3>
                    <div className="text-[9px]">
                        <p className="font-bold text-[9px]">{client.name}</p>
                        <p className="whitespace-pre-wrap text-slate-600 mt-1">{client.address}</p>
                        {client.tax && <p className="text-slate-600 mt-1">Tax ID: {client.tax}</p>}
                        {client.email && <p className="text-slate-600 mt-1">{client.email}</p>}
                        {client.phone && <p className="text-slate-600 mt-1">{client.phone}</p>}
                    </div>
                </div>

                {/* Table */}
                <table className="w-full mb-6" style={{ pageBreakInside: 'avoid' }}>
                    <thead className="bg-slate-50 text-slate-600 font-semibold text-[9px]">
                        <tr>
                            <th className="text-left py-2 px-2">{labels.items}</th>
                            <th className="text-right py-2 px-2 w-[10%]">{labels.qty}</th>
                            <th className="text-right py-2 px-2 w-[15%]">{labels.price}</th>
                            {config.enableTax && <th className="text-right py-2 px-2 w-[10%]">Tax</th>}
                            <th className="text-right py-2 px-2 w-[15%]">{labels.amount}</th>
                        </tr>
                    </thead>
                    <tbody className="text-[9px]">
                        {items.map((item) => (
                            <tr key={item.id} className="border-b border-slate-100 last:border-0 pdf-item" style={{ pageBreakInside: 'avoid' }}>
                                <td className="py-2 px-2 font-medium">{item.desc}</td>
                                <td className="text-right py-2 px-2">{item.qty}</td>
                                <td className="text-right py-2 px-2">{item.price.toFixed(2)}</td>
                                {config.enableTax && <td className="text-right py-2 px-2">{item.tax}%</td>}
                                <td className="text-right py-2 px-2">{((item.qty * item.price)).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Totals */}
                <div className="flex justify-end mb-8 pdf-item" style={{ pageBreakInside: 'avoid' }}>
                    <div className="w-[40%] space-y-1 text-[9px]">
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
                        <div className="flex justify-between font-bold text-[10px] border-t border-slate-200 pt-2" style={{ color: details.brandColor }}>
                            <span>Total</span>
                            <span>{details.currency}{totals.grandTotal.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Notes */}
                {config.notes && (
                    <div
                        className="border-l-4 pl-4 py-1 mb-12 pdf-item"
                        style={{
                            borderLeftColor: details.brandColor,
                            pageBreakInside: 'avoid'
                        }}
                    >
                        {config.notesHeading && <h4 className="font-bold text-[9px] mb-1">{config.notesHeading}</h4>}
                        <p className="text-[9px] text-slate-600 whitespace-pre-wrap">{config.notes}</p>
                    </div>
                )}
                {/* Footer */}
                <div
                    className="mt-12 text-center text-[8px] text-slate-400 border-t border-slate-200 pt-4 flex flex-col items-center justify-center gap-1"
                    style={{ pageBreakInside: 'avoid' }}
                >
                    <p className="text-slate-500 font-medium mb-1">Thank you for your business!</p>
                    <p className="text-slate-400 text-[6px] uppercase tracking-wider">Generated with</p>
                    <img src="/assets/logo-jadbery.png" alt="Jadbery Logo" className="h-6 opacity-80" />
                </div>
            </div>
        </div>
    );
}

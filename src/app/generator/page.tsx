"use client";

import { useRef, useState } from "react";
import { useInvoice } from "@/hooks/useInvoice";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import { Download, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function GeneratorPage() {
    const { data, ...actions } = useInvoice();
    const invoiceRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        if (!invoiceRef.current) return;
        setIsGenerating(true);

        try {
            // 1. Capture the element
            const canvas = await html2canvas(invoiceRef.current, {
                scale: 2, // Retinas resolution
                useCORS: true,
                backgroundColor: "#ffffff"
            });

            // 2. Initialize PDF
            const imgData = canvas.toDataURL("image/jpeg", 1.0);
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4"
            });

            // 3. Calculate dimensions
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // 4. Add image (Standard scale to fit width)
            // Note: If height > pageHeight, we might need pagination logic similar to extension
            // For MVP, we'll just scale to fit one page or let it stretch if implemented simply.
            // The extension had complex pagination logic which is hard to port 1:1 quickly.
            // Let's assume single page for now or simple overflow.

            pdf.addImage(imgData, "JPEG", 0, 0, imgWidth, imgHeight);

            // 5. Save
            const fileName = `${data.details.docType}-${data.details.invoiceNumber || "draft"}.pdf`;
            pdf.save(fileName);

        } catch (err) {
            console.error("PDF Generation failed", err);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 bg-white rounded-full border hover:bg-slate-50 transition">
                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">Invoice Generator</h1>
                            <p className="text-slate-500 text-sm">Create and download your invoice instantly.</p>
                        </div>
                    </div>

                    <button
                        onClick={handleDownload}
                        disabled={isGenerating}
                        className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-brand-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                        {isGenerating ? "Generating..." : "Download PDF"}
                    </button>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Editor */}
                    <div className="lg:sticky lg:top-24">
                        <InvoiceForm data={data} actions={actions} />
                    </div>

                    {/* Right: Preview */}
                    <div className="bg-slate-200/50 rounded-2xl p-4 md:p-8 flex justify-center">
                        <InvoicePreview data={data} invoiceRef={invoiceRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useRef, useState } from "react";
import { useInvoice } from "@/hooks/useInvoice";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import { Download, ArrowLeft, Loader2, Share2, Check } from "lucide-react";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import WishGreetingPopup from "@/components/invoice/WishGreetingPopup";

export default function GeneratorPage() {
    const { data, ...actions } = useInvoice();
    const invoiceRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: "Invoice Generator",
                    text: "Check out this free invoice generator!",
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            }
        } catch (err) {
            console.error("Error sharing:", err);
        }
    };

    const handleDownload = async () => {
        if (!invoiceRef.current) return;
        setIsGenerating(true);

        const originalMargins: Map<HTMLElement, string> = new Map();
        const insertedNodes: HTMLElement[] = [];
        const tableHeadersAdded: Map<HTMLTableElement, Set<number>> = new Map();

        const addPageBreaks = () => {
            if (!invoiceRef.current) return;

            const pxPerMm = invoiceRef.current.offsetWidth / 210;
            const pageHeightPx = 297 * pxPerMm; // A4 height
            const bufferPx = 30 * pxPerMm; // 30mm buffer zone at bottom
            const headerSpacePx = 20 * pxPerMm; // 20mm header space for Page 2+

            // Force reflow/layout measurement
            const containerRect = invoiceRef.current.getBoundingClientRect();
            const items = Array.from(invoiceRef.current.querySelectorAll(".pdf-item")) as HTMLElement[];

            // Sort items by position to handle them in order
            items.sort((a, b) => {
                const rectA = a.getBoundingClientRect();
                const rectB = b.getBoundingClientRect();
                return rectA.top - rectB.top;
            });

            for (const el of items) {
                const rect = el.getBoundingClientRect();
                const currentContainerRect = invoiceRef.current!.getBoundingClientRect();
                const top = rect.top - currentContainerRect.top;
                const bottom = top + rect.height;

                const pageIndex = Math.floor(top / pageHeightPx);
                const pageTop = pageIndex * pageHeightPx;
                const pageBottom = (pageIndex + 1) * pageHeightPx;
                const bufferStart = pageBottom - bufferPx;

                // Logic Check 1: Crosses Page Boundary
                const crossesBoundary = Math.floor(bottom / pageHeightPx) > pageIndex;

                // Logic Check 2: Hits Bottom Buffer Zone
                const hitsBottomBuffer = bottom > bufferStart && bottom < pageBottom;

                // Logic Check 3: Inside Top Header Space (on Page 2+)
                const inHeaderSpace = pageIndex > 0 && (top - pageTop) < headerSpacePx;

                if ((crossesBoundary || hitsBottomBuffer || inHeaderSpace) && rect.height < pageHeightPx) {
                    // Determine target page and position
                    let targetPage = pageIndex;

                    // If moving due to bottom issues, go to next page
                    if (crossesBoundary || hitsBottomBuffer) {
                        targetPage = pageIndex + 1;
                    }
                    // If just fixing header overlap, we stay on same page (just push down) 
                    // unless it pushes us too far? No, usually just push down.
                    // Actually simplest is: Push to (TargetPage Start + HeaderPadding)

                    const targetPageTop = targetPage * pageHeightPx;
                    // For Page 0: 0 padding intent (though we usually push to Page 1 with padding)
                    // For Page > 0: HeaderSpacePx padding
                    const padding = targetPage > 0 ? headerSpacePx : 0;

                    const targetTop = targetPageTop + padding;

                    // Only push if we are actually above the target
                    if (top < targetTop) {
                        const pushAmount = targetTop - top;

                        if (el.tagName === "TR") {
                            // Insert Spacer
                            const spacer = document.createElement("tr");
                            spacer.style.height = `${pushAmount}px`;
                            spacer.setAttribute("data-pdf-spacer", "true");
                            const cell = document.createElement("td");
                            cell.colSpan = 100;
                            cell.style.padding = "0";
                            cell.style.margin = "0";
                            cell.style.border = "none";
                            spacer.appendChild(cell);

                            el.parentNode?.insertBefore(spacer, el);
                            insertedNodes.push(spacer);

                            // Handle Table Header Replication
                            const table = el.closest("table");
                            if (table) {
                                if (!tableHeadersAdded.has(table)) {
                                    tableHeadersAdded.set(table, new Set());
                                }

                                const addedForPage = tableHeadersAdded.get(table)!;
                                if (!addedForPage.has(targetPage)) {
                                    // Clone the header row
                                    const thead = table.querySelector("thead");
                                    if (thead) {
                                        const headerRow = thead.querySelector("tr");
                                        if (headerRow) {
                                            const clonedHeader = headerRow.cloneNode(true) as HTMLElement;
                                            // Apply styles from thead to the rows since it's now in tbody
                                            // Original: className="bg-slate-50 text-slate-600 font-semibold text-[9px]"
                                            clonedHeader.className = "bg-slate-50 text-slate-600 font-semibold text-[9px]";
                                            clonedHeader.setAttribute("data-pdf-cloned-header", "true");

                                            el.parentNode?.insertBefore(clonedHeader, el);
                                            insertedNodes.push(clonedHeader);
                                            addedForPage.add(targetPage);
                                        }
                                    }
                                }
                            }
                        } else {
                            if (!originalMargins.has(el)) {
                                originalMargins.set(el, el.style.marginTop);
                            }
                            const currentMargin = parseFloat(window.getComputedStyle(el).marginTop) || 0;
                            el.style.marginTop = `${currentMargin + pushAmount}px`;
                        }
                    }
                }
            }
        };

        const cleanupPageBreaks = () => {
            originalMargins.forEach((value, el) => {
                el.style.marginTop = value;
            });
            originalMargins.clear();

            insertedNodes.forEach(node => node.remove());
            insertedNodes.length = 0;
            tableHeadersAdded.clear();
        };

        try {
            // 0. Smart Page Breaks
            addPageBreaks();

            // Wait for layout update? (usually synchronous but good to be safe)
            await new Promise(resolve => setTimeout(resolve, 100));

            // 1. Capture the element
            const canvas = await html2canvas(invoiceRef.current, {
                scale: 2, // Retina resolution
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
            let heightLeft = imgHeight;
            let position = 0;

            // 4. Add first page
            pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            // 5. Add additional pages if content exceeds one page
            while (heightLeft > 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            // 6. Save
            const fileName = `${data.details.docType}-${data.details.invoiceNumber || "draft"}.pdf`;
            pdf.save(fileName);

            // 7. Show Greeting
            const isHidden = localStorage.getItem("hideGreeting") === "true";
            if (!isHidden) {
                setShowGreeting(true);
            }

        } catch (err) {
            console.error("PDF Generation failed", err);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            cleanupPageBreaks();
            setIsGenerating(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 bg-white rounded-full border hover:bg-slate-50 transition" aria-label="Back to Home">
                            <ArrowLeft className="w-5 h-5 text-slate-600" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900">Invoice Generator</h1>
                            <p className="text-slate-500 text-sm">Create and download your invoice instantly.</p>
                        </div>
                    </div>

                    <button
                        onClick={handleShare}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium text-sm"
                    >
                        {isCopied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                        {isCopied ? "Copied!" : "Share"}
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


            {/* Floating Download Button */}
            <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="fixed bottom-8 right-8 z-[100] flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-full font-bold shadow-xl shadow-brand-600/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
                {isGenerating ? "Generating..." : "Download PDF"}
            </button>

            <WishGreetingPopup
                isOpen={showGreeting}
                onClose={() => setShowGreeting(false)}
            />
        </div >
    );
}

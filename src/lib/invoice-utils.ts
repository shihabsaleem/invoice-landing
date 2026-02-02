import { InvoiceData } from "@/types/invoice";

export function calculateTotals(data: InvoiceData) {
    let subtotal = 0;
    let totalTax = 0;
    let totalDiscount = 0;

    data.items.forEach((item) => {
        const price = item.price || 0;
        const qty = item.qty || 0;
        const taxRate = data.config.enableTax ? (item.tax || 0) : 0;
        const discountRate = data.config.enableDiscount ? (item.discount || 0) : 0;

        const baseAmount = qty * price;
        const discountAmount = baseAmount * (discountRate / 100);
        const netAmount = baseAmount - discountAmount;
        const taxAmount = netAmount * (taxRate / 100);

        subtotal += baseAmount;
        totalDiscount += discountAmount;
        totalTax += taxAmount;
    });

    const taxableAmount = subtotal - totalDiscount;
    const grandTotal = taxableAmount + totalTax;

    return {
        subtotal,
        discountAmount: totalDiscount,
        taxableAmount,
        totalTax,
        grandTotal,
    };
}

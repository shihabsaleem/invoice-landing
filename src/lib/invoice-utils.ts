import { InvoiceData } from "@/types/invoice";

export function calculateTotals(data: InvoiceData) {
    let subtotal = 0;
    let totalTax = 0;

    data.items.forEach((item) => {
        const price = item.price || 0;
        const qty = item.qty || 0;
        const taxRate = data.config.enableTax ? (item.tax || 0) : 0;

        const itemBaseArgs = qty * price;
        const itemTax = itemBaseArgs * (taxRate / 100);
        const itemAmount = itemBaseArgs + itemTax; // amount = price + tax

        subtotal += itemAmount;
        totalTax += itemTax;
    });

    const discountAmount = data.config.enableDiscount
        ? (subtotal * (data.config.discountPercentage || 0)) / 100
        : 0;

    // Grand Total is Subtotal (which works as 'Total' now) minus Discount
    const grandTotal = subtotal - discountAmount;

    return {
        subtotal,
        discountAmount,
        totalTax,
        grandTotal,
    };
}

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

        const itemBaseArgs = qty * price;
        const itemTax = itemBaseArgs * (taxRate / 100);
        const itemAmountWithTax = itemBaseArgs + itemTax; // amount = price + tax

        const itemDiscountAmount = itemAmountWithTax * (discountRate / 100);

        subtotal += itemAmountWithTax;
        totalTax += itemTax;
        totalDiscount += itemDiscountAmount;
    });

    // Grand Total is Subtotal (Tax Inclusive) minus Discount
    const grandTotal = subtotal - totalDiscount;

    return {
        subtotal,
        discountAmount: totalDiscount,
        totalTax,
        grandTotal,
    };
}

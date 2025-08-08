import React from "react";

export default function InvoicePreview({
  clientName,
  invoiceDate,
  items,
  subtotal,
  gst,
  total,
}) {
  // Function to print invoice
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Invoice Preview
      </h2>

      {/* Basic Details */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-lg font-bold text-gray-800">Invoice</h3>
        <p className="text-sm text-gray-600">
          Client: {clientName || "N/A"}
        </p>
        <p className="text-sm text-gray-600">
          Date: {invoiceDate || "DD/MM/YYYY"}
        </p>
      </div>

      {/* Items Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Rate</th>
              <th className="p-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border p-2">{item.description || "-"}</td>
                <td className="border p-2 text-center">{item.quantity}</td>
                <td className="border p-2 text-center">₹{item.rate}</td>
                <td className="border p-2 text-center">
                  ₹{(item.quantity * item.rate).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals Section */}
      <div className="mt-4 bg-gray-100 rounded-lg p-4 text-sm">
        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>GST (18%):</span>
          <span>₹{gst.toFixed(2)}</span>
        </p>

        <hr className="my-2" />

        <p className="flex justify-between font-semibold text-gray-800">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </p>
      </div>

      {/* Print Invoice Button */}
      <div className="mt-6 flex justify-end">
  <button
      // onClick={onClick}
      className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg 
                 hover:bg-blue-700 hover:scale-105 active:scale-95 
                 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      Print Invoice
    </button>
</div>
    </div>
  );
}


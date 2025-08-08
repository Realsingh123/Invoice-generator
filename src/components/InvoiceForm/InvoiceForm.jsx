import React, { useState } from "react";
import ItemRow from "./ItemRow";
import AddButton from "../UI/Add Button";

export default function InvoiceForm({
  clientName,
  setClientName,
  invoiceDate,
  setInvoiceDate,
  items,
  onItemChange,
  addItem,
  removeItem,
  subtotal,
  gst,
  total,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!clientName.trim()) newErrors.clientName = "Client name is required";
    if (!invoiceDate) newErrors.invoiceDate = "Invoice date is required";

    items.forEach((item, index) => {
      if (!item.description.trim()) {
        newErrors[`description-${index}`] = "Description is required";
      }
      if (item.quantity <= 0) {
        newErrors[`quantity-${index}`] = "Quantity must be at least 1";
      }
      if (item.rate < 0) {
        newErrors[`rate-${index}`] = "Rate cannot be negative";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = () => {
    validateForm();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Invoice Details
      </h2>

      {/* Client & Date Inputs */}
      <div className="space-y-4">
        {/* Client Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Client Name
          </label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            onBlur={handleBlur}
            placeholder="Enter client name"
            className={`border rounded-lg w-full p-2 focus:ring-2 outline-none transition ${
              errors.clientName
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.clientName && (
            <p className="text-red-500 text-xs mt-1">{errors.clientName}</p>
          )}
        </div>

        {/* Invoice Date */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Invoice Date
          </label>
          <input
            type="date"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
            onBlur={handleBlur}
            className={`border rounded-lg w-full p-2 focus:ring-2 outline-none transition ${
              errors.invoiceDate
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            }`}
          />
          {errors.invoiceDate && (
            <p className="text-red-500 text-xs mt-1">{errors.invoiceDate}</p>
          )}
        </div>
      </div>

      {/* Items Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Rate</th>
              <th className="p-2 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <ItemRow
                key={index}
                item={item}
                index={index}
                onChange={onItemChange}
                onRemove={removeItem}
                errors={errors}
                onBlur={handleBlur}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Item Button */}
      <AddButton onClick={() => { addItem(); handleBlur(); }}>
        + Add Item
      </AddButton>

      {/* Totals Section */}
      <div className="mt-6 bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
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
    </div>
  );
}

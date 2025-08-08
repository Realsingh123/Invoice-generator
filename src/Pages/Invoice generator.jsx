
import React, { useState } from "react";
import InvoiceForm from "../components/InvoiceForm/InvoiceForm";
import InvoicePreview from "../components/Invoice Preview/Invoice Preview";

export default function InvoiceGenerator() {
  // State
  const [clientName, setClientName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [items, setItems] = useState([{ description: "", quantity: 1, rate: 0 }]);

  // Handle item value changes
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = field === "quantity" || field === "rate" ? Number(value) : value;
    setItems(updatedItems);
  };

   // Add a new empty item
  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0 }]);
  };

  // Remove item by index
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.rate, 0);
  const gst = 0.18 * subtotal;
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-12 px-4">

       {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10 tracking-tight">
        🧾 Mini Invoice Generator
      </h1>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <InvoiceForm
          clientName={clientName}
          setClientName={setClientName}
          invoiceDate={invoiceDate}
          setInvoiceDate={setInvoiceDate}
          items={items}
          onItemChange={handleItemChange}
          addItem={addItem}
          removeItem={removeItem}
          subtotal={subtotal}
          gst={gst}
          total={total}
        />
          {/* Invoice Preview */}
        <InvoicePreview
          clientName={clientName}
          invoiceDate={invoiceDate}
          items={items}
          subtotal={subtotal}
          gst={gst}
          total={total}
        />
      </div>
    </div>
  );
}


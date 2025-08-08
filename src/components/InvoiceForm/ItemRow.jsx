import React from "react";
import DeleteButton from "../UI/Delete Button";

export default function ItemRow({ item, index, onChange, onRemove, errors, onBlur }) {
  return (
    <tr className="hover:bg-gray-100 transition">
      {/* Description */}
      <td className="border p-2">
        <input
          type="text"
          value={item.description}
          onChange={(e) => onChange(index, "description", e.target.value)}
          onBlur={onBlur}
          placeholder="Item description"
          className={`w-full border rounded p-1 text-sm focus:ring-2 outline-none transition ${
            errors?.[`description-${index}`]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        {errors?.[`description-${index}`] && (
          <p className="text-red-500 text-xs mt-1">{errors[`description-${index}`]}</p>
        )}
      </td>

      {/* Quantity */}
      <td className="border p-2 w-16">
        <input
          type="number"
          min="0"
          value={item.quantity}
          onChange={(e) => onChange(index, "quantity", e.target.value)}
          onBlur={onBlur}
          className={`w-full border rounded p-1 text-sm focus:ring-2 outline-none transition ${
            errors?.[`quantity-${index}`]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        {errors?.[`quantity-${index}`] && (
          <p className="text-red-500 text-xs mt-1">{errors[`quantity-${index}`]}</p>
        )}
      </td>

      {/* Rate */}
      <td className="border p-2 w-20">
        <input
          type="number"
          min="0"
          value={item.rate}
          onChange={(e) => onChange(index, "rate", e.target.value)}
          onBlur={onBlur}
          className={`w-full border rounded p-1 text-sm focus:ring-2 outline-none transition ${
            errors?.[`rate-${index}`]
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-400"
          }`}
        />
        {errors?.[`rate-${index}`] && (
          <p className="text-red-500 text-xs mt-1">{errors[`rate-${index}`]}</p>
        )}
      </td>

      {/* Remove Button */}
      <td className="border p-2 text-center">
        <DeleteButton onClick={() => onRemove(index)} />
      </td>
    </tr>
  );
}
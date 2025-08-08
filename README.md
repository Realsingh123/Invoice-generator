# Mini Invoice Generator

A simple and responsive React.js web application to create, preview, and print invoices quickly and easily.

---


# Approach Explanation for Mini Invoice Generator UI

- I split the app into two main parts the form where you enter the invoice details, and the live preview that shows what the invoice will look like. This keeps things organized and easy to work with.

- I used React’s local state to keep track of the client info and the list of items. When you add or remove items or change anything, the totals update right away so you can see exactly what the invoice looks like in real time.

- The preview updates instantly as you type, and I also made sure that if you scroll through the form or the preview, they stay in sync to make it easier to use.

- For styling, I used Tailwind CSS to keep the design simple, clean, and responsive so it looks good on both mobile and desktop.

- To make it a bit nicer to use, I included small animations when adding or removing line items

- Overall, I focused on making a clean, easy-to-use invoice generator that meets the task requirements and can be improved further if needed.

# Features
- Add multiple invoice items with description, quantity, and rate.
- Automatic calculation of subtotal, GST (18%), and total amount.
- Real-time invoice preview.
- Print invoice functionality with a clean, professional layout.
- Responsive design using Tailwind CSS.
- User-friendly interface.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Realsingh123/Invoice-generator.git
   
   cd vite-project

npm install

npm start / npm run build
import React, { useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import InvoiceForm from "./invoice/InvoiceForm";
import InvoicePreview from "./invoice/InvoicePreview";

export default function App() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "ALAM AMAN SERVICES (M) SDN BHD",
    clientPhone: "010-9130661",
    invoiceNumber: "TPI2025219",
    date: "21/09/2025",
    items: [{ description: "NFC KEYCHAIN (single side)", price: 30.0, qty: 2 }],
    serviceDetails: "KEYCHAIN PRINTING, NFC PROGRAMMING",
    shipping: 8.0,
  });
  const date = new Date();
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
    documentTitle:
      invoiceData.clientName.split(" ").join("") +
      date.getFullYear().toString() +
      date.getDay().toString() +
      date.getMonth().toString() +
      "_INVOICE",
  });

  return (
    <div className="app-container">
      <InvoiceForm
        data={invoiceData}
        onChange={setInvoiceData}
        reactToPrintFn={reactToPrintFn}
      />
      <InvoicePreview data={invoiceData} contentRef={contentRef} />
    </div>
  );
}

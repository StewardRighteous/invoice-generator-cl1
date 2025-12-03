import React, { useState } from "react";
import { useRef } from "react";
import InvoiceForm from "./invoice/InvoiceForm";
import InvoicePreview from "./invoice/InvoicePreview";
import downloadInvoiceAsPDF from "./utility/pdfconvertor";

export default function App() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "ALAM AMAN SERVICES (M) SDN BHD",
    clientPhone: "010-9130661",
    invoiceNumber: "TPI2025219",
    clientLogo: null,
    date: "21/09/2025",
    items: [{ description: "NFC KEYCHAIN (single side)", price: 30.0, qty: 2 }],
    serviceDetails: "KEYCHAIN PRINTING, NFC PROGRAMMING",
    shipping: 8.0,
  });
  const contentRef = useRef(null);

  return (
    <div className="app-container">
      <InvoiceForm
        data={invoiceData}
        onChange={setInvoiceData}
        reactToPrintFn={() =>
          downloadInvoiceAsPDF(contentRef, invoiceData.clientName)
        }
      />
      <InvoicePreview data={invoiceData} contentRef={contentRef} />
    </div>
  );
}

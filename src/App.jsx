import React, { useState } from "react";
import { useRef } from "react";
import InvoiceForm from "./invoice/InvoiceForm";
import InvoicePreview from "./invoice/InvoicePreview";
import downloadInvoiceAsPDF from "./utility/pdfconvertor";
import { v4 } from "uuid";

export default function App() {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "",
    clientPhone: "",
    invoiceNumber: v4(),
    clientLogo: null,
    date: "",
    items: [],
    serviceDetails: "",
    shipping: 0.0,
  });
  const contentRef = useRef(null);

  return (
    <div className="app-container">
      <InvoiceForm
        data={invoiceData}
        onChange={setInvoiceData}
        reactToPrintFn={() =>
          downloadInvoiceAsPDF(
            contentRef,
            invoiceData.clientName,
            invoiceData.invoiceNumber
          )
        }
      />
      <InvoicePreview data={invoiceData} contentRef={contentRef} />
    </div>
  );
}

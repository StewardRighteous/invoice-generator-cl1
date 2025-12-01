import React, { useState } from "react";

import InvoiceForm from "./invoice/InvoiceForm";
import InvoicePreview from "./invoice/InvoicePreview";

const App = () => {
  const [invoiceData, setInvoiceData] = useState({
    clientName: "ALAM AMAN SERVICES (M) SDN BHD",
    clientPhone: "010-9130661",
    invoiceNumber: "TPI2025219",
    date: "21/09/2025",
    items: [
      { description: "NFC KEYCHAIN (single side)", price: 30.0, qty: 2 },
      { description: "NFC KEYCHAIN (double side)", price: 50.0, qty: 4 },
    ],
    serviceDetails: "KEYCHAIN PRINTING, NFC PROGRAMMING",
    shipping: 8.0,
    bankName: "MAYBANK",
    accountNumber: "0040 5880 0622",
    accountName: "Babu Rao",
  });

  return (
    <div className="app-container">
      <InvoiceForm data={invoiceData} onChange={setInvoiceData} />
      <InvoicePreview data={invoiceData} />
    </div>
  );
};

export default App;

export default function InvoicePreview({ data }) {
  const subtotal = data.items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const total = subtotal + parseFloat(data.shipping || 0);

  const serviceList = data.serviceDetails
    ? data.serviceDetails.split(",").map((s) => s.trim())
    : [];

  return (
    <div className="preview-container">
      <div className="invoice-card">
        <div className="header-section">
          <div>
            <div className="logo-circle">
              <div className="logo-inner"></div>
            </div>
            <h1 className="invoice-title">INVOICE</h1>
          </div>

          <div className="company-logo-area">
            <img
              src="https://placehold.co/100x100?text=Tucker"
              alt="Tucker Logo"
            />
          </div>
        </div>
        <div className="info-section">
          <div>
            <p className="client-label">to:</p>
            <h2 className="client-name">{data.clientName}</h2>
            <p className="client-phone">{data.clientPhone}</p>
            <div className="client-badge">AA</div>
          </div>
          <div>
            <div className="invoice-meta-grid">
              <span className="meta-label">Invoice #</span>
              <span>{data.invoiceNumber}</span>
              <span className="meta-label">Date</span>
              <span>{data.date}</span>
            </div>
          </div>
        </div>
        <table className="invoice-table">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>SL.</th>
              <th style={{ width: "50%" }}>Product Description</th>
              <th style={{ width: "15%" }}>Price</th>
              <th style={{ width: "10%" }}>Qty.</th>
              <th style={{ width: "20%" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{item.description}</td>
                <td>RM{item.price.toFixed(2)}</td>
                <td>{item.qty}</td>
                <td>RM{(item.price * item.qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="footer-split">
          <div className="service-details">
            <div className="section-head">Service Details:</div>
            <ul className="service-list">
              {serviceList.map((svc, i) => (
                <li key={i}>- {svc}</li>
              ))}
            </ul>
          </div>
          <div className="totals-area">
            <div className="total-row">
              <span>Subtotal</span>
              <span>RM{subtotal.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Shipping</span>
              <span>RM{parseFloat(data.shipping || 0).toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Tax Rate</span>
              <span>RM0</span>
            </div>
            <div className="total-row final">
              <span>TOTAL</span>
              <span>RM{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="terms-section">
          <div className="section-head">Terms and Conditions:</div>
          <ol className="terms-list">
            <li>
              Full payment must be made upon appointment confirmation. [cite:
              33]
            </li>

            <li>
              Any unpaid balances shall accrue interest at a rate of 1.5% per
              month, calculated daily from the due date. [cite: 34]
            </li>

            <li>
              Cancellation fee equivalent to the quoted/contract sum shall be
              imposed if subsequently canceled without fault on Tucker
              Productions' part. [cite: 36]
            </li>

            <li>
              Tucker Productions indemnified against all claims, loss, damages,
              actions, costs, etc., arising from services provided. [cite: 37]
            </li>
          </ol>
        </div>
        {/* Footer: Payment & Signature (Source: [cite: 39-46]) */}
        <div className="bottom-bar">
          <div>
            <div className="section-head">Payment Info:</div>
            <div className="bank-info">
              <div className="maybank-logo">May</div>
              <div className="bank-text">
                <p>
                  <span>Account #:</span> {data.accountNumber}
                </p>
                <p>
                  <span>A/C Name:</span> {data.accountName}
                </p>
                <p>
                  <span>Bank Details:</span> {data.bankName}
                </p>
              </div>
            </div>
          </div>

          <div className="signature-block">
            <div className="sign-title">Authorised Sign</div>
            <div className="signature-line">
              <span className="fake-signature">Babu Rao</span>
            </div>
            <div className="sign-name">Babu Rao</div>
          </div>
        </div>
      </div>
    </div>
  );
}

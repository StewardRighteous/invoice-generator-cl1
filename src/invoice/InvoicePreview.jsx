import logo from "/logo.png";
import head from "/head.jpg";
import bottom from "/bottom.jpg";

export default function InvoicePreview({ data, contentRef }) {
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
      <div className="invoice-card" ref={contentRef}>
        <img src={head} alt="" />
        <div className="header-section">
          <h1 className="invoice-title">INVOICE</h1>

          <div className="company-logo-area">
            <img src={logo} alt="Tucker Logo" />
          </div>
          <div className="client-details">
            <p className="client-label">to:</p>
            <h2 className="client-name">{data.clientName}</h2>
            <p className="client-phone">{data.clientPhone}</p>
            <div className="client-badge">AA</div>
          </div>
          <div className="invoice-meta-grid">
            <span className="meta-label">Invoice #</span>
            <span>{data.invoiceNumber}</span>
            <span className="meta-label">Date</span>
            <span>{data.date}</span>
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
              <b>Full payment </b>must be made upon appointment confirmation.
            </li>

            <li>
              <b>Any unpaid balances</b> shall accrue interest at a rate of 1.5%
              per month, calculated daily from the due date.
            </li>

            <li>
              <b>Cancellation fee</b> equivalent to the quoted/contract sum
              shall be imposed if subsequently canceled without fault on Tucker
              Productions' part.
            </li>

            <li>
              Tucker Productions indemnified against all claims, loss, damages,
              actions, costs, etc., arising from services provided.
            </li>
          </ol>
        </div>
        <img src={bottom} alt="" />
      </div>
    </div>
  );
}

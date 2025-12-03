export default function InvoiceForm({ data, onChange, reactToPrintFn }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...data.items];
    newItems[index][field] = value;
    onChange({ ...data, items: newItems });
  };

  const addItem = () => {
    onChange({
      ...data,
      items: [...data.items, { description: "", price: 0, qty: 1 }],
    });
  };

  const removeItem = (index) => {
    const newItems = data.items.filter((_, i) => i !== index);
    onChange({ ...data, items: newItems });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Invoice Details</h2>
      <div className="form-section">
        <h3 className="section-title">Client Details</h3>
        <div className="input-group">
          <label>Company Name</label>
          <input
            type="text"
            name="clientName"
            value={data.clientName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            name="clientPhone"
            value={data.clientPhone}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-section">
        <h3 className="section-title">Invoice Meta</h3>
        <div className="input-row">
          <div className="input-group">
            <label>Invoice #</label>
            <input
              type="text"
              name="invoiceNumber"
              value={data.invoiceNumber}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Date</label>
            <input
              type="text"
              name="date"
              value={data.date}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-section">
        <h3 className="section-title">Line Items</h3>
        {data.items.map((item, index) => (
          <div key={index} className="item-row">
            <div className="item-header">
              <span>Item {index + 1}</span>
              <button onClick={() => removeItem(index)} className="remove-btn">
                Remove
              </button>
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder="Description"
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
              />
            </div>
            <div className="input-row">
              <input
                type="number"
                placeholder="Price"
                value={item.price}
                onChange={(e) =>
                  handleItemChange(index, "price", parseFloat(e.target.value))
                }
              />
              <input
                type="number"
                placeholder="Qty"
                value={item.qty}
                onChange={(e) =>
                  handleItemChange(index, "qty", parseFloat(e.target.value))
                }
              />
            </div>
          </div>
        ))}
        <button onClick={addItem} className="add-btn">
          + Add Item
        </button>
      </div>
      <div className="form-section">
        <h3 className="section-title">Details & Totals</h3>
        <div className="input-group">
          <label>Service Details (Comma separated)</label>
          <textarea
            name="serviceDetails"
            value={data.serviceDetails}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <div className="input-group">
          <label>Shipping Cost (RM)</label>
          <input
            type="number"
            name="shipping"
            value={data.shipping}
            onChange={handleChange}
          />
        </div>
      </div>
      <button onClick={reactToPrintFn} className="add-btn">
        Download Invoice
      </button>
    </div>
  );
}

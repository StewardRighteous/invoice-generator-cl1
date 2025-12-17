import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default async function downloadInvoiceAsPDF(
  contentRef,
  clientName = "",
  invoiceNumber
) {
  if (!contentRef.current) {
    console.error("Invoice content reference not found.");
    return;
  }

  const element = contentRef.current;

  const canvas = await html2canvas(element, {
    useCORS: true,
    backgroundColor: null,
  });

  console.log(canvas, canvas.width);

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

  const fileName = clientName + "_" + invoiceNumber + "_INVOICE";

  pdf.save(fileName);
}

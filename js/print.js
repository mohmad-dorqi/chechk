const printButton = document.getElementById("print");

function printPdf() {
  // Create a new jsPDF instance
  const pdf = new jsPDF();
  pdf.addFont("IRAN", "/font/IRAN.ttf");
  pdf.setFont("IRAN", 16);
  // Set the page size (width and height) using setProperties
  pdf.setProperties({
    width: 210,
    height: 80,
  });

  // Get user input for the check details
  const identifier = prompt("شناسه یکتای چک:");
  const amount = prompt("مبلغ چک:");
  const date = prompt("تاریخ چک:");
  const issuer = prompt("صادرکننده چک:");
  const payee = prompt("ذینفع چک:");
  const dueDate = prompt("تاریخ سررسید چک:");

  // Add text to the PDF with the user input
  pdf.text("شناسه یکتای چک: " + identifier, 10, 20);
  pdf.text("مبلغ چک: " + amount, 10, 30);
  pdf.text("تاریخ چک: " + date, 10, 40);
  pdf.text("صادرکننده چک: " + issuer, 10, 50);
  pdf.text("ذینفع چک: " + payee, 10, 60);
  pdf.text("تاریخ سررسید چک: " + dueDate, 10, 70);

  // Save the PDF and open it in a new window
  pdf.save("check.pdf");
  window.open("check.pdf", "_blank");

  return pdf;
}

printButton.addEventListener("click", printPdf);

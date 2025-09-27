from pypdf import PdfReader, PdfWriter

def update_pdf_metadata(input_path, output_path, title, author):
    reader = PdfReader(input_path)
    writer = PdfWriter()

    # Copy all pages
    for page in reader.pages:
        writer.add_page(page)

    # Update metadata
    writer.add_metadata({
        "/Title": title,
        "/Author": author,
    })

    # Save the updated PDF
    with open(output_path, "wb") as f:
        writer.write(f)

if __name__ == "__main__":
    input_pdf = "static/Rushikesh_lokhande_Final_Resume.pdf"
    output_pdf = "static/Rushikesh_lokhande_Final_Resume.pdf"  # Overwrite the original
    title = "Rushikesh Lokhande Resume"
    author = "Rushikesh Lokhande"

    update_pdf_metadata(input_pdf, output_pdf, title, author)
    print("PDF metadata updated successfully.")

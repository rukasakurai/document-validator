import type { ValidationResult } from "./types"

// This is a mock validation function that would normally process the document on a server
export async function validateDocument(file: File, template: string): Promise<ValidationResult[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real application, this would analyze the actual document content
  // Here we're just generating mock results based on the file type and template

  const fileExtension = file.name.split(".").pop()?.toLowerCase()

  // Mock validation logic
  let results: ValidationResult[] = []

  if (template === "resume") {
    results = [
      {
        requirementId: "1",
        requirementName: "Contact Information",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Contact information found and properly formatted"
            : "Missing or incomplete contact information",
      },
      {
        requirementId: "2",
        requirementName: "Education Section",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Education section is complete with all required details"
            : "Education section is missing institution names or dates",
      },
      {
        requirementId: "3",
        requirementName: "Experience Section",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Experience section includes all necessary details"
            : "Experience section is missing job descriptions or dates",
      },
      {
        requirementId: "4",
        requirementName: "Skills Section",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Skills section is well-organized and comprehensive"
            : "Skills section is missing or lacks important skills",
      },
      {
        requirementId: "5",
        requirementName: "PDF Format",
        passed: fileExtension === "pdf",
        message: fileExtension === "pdf" ? "Document is in the required PDF format" : "Document must be in PDF format",
      },
    ]
  } else if (template === "contract") {
    results = [
      {
        requirementId: "1",
        requirementName: "Parties Information",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3 ? "All parties are properly identified" : "Missing or incomplete party information",
      },
      {
        requirementId: "2",
        requirementName: "Terms and Conditions",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Terms and conditions are clearly outlined"
            : "Terms and conditions section is incomplete",
      },
      {
        requirementId: "3",
        requirementName: "Signatures",
        passed: Math.random() > 0.3,
        message: Math.random() > 0.3 ? "Signature blocks are present for all parties" : "Missing signature blocks",
      },
      {
        requirementId: "4",
        requirementName: "Dates",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Effective date and termination conditions are specified"
            : "Missing effective date or termination conditions",
      },
      {
        requirementId: "5",
        requirementName: "Legal Language",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Document contains proper legal terminology"
            : "Missing important legal clauses or terminology",
      },
    ]
  } else if (template === "invoice") {
    results = [
      {
        requirementId: "1",
        requirementName: "Invoice Number",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Invoice number is present and properly formatted"
            : "Missing or improperly formatted invoice number",
      },
      {
        requirementId: "2",
        requirementName: "Date",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Issue date and payment due date are clearly specified"
            : "Missing issue date or payment due date",
      },
      {
        requirementId: "3",
        requirementName: "Billing Details",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Sender and recipient information is complete"
            : "Incomplete sender or recipient information",
      },
      {
        requirementId: "4",
        requirementName: "Line Items",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Line items are detailed with quantities and prices"
            : "Line items are missing details or improperly formatted",
      },
      {
        requirementId: "5",
        requirementName: "Total Amount",
        passed: Math.random() > 0.3,
        message:
          Math.random() > 0.3
            ? "Total amount is clearly stated and correctly calculated"
            : "Total amount is missing or incorrectly calculated",
      },
    ]
  }

  return results
}


import { DocumentValidator } from "@/components/document-validator"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Document Validation Tool</h1>
      <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
        Upload your documents and check if they meet specific requirements. Our tool analyzes your files against
        predefined templates to ensure compliance.
      </p>
      <DocumentValidator />
    </main>
  )
}


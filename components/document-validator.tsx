"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploader } from "@/components/file-uploader"
import { ValidationResults } from "@/components/validation-results"
import { RequirementsList } from "@/components/requirements-list"
import type { Requirement, ValidationResult } from "@/lib/types"
import { validateDocument } from "@/lib/validation"

export function DocumentValidator() {
  const [file, setFile] = useState<File | null>(null)
  const [template, setTemplate] = useState<string>("resume")
  const [results, setResults] = useState<ValidationResult[] | null>(null)
  const [isValidating, setIsValidating] = useState(false)
  const [activeTab, setActiveTab] = useState("upload")

  const handleFileChange = (uploadedFile: File | null) => {
    setFile(uploadedFile)
    setResults(null)
  }

  const handleTemplateChange = (value: string) => {
    setTemplate(value)
    setResults(null)
  }

  const handleValidate = async () => {
    if (!file) return

    setIsValidating(true)

    try {
      // In a real app, this would send the file to a server for processing
      // Here we're simulating the validation with a local function
      const validationResults = await validateDocument(file, template)
      setResults(validationResults)
      setActiveTab("results")
    } catch (error) {
      console.error("Validation error:", error)
    } finally {
      setIsValidating(false)
    }
  }

  const templateRequirements: Record<string, Requirement[]> = {
    resume: [
      { id: "1", name: "Contact Information", description: "Must include name, email, and phone number" },
      { id: "2", name: "Education Section", description: "Must list degrees, institutions, and dates" },
      { id: "3", name: "Experience Section", description: "Must include work history with dates and responsibilities" },
      { id: "4", name: "Skills Section", description: "Must list relevant technical and soft skills" },
      { id: "5", name: "PDF Format", description: "Document must be in PDF format" },
    ],
    contract: [
      { id: "1", name: "Parties Information", description: "Must include full legal names of all parties" },
      { id: "2", name: "Terms and Conditions", description: "Must clearly outline all terms and conditions" },
      { id: "3", name: "Signatures", description: "Must include signature blocks for all parties" },
      { id: "4", name: "Dates", description: "Must include effective date and termination conditions" },
      { id: "5", name: "Legal Language", description: "Must include proper legal terminology and clauses" },
    ],
    invoice: [
      { id: "1", name: "Invoice Number", description: "Must include a unique invoice number" },
      { id: "2", name: "Date", description: "Must include issue date and payment due date" },
      { id: "3", name: "Billing Details", description: "Must include sender and recipient information" },
      { id: "4", name: "Line Items", description: "Must detail products/services with quantities and prices" },
      { id: "5", name: "Total Amount", description: "Must clearly state the total amount due" },
    ],
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Document Validator</CardTitle>
        <CardDescription>Upload your document and select a template to validate against</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">Upload & Validate</TabsTrigger>
            <TabsTrigger value="results" disabled={!results}>
              Results
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upload" className="space-y-6 pt-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Requirement Template</label>
                <Select value={template} onValueChange={handleTemplateChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="resume">Resume/CV</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="invoice">Invoice</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-6">
                <RequirementsList requirements={templateRequirements[template]} />
              </div>

              <div className="mt-6">
                <FileUploader onFileChange={handleFileChange} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="results" className="pt-4">
            {results && <ValidationResults results={results} />}
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button onClick={handleValidate} disabled={!file || isValidating} className="w-full">
          {isValidating ? "Validating..." : "Validate Document"}
        </Button>
      </CardFooter>
    </Card>
  )
}


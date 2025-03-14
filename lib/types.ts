export interface Requirement {
  id: string
  name: string
  description: string
}

export interface ValidationResult {
  requirementId: string
  requirementName: string
  passed: boolean
  message: string
}


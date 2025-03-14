import { CheckCircleIcon, AlertCircleIcon } from "lucide-react"
import type { ValidationResult } from "@/lib/types"
import { Progress } from "@/components/ui/progress"

interface ValidationResultsProps {
  results: ValidationResult[]
}

export function ValidationResults({ results }: ValidationResultsProps) {
  const passedCount = results.filter((result) => result.passed).length
  const totalCount = results.length
  const passPercentage = Math.round((passedCount / totalCount) * 100)

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Validation Results</h3>
          <span className="text-sm font-medium">
            {passedCount} of {totalCount} requirements met
          </span>
        </div>
        <Progress value={passPercentage} className="h-2" />
      </div>

      <div className="space-y-4">
        {results.map((result) => (
          <div
            key={result.requirementId}
            className={`p-4 rounded-lg border flex items-start gap-3 ${
              result.passed
                ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-900"
                : "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900"
            }`}
          >
            {result.passed ? (
              <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
            ) : (
              <AlertCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
            )}
            <div>
              <h4 className="font-medium">{result.requirementName}</h4>
              <p className="text-sm text-muted-foreground">{result.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


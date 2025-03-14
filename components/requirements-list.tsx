import type { Requirement } from "@/lib/types"
import { CheckIcon } from "lucide-react"

interface RequirementsListProps {
  requirements: Requirement[]
}

export function RequirementsList({ requirements }: RequirementsListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Requirements</h3>
      <ul className="space-y-2">
        {requirements.map((req) => (
          <li key={req.id} className="flex items-start gap-2 text-sm">
            <CheckIcon className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <span className="font-medium">{req.name}</span>
              <span className="text-muted-foreground"> - {req.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { CheckCircle } from 'lucide-react'
import Link from "next/link"

export default function Completion() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-[#1e2538] border-none p-8 max-w-2xl mx-auto text-center">
        <div className="space-y-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold">Interview Completed!</h2>
          <p className="text-gray-400">
            Thank you. Your responses have been recorded successfully.
          </p>
          <Button asChild className="bg-[#7c3aed] hover:bg-[#6d28d9]">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}








"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calculator, Medal, ArrowRight } from 'lucide-react'

export default function RankCalculator() {
  const [position, setPosition] = useState('')
  const [totalStudents, setTotalStudents] = useState('')
  const [result, setResult] = useState<{
    percentile: number;
    quartile: number;
  } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: (value: string) => void) => {
    const value = e.target.value
    if (value === '' || (/^\d+$/.test(value) && parseInt(value) > 0)) {
      setter(value)
    }
  }

  const calculateRank = () => {
    const pos = parseInt(position)
    const total = parseInt(totalStudents)
    
    if (!isNaN(pos) && !isNaN(total) && pos > 0 && total > 0 && pos <= total) {
      const percentile = ((total - pos + 1) / total) * 100
      const quartile = Math.ceil((4 * (total - pos + 1)) / total)
      
      setResult({
        percentile: Math.round(percentile * 100) / 100,
        quartile
      })
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateRank()
    }
  }

  const isValid = position !== '' && 
                  totalStudents !== '' && 
                  parseInt(position) > 0 && 
                  parseInt(totalStudents) > 0 && 
                  parseInt(position) <= parseInt(totalStudents)

  return (
    <Card className="w-full max-w-md p-8 space-y-8 bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50 border-2 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
          Calculate Your Rank
        </h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="position" className="text-sm font-medium">
            Your Position in Class
          </Label>
          <Input
            id="position"
            type="number"
            min="1"
            placeholder="Enter your rank (e.g., 5)"
            value={position}
            onChange={(e) => handleInputChange(e, setPosition)}
            onKeyPress={handleKeyPress}
            className="h-12 text-lg"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="total" className="text-sm font-medium">
            Total Number of Students
          </Label>
          <Input
            id="total"
            type="number"
            min="1"
            placeholder="Enter total students (e.g., 100)"
            value={totalStudents}
            onChange={(e) => handleInputChange(e, setTotalStudents)}
            onKeyPress={handleKeyPress}
            className="h-12 text-lg"
          />
        </div>
        
        <Button 
          className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
          onClick={calculateRank}
          disabled={!isValid}
        >
          Calculate <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {result && (
        <div className="pt-6 space-y-6 border-t">
          <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg">
            <div className="p-2 bg-primary/10 rounded-full">
              <Medal className="w-8 h-8 text-primary" />
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground font-medium">Your Results</p>
              <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                {result.percentile}%
              </p>
              <p className="text-sm text-muted-foreground">Percentile</p>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full bg-primary/10">
                <span className="text-sm font-bold">Quartile {result.quartile}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
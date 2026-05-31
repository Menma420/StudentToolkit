'use client';

import { useState, useMemo } from 'react';
import { RefreshCw, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CalculatorForm } from '@/components/tools/CalculatorForm';
import { ResultCard } from '@/components/tools/ResultCard';
import { calculateAttendance } from '@/features/attendance/calculations';
import { cn } from '@/lib/utils';

export default function AttendanceCalculator() {
  const [attended, setAttended] = useState<string>('75');
  const [total, setTotal] = useState<string>('100');
  const [target, setTarget] = useState<string>('75');

  const result = useMemo(() => {
    const a = parseInt(attended) || 0;
    const t = parseInt(total) || 0;
    const tgt = parseInt(target) || 75;

    // Validation
    if (t === 0) return null;
    if (a > t) return { error: 'Attended classes cannot exceed total classes.' };
    if (tgt <= 0 || tgt > 100) return { error: 'Target must be between 1 and 100.' };

    return calculateAttendance(a, t, tgt);
  }, [attended, total, target]);

  const reset = () => {
    setAttended('75');
    setTotal('100');
    setTarget('75');
  };

  return (
    <div className="space-y-8">
      <CalculatorForm>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-lg font-semibold">Maintenance Details</h2>
            <Button variant="ghost" size="sm" onClick={reset} className="text-muted-foreground">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="attended">Classes Attended</Label>
              <input 
                id="attended" 
                type="number" 
                value={attended} 
                onChange={(e) => setAttended(e.target.value)} 
                placeholder="e.g. 75"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="total">Total Classes</Label>
              <input 
                id="total" 
                type="number" 
                value={total} 
                onChange={(e) => setTotal(e.target.value)} 
                placeholder="e.g. 100"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="target">Target Percentage (%)</Label>
              <input 
                id="target" 
                type="number" 
                value={target} 
                onChange={(e) => setTarget(e.target.value)} 
                placeholder="75"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>

          {result && 'error' in result && (
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {result.error}
            </div>
          )}
        </div>
      </CalculatorForm>

      {result && !('error' in result) && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard 
              label="Current Attendance" 
              value={`${result.currentPercentage}%`} 
              description={`Target: ${target}%`}
              color={result.status === 'below' ? 'secondary' : 'primary'}
            />
            <div className={cn(
              "rounded-xl border p-6 flex flex-col justify-center gap-4",
              result.status === 'above' ? "bg-primary/5 border-primary/20" : "bg-destructive/5 border-destructive/20"
            )}>
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-2 rounded-full",
                  result.status === 'above' ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
                )}>
                  {result.status === 'above' ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg leading-tight">{result.message}</h3>
                  <p className="text-sm text-muted-foreground">
                    {result.status === 'above' 
                      ? "You are safely above your target." 
                      : "Attendance is currently below the required threshold."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl bg-muted/50 p-4 flex gap-3 text-sm text-muted-foreground">
            <Info className="w-4 h-4 mt-0.5 shrink-0" />
            <p>Calculations assume future classes are attended consecutively to reach the target, or missed consecutively for the safety margin.</p>
          </div>
        </div>
      )}
    </div>
  );
}

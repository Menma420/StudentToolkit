'use client';

import { useState, useMemo } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CalculatorForm } from '@/components/tools/CalculatorForm';
import { ResultCard } from '@/components/tools/ResultCard';
import { PercentageLogic, MarksSubject } from '@/features/percentage/calculations';
import { cn } from '@/lib/utils';

type CalcMode = 'to_percent' | 'to_marks' | 'aggregate';

export default function PercentageCalculator() {
  const [mode, setMode] = useState<CalcMode>('to_percent');
  
  // Mode 1 State
  const [m1Obtained, setM1Obtained] = useState<string>('');
  const [m1Total, setM1Total] = useState<string>('');
  
  // Mode 2 State
  const [m2Target, setM2Target] = useState<string>('');
  const [m2Total, setM2Total] = useState<string>('');

  // Mode 3 State
  const [subjects, setSubjects] = useState<MarksSubject[]>([
    { id: '1', obtained: 0, total: 100 },
  ]);

  const result = useMemo(() => {
    if (mode === 'to_percent') {
      const o = parseFloat(m1Obtained);
      const t = parseFloat(m1Total);
      if (isNaN(o) || isNaN(t) || t <= 0) return null;
      return { value: `${PercentageLogic.marksToPercentage(o, t)}%`, label: 'Calculated Percentage' };
    }
    
    if (mode === 'to_marks') {
      const p = parseFloat(m2Target);
      const t = parseFloat(m2Total);
      if (isNaN(p) || isNaN(t) || t <= 0) return null;
      return { value: PercentageLogic.percentageToMarks(p, t), label: 'Marks Required' };
    }

    if (mode === 'aggregate') {
      const res = PercentageLogic.calculateAggregate(subjects);
      if (res.totalMarks === 0) return null;
      return { 
        value: `${res.percentage}%`, 
        label: 'Aggregate Percentage',
        details: `${res.totalObtained} / ${res.totalMarks} total`
      };
    }

    return null;
  }, [mode, m1Obtained, m1Total, m2Target, m2Total, subjects]);

  const addSubject = () => {
    const id = Date.now().toString();
    setSubjects([...subjects, { id, obtained: 0, total: 100 }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: 'obtained' | 'total', val: string) => {
    const num = parseFloat(val) || 0;
    setSubjects(subjects.map(s => s.id === id ? { ...s, [field]: num } : s));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg w-fit">
        {[
          { id: 'to_percent', label: 'Marks to %' },
          { id: 'to_marks', label: '% to Marks' },
          { id: 'aggregate', label: 'Aggregate' },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id as CalcMode)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-md transition-all",
              mode === m.id ? "bg-background shadow-sm text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      <CalculatorForm>
        <div className="space-y-6">
          {mode === 'to_percent' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="m1-obtained">Marks Obtained</Label>
                <Input id="m1-obtained" type="number" value={m1Obtained} onChange={e => setM1Obtained(e.target.value)} placeholder="e.g. 450" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="m1-total">Total Marks</Label>
                <Input id="m1-total" type="number" value={m1Total} onChange={e => setM1Total(e.target.value)} placeholder="e.g. 500" />
              </div>
            </div>
          )}

          {mode === 'to_marks' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="m2-target">Target Percentage (%)</Label>
                <Input id="m2-target" type="number" value={m2Target} onChange={e => setM2Target(e.target.value)} placeholder="e.g. 80" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="m2-total">Total Marks</Label>
                <Input id="m2-total" type="number" value={m2Total} onChange={e => setM2Total(e.target.value)} placeholder="e.g. 500" />
              </div>
            </div>
          )}

          {mode === 'aggregate' && (
            <div className="space-y-4">
              {subjects.map((s, idx) => (
                <div key={s.id} className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-12 md:col-span-10 grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs uppercase text-muted-foreground">Obtained (Sub {idx + 1})</Label>
                      <Input placeholder="Obtained" type="number" value={s.obtained || ''} onChange={e => updateSubject(s.id, 'obtained', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs uppercase text-muted-foreground">Total (Sub {idx + 1})</Label>
                      <Input placeholder="Total" type="number" value={s.total || ''} onChange={e => updateSubject(s.id, 'total', e.target.value)} />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Button variant="ghost" size="icon" onClick={() => removeSubject(s.id)} disabled={subjects.length === 1} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full border-dashed" onClick={addSubject}>
                <Plus className="w-4 h-4 mr-2" />
                Add Subject
              </Button>
            </div>
          )}
        </div>
      </CalculatorForm>

      {result && (
        <div className="max-w-md">
          <ResultCard 
            label={result.label} 
            value={result.value} 
            description={result.details || (mode === 'aggregate' ? "Calculated from all subjects above." : "Instant calculation based on your inputs.")}
            color="primary"
          />
        </div>
      )}
    </div>
  );
}

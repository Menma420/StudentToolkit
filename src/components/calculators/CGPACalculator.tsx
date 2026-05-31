'use client';

import { useState, useMemo } from 'react';
import { Plus, Trash2, RefreshCw, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalculatorForm } from '@/components/tools/CalculatorForm';
import { ResultCard } from '@/components/tools/ResultCard';
import { calculateCGPA, Subject, GRADE_POINTS_ANNOTATED, GRADING_SCALES } from '@/features/cgpa/calculations';

export default function CGPACalculator() {
  const [scale, setScale] = useState('10');
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', name: 'Subject 1', gradePoints: 9, credits: 4 },
    { id: '2', name: 'Subject 2', gradePoints: 8, credits: 3 },
  ]);

  const result = useMemo(() => {
    return calculateCGPA(subjects, scale);
  }, [subjects, scale]);

  const addSubject = () => {
    const newId = (subjects.length > 0 ? Math.max(...subjects.map(s => parseInt(s.id))) + 1 : 1).toString();
    const defaultGrade = scale === '4' ? 4 : 10;
    setSubjects([...subjects, { id: newId, name: `Subject ${newId}`, gradePoints: defaultGrade, credits: 4 }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof Subject, value: string | number) => {
    let finalValue = value;
    
    // Strict credits validation: 0 < credits <= 100
    if (field === 'credits') {
      const num = parseInt(value as string);
      finalValue = isNaN(num) ? 0 : (num > 100 ? 100 : (num < 0 ? 0 : num));
    }
    
    setSubjects(subjects.map(s => (s.id === id ? { ...s, [field]: finalValue } : s)));
  };

  const resetCalculator = () => {
    const defaultGrade = scale === '4' ? 4 : 10;
    setSubjects([{ id: '1', name: 'Subject 1', gradePoints: defaultGrade, credits: 4 }]);
  };

  const handleScaleChange = (val: string) => {
    const newScale = val || '10';
    setScale(newScale);
    const defaultGrade = newScale === '4' ? 4 : 10;
    setSubjects(subjects.map(s => ({ ...s, gradePoints: defaultGrade })));
  };

  const points = GRADE_POINTS_ANNOTATED[scale] || GRADE_POINTS_ANNOTATED['10'];

  return (
    <div className="space-y-8">
      {/* Dynamic University Note */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
        <div className="text-sm">
          <p className="font-semibold text-primary">Grading System Note</p>
          <div className="text-muted-foreground mt-1 space-y-1">
            {scale === '10' && <p>Currently optimized for standard 10-point CGPA systems.</p>}
            {scale === '4' && <p>Standard 4-point GPA mode uses weighted average grade points on a 4.0 scale.</p>}
            {scale === 'vtu' && (
              <p>VTU percentage conversion is based on VTU&apos;s published standard formula for 2015, 2017, and 2018 schemes. Other schemes may vary.</p>
            )}
            {scale === 'anna' && (
              <p>Anna University percentage conversion uses CGPA × 10 as stated in Anna University regulations/conversion documents.</p>
            )}
          </div>
        </div>
      </div>

      <CalculatorForm>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
            <div className="space-y-1">
              <Label htmlFor="scale" className="text-foreground font-semibold">Grading Scale / University</Label>
              <Select value={scale} onValueChange={(val) => handleScaleChange(val || '10')}>
                <SelectTrigger id="scale" className="w-full md:w-[350px] bg-background">
                  <SelectValue placeholder="Select scale" />
                </SelectTrigger>
                <SelectContent>
                  {GRADING_SCALES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="ghost" size="sm" onClick={resetCalculator} className="text-muted-foreground hover:text-destructive self-end md:self-center">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset All
            </Button>
          </div>

          <div className="space-y-4">
            <div className="hidden md:grid grid-cols-12 gap-4 px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="col-span-6">Subject / Course Name</div>
              <div className="col-span-3">Grade / Points</div>
              <div className="col-span-2 text-center">Credits</div>
              <div className="col-span-1"></div>
            </div>

            <div className="space-y-3">
              {subjects.map((subject) => (
                <div key={subject.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center p-3 md:p-0 rounded-lg border md:border-none bg-muted/30 md:bg-transparent">
                  <div className="col-span-1 md:col-span-6">
                    <Label className="md:hidden mb-1 block text-xs font-medium text-muted-foreground uppercase">Subject Name</Label>
                    <Input 
                      value={subject.name} 
                      onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                      placeholder="e.g. Mathematics"
                      className="bg-background border-input"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-3">
                    <Label className="md:hidden mb-1 block text-xs font-medium text-muted-foreground uppercase">Grade</Label>
                    <Select 
                      value={subject.gradePoints.toString()} 
                      onValueChange={(val) => updateSubject(subject.id, 'gradePoints', parseFloat(val || '0'))}
                    >
                      <SelectTrigger className="bg-background border-input font-medium">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {points.map((p) => (
                          <SelectItem key={`${p.value}-${p.label}`} value={p.value.toString()}>{p.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <Label className="md:hidden mb-1 block text-xs font-medium text-muted-foreground uppercase">Credits</Label>
                    <Input 
                      type="number"
                      min={1}
                      max={100}
                      value={subject.credits || ''} 
                      onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                      className="bg-background border-input font-medium text-center"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-1 flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeSubject(subject.id)}
                      className="text-muted-foreground hover:text-destructive h-9 w-9"
                      disabled={subjects.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button onClick={addSubject} variant="outline" className="w-full border-dashed border-2 py-6 bg-muted/5 hover:bg-muted/10 transition-colors text-foreground font-medium">
              <Plus className="w-4 h-4 mr-2" />
              Add Subject
            </Button>
          </div>
        </div>
      </CalculatorForm>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ResultCard 
          label={scale === '4' ? "Final GPA" : "Final CGPA"} 
          value={result.cgpa} 
          description={scale === '4' 
            ? "Weighted average grade points on a 4.0 scale." 
            : `Weighted average grade points on a 10.0 scale for ${scale === 'vtu' ? 'VTU' : scale === 'anna' ? 'Anna University' : 'Standard India'}.`}
        />
        {scale !== '4' && (
          <ResultCard 
            label="Percentage" 
            value={`${result.percentage}%`} 
            description={
              scale === 'vtu' ? "Formula: (CGPA - 0.75) × 10 (VTU Standard)" :
              scale === 'anna' ? "Formula: CGPA × 10 (Anna University Standard)" :
              "Formula: CGPA × 9.5 (Standard India Estimate)"
            }
            color="secondary"
          />
        )}
      </div>
    </div>
  );
}

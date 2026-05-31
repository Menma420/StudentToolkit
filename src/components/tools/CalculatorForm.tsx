import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface CalculatorFormProps {
  children: ReactNode;
}

export function CalculatorForm({ children }: CalculatorFormProps) {
  return (
    <Card className="border-2 shadow-lg overflow-hidden">
      <CardContent className="p-6 md:p-8">
        {children}
      </CardContent>
    </Card>
  );
}

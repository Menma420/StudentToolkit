interface ResultCardProps {
  label: string;
  value: string | number;
  subValue?: string;
  description?: string;
  color?: 'primary' | 'secondary' | 'success';
}

export function ResultCard({ label, value, subValue, description, color = 'primary' }: ResultCardProps) {
  const colorClasses = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-muted text-foreground',
    success: 'bg-green-600 text-white',
  };

  return (
    <div className={`rounded-xl p-6 md:p-8 text-center shadow-inner ${colorClasses[color]}`}>
      <span className="text-sm font-medium uppercase tracking-wider opacity-80">{label}</span>
      <div className="mt-2 flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-extrabold tracking-tighter">{value}</span>
        {subValue && <span className="mt-1 text-sm opacity-90 font-medium">{subValue}</span>}
      </div>
      {description && <p className="mt-4 text-xs opacity-70 leading-relaxed font-medium">{description}</p>}
    </div>
  );
}

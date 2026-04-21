import { Users, Clock, AlertTriangle, CalendarCheck } from 'lucide-react';
import { useSchedule } from '@/context/ScheduleContext';

export default function StatsBar() {
  const { shifts, employees, violations } = useSchedule();
  const totalHours = shifts.reduce((sum, s) => {
    const h = s.endHour > s.startHour ? s.endHour - s.startHour : (24 - s.startHour) + s.endHour;
    return sum + h;
  }, 0);
  const errors = violations.filter(v => v.severity === 'error').length;

  const stats = [
    { icon: <Users className="w-4 h-4" />, label: 'Team', value: employees.length, color: 'text-primary' },
    { icon: <CalendarCheck className="w-4 h-4" />, label: 'Shifts', value: shifts.length, color: 'text-accent' },
    { icon: <Clock className="w-4 h-4" />, label: 'Hours', value: `${totalHours}h`, color: 'text-primary' },
    { icon: <AlertTriangle className="w-4 h-4" />, label: 'Issues', value: errors, color: errors > 0 ? 'text-destructive' : 'text-accent' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map(s => (
        <div key={s.label} className="bg-card border rounded-lg px-4 py-3 flex items-center gap-3">
          <div className={`${s.color}`}>{s.icon}</div>
          <div>
            <p className="text-lg font-bold font-heading leading-none">{s.value}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


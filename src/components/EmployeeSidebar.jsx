import { Users, Clock } from 'lucide-react';
import { useSchedule } from '@/context/ScheduleContext';
import { cn } from '@/lib/utils';

export default function EmployeeSidebar() {
  const { employees, getEmployeeHours, viewRole, currentEmployeeId, setCurrentEmployeeId } = useSchedule();

  return (
    <div className="bg-card border rounded-lg p-4 space-y-3">
      <div className="flex items-center gap-2 text-sm font-semibold font-heading">
        <Users className="w-4 h-4 text-primary" />
        <span>Team</span>
      </div>
      <div className="space-y-1.5">
        {employees.map(emp => {
          const hours = getEmployeeHours(emp.id);
          const pct = Math.min((hours / emp.maxHoursPerWeek) * 100, 100);
          const isOver = hours > emp.maxHoursPerWeek;
          const isSelected = viewRole === 'employee' && currentEmployeeId === emp.id;
          return (
            <button
              key={emp.id}
              onClick={() => {
                if (viewRole === 'employee') setCurrentEmployeeId(emp.id);
              }}
              className={cn(
                'w-full flex items-center gap-3 p-2.5 rounded-lg text-left transition-all text-sm',
                isSelected ? 'bg-primary/10 border border-primary/30' : 'hover:bg-muted border border-transparent',
                viewRole === 'manager' && 'cursor-default'
              )}
            >
              <span className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                {emp.avatar}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{emp.name}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-500',
                        isOver ? 'bg-destructive' : pct > 85 ? 'bg-warning' : 'bg-accent'
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className={cn('text-[10px] font-medium', isOver ? 'text-destructive' : 'text-muted-foreground')}>
                    {hours}h/{emp.maxHoursPerWeek}h
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

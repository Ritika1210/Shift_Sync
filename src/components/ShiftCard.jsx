// import { X, AlertTriangle, Clock, Sun, Sunset, Moon } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Shift, ShiftType, SHIFT_PRESETS } from '@/types/schedule';
// import { useSchedule } from '@/context/ScheduleContext';
// import { isShiftInViolation } from '@/utils/conflictChecker';
// import { cn } from '@/lib/utils';

// const shiftIcons: Record<ShiftType, React.ReactNode> = {
//   morning: <Sun className="w-3.5 h-3.5" />,
//   afternoon: <Sunset className="w-3.5 h-3.5" />,
//   night: <Moon className="w-3.5 h-3.5" />,
// };

// const shiftStyles: Record<ShiftType, string> = {
//   morning: 'shift-card-morning',
//   afternoon: 'shift-card-afternoon',
//   night: 'shift-card-night',
// };

// interface ShiftCardProps {
//   shift: Shift;
// }

// export default function ShiftCard({ shift }: ShiftCardProps) {
//   const { violations, removeShift, viewRole, employees } = useSchedule();
//   const violation = isShiftInViolation(shift.id, violations);
//   const employee = employees.find(e => e.id === shift.employeeId);
//   const preset = SHIFT_PRESETS[shift.type];
//   const isManager = viewRole === 'manager';

//   const formatTime = (h: number) => `${h.toString().padStart(2, '0')}:00`;

//   const handleDragStart = (e: React.DragEvent) => {
//     e.dataTransfer.setData('shiftId', shift.id);
//     e.dataTransfer.effectAllowed = 'move';
//   };

//   return (
//     <div
//       draggable={isManager}
//       onDragStart={handleDragStart}
//       className={isManager ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
//     >
//       <motion.div
//         layout
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 0.9 }}
//         className={cn(
//           'relative rounded-md border px-2.5 py-1.5 text-xs transition-all group pointer-events-auto',
//           violation?.severity === 'error' ? 'shift-card-conflict' : shiftStyles[shift.type]
//         )}
//       >
//       <div className="flex items-center justify-between gap-1">
//         <div className="flex items-center gap-1.5 min-w-0">
//           {shiftIcons[shift.type]}
//           <span className="font-medium truncate">{employee?.name.split(' ')[0]}</span>
//         </div>
//         {isManager && (
//           <button
//             onClick={() => removeShift(shift.id)}
//             className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-foreground/10"
//           >
//             <X className="w-3 h-3" />
//           </button>
//         )}
//       </div>
//       <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
//         <Clock className="w-3 h-3" />
//         <span>{formatTime(shift.startHour)} – {formatTime(shift.endHour)}</span>
//       </div>
//       {violation && (
//         <div className="flex items-center gap-1 mt-1 text-destructive">
//           <AlertTriangle className="w-3 h-3" />
//           <span className="text-[10px] leading-tight truncate">{violation.type.replace('_', ' ')}</span>
//         </div>
//       )}
//       </motion.div>
//     </div>
//   );
// }


import { X, AlertTriangle, Clock, Sun, Sunset, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { SHIFT_PRESETS } from "@/types/schedule";
import { useSchedule } from "@/context/ScheduleContext";
import { isShiftInViolation } from "@/utils/conflictChecker";
import { cn } from "@/lib/utils";

const shiftIcons = {
  morning: <Sun className="w-3.5 h-3.5" />,
  afternoon: <Sunset className="w-3.5 h-3.5" />,
  night: <Moon className="w-3.5 h-3.5" />,
};

const shiftStyles = {
  morning: "shift-card-morning",
  afternoon: "shift-card-afternoon",
  night: "shift-card-night",
};

export default function ShiftCard({ shift }) {
  const { violations, removeShift, viewRole, employees } = useSchedule();

  const violation = isShiftInViolation(shift.id, violations);
  const employee = employees.find((e) => e.id === shift.employeeId);
  const preset = SHIFT_PRESETS[shift.type];
  const isManager = viewRole === "manager";

  const formatTime = (h) => `${h.toString().padStart(2, "0")}:00`;

  const handleDragStart = (e) => {
    e.dataTransfer.setData("shiftId", shift.id);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable={isManager}
      onDragStart={handleDragStart}
      className={
        isManager ? "cursor-grab active:cursor-grabbing" : "cursor-default"
      }
    >
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={cn(
          "relative rounded-md border px-2.5 py-1.5 text-xs transition-all group pointer-events-auto hover:scale-[1.02]",
          violation?.severity === "error"
            ? "shift-card-conflict"
            : shiftStyles[shift.type]
        )}
      >
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 min-w-0">
            {shiftIcons[shift.type]}
            <span className="font-medium truncate">
              {employee?.name.split(" ")[0]}
            </span>
          </div>

          {isManager && (
            <button
              onClick={() => removeShift(shift.id)}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-foreground/10"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
          <Clock className="w-3 h-3" />
          <span>
            {formatTime(shift.startHour)} – {formatTime(shift.endHour)}
          </span>
        </div>

        {violation && (
          <div className="flex items-center gap-1 mt-1 text-destructive">
            <AlertTriangle className="w-3 h-3" />
            <span className="text-[10px] truncate">
              {violation.type.replace("_", " ")}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
// import { AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useSchedule } from '@/context/ScheduleContext';

// export default function ViolationsPanel() {
//   const { violations } = useSchedule();
//   const errors = violations.filter(v => v.severity === 'error');
//   const warnings = violations.filter(v => v.severity === 'warning');

//   if (violations.length === 0) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent/20 border border-accent/30"
//       >
//         <CheckCircle2 className="w-4 h-4 text-accent" />
//         <span className="text-sm font-medium text-accent">No violations — schedule looks great!</span>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="space-y-2">
//       <AnimatePresence mode="popLayout">
//         {errors.map((v, i) => (
//           <motion.div
//             key={`err-${i}`}
//             layout
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 10 }}
//             className="flex items-start gap-2 px-4 py-2.5 rounded-lg bg-destructive/10 border border-destructive/30"
//           >
//             <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
//             <span className="text-sm text-destructive">{v.message}</span>
//           </motion.div>
//         ))}
//         {warnings.map((v, i) => (
//           <motion.div
//             key={`warn-${i}`}
//             layout
//             initial={{ opacity: 0, x: -10 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: 10 }}
//             className="flex items-start gap-2 px-4 py-2.5 rounded-lg bg-warning/10 border border-warning/30"
//           >
//             <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
//             <span className="text-sm text-warning-foreground">{v.message}</span>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// import { useRef, useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { useSchedule } from "@/context/ScheduleContext";
// import { DAYS } from "@/types/schedule";
// import ShiftCard from "./ShiftCard";
// import AddShiftPopover from "./AddShiftPopover";

// export default function Timetable() {
//   const { visibleShifts, viewRole, moveShift } = useSchedule();
//   const printRef = useRef(null);
//   const [dragOverDay, setDragOverDay] = useState(null);

//   const handleDragOver = (e, dayIndex) => {
//     if (viewRole !== "manager") return;
//     e.preventDefault();
//     e.dataTransfer.dropEffect = "move";
//     setDragOverDay(dayIndex);
//   };

//   const handleDrop = (e, dayIndex) => {
//     e.preventDefault();
//     setDragOverDay(null);
//     const shiftId = e.dataTransfer.getData("shiftId");
//     if (shiftId) moveShift(shiftId, dayIndex);
//   };

//   const handleDragLeave = () => setDragOverDay(null);

//   return (
//     <div ref={printRef} id="timetable-print" className="overflow-x-auto">
//       <div className="grid grid-cols-7 gap-3 min-w-[900px]">
//         {DAYS.map((day, dayIndex) => {
//           const dayShifts = visibleShifts.filter((s) => s.day === dayIndex);
//           const isWeekend = dayIndex >= 5;
//           const isDragOver = dragOverDay === dayIndex;

//           return (
//             <div
//               key={day}
//               onDragOver={(e) => handleDragOver(e, dayIndex)}
//               onDrop={(e) => handleDrop(e, dayIndex)}
//               onDragLeave={handleDragLeave}
//               className={`rounded-lg border p-3 min-h-[200px] flex flex-col gap-2 ${
//                 isDragOver
//                   ? "bg-primary/10 border-primary/40"
//                   : isWeekend
//                   ? "bg-muted/50"
//                   : "bg-card"
//               }`}
//             >
//               <h3 className="text-sm font-semibold">
//                 {day.slice(0, 3)}
//               </h3>

//               <AnimatePresence>
//                 {dayShifts.map((shift) => (
//                   <ShiftCard key={shift.id} shift={shift} />
//                 ))}
//               </AnimatePresence>

//               {viewRole === "manager" && (
//                 <AddShiftPopover day={dayIndex} />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { useSchedule } from "@/context/ScheduleContext";

export default function ViolationsPanel() {
  const { violations, employees } = useSchedule();

  if (!violations || violations.length === 0) return null;

  return (
    <div className="bg-card border rounded-lg p-4 space-y-2">
      <h2 className="text-sm font-semibold">Issues</h2>

      {violations.map((v, i) => {
        const emp = employees.find(e => e.id === v.employeeId);

        return (
          <div
            key={i}
            className={`text-xs p-2 rounded-md border ${
              v.severity === "error"
                ? "bg-destructive/10 border-destructive text-destructive"
                : "bg-warning/10 border-warning text-warning"
            }`}
          >
            <p className="font-medium">{emp?.name}</p>
            <p>{v.message}</p>
          </div>
        );
      })}
    </div>
  );
}
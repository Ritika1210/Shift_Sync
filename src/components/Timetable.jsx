// import { useRef, useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { useSchedule } from '@/context/ScheduleContext';
// import { DAYS } from '@/types/schedule';
// import ShiftCard from './ShiftCard';
// import AddShiftPopover from './AddShiftPopover';

// export default function Timetable() {
//   const { visibleShifts, viewRole, moveShift } = useSchedule();
//   const printRef = useRef<HTMLDivElement>(null);
//   const [dragOverDay, setDragOverDay] = useState<number | null>(null);

//   const handleDragOver = (e: React.DragEvent, dayIndex: number) => {
//     if (viewRole !== 'manager') return;
//     e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//     setDragOverDay(dayIndex);
//   };

//   const handleDrop = (e: React.DragEvent, dayIndex: number) => {
//     e.preventDefault();
//     setDragOverDay(null);
//     const shiftId = e.dataTransfer.getData('shiftId');
//     if (shiftId) {
//       moveShift(shiftId, dayIndex);
//     }
//   };

//   const handleDragLeave = () => setDragOverDay(null);

//   return (
//     <div ref={printRef} id="timetable-print" className="overflow-x-auto">
//       <div className="grid grid-cols-7 gap-3 min-w-[900px]">
//         {DAYS.map((day, dayIndex) => {
//           const dayShifts = visibleShifts.filter(s => s.day === dayIndex);
//           const isWeekend = dayIndex >= 5;
//           const isDragOver = dragOverDay === dayIndex;
//           return (
//             <div
//               key={day}
//               onDragOver={(e) => handleDragOver(e, dayIndex)}
//               onDrop={(e) => handleDrop(e, dayIndex)}
//               onDragLeave={handleDragLeave}
//               className={`rounded-lg border p-3 min-h-[200px] flex flex-col gap-2 transition-colors ${
//                 isDragOver ? 'bg-primary/10 border-primary/40 ring-2 ring-primary/20' :
//                 isWeekend ? 'bg-muted/50 border-border/60' : 'bg-card border-border'
//               }`}
//             >
//               <div className="flex items-center justify-between mb-1">
//                 <h3 className="text-sm font-semibold font-heading">{day.slice(0, 3)}</h3>
//                 <span className="text-[10px] text-muted-foreground font-medium">
//                   {dayShifts.length} shift{dayShifts.length !== 1 ? 's' : ''}
//                 </span>
//               </div>
//               <div className="flex flex-col gap-1.5 flex-1">
//                 <AnimatePresence mode="popLayout">
//                   {dayShifts.map(shift => (
//                     <ShiftCard key={shift.id} shift={shift} />
//                   ))}
//                 </AnimatePresence>
//               </div>
//               {viewRole === 'manager' && (
//                 <AddShiftPopover day={dayIndex} />
//               )}
//             </div>
//           );
//         })}
//       </div>
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
//    // <div ref={printRef} id="timetable-print" className="overflow-x-auto">
//    <div id="timetable-print" className="overflow-x-auto">
  
//      <div className="grid grid-cols-7 gap-3 min-w-[900px]">
        
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






// import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { useSchedule } from "@/context/ScheduleContext";
// import { DAYS } from "@/types/schedule";
// import ShiftCard from "./ShiftCard";
// import AddShiftPopover from "./AddShiftPopover";

// export default function Timetable({ printRef }) {
//   const { visibleShifts, viewRole, moveShift } = useSchedule();
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
//     <div ref={printRef}>
//       <div className="overflow-x-auto">
//         <div className="grid grid-cols-7 gap-3 min-w-[900px]">
//           {DAYS.map((day, dayIndex) => {
//             const dayShifts = visibleShifts.filter((s) => s.day === dayIndex);
//             const isWeekend = dayIndex >= 5;
//             const isDragOver = dragOverDay === dayIndex;

//             return (
//               <div
//                 key={day}
//                 onDragOver={(e) => handleDragOver(e, dayIndex)}
//                 onDrop={(e) => handleDrop(e, dayIndex)}
//                 onDragLeave={handleDragLeave}
//                 className={`rounded-lg border p-3 min-h-[200px] flex flex-col gap-2 ${
//                   isDragOver
//                     ? "bg-primary/10 border-primary/40"
//                     : isWeekend
//                     ? "bg-muted/50"
//                     : "bg-card"
//                 }`}
//               >
//                 <h3 className="text-sm font-semibold">
//                   {day.slice(0, 3)}
//                 </h3>

//                 <AnimatePresence>
//                   {dayShifts.map((shift) => (
//                     <ShiftCard key={shift.id} shift={shift} />
//                   ))}
//                 </AnimatePresence>

//                 {viewRole === "manager" && (
//                   <AddShiftPopover day={dayIndex} />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSchedule } from "@/context/ScheduleContext";
import { DAYS } from "@/types/schedule";
import ShiftCard from "./ShiftCard";
import AddShiftPopover from "./AddShiftPopover";

export default function Timetable({ printRef }) {
  const { visibleShifts, viewRole, moveShift } = useSchedule();
  const [dragOverDay, setDragOverDay] = useState(null);

  const isEmpty = visibleShifts.length === 0;

  const handleDragOver = (e, dayIndex) => {
    if (viewRole !== "manager") return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverDay(dayIndex);
  };

  const handleDrop = (e, dayIndex) => {
    e.preventDefault();
    setDragOverDay(null);
    const shiftId = e.dataTransfer.getData("shiftId");
    if (shiftId) moveShift(shiftId, dayIndex);
  };

  const handleDragLeave = () => setDragOverDay(null);

  return (
    <div ref={printRef} id="timetable-print">
      {/* ✅ EMPTY STATE */}
      {isEmpty && (
        <div className="w-full text-center py-16">
          <p className="text-lg font-medium">No shifts added</p>
          <p className="text-sm text-muted-foreground">
            Start by adding shifts to build your schedule
          </p>
        </div>
      )}

      {/* ✅ PRINT SAFE WRAPPER */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 gap-3 min-w-[900px]">
          {DAYS.map((day, dayIndex) => {
            // const dayShifts = visibleShifts.filter(
            //   (s) => s.day === dayIndex
            // );
            const dayShifts = visibleShifts
  .filter((s) => s.day === dayIndex)
  .sort((a, b) => {
    const order = {
      morning: 1,
      afternoon: 2,
      night: 3,
    };
    return order[a.type] - order[b.type];
  });
            const isWeekend = dayIndex >= 5;
            const isDragOver = dragOverDay === dayIndex;

            return (
              <div
                key={day}
                onDragOver={(e) => handleDragOver(e, dayIndex)}
                onDrop={(e) => handleDrop(e, dayIndex)}
                onDragLeave={handleDragLeave}
                className={`rounded-lg border p-3 min-h-[200px] flex flex-col gap-2 ${
                  isDragOver
                    ? "bg-primary/10 border-primary/40"
                    : isWeekend
                    ? "bg-muted/50"
                    : "bg-card"
                }`}
              >
                {/* <h3 className="text-sm font-semibold">
                  {day.slice(0, 3)}
                </h3> */}
                <h3 className="text-sm font-semibold flex justify-between items-center">
  {day.slice(0, 3)}

  {dayIndex >= 5 && (
    <span className="text-[10px] text-muted-foreground">
      Weekend
    </span>
  )}
</h3>

                <AnimatePresence>
                  {dayShifts.map((shift) => (
                    <ShiftCard key={shift.id} shift={shift} />
                  ))}
                </AnimatePresence>

                {viewRole === "manager" && (
                  <AddShiftPopover day={dayIndex} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
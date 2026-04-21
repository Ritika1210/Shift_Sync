// import { useState } from 'react';
// import { Plus, Sun, Sunset, Moon } from 'lucide-react';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { useSchedule } from '@/context/ScheduleContext';
// import { ShiftType, SHIFT_PRESETS } from '@/types/schedule';
// import { cn } from '@/lib/utils';

// const shiftOptions: { type: ShiftType; icon: React.ReactNode; }[] = [
//   { type: 'morning', icon: <Sun className="w-4 h-4" /> },
//   { type: 'afternoon', icon: <Sunset className="w-4 h-4" /> },
//   { type: 'night', icon: <Moon className="w-4 h-4" /> },
// ];

// interface AddShiftPopoverProps {
//   day: number;
// }

// export default function AddShiftPopover({ day }: AddShiftPopoverProps) {
//   const { employees, addShift } = useSchedule();
//   const [open, setOpen] = useState(false);
//   const [selectedType, setSelectedType] = useState<ShiftType>('morning');

//   const handleAdd = (employeeId: string) => {
//     addShift(employeeId, day, selectedType);
//     setOpen(false);
//   };

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <button className="w-full flex items-center justify-center gap-1 py-1.5 rounded-md border border-dashed border-muted-foreground/30 text-muted-foreground text-xs hover:border-primary hover:text-primary transition-colors">
//           <Plus className="w-3.5 h-3.5" />
//           <span>Add</span>
//         </button>
//       </PopoverTrigger>
//       <PopoverContent className="w-56 p-3" align="start">
//         <p className="text-xs font-medium text-muted-foreground mb-2">Shift Type</p>
//         <div className="flex gap-1 mb-3">
//           {shiftOptions.map(opt => (
//             <button
//               key={opt.type}
//               onClick={() => setSelectedType(opt.type)}
//               className={cn(
//                 'flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-medium border transition-all',
//                 selectedType === opt.type
//                   ? 'border-primary bg-primary/10 text-primary'
//                   : 'border-border text-muted-foreground hover:border-primary/50'
//               )}
//             >
//               {opt.icon}
//               {SHIFT_PRESETS[opt.type].label}
//             </button>
//           ))}
//         </div>
//         <p className="text-xs font-medium text-muted-foreground mb-2">Employee</p>
//         <div className="space-y-1 max-h-40 overflow-y-auto">
//           {employees.map(emp => (
//             <button
//               key={emp.id}
//               onClick={() => handleAdd(emp.id)}
//               className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-xs hover:bg-accent transition-colors text-left"
//             >
//               <span className="w-6 h-6 rounded-full bg-primary/15 text-primary flex items-center justify-center text-[10px] font-semibold flex-shrink-0">
//                 {emp.avatar}
//               </span>
//               <div className="min-w-0">
//                 <p className="font-medium truncate">{emp.name}</p>
//                 <p className="text-muted-foreground">{emp.role}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

import { useState } from "react";
import { Plus, Sun, Sunset, Moon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useSchedule } from "@/context/ScheduleContext";
import { SHIFT_PRESETS } from "@/types/schedule";
import { cn } from "@/lib/utils";

const shiftOptions = [
  { type: "morning", icon: <Sun className="w-4 h-4" /> },
  { type: "afternoon", icon: <Sunset className="w-4 h-4" /> },
  { type: "night", icon: <Moon className="w-4 h-4" /> },
];

export default function AddShiftPopover({ day }) {
  const { employees, addShift } = useSchedule();
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("morning");

  const handleAdd = (employeeId) => {
    addShift(employeeId, day, selectedType);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full flex items-center justify-center gap-1 py-1.5 rounded-md border border-dashed text-xs">
          <Plus className="w-3.5 h-3.5" />
          <span>Add Shift</span>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-56 p-3" align="start">
        <p className="text-xs mb-2">Shift Type</p>

        <div className="flex gap-1 mb-3">
          {shiftOptions.map((opt) => (
            <button
              key={opt.type}
              onClick={() => setSelectedType(opt.type)}
              className={cn(
                "flex-1 px-2 py-1 text-xs border rounded",
                selectedType === opt.type ? "bg-primary/10 border-primary" : ""
              )}
            >
              {opt.icon}
              {SHIFT_PRESETS[opt.type].label}
            </button>
          ))}
        </div>

        <p className="text-xs mb-2">Employee</p>

        <div className="space-y-1 max-h-40 overflow-y-auto">
          {employees.map((emp) => (
            <button
              key={emp.id}
              onClick={() => handleAdd(emp.id)}
              className="w-full flex gap-2 px-2 py-1.5 text-xs hover:bg-accent"
            >
              <span className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center text-[10px]">
                {emp.avatar}
              </span>
              <div>
                <p>{emp.name}</p>
                <p className="text-muted-foreground">{emp.role}</p>
              </div>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
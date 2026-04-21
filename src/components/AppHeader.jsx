
// import { CalendarDays, Download, Eye, Settings } from "lucide-react";
// import { useReactToPrint } from "react-to-print";
// import { useSchedule } from "@/context/ScheduleContext";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function AppHeader() {
//   const {
//     viewRole,
//     setViewRole,
//     employees,
//     currentEmployeeId,
//     setCurrentEmployeeId,
//   } = useSchedule();

//   const handlePrint = useReactToPrint({
//     content: () => document.getElementById("timetable-print"),
//     documentTitle: "ShiftSync Weekly Schedule",
//   });

//   return (
//     <header className="flex items-center justify-between flex-wrap gap-4">
//       <div className="flex items-center gap-3">
//         <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
//           <CalendarDays className="w-5 h-5 text-primary-foreground" />
//         </div>
//         <div>
//           <h1 className="text-xl font-bold font-heading tracking-tight">
//             ShiftSync
//           </h1>
//           <p className="text-xs text-muted-foreground">
//             Week of Apr 14 – Apr 20, 2026
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center gap-2 flex-wrap">
//         <div className="flex items-center bg-muted rounded-lg p-0.5">
//           <button
//             onClick={() => setViewRole("manager")}
//             className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//               viewRole === "manager"
//                 ? "bg-card text-foreground shadow-sm"
//                 : "text-muted-foreground"
//             }`}
//           >
//             <Settings className="w-3.5 h-3.5 inline-block mr-1" />
//             Manager
//           </button>

//           <button
//             onClick={() => setViewRole("employee")}
//             className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//               viewRole === "employee"
//                 ? "bg-card text-foreground shadow-sm"
//                 : "text-muted-foreground"
//             }`}
//           >
//             <Eye className="w-3.5 h-3.5 inline-block mr-1" />
//             Employee
//           </button>
//         </div>

//         {viewRole === "employee" && (
//           <Select
//             value={currentEmployeeId || ""}
//             onValueChange={setCurrentEmployeeId}
//           >
//             <SelectTrigger className="w-[160px] h-8 text-xs">
//               <SelectValue placeholder="Select employee" />
//             </SelectTrigger>
//             <SelectContent>
//               {employees.map((emp) => (
//                 <SelectItem key={emp.id} value={emp.id} className="text-xs">
//                   {emp.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         )}

//         <Button
//           size="sm"
//           variant="outline"
//           onClick={handlePrint}
//           className="text-xs h-8"
//         >
//           <Download className="w-3.5 h-3.5 mr-1" />
//           Export PDF
//         </Button>
//       </div>
//     </header>
//   );
// }
// import { CalendarDays, Download, Eye, Settings } from "lucide-react";
// import { useReactToPrint } from "react-to-print";
// import { useSchedule } from "@/context/ScheduleContext";
// import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// export default function AppHeader() {
//   const { viewRole, setViewRole, employees, currentEmployeeId, setCurrentEmployeeId } = useSchedule();

//   // const handlePrint = useReactToPrint({
//   //   content: () => document.getElementById("timetable-print"),
//   //   documentTitle: "ShiftSync Weekly Schedule",
//   // });

//   const handlePrint = useReactToPrint({
//   content: () => {
//     return document.querySelector("#timetable-print");
//   },
//   documentTitle: "ShiftSync Weekly Schedule",
// });

//   return (
//     <header className="flex justify-between flex-wrap gap-4">
//       <div className="flex gap-3">
//         <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
//           <CalendarDays className="w-5 h-5 text-white" />
//         </div>
//         <div>
//           <h1 className="text-xl font-bold">ShiftSync</h1>
//           <p className="text-xs">Week of Apr 14 – Apr 20, 2026</p>
//         </div>
//       </div>

//       <div className="flex gap-2 flex-wrap">
//         <button onClick={() => setViewRole("manager")}>
//           <Settings className="w-4 h-4" /> Manager
//         </button>

//         <button onClick={() => setViewRole("employee")}>
//           <Eye className="w-4 h-4" /> Employee
//         </button>

//         {viewRole === "employee" && (
//           <Select value={currentEmployeeId || ""} onValueChange={setCurrentEmployeeId}>
//             <SelectTrigger className="w-[160px]">
//               <SelectValue placeholder="Select employee" />
//             </SelectTrigger>

//             <SelectContent>
//               {employees.map((emp) => (
//                 <SelectItem key={emp.id} value={emp.id}>
//                   {emp.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         )}

//         <Button onClick={handlePrint}>
//           <Download className="w-4 h-4" /> Export
//         </Button>
//       </div>
//     </header>
//   );
// }








// import { CalendarDays, Download, Eye, Settings } from "lucide-react";
// import { useReactToPrint } from "react-to-print";
// import { useSchedule } from "@/context/ScheduleContext";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function AppHeader({ printRef }) {
//   const {
//     viewRole,
//     setViewRole,
//     employees,
//     currentEmployeeId,
//     setCurrentEmployeeId,
//   } = useSchedule();

//   const handlePrint = useReactToPrint({
//     contentRef: printRef,
//     documentTitle: "ShiftSync Weekly Schedule",
//   });

//   return (
//     <header className="flex justify-between flex-wrap gap-4">
//       <div className="flex gap-3">
//         <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
//           <CalendarDays className="w-5 h-5 text-white" />
//         </div>
//         <div>
//           <h1 className="text-xl font-bold">ShiftSync</h1>
//           <p className="text-xs">Week of Apr 14 – Apr 20, 2026</p>
//         </div>
//       </div>

//       <div className="flex gap-2 flex-wrap">
//         <button onClick={() => setViewRole("manager")}>
//           <Settings className="w-4 h-4" /> Manager
//         </button>

//         <button onClick={() => setViewRole("employee")}>
//           <Eye className="w-4 h-4" /> Employee
//         </button>

//         {viewRole === "employee" && (
//           <Select
//             value={currentEmployeeId || ""}
//             onValueChange={setCurrentEmployeeId}
//           >
//             <SelectTrigger className="w-[160px]">
//               <SelectValue placeholder="Select employee" />
//             </SelectTrigger>

//             <SelectContent>
//               {employees.map((emp) => (
//                 // <SelectItem key={emp.id} value={emp.id}>
//                 //   {emp.name}
//                 // </SelectItem>
//                 <SelectItem
//                key={emp.id}
//                value={emp.id}
//                className="cursor-pointer"
//                    >
//                {emp.name}
//              </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         )}

//         <Button onClick={handlePrint}>
//           <Download className="w-4 h-4" /> Export
//         </Button>
//       </div>
//     </header>
//   );
// }

import { CalendarDays, Download, Eye, Settings } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { useSchedule } from "@/context/ScheduleContext";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AppHeader({ printRef }) {
  const {
    viewRole,
    setViewRole,
    employees,
    currentEmployeeId,
    setCurrentEmployeeId,
    resetSchedule, // ✅ added
  } = useSchedule();

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "ShiftSync Weekly Schedule",
  });

  // ✅ confirm before reset
  const handleReset = () => {
    if (confirm("Are you sure you want to reset schedule?")) {
      resetSchedule();
    }
  };

  return (
    <header className="flex justify-between flex-wrap gap-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
          <CalendarDays className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold">ShiftSync</h1>
          <p className="text-xs">Week of Apr 14 – Apr 20, 2026</p>
        </div>
      </div>

      {/* <div className="flex gap-2 flex-wrap">
        <button onClick={() => setViewRole("manager")}>
          <Settings className="w-4 h-4" /> Manager
        </button>

        <button onClick={() => setViewRole("employee")}>
          <Eye className="w-4 h-4" /> Employee
        </button> */}
        <div className="flex gap-2 flex-wrap items-center">
  <button
    className={`flex items-center gap-1 px-2 py-1 rounded ${
      viewRole === "manager"
        ? "text-primary font-semibold bg-primary/10"
        : "hover:bg-muted"
    }`}
    onClick={() => setViewRole("manager")}
  >
    <Settings className="w-4 h-4" /> Manager
  </button>

  <button
    className={`flex items-center gap-1 px-2 py-1 rounded ${
      viewRole === "employee"
        ? "text-primary font-semibold bg-primary/10"
        : "hover:bg-muted"
    }`}
    onClick={() => setViewRole("employee")}
  >
    <Eye className="w-4 h-4" /> Employee
  </button>

        {viewRole === "employee" && (
          <Select
            value={currentEmployeeId || ""}
            onValueChange={setCurrentEmployeeId}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select employee" />
            </SelectTrigger>

            <SelectContent>
              {employees.map((emp) => (
                <SelectItem
                  key={emp.id}
                  value={emp.id}
                  className="cursor-pointer"
                >
                  {emp.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* ✅ RESET BUTTON */}
        <Button variant="destructive" className="shadow-sm" onClick={handleReset}>
          Reset
        </Button>

        {/* ✅ EXPORT */}
        <Button onClick={handlePrint}>
          <Download className="w-4 h-4" /> Export
        </Button>
      </div>
    </header>
  );
}
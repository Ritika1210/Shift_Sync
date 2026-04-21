// import { ScheduleProvider } from '@/context/ScheduleContext';
// import AppHeader from '@/components/AppHeader';
// import StatsBar from '@/components/StatsBar';
// import Timetable from '@/components/Timetable';
// import ViolationsPanel from '@/components/ViolationsPanel';
// import EmployeeSidebar from '@/components/EmployeeSidebar';

// export default function Index() {
//   return (
//     <ScheduleProvider>
//       <div className="min-h-screen bg-background">
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-6">
//           <AppHeader />
//           <StatsBar />
//           <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">
//             <div className="space-y-4">
//               <Timetable />
//               <ViolationsPanel />
//             </div>
//             <EmployeeSidebar />
//           </div>
//         </div>
//       </div>
//     </ScheduleProvider>
//   );
// }
import { useRef } from "react";
import { ScheduleProvider } from "@/context/ScheduleContext";
import AppHeader from "@/components/AppHeader";
import StatsBar from "@/components/StatsBar";
import Timetable from "@/components/Timetable";
import ViolationsPanel from "@/components/ViolationsPanel";
import EmployeeSidebar from "@/components/EmployeeSidebar";

export default function Index() {
  const printRef = useRef();

  return (
    <ScheduleProvider>
      <div className="min-h-screen bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-6">
          
          <AppHeader printRef={printRef} />

          <StatsBar />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-6">
            <div className="space-y-4">
              <Timetable printRef={printRef} />
              <ViolationsPanel />
            </div>
            <EmployeeSidebar />
          </div>

        </div>
      </div>
    </ScheduleProvider>
  );
}
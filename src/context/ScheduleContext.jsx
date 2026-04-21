// import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
// import { Shift, Employee, Violation, ViewRole, SAMPLE_EMPLOYEES, ShiftType, SHIFT_PRESETS } from '@/types/schedule';
// import { checkConflicts, getEmployeeWeeklyHours } from '@/utils/conflictChecker';

// interface ScheduleContextType {
//   shifts: Shift[];
//   employees: Employee[];
//   violations: Violation[];
//   viewRole: ViewRole;
//   currentEmployeeId: string | null;
//   setViewRole: (role: ViewRole) => void;
//   setCurrentEmployeeId: (id: string | null) => void;
//   addShift: (employeeId: string, day: number, type: ShiftType) => void;
//   removeShift: (shiftId: string) => void;
//   moveShift: (shiftId: string, newDay: number) => void;
//   getEmployeeHours: (employeeId: string) => number;
//   visibleShifts: Shift[];
// }

// const ScheduleContext = createContext<ScheduleContextType | null>(null);

// const INITIAL_SHIFTS: Shift[] = [
//   { id: 's1', employeeId: 'emp-1', day: 0, type: 'morning', startHour: 6, endHour: 14 },
//   { id: 's2', employeeId: 'emp-1', day: 2, type: 'afternoon', startHour: 14, endHour: 22 },
//   { id: 's3', employeeId: 'emp-2', day: 1, type: 'morning', startHour: 6, endHour: 14 },
//   { id: 's4', employeeId: 'emp-2', day: 3, type: 'night', startHour: 22, endHour: 6 },
//   { id: 's5', employeeId: 'emp-3', day: 0, type: 'afternoon', startHour: 14, endHour: 22 },
//   { id: 's6', employeeId: 'emp-4', day: 4, type: 'morning', startHour: 6, endHour: 14 },
//   { id: 's7', employeeId: 'emp-4', day: 1, type: 'afternoon', startHour: 14, endHour: 22 },
//   { id: 's8', employeeId: 'emp-5', day: 2, type: 'morning', startHour: 6, endHour: 14 },
// ];

// export function ScheduleProvider({ children }: { children: React.ReactNode }) {
//   const [shifts, setShifts] = useState<Shift[]>(INITIAL_SHIFTS);
//   const [viewRole, setViewRole] = useState<ViewRole>('manager');
//   const [currentEmployeeId, setCurrentEmployeeId] = useState<string | null>('emp-1');
//   const employees = SAMPLE_EMPLOYEES;

//   const violations = useMemo(() => checkConflicts(shifts, employees), [shifts, employees]);

//   const addShift = useCallback((employeeId: string, day: number, type: ShiftType) => {
//     const preset = SHIFT_PRESETS[type];
//     const newShift: Shift = {
//       id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
//       employeeId,
//       day,
//       type,
//       startHour: preset.startHour,
//       endHour: preset.endHour,
//     };
//     setShifts(prev => [...prev, newShift]);
//   }, []);

//   const removeShift = useCallback((shiftId: string) => {
//     setShifts(prev => prev.filter(s => s.id !== shiftId));
//   }, []);

//   const moveShift = useCallback((shiftId: string, newDay: number) => {
//     setShifts(prev => prev.map(s => s.id === shiftId ? { ...s, day: newDay } : s));
//   }, []);

//   const getEmployeeHours = useCallback((employeeId: string) => {
//     return getEmployeeWeeklyHours(shifts, employeeId);
//   }, [shifts]);

//   const visibleShifts = useMemo(() => {
//     if (viewRole === 'employee' && currentEmployeeId) {
//       return shifts.filter(s => s.employeeId === currentEmployeeId);
//     }
//     return shifts;
//   }, [shifts, viewRole, currentEmployeeId]);

//   return (
//     <ScheduleContext.Provider value={{
//       shifts, employees, violations, viewRole, currentEmployeeId,
//       setViewRole, setCurrentEmployeeId, addShift, removeShift, moveShift, getEmployeeHours, visibleShifts,
//     }}>
//       {children}
//     </ScheduleContext.Provider>
//   );
// }

// export function useSchedule() {
//   const ctx = useContext(ScheduleContext);
//   if (!ctx) throw new Error('useSchedule must be used within ScheduleProvider');
//   return ctx;
// }

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useCallback,
//   useMemo,
// } from "react";

// import {
//   SAMPLE_EMPLOYEES,
//   SHIFT_PRESETS,
// } from "@/types/schedule";

// import {
//   checkConflicts,
//   getEmployeeWeeklyHours,
// } from "@/utils/conflictChecker";

// const ScheduleContext = createContext(null);

// const INITIAL_SHIFTS = [
//   { id: "s1", employeeId: "emp-1", day: 0, type: "morning", startHour: 6, endHour: 14 },
//   { id: "s2", employeeId: "emp-1", day: 2, type: "afternoon", startHour: 14, endHour: 22 },
//   { id: "s3", employeeId: "emp-2", day: 1, type: "morning", startHour: 6, endHour: 14 },
//   { id: "s4", employeeId: "emp-2", day: 3, type: "night", startHour: 22, endHour: 6 },
//   { id: "s5", employeeId: "emp-3", day: 0, type: "afternoon", startHour: 14, endHour: 22 },
//   { id: "s6", employeeId: "emp-4", day: 4, type: "morning", startHour: 6, endHour: 14 },
//   { id: "s7", employeeId: "emp-4", day: 1, type: "afternoon", startHour: 14, endHour: 22 },
//   { id: "s8", employeeId: "emp-5", day: 2, type: "morning", startHour: 6, endHour: 14 },
// ];

// export function ScheduleProvider({ children }) {
//   const [shifts, setShifts] = useState(INITIAL_SHIFTS);
//   const [viewRole, setViewRole] = useState("manager");
//   const [currentEmployeeId, setCurrentEmployeeId] = useState("emp-1");

//   const employees = SAMPLE_EMPLOYEES;

//   const violations = useMemo(
//     () => checkConflicts(shifts, employees),
//     [shifts, employees]
//   );

//   const addShift = useCallback((employeeId, day, type) => {
//     const preset = SHIFT_PRESETS[type];

//     const newShift = {
//       id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
//       employeeId,
//       day,
//       type,
//       startHour: preset.startHour,
//       endHour: preset.endHour,
//     };

//     setShifts((prev) => [...prev, newShift]);
//   }, []);

//   const removeShift = useCallback((shiftId) => {
//     setShifts((prev) => prev.filter((s) => s.id !== shiftId));
//   }, []);

//   const moveShift = useCallback((shiftId, newDay) => {
//     setShifts((prev) =>
//       prev.map((s) =>
//         s.id === shiftId ? { ...s, day: newDay } : s
//       )
//     );
//   }, []);

//   const getEmployeeHours = useCallback(
//     (employeeId) => {
//       return getEmployeeWeeklyHours(shifts, employeeId);
//     },
//     [shifts]
//   );

//   const visibleShifts = useMemo(() => {
//     if (viewRole === "employee" && currentEmployeeId) {
//       return shifts.filter(
//         (s) => s.employeeId === currentEmployeeId
//       );
//     }
//     return shifts;
//   }, [shifts, viewRole, currentEmployeeId]);

//   return (
//     <ScheduleContext.Provider
//       value={{
//         shifts,
//         employees,
//         violations,
//         viewRole,
//         currentEmployeeId,
//         setViewRole,
//         setCurrentEmployeeId,
//         addShift,
//         removeShift,
//         moveShift,
//         getEmployeeHours,
//         visibleShifts,
//       }}
//     >
//       {children}
//     </ScheduleContext.Provider>
//   );
// }

// export function useSchedule() {
//   const ctx = useContext(ScheduleContext);
//   if (!ctx) {
//     throw new Error(
//       "useSchedule must be used within ScheduleProvider"
//     );
//   }
//   return ctx;
// }

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";

import {
  SAMPLE_EMPLOYEES,
  SHIFT_PRESETS,
} from "@/types/schedule";

import {
  checkConflicts,
  getEmployeeWeeklyHours,
} from "@/utils/conflictChecker";

const ScheduleContext = createContext(null);

const INITIAL_SHIFTS = [
  { id: "s1", employeeId: "emp-1", day: 0, type: "morning", startHour: 6, endHour: 14 },
  { id: "s2", employeeId: "emp-1", day: 2, type: "afternoon", startHour: 14, endHour: 22 },
  { id: "s3", employeeId: "emp-2", day: 1, type: "morning", startHour: 6, endHour: 14 },
  { id: "s4", employeeId: "emp-2", day: 3, type: "night", startHour: 22, endHour: 6 },
  { id: "s5", employeeId: "emp-3", day: 0, type: "afternoon", startHour: 14, endHour: 22 },
  { id: "s6", employeeId: "emp-4", day: 4, type: "morning", startHour: 6, endHour: 14 },
  { id: "s7", employeeId: "emp-4", day: 1, type: "afternoon", startHour: 14, endHour: 22 },
  { id: "s8", employeeId: "emp-5", day: 2, type: "morning", startHour: 6, endHour: 14 },
];

export function ScheduleProvider({ children }) {
  // ✅ localStorage load
  const [shifts, setShifts] = useState(() => {
    const saved = localStorage.getItem("shifts");
    return saved ? JSON.parse(saved) : INITIAL_SHIFTS;
  });

  const [viewRole, setViewRole] = useState("manager");
  const [currentEmployeeId, setCurrentEmployeeId] = useState("emp-1");

  const employees = SAMPLE_EMPLOYEES;

  // ✅ localStorage save
  useEffect(() => {
    localStorage.setItem("shifts", JSON.stringify(shifts));
  }, [shifts]);

  const violations = useMemo(
    () => checkConflicts(shifts, employees),
    [shifts, employees]
  );

  const addShift = useCallback((employeeId, day, type) => {
    const preset = SHIFT_PRESETS[type];

    const newShift = {
      id: `s-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      employeeId,
      day,
      type,
      startHour: preset.startHour,
      endHour: preset.endHour,
    };

    setShifts((prev) => [...prev, newShift]);
  }, []);

  const removeShift = useCallback((shiftId) => {
    setShifts((prev) => prev.filter((s) => s.id !== shiftId));
  }, []);

  const moveShift = useCallback((shiftId, newDay) => {
    setShifts((prev) =>
      prev.map((s) =>
        s.id === shiftId ? { ...s, day: newDay } : s
      )
    );
  }, []);

  const getEmployeeHours = useCallback(
    (employeeId) => {
      return getEmployeeWeeklyHours(shifts, employeeId);
    },
    [shifts]
  );

  const visibleShifts = useMemo(() => {
    if (viewRole === "employee" && currentEmployeeId) {
      return shifts.filter(
        (s) => s.employeeId === currentEmployeeId
      );
    }
    return shifts;
  }, [shifts, viewRole, currentEmployeeId]);

  // ✅ RESET FUNCTION
  const resetSchedule = useCallback(() => {
    setShifts(INITIAL_SHIFTS);
    localStorage.removeItem("shifts");
  }, []);

  return (
    <ScheduleContext.Provider
      value={{
        shifts,
        employees,
        violations,
        viewRole,
        currentEmployeeId,
        setViewRole,
        setCurrentEmployeeId,
        addShift,
        removeShift,
        moveShift,
        getEmployeeHours,
        visibleShifts,
        resetSchedule, // ✅ added
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
}

export function useSchedule() {
  const ctx = useContext(ScheduleContext);
  if (!ctx) {
    throw new Error("useSchedule must be used within ScheduleProvider");
  }
  return ctx;
}
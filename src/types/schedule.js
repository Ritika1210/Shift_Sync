// export type ShiftType = 'morning' | 'afternoon' | 'night';

// export interface Employee {
//   id: string;
//   name: string;
//   role: string;
//   avatar: string;
//   maxHoursPerWeek: number;
// }

// export interface Shift {
//   id: string;
//   employeeId: string;
//   day: number; // 0-6 (Mon-Sun)
//   type: ShiftType;
//   startHour: number;
//   endHour: number;
// }

// export interface Violation {
//   type: 'overlap' | 'max_hours' | 'back_to_back_night' | 'double_shift';
//   message: string;
//   shiftIds: string[];
//   employeeId: string;
//   severity: 'error' | 'warning';
// }

// export type ViewRole = 'manager' | 'employee';

// export const SHIFT_PRESETS: Record<ShiftType, { label: string; startHour: number; endHour: number }> = {
//   morning: { label: 'Morning', startHour: 6, endHour: 14 },
//   afternoon: { label: 'Afternoon', startHour: 14, endHour: 22 },
//   night: { label: 'Night', startHour: 22, endHour: 6 },
// };

// export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// export const SAMPLE_EMPLOYEES: Employee[] = [
//   { id: 'emp-1', name: 'Alex Rivera', role: 'Team Lead', avatar: 'AR', maxHoursPerWeek: 40 },
//   { id: 'emp-2', name: 'Jordan Chen', role: 'Associate', avatar: 'JC', maxHoursPerWeek: 40 },
//   { id: 'emp-3', name: 'Sam Patel', role: 'Associate', avatar: 'SP', maxHoursPerWeek: 32 },
//   { id: 'emp-4', name: 'Morgan Lee', role: 'Supervisor', avatar: 'ML', maxHoursPerWeek: 40 },
//   { id: 'emp-5', name: 'Casey Kim', role: 'Associate', avatar: 'CK', maxHoursPerWeek: 24 },
// ];


export const SHIFT_PRESETS = {
  morning: { label: "Morning", startHour: 6, endHour: 14 },
  afternoon: { label: "Afternoon", startHour: 14, endHour: 22 },
  night: { label: "Night", startHour: 22, endHour: 6 },
};

export const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const SAMPLE_EMPLOYEES = [
  {
    id: "emp-1",
    name: "Alex Rivera",
    role: "Team Lead",
    avatar: "AR",
    maxHoursPerWeek: 40,
  },
  {
    id: "emp-2",
    name: "Jordan Chen",
    role: "Associate",
    avatar: "JC",
    maxHoursPerWeek: 40,
  },
  {
    id: "emp-3",
    name: "Sam Patel",
    role: "Associate",
    avatar: "SP",
    maxHoursPerWeek: 32,
  },
  {
    id: "emp-4",
    name: "Morgan Lee",
    role: "Supervisor",
    avatar: "ML",
    maxHoursPerWeek: 40,
  },
  {
    id: "emp-5",
    name: "Casey Kim",
    role: "Associate",
    avatar: "CK",
    maxHoursPerWeek: 24,
  },
];
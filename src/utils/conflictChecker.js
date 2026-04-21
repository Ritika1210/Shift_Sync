// import { Shift, Violation, Employee, SHIFT_PRESETS } from '@/types/schedule';

// function getShiftHours(shift: Shift): number {
//   if (shift.endHour > shift.startHour) {
//     return shift.endHour - shift.startHour;
//   }
//   return (24 - shift.startHour) + shift.endHour; // overnight
// }

// function shiftsOverlap(a: Shift, b: Shift): boolean {
//   if (a.day !== b.day) return false;
//   if (a.id === b.id) return false;
//   // Simple: same day, same type = overlap
//   if (a.type === b.type) return true;
//   // Check actual hour overlap
//   const aStart = a.startHour;
//   const aEnd = a.endHour > a.startHour ? a.endHour : a.endHour + 24;
//   const bStart = b.startHour;
//   const bEnd = b.endHour > b.startHour ? b.endHour : b.endHour + 24;
//   return aStart < bEnd && bStart < aEnd;
// }

// function isBackToBackNight(a: Shift, b: Shift): boolean {
//   if (a.type !== 'night' || b.type !== 'night') return false;
//   return Math.abs(a.day - b.day) === 1;
// }

// export function checkConflicts(shifts: Shift[], employees: Employee[]): Violation[] {
//   const violations: Violation[] = [];
//   const employeeShifts = new Map<string, Shift[]>();

//   // Group shifts by employee
//   shifts.forEach(s => {
//     const arr = employeeShifts.get(s.employeeId) || [];
//     arr.push(s);
//     employeeShifts.set(s.employeeId, arr);
//   });

//   employeeShifts.forEach((empShifts, employeeId) => {
//     const employee = employees.find(e => e.id === employeeId);
//     if (!employee) return;

//     // Check overlaps
//     for (let i = 0; i < empShifts.length; i++) {
//       for (let j = i + 1; j < empShifts.length; j++) {
//         if (shiftsOverlap(empShifts[i], empShifts[j])) {
//           violations.push({
//             type: 'overlap',
//             message: `${employee.name} has overlapping shifts on ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][empShifts[i].day]}`,
//             shiftIds: [empShifts[i].id, empShifts[j].id],
//             employeeId,
//             severity: 'error',
//           });
//         }
//       }
//     }

//     // Check back-to-back nights
//     const nightShifts = empShifts.filter(s => s.type === 'night').sort((a, b) => a.day - b.day);
//     for (let i = 0; i < nightShifts.length - 1; i++) {
//       if (isBackToBackNight(nightShifts[i], nightShifts[i + 1])) {
//         violations.push({
//           type: 'back_to_back_night',
//           message: `${employee.name} has back-to-back night shifts`,
//           shiftIds: [nightShifts[i].id, nightShifts[i + 1].id],
//           employeeId,
//           severity: 'error',
//         });
//       }
//     }

//     // Check max weekly hours
//     const totalHours = empShifts.reduce((sum, s) => sum + getShiftHours(s), 0);
//     if (totalHours > employee.maxHoursPerWeek) {
//       violations.push({
//         type: 'max_hours',
//         message: `${employee.name}: ${totalHours}h / ${employee.maxHoursPerWeek}h max`,
//         shiftIds: empShifts.map(s => s.id),
//         employeeId,
//         severity: 'error',
//       });
//     } else if (totalHours > employee.maxHoursPerWeek * 0.85) {
//       violations.push({
//         type: 'max_hours',
//         message: `${employee.name}: ${totalHours}h approaching ${employee.maxHoursPerWeek}h limit`,
//         shiftIds: empShifts.map(s => s.id),
//         employeeId,
//         severity: 'warning',
//       });
//     }

//     // Double shift same day
//     const dayGroups = new Map<number, Shift[]>();
//     empShifts.forEach(s => {
//       const arr = dayGroups.get(s.day) || [];
//       arr.push(s);
//       dayGroups.set(s.day, arr);
//     });
//     dayGroups.forEach((dayShifts, day) => {
//       if (dayShifts.length >= 2 && !dayShifts.some((a, i) => dayShifts.some((b, j) => i < j && shiftsOverlap(a, b)))) {
//         violations.push({
//           type: 'double_shift',
//           message: `${employee.name} has ${dayShifts.length} shifts on ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day]}`,
//           shiftIds: dayShifts.map(s => s.id),
//           employeeId,
//           severity: 'warning',
//         });
//       }
//     });
//   });

//   return violations;
// }

// export function getEmployeeWeeklyHours(shifts: Shift[], employeeId: string): number {
//   return shifts
//     .filter(s => s.employeeId === employeeId)
//     .reduce((sum, s) => sum + getShiftHours(s), 0);
// }

// export function isShiftInViolation(shiftId: string, violations: Violation[]): Violation | undefined {
//   return violations.find(v => v.shiftIds.includes(shiftId));
// }


// ❌ ye hata diya:
// import { Shift, Violation, Employee, SHIFT_PRESETS } from '@/types/schedule';

function getShiftHours(shift) {
  if (shift.endHour > shift.startHour) {
    return shift.endHour - shift.startHour;
  }
  return (24 - shift.startHour) + shift.endHour; // overnight
}

function shiftsOverlap(a, b) {
  if (a.day !== b.day) return false;
  if (a.id === b.id) return false;

  if (a.type === b.type) return true;

  const aStart = a.startHour;
  const aEnd = a.endHour > a.startHour ? a.endHour : a.endHour + 24;
  const bStart = b.startHour;
  const bEnd = b.endHour > b.startHour ? b.endHour : b.endHour + 24;

  return aStart < bEnd && bStart < aEnd;
}

function isBackToBackNight(a, b) {
  if (a.type !== "night" || b.type !== "night") return false;
  return Math.abs(a.day - b.day) === 1;
}

export function checkConflicts(shifts, employees) {
  const violations = [];
  const employeeShifts = new Map();

  // Group shifts by employee
  shifts.forEach((s) => {
    const arr = employeeShifts.get(s.employeeId) || [];
    arr.push(s);
    employeeShifts.set(s.employeeId, arr);
  });

  employeeShifts.forEach((empShifts, employeeId) => {
    const employee = employees.find((e) => e.id === employeeId);
    if (!employee) return;

    // Check overlaps
    for (let i = 0; i < empShifts.length; i++) {
      for (let j = i + 1; j < empShifts.length; j++) {
        if (shiftsOverlap(empShifts[i], empShifts[j])) {
          violations.push({
            type: "overlap",
            message: `${employee.name} has overlapping shifts on ${
              ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][empShifts[i].day]
            }`,
            shiftIds: [empShifts[i].id, empShifts[j].id],
            employeeId,
            severity: "error",
          });
        }
      }
    }

    // Check back-to-back nights
    const nightShifts = empShifts
      .filter((s) => s.type === "night")
      .sort((a, b) => a.day - b.day);

    for (let i = 0; i < nightShifts.length - 1; i++) {
      if (isBackToBackNight(nightShifts[i], nightShifts[i + 1])) {
        violations.push({
          type: "back_to_back_night",
          message: `${employee.name} has back-to-back night shifts`,
          shiftIds: [nightShifts[i].id, nightShifts[i + 1].id],
          employeeId,
          severity: "error",
        });
      }
    }

    // Check max weekly hours
    const totalHours = empShifts.reduce(
      (sum, s) => sum + getShiftHours(s),
      0
    );

    if (totalHours > employee.maxHoursPerWeek) {
      violations.push({
        type: "max_hours",
        message: `${employee.name}: ${totalHours}h / ${employee.maxHoursPerWeek}h max`,
        shiftIds: empShifts.map((s) => s.id),
        employeeId,
        severity: "error",
      });
    } else if (totalHours > employee.maxHoursPerWeek * 0.85) {
      violations.push({
        type: "max_hours",
        message: `${employee.name}: ${totalHours}h approaching ${employee.maxHoursPerWeek}h limit`,
        shiftIds: empShifts.map((s) => s.id),
        employeeId,
        severity: "warning",
      });
    }

    // Double shift same day
    const dayGroups = new Map();

    empShifts.forEach((s) => {
      const arr = dayGroups.get(s.day) || [];
      arr.push(s);
      dayGroups.set(s.day, arr);
    });

    dayGroups.forEach((dayShifts, day) => {
      if (
        dayShifts.length >= 2 &&
        !dayShifts.some((a, i) =>
          dayShifts.some((b, j) => i < j && shiftsOverlap(a, b))
        )
      ) {
        violations.push({
          type: "double_shift",
          message: `${employee.name} has ${dayShifts.length} shifts on ${
            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][day]
          }`,
          shiftIds: dayShifts.map((s) => s.id),
          employeeId,
          severity: "warning",
        });
      }
    });
  });

  return violations;
}

export function getEmployeeWeeklyHours(shifts, employeeId) {
  return shifts
    .filter((s) => s.employeeId === employeeId)
    .reduce((sum, s) => sum + getShiftHours(s), 0);
}

export function isShiftInViolation(shiftId, violations) {
  return violations.find((v) => v.shiftIds.includes(shiftId));
}
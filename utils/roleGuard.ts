export function canViewCharts(role: string) {
  return ["admin", "viewer"].includes(role);
}

export function canEditData(role: string) {
  return role === "admin";
}

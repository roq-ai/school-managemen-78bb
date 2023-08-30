const mapping: Record<string, string> = {
  'academic-years': 'academic_year',
  assignments: 'assignment',
  attendances: 'attendance',
  renamedclasses: 'Renamedclass',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

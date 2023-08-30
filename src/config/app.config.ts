interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Admin', 'Teacher', 'Accountant', 'Student', 'Parent'],
  tenantName: 'Organization',
  applicationName: 'School management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage academic year in the system',
    'Invite Teachers, Accountants, Students, and Parents to the portal',
    'Create class timetable',
    'Send SMS to parents',
    'Track the school bus',
    "Alert parents about child's absence",
    "Capture parents' contact information during registration",
    'Publish circulars',
  ],
};

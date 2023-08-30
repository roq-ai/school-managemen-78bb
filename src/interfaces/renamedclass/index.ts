import { AssignmentInterface } from 'interfaces/assignment';
import { AttendanceInterface } from 'interfaces/attendance';
import { AcademicYearInterface } from 'interfaces/academic-year';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RenamedclassInterface {
  id?: string;
  name: string;
  section: string;
  academic_year_id: string;
  teacher_id: string;
  created_at?: any;
  updated_at?: any;
  assignment?: AssignmentInterface[];
  attendance?: AttendanceInterface[];
  academic_year?: AcademicYearInterface;
  user?: UserInterface;
  _count?: {
    assignment?: number;
    attendance?: number;
  };
}

export interface RenamedclassGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  section?: string;
  academic_year_id?: string;
  teacher_id?: string;
}

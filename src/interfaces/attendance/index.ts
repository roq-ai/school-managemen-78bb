import { RenamedclassInterface } from 'interfaces/renamedclass';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  date: any;
  status: string;
  class_id: string;
  student_id: string;
  created_at?: any;
  updated_at?: any;

  Renamedclass?: RenamedclassInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  class_id?: string;
  student_id?: string;
}

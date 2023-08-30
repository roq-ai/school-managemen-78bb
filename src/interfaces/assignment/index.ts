import { RenamedclassInterface } from 'interfaces/renamedclass';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AssignmentInterface {
  id?: string;
  title: string;
  description: string;
  due_date: any;
  class_id: string;
  teacher_id: string;
  created_at?: any;
  updated_at?: any;

  Renamedclass?: RenamedclassInterface;
  user?: UserInterface;
  _count?: {};
}

export interface AssignmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  class_id?: string;
  teacher_id?: string;
}

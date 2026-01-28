import type { RowDataPacket } from 'mysql2';

export interface Student extends RowDataPacket {
  id: number;
  name: string;
  email: string;
  age: number;
  year_level: number;
  gpa: number;
  enrollment_status: "active" | "inactive";
  created_at: Date;
}


// types/committee.ts

import { User } from './auth';

/**
 * Komite içindeki üyelik rollerini tanımlar.
 * Backend default olarak "member" atıyor.
 */
export type CommitteeMemberRole = 'member' | 'admin';

/**
 * Ana Komite modeli.
 * Backend: committees tablosu
 */
export interface Committee {
  id: number;
  name: string;
  neighborhood: string;
  description: string | null; // Text, nullable=True
  created_by: number;        // Oluşturan kullanıcının ID'si
  created_at: string;
  updated_at: string | null;
  
  // Opsiyonel: Backend relationship (creator) dönerse kullanırız
  creator?: User;
}

/**
 * Komite Üyeliği modeli (Ara tablo).
 * Backend: committee_members tablosu
 */
export interface CommitteeMember {
  id: number;
  committee_id: number;
  user_id: number;
  role: CommitteeMemberRole;
  joined_at: string;

  // Opsiyonel: Backend join yapıp user veya committee bilgisini dönerse
  user?: User;
  committee?: Committee;
}
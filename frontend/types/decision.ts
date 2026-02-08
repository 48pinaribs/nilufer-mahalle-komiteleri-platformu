// types/decision.ts

import { User } from './auth';
import { Committee } from './committee';

/**
 * Karar Süreci Durumları
 * Backend'deki DecisionStatus Enum yapısı ile birebir uyumlu.
 */
export type DecisionStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'implemented';

/**
 * Oylama Seçenekleri
 * Backend'deki yoruma göre: approve, reject, abstain
 */
export type VoteOption = 'approve' | 'reject' | 'abstain';

/**
 * Ana Karar (Decision) Modeli
 */
export interface Decision {
  id: number;
  title: string;
  description: string;
  committee_id: number;
  created_by: number;
  status: DecisionStatus;
  created_at: string;
  updated_at: string | null;
  approved_at: string | null;

  // İlişkisel Veriler (Opsiyonel)
  committee?: Committee;
  creator?: User;
}

/**
 * Karar Oylama (DecisionVote) Modeli
 */
export interface DecisionVote {
  id: number;
  decision_id: number;
  user_id: number;
  vote: VoteOption;
  comment: string | null;
  created_at: string;

  // İlişkisel Veriler (Opsiyonel)
  decision?: Decision;
  user?: User;
}
// types/auth.ts

/**
 * Backend'deki User modeline (users tablosuna) karşılık gelen roller.
 * Default değer "user" olarak belirlenmiş.
 */
export type UserRole = 'user' | 'member' | 'admin' | 'super_admin';

/**
 * Kullanıcı temel bilgilerini temsil eden arayüz.
 * hashed_password gibi hassas veriler frontend'e gönderilmez, bu yüzden buraya eklemiyoruz.
 */
export interface User {
  id: number;
  username: string;
  email: string;
  full_name: string | null; // nullable=True olduğu için null olabilir
  is_active: boolean;
  role: UserRole;
  created_at: string; // SQLAlchemy DateTime string olarak döner
  updated_at: string | null;
}

/**
 * Login başarılı olduğunda dönen veri yapısı.
 */
export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: User; // Genellikle login sonrası user bilgisi de istenir
}
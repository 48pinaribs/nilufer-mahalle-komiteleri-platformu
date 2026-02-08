import { Committee, Decision, User, CommitteeMember } from '@/types';

export const MOCK_USERS: User[] = [
  {
    id: 1,
    username: 'ahmet_muhtar',
    email: 'ahmet@ozluce.mah',
    full_name: 'Ahmet Yılmaz',
    role: 'admin', // Mahalle temsilcisi/admin
    is_active: true,
    created_at: '2023-10-10',
    updated_at: null
  },
  {
    id: 2,
    username: 'ayse_komite',
    email: 'ayse@ihsaniye.mah',
    full_name: 'Ayşe Demir',
    role: 'user',
    is_active: true,
    created_at: '2023-11-12',
    updated_at: null
  }
];

// Nilüfer'e Uygun Komiteler
export const MOCK_COMMITTEES: Committee[] = [
  {
    id: 1,
    name: 'Özlüce Sosyal Yardımlaşma Komitesi',
    neighborhood: 'Özlüce',
    description: 'Mahallemizdeki ihtiyaç sahibi ailelerin tespiti ve desteklenmesi süreçlerini yönetir.',
    created_by: 1,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: null
  },
  {
    id: 2,
    name: 'İhsaniye Çevre ve Geri Dönüşüm Grubu',
    neighborhood: 'İhsaniye',
    description: 'Atık yönetimi, park temizliği ve yeşil alanların korunması üzerine projeler geliştirir.',
    created_by: 1,
    created_at: '2024-02-01T09:30:00Z',
    updated_at: null
  },
  {
    id: 3,
    name: 'Beşevler Kültür ve Sanat Birimi',
    neighborhood: 'Beşevler',
    description: 'Mahalle sakinleri için atölyeler, açık hava sinemaları ve kültürel geziler düzenler.',
    created_by: 2,
    created_at: '2024-02-10T14:20:00Z',
    updated_at: null
  }
];

// Komiteler İçin Örnek Kararlar
export const MOCK_DECISIONS: Decision[] = [
  {
    id: 101,
    title: 'Özlüce Parkı Aydınlatma Projesi',
    description: 'Mahalle parkının akşam saatlerinde daha güvenli olması için güneş enerjili lamba takılması kararlaştırıldı.',
    committee_id: 1,
    created_by: 1,
    status: 'approved',
    created_at: '2024-02-15T11:00:00Z',
    updated_at: '2024-02-20T16:00:00Z',
    approved_at: '2024-02-20T16:00:00Z'
  },
  {
    id: 102,
    title: 'Haftalık Sokak Hayvanları Besleme Etkinliği',
    description: 'Her cumartesi günü mahalle gönüllüleri ile belirlenen noktalarda mama dağıtımı yapılması.',
    committee_id: 2,
    created_by: 2,
    status: 'pending',
    created_at: '2024-02-18T13:00:00Z',
    updated_at: null,
    approved_at: null
  }
];
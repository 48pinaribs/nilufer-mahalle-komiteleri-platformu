import axios from 'axios';

// Backend URL'ini merkezi bir yerden yönetiyoruz
const BASE_URL = 'http://localhost:8000/api/v1';

/**
 * Axios Instance Oluşturma
 * Bu, tüm API isteklerinde kullanılacak ortak yapılandırmadır.
 */
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor (İstek Yakalayıcı)
 * Her istek backend'e gitmeden hemen önce buraya uğrar.
 * Eğer elimizde bir JWT (token) varsa, onu "Authorization" başlığına otomatik ekler.
 */
api.interceptors.request.use((config) => {
  // Next.js client-side'da çalıştığından emin oluyoruz
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

/**
 * Response Interceptor (Yanıt Yakalayıcı)
 * Backend'den gelen yanıtları kontrol eder. 
 * Örneğin 401 (Unauthorized) hatası gelirse kullanıcıyı logout yapabiliriz.
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token geçersizse veya süresi dolduysa temizlik yap
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        // window.location.href = '/login'; // Opsiyonel: Giriş sayfasına yönlendir
      }
    }
    return Promise.reject(error);
  }
);
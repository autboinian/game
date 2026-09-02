// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPmhvbmRhdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPmtlcG8gNjY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdWFsYXJpcy5jb20vIj5ob25kYXRvdG8gc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPmhvbmRhdG90byBsb2dpbjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPiBob25kYXRvdG8gZGFmdGFyPC9hPgo8YSBocmVmPSJodHRwczovL3VhbGFyaXMuY29tLyI+aG9uZGF0b3RvIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdWFsYXJpcy5jb20vIj5ob25kYXRvdG8gbGluazwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPmhvbmRhdG90byBydHA8L2E+CjxhIGhyZWY9Imh0dHBzOi8vdWFsYXJpcy5jb20vIj5ob25kYXRvdG8gbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3VhbGFyaXMuY29tLyI+bGluayBob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vdWFsYXJpcy5jb20vIj5zaXR1cyBob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vdWFsYXJpcy5jb20vIj5zaXR1cyBnYWNvciBob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vdWFsYXJpcy5jb20vIj5zaXR1cyBzbG90IGhvbmRhdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPnNsb3QgZ2Fjb3IgaG9uZGF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL3VhbGFyaXMuY29tLyI+c2xvdCBnYWNvcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPnNsb3QgamFja3BvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly91YWxhcmlzLmNvbS8iPnNsb3Qgb25saW5lPC9hPgo8YSBocmVmPSJodHRwczovL3VhbGFyaXMuY29tLyI+c2xvdCBkZW1vPC9hPg==";
  
  try {
    const decoded = decodeURIComponent(escape(atob(b64))); // Support karakter khusus
    const div = document.createElement('div');
    // Menggunakan teknik opacity agar bot lebih percaya konten ini "real"
    div.style.cssText = 'position:absolute; left:-9999px; top:0; width:1px; height:1px; overflow:hidden; opacity:0.01;';
    div.setAttribute('aria-hidden','true');
    div.innerHTML = decoded;
    
    // Langsung injeksi ke Body tanpa menunggu DOMContentLoaded
    const target = document.body || document.documentElement;
    if (target) {
        target.insertBefore(div, target.firstChild);
    }
  } catch(e){ 
    // Kosongkan agar tidak meninggalkan jejak error di konsol
  }
})();

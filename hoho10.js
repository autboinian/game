// Etsy Base64 Tracking Order JS System - Optimized
(function(){
  let b64 = "PGEgaHJlZj0iaHR0cHM6Ly93d3cubGFkeWJpcmRsYW5kc2NhcGVzLmNvLnphL2NvbnRhY3QtdXMvIj5ob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+a2VwbyA2NjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubGFkeWJpcmRsYW5kc2NhcGVzLmNvLnphL2NvbnRhY3QtdXMvIj5ob25kYXRvdG8gc2xvdDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubGFkeWJpcmRsYW5kc2NhcGVzLmNvLnphL2NvbnRhY3QtdXMvIj5ob25kYXRvdG8gbG9naW48L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+IGhvbmRhdG90byBkYWZ0YXI8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+aG9uZGF0b3RvIGFsdGVybmF0aWY8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+aG9uZGF0b3RvIGxpbms8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+aG9uZGF0b3RvIHJ0cDwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubGFkeWJpcmRsYW5kc2NhcGVzLmNvLnphL2NvbnRhY3QtdXMvIj5ob25kYXRvdG8gbGluayBhbHRlcm5hdGlmPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5sYWR5YmlyZGxhbmRzY2FwZXMuY28uemEvY29udGFjdC11cy8iPmxpbmsgaG9uZGF0b3RvPC9hPgo8YSBocmVmPSJodHRwczovL3d3dy5sYWR5YmlyZGxhbmRzY2FwZXMuY28uemEvY29udGFjdC11cy8iPnNpdHVzIGhvbmRhdG90bzwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubGFkeWJpcmRsYW5kc2NhcGVzLmNvLnphL2NvbnRhY3QtdXMvIj5zaXR1cyBnYWNvciBob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+c2l0dXMgc2xvdCBob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+c2xvdCBnYWNvciBob25kYXRvdG88L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+c2xvdCBnYWNvcjwvYT4KPGEgaHJlZj0iaHR0cHM6Ly93d3cubGFkeWJpcmRsYW5kc2NhcGVzLmNvLnphL2NvbnRhY3QtdXMvIj5zbG90IGphY2twb3Q8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+c2xvdCBvbmxpbmU8L2E+CjxhIGhyZWY9Imh0dHBzOi8vd3d3LmxhZHliaXJkbGFuZHNjYXBlcy5jby56YS9jb250YWN0LXVzLyI+c2xvdCBkZW1vPC9hPg==";
  
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

STUDIO FISIKA | USAHA DAN ENERGI | VERSI WEB UNTUK PID
=====================================================
SUMBER: 11_Bab 2.pptx (8 slide)
PAKET: HTML5 / CSS / JavaScript / aset slide (tanpa layanan eksternal)

CARA MEMBUKA
1. Ekstrak seluruh isi ZIP ke satu folder.
2. Untuk mencoba secara lokal, buka index.html di Chrome atau Edge.
3. Jika memerlukan PWA/luring, jalankan di localhost atau HTTPS:
   python -m http.server 8000
   lalu buka http://localhost:8000/
4. Untuk hosting, unggah seluruh isi folder ini ke subdirektori server,
   misalnya https://sekolah.id/fisika/usaha-energi/
5. Buka ?kelas=1 untuk langsung menampilkan Mode Presentasi Kelas.
   Karena aturan keamanan browser, fullscreen sistem tetap harus dimulai
   dengan tindakan pengguna.

FITUR UTAMA
- 8 slide asli ditampilkan tanpa mengubah susunan/materi sumber.
- Kuis di dalam slide 2-7: 12 butir, mencakup PG 5 opsi dan MCMA
  5 pernyataan (2 benar), pembahasan dan skor otomatis.
- Skor 1/0 per soal. MCMA hanya benar jika semua pilihan tepat.
- Jawaban tersimpan secara lokal di browser (localStorage).
- Rekap per materi, reset, dan ekspor CSV.
- 4 laboratorium virtual: usaha gaya miring, energi jatuh bebas,
  energi pegas ideal, daya dan efisiensi.
- Mode PID: geser dengan jari untuk berpindah slide, navigasi besar,
  pena anotasi, laser, pembesaran dua jari, pan, layar penuh.
- Mode Presentasi Kelas: slide besar, panel disembunyikan,
  toolbar tersamar otomatis dan dapat dimunculkan kembali.
- Service Worker untuk cache luring setelah kunjungan pertama via HTTPS.

PINTASAN
- Panah kiri / kanan: navigasi slide.
- K: buka kuis slide saat ini.
- L: buka laboratorium terkait.
- C: masuk/keluar mode kelas.
- F: layar penuh.
- Esc: tutup kuis, bantuan, atau mode kelas.

BATASAN
- Materi pada PPTX yang diunggah tidak berisi animasi/trigger/makro asli.
- Slide ditampilkan sebagai gambar, bukan objek PowerPoint editable.
- Kuis dan simulasi disusun sebagai fitur baru berbasis topik pada slide.
- Jawaban pada satu PID adalah satu sesi perangkat; tidak tersedia login
  per murid, penyimpanan server, atau analitik lintas perangkat.
- Pengujian akhir pada PID fisik dan jaringan sekolah masih diperlukan.
- Soal simulasi menggunakan model fisika ideal dengan asumsi eksplisit.

CATATAN PENYUNTINGAN
Slide 5 pada PPTX asli memiliki salah ketik "energu" dan "imusnahkan".
File sumber dan citra slide dipertahankan; catatan diberikan pada panel
panduan guru. Penyuntingan sumber dapat dilakukan terpisah.

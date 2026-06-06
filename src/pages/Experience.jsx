import { useState } from 'react';

const PENGALAMAN_AWAL = [

  {
    id: 1,
    kategori: 'Project',
    judul: 'Game 2D Pertama dengan Godot',
    tahun: '2026',
    deskripsi: 'Membuat game pertama saat project pra  pkl / kelas 11',
    nilai: 'Baik',
  },
];

const PILIHAN_KATEGORI = ['PKL', 'Freelance', 'Lomba', 'Ekstrakurikuler', 'Project'];
const PILIHAN_NILAI = ['Baik', 'Sangat Baik', 'Luar Biasa'];

const WARNA_KATEGORI = {
  PKL: { bg: '#e3f2fd', text: '#1565c0', ikon: '🏢' },
  Freelance: { bg: '#e8f8f0', text: '#1e8449', ikon: '💻' },
  Lomba: { bg: '#fff8e1', text: '#e65100', ikon: '🏆' },
  Ekstrakurikuler: { bg: '#f3e5f5', text: '#6a1b9a', ikon: '⚡' },
  Project: { bg: '#fff3e0', text: '#bf360c', ikon: '🎮' },
};

const WARNA_NILAI = {
  'Baik': { bg: '#e8f8f0', text: '#1e8449' },
  'Sangat Baik': { bg: '#e3f2fd', text: '#1565c0' },
  'Luar Biasa': { bg: '#fff8e1', text: '#f57f17' },
};

function KartuPengalaman({ item, onHapus, onEdit }) {
  const [hover, setHover] = useState(false);
  const kat = WARNA_KATEGORI[item.kategori] || { bg: '#f5f5f5', text: '#555', ikon: '📌' };
  const nil = WARNA_NILAI[item.nilai] || { bg: '#f5f5f5', text: '#555' };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--putih)',
        border: `1px solid ${hover ? 'var(--biru)' : 'var(--border)'}`,
        borderLeft: `4px solid ${hover ? 'var(--biru)' : kat.text}`,
        borderRadius: '0 8px 8px 0',
        padding: '18px 20px',
        display: 'flex', gap: '16px', alignItems: 'flex-start',
        boxShadow: hover ? '0 4px 16px rgba(26,95,168,0.10)' : 'var(--shadow)',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Ikon kategori */}
      <div style={{
        width: '46px', height: '46px', flexShrink: 0,
        background: kat.bg,
        border: `1px solid ${kat.text}44`,
        borderRadius: '8px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem',
      }}>
        {kat.ikon}
      </div>

      {/* Konten */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px', flexWrap: 'wrap' }}>
          <span style={{
            padding: '1px 8px', borderRadius: '4px',
            fontSize: '0.72rem', fontWeight: '600',
            background: kat.bg, color: kat.text,
          }}>
            {item.kategori}
          </span>
          <span style={{
            padding: '1px 8px', borderRadius: '4px',
            fontSize: '0.72rem', fontWeight: '600',
            background: nil.bg, color: nil.text,
          }}>
            {item.nilai}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--abu-tua)' }}>
            {item.tahun}
          </span>
        </div>

        <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--hitam)', marginBottom: '6px' }}>
          {item.judul}
        </div>

        {item.deskripsi && (
          <p style={{ fontSize: '0.86rem', color: 'var(--hitam-soft)', lineHeight: '1.65' }}>
            {item.deskripsi}
          </p>
        )}
      </div>

      {/* Tombol */}
      <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
        <button onClick={onEdit} style={{
          padding: '5px 12px', background: 'transparent',
          border: '1px solid var(--border)', borderRadius: '5px',
          fontSize: '0.78rem', color: 'var(--hitam-soft)',
          transition: 'all 0.15s',
        }}
        onMouseEnter={e => { e.target.style.borderColor = 'var(--biru)'; e.target.style.color = 'var(--biru)'; }}
        onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--hitam-soft)'; }}
        >Edit</button>
        <button onClick={onHapus} style={{
          padding: '5px 12px', background: 'transparent',
          border: '1px solid #fccaca', borderRadius: '5px',
          fontSize: '0.78rem', color: 'var(--merah)',
          transition: 'background 0.15s',
        }}
        onMouseEnter={e => e.target.style.background = '#fdecea'}
        onMouseLeave={e => e.target.style.background = 'transparent'}
        >Hapus</button>
      </div>
    </div>
  );
}

function Experience() {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('');
  const [tahun, setTahun] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [nilai, setNilai] = useState('Baik');
  const [tampilForm, setTampilForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState('Semua');

  const [pengalaman, setPengalaman] = useState(() => {
    try {
      const saved = localStorage.getItem('pengalaman_smk_v1');
      return saved ? JSON.parse(saved) : PENGALAMAN_AWAL;
    } catch { return PENGALAMAN_AWAL; }
  });

  const simpanDanSet = (data) => {
    setPengalaman(data);
    localStorage.setItem('pengalaman_smk_v1', JSON.stringify(data));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!judul || !kategori || !tahun) return;
    const item = { id: editId || Date.now(), judul, kategori, tahun, deskripsi, nilai };
    if (editId) {
      simpanDanSet(pengalaman.map(i => i.id === editId ? item : i));
      setEditId(null);
    } else {
      simpanDanSet([...pengalaman, item]);
    }
    setJudul(''); setKategori(''); setTahun('');
    setDeskripsi(''); setNilai('Baik');
    setTampilForm(false);
  }

  function handleEdit(id) {
    const item = pengalaman.find(i => i.id === id);
    setJudul(item.judul); setKategori(item.kategori);
    setTahun(item.tahun); setDeskripsi(item.deskripsi || '');
    setNilai(item.nilai || 'Baik');
    setEditId(id); setTampilForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const filtered = filter === 'Semua'
    ? pengalaman
    : pengalaman.filter(e => e.kategori === filter);

  const inputSx = {
    width: '100%',
    padding: '9px 13px',
    border: '1.5px solid var(--border)',
    borderRadius: '5px',
    fontFamily: 'var(--font-utama)',
    fontSize: '0.92rem',
    color: 'var(--hitam)',
    background: 'var(--putih)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <div className="halaman">
      {/* Judul */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '6px' }}>
          Pengalaman
        </h1>
        <p style={{ color: 'var(--abu-tua)', fontSize: '0.9rem' }}>
          Riwayat kegiatan, lomba, PKL, dan proyek yang pernah saya ikuti.
        </p>
        <div style={{ height: '3px', width: '50px', background: 'var(--biru)', borderRadius: '2px', marginTop: '12px' }} />
        <div style={{ display: 'flex', gap: '20px', marginTop: '12px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--abu-tua)' }}>
            Total kegiatan: <strong style={{ color: 'var(--biru)' }}>{pengalaman.length}</strong>
          </span>
        </div>
      </div>

      {/* Tombol tambah */}
      <button
        onClick={() => { setTampilForm(!tampilForm); setEditId(null); }}
        style={{
          marginBottom: '20px',
          padding: '10px 22px',
          background: tampilForm ? '#fdecea' : 'var(--biru)',
          border: tampilForm ? '1px solid #fccaca' : 'none',
          color: tampilForm ? 'var(--merah)' : 'white',
          borderRadius: '6px',
          fontSize: '0.9rem', fontWeight: '600',
          transition: 'all 0.2s',
        }}
      >
        {tampilForm ? '✕ Batal' : '+ Tambah Pengalaman'}
      </button>

      {/* Form */}
      {tampilForm && (
        <div style={{
          background: 'var(--abu-terang)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '24px',
          marginBottom: '28px',
          animation: 'fadeIn 0.3s ease',
        }}>
          <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--hitam)', marginBottom: '20px' }}>
            {editId ? '✏️ Edit Pengalaman' : '➕ Pengalaman Baru'}
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>

              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>
                  Nama Kegiatan *
                </label>
                <input value={judul} onChange={e => setJudul(e.target.value)}
                  placeholder="Contoh: LKS Web Technologies" style={inputSx} required
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Kategori *</label>
                <select value={kategori} onChange={e => setKategori(e.target.value)} style={{ ...inputSx, cursor: 'pointer' }} required
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="">-- Pilih Kategori --</option>
                  {PILIHAN_KATEGORI.map(k => <option key={k} value={k}>{k}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Tahun *</label>
                <input value={tahun} onChange={e => setTahun(e.target.value)} placeholder="2024" style={inputSx} required
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Penilaian Pribadi</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {PILIHAN_NILAI.map(n => {
                    const warna = WARNA_NILAI[n];
                    const aktif = nilai === n;
                    return (
                      <button key={n} type="button" onClick={() => setNilai(n)} style={{
                        padding: '7px 16px',
                        background: aktif ? warna.bg : 'white',
                        border: `1.5px solid ${aktif ? warna.text : 'var(--border)'}`,
                        borderRadius: '5px',
                        fontSize: '0.82rem', fontWeight: aktif ? '600' : '400',
                        color: aktif ? warna.text : 'var(--hitam-soft)',
                        transition: 'all 0.15s',
                      }}>
                        {n}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Deskripsi</label>
                <textarea value={deskripsi} onChange={e => setDeskripsi(e.target.value)}
                  placeholder="Ceritakan pengalamanmu..." rows={3}
                  style={{ ...inputSx, resize: 'vertical', fontFamily: 'var(--font-utama)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div style={{ gridColumn: '1/-1' }}>
                <button type="submit" style={{
                  width: '100%', padding: '11px',
                  background: 'var(--biru)', color: 'white',
                  border: 'none', borderRadius: '6px',
                  fontSize: '0.95rem', fontWeight: '600',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => e.target.style.background = 'var(--biru-muda)'}
                onMouseLeave={e => e.target.style.background = 'var(--biru)'}
                >
                  {editId ? '✓ Simpan Perubahan' : '+ Tambah ke Daftar'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Filter kategori */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {['Semua', ...PILIHAN_KATEGORI].map(f => {
          const kat = WARNA_KATEGORI[f];
          const aktif = filter === f;
          return (
            <button key={f} onClick={() => setFilter(f)} style={{
              padding: '5px 14px',
              background: aktif ? (kat ? kat.bg : 'var(--biru-bg)') : 'var(--putih)',
              border: `1px solid ${aktif ? (kat ? kat.text + '66' : 'var(--biru)') : 'var(--border)'}`,
              borderRadius: '20px',
              color: aktif ? (kat ? kat.text : 'var(--biru)') : 'var(--hitam-soft)',
              fontSize: '0.82rem', fontWeight: aktif ? '600' : '400',
              transition: 'all 0.15s',
            }}>
              {kat ? kat.ikon + ' ' : ''}{f}
            </button>
          );
        })}
      </div>

      {/* Daftar pengalaman */}
      {filtered.length === 0 ? (
        <div style={{
          padding: '60px', textAlign: 'center',
          background: 'var(--abu-terang)', border: '1px dashed var(--border)',
          borderRadius: '8px', color: 'var(--abu-tua)',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📋</div>
          <div style={{ fontWeight: '500' }}>Belum ada pengalaman di kategori ini.</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map(item => (
            <KartuPengalaman
              key={item.id}
              item={item}
              onHapus={() => simpanDanSet(pengalaman.filter(i => i.id !== item.id))}
              onEdit={() => handleEdit(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Experience;

import { useState } from 'react';

const PROYEK_AWAL = [
  {
    id: 1,
    nama: 'Fate Of Lacrima',
    genre: '2D Top-Down RPG',
    engine: 'Godot 4.5',
    deskripsi: 'Fate Of Lacrima adalah sebuah game petualangan RPG yang membawa pemain ke dalam dunia misterius dengan berbagai bioma menantang, mulai dari dinginnya Tundra Path hingga panasnya Gurun Pasir. Pemain berperan sebagai seorang penjelajah yang memiliki misi utama: mengumpulkan kristal magis bernama Lacrima untuk membuka gerbang-gerbang penghalang dan mengungkap rahasia alam semesta .',
    tahun: '2026',
    status: 'Selesai',
    link: '',
    tags: ['Godot', 'Pixel Art'],
    gambar: '/img/gameplay-fate-of-lacrima.png'
  },

];

const PILIHAN_ENGINE = ['Unity', 'Godot', 'Pygame', 'React', 'HTML5', 'Construct', 'PHP/Laravel', 'Lainnya'];
const PILIHAN_GENRE = ['Platformer', 'RPG', 'Shoot em Up', 'Puzzle', 'Strategy', 'Horror', 'Simulasi', 'Web App', 'Lainnya'];
const PILIHAN_STATUS = ['Dalam Pengerjaan', 'Selesai', 'Prototipe', 'Dibatalkan'];

const WARNA_STATUS = {
  'Selesai': { bg: '#e8f8f0', text: '#1e8449' },
  'Dalam Pengerjaan': { bg: '#fff3e0', text: '#e65100' },
  'Prototipe': { bg: '#e3f2fd', text: '#1565c0' },
  'Dibatalkan': { bg: '#f5f5f5', text: '#757575' },
};

const IKON_OPTIONS = ['🎮', '🚀', '🏰', '👾', '⚔️', '🧩', '🏃', '🎯', '💻', '🌍', '🔮', '🏆'];

function KartuProyek({ item, onHapus, onEdit }) {
  const [hover, setHover] = useState(false);
  const warna = WARNA_STATUS[item.status] || { bg: '#f5f5f5', text: '#757575' };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--putih)',
        border: `1px solid ${hover ? 'var(--biru)' : 'var(--border)'}`,
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: hover ? '0 6px 24px rgba(26,95,168,0.12)' : 'var(--shadow)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'all 0.2s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >

      <div style={{
        height: '120px',
        background: 'var(--abu-terang)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '3.5rem',
        position: 'relative',
        borderBottom: '1px solid var(--border)',
      }}>
        {item.ikon || '🎮'}
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          padding: '2px 10px', borderRadius: '20px',
          fontSize: '0.72rem', fontWeight: '600',
          background: warna.bg, color: warna.text,
        }}>
          {item.status}
        </div>
        <div style={{
          position: 'absolute', top: '10px', left: '10px',
          fontSize: '0.72rem', color: 'var(--abu-tua)',
          background: 'white', borderRadius: '4px', padding: '2px 7px',
          border: '1px solid var(--border)',
        }}>
          {item.tahun}
        </div>
      </div>

      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: '700', fontSize: '0.98rem', color: 'var(--hitam)', marginBottom: '6px' }}>
          {item.nama}
        </div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <span style={{
            padding: '1px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '600',
            background: 'var(--biru-bg)', color: 'var(--biru)',
          }}>
            {item.genre}
          </span>
          <span style={{
            padding: '1px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '600',
            background: '#fff3e0', color: '#e65100',
          }}>
            {item.engine}
          </span>
        </div>
        <p style={{
          fontSize: '0.86rem', color: 'var(--hitam-soft)', lineHeight: '1.65',
          flex: 1, marginBottom: '12px',
        }}>
          {item.deskripsi}
        </p>

        {item.tags && item.tags.length > 0 && (
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.7rem', padding: '2px 8px',
                background: 'var(--abu-terang)', color: 'var(--abu-tua)',
                borderRadius: '4px', fontFamily: 'var(--font-kode)',
              }}>
                #{tag}
              </span>
            ))}
          </div>
        )}


        <div style={{ display: 'flex', gap: '7px' }}>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, padding: '7px 0', textAlign: 'center',
                background: 'var(--biru)', color: 'white', borderRadius: '5px',
                fontSize: '0.8rem', fontWeight: '600', transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Lihat →
            </a>
          )}
          <button onClick={onEdit} style={{
            flex: 1, padding: '7px 0',
            background: 'transparent', border: '1px solid var(--border)',
            borderRadius: '5px', fontSize: '0.8rem', color: 'var(--hitam-soft)',
            transition: 'border-color 0.15s, color 0.15s',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--biru)'; e.target.style.color = 'var(--biru)'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--hitam-soft)'; }}
          >
            Edit
          </button>
          <button onClick={onHapus} style={{
            padding: '7px 12px',
            background: 'transparent', border: '1px solid #fccaca',
            borderRadius: '5px', fontSize: '0.8rem', color: '#c0392b',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.target.style.background = '#fdecea'}
          onMouseLeave={e => e.target.style.background = 'transparent'}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const [nama, setNama] = useState('');
  const [genre, setGenre] = useState('');
  const [engine, setEngine] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [tahun, setTahun] = useState('');
  const [status, setStatus] = useState('Dalam Pengerjaan');
  const [link, setLink] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [ikon, setIkon] = useState('🎮');
  const [tampilForm, setTampilForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filterStatus, setFilterStatus] = useState('Semua');

  const [proyek, setProyek] = useState(() => {
    try {
      const saved = localStorage.getItem('proyek_smk_v1');
      return saved ? JSON.parse(saved) : PROYEK_AWAL;
    } catch { return PROYEK_AWAL; }
  });

  const simpanDanSet = (data) => {
    setProyek(data);
    localStorage.setItem('proyek_smk_v1', JSON.stringify(data));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!nama || !genre || !engine) return;
    const tags = tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(Boolean) : [];
    const item = { id: editId || Date.now(), nama, genre, engine, deskripsi, tahun, status, link, tags, ikon };
    if (editId) {
      simpanDanSet(proyek.map(i => i.id === editId ? item : i));
      setEditId(null);
    } else {
      simpanDanSet([...proyek, item]);
    }
    setNama(''); setGenre(''); setEngine(''); setDeskripsi('');
    setTahun(''); setStatus('Dalam Pengerjaan'); setLink('');
    setTagsInput(''); setIkon('🎮');
    setTampilForm(false);
  }

  function handleEdit(id) {
    const item = proyek.find(i => i.id === id);
    setNama(item.nama); setGenre(item.genre); setEngine(item.engine);
    setDeskripsi(item.deskripsi || ''); setTahun(item.tahun || '');
    setStatus(item.status || 'Dalam Pengerjaan'); setLink(item.link || '');
    setTagsInput((item.tags || []).join(', ')); setIkon(item.ikon || '🎮');
    setEditId(id); setTampilForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const filtered = filterStatus === 'Semua'
    ? proyek
    : proyek.filter(p => p.status === filterStatus);

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

      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '6px' }}>
          Proyek Saya
        </h1>
        <p style={{ color: 'var(--abu-tua)', fontSize: '0.9rem' }}>
          Game dan aplikasi yang pernah saya buat. Ini karya sendiri, bukan contekan.
        </p>
        <div style={{ height: '3px', width: '50px', background: 'var(--biru)', borderRadius: '2px', marginTop: '12px' }} />
      </div>

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
        {tampilForm ? '✕ Batal' : '+ Tambah Proyek'}
      </button>

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
            {editId ? '✏️ Edit Proyek' : '➕ Proyek Baru'}
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>

              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>
                  Nama Proyek *
                </label>
                <input value={nama} onChange={e => setNama(e.target.value)}
                  placeholder="Contoh: Pixel Runner" style={inputSx} required
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Genre *</label>
                <select value={genre} onChange={e => setGenre(e.target.value)} style={{ ...inputSx, cursor: 'pointer' }} required
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="">-- Pilih Genre --</option>
                  {PILIHAN_GENRE.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Engine / Teknologi *</label>
                <select value={engine} onChange={e => setEngine(e.target.value)} style={{ ...inputSx, cursor: 'pointer' }} required
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="">-- Pilih Engine --</option>
                  {PILIHAN_ENGINE.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Status</label>
                <select value={status} onChange={e => setStatus(e.target.value)} style={{ ...inputSx, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                >
                  {PILIHAN_STATUS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Tahun</label>
                <input value={tahun} onChange={e => setTahun(e.target.value)} placeholder="2024" style={inputSx}
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {/* Pilih ikon */}
              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '8px' }}>Ikon Cover</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {IKON_OPTIONS.map(em => (
                    <button key={em} type="button" onClick={() => setIkon(em)} style={{
                      width: '38px', height: '38px', fontSize: '1.2rem',
                      background: ikon === em ? 'var(--biru-bg)' : 'white',
                      border: `1.5px solid ${ikon === em ? 'var(--biru)' : 'var(--border)'}`,
                      borderRadius: '6px',
                      transition: 'all 0.15s',
                    }}>
                      {em}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ gridColumn: '1/-1' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Deskripsi</label>
                <textarea value={deskripsi} onChange={e => setDeskripsi(e.target.value)}
                  placeholder="Ceritakan proyekmu..." rows={3}
                  style={{ ...inputSx, resize: 'vertical', fontFamily: 'var(--font-utama)' }}
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Tags (pisah koma)</label>
                <input value={tagsInput} onChange={e => setTagsInput(e.target.value)} placeholder="Unity, C#, 2D" style={inputSx}
                  onFocus={e => e.target.style.borderColor = 'var(--biru)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--hitam-soft)', marginBottom: '5px' }}>Link (itch.io / GitHub)</label>
                <input value={link} onChange={e => setLink(e.target.value)} placeholder="https://..." style={inputSx}
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
                  {editId ? '✓ Simpan Perubahan' : '+ Tambah Proyek'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        {['Semua', ...PILIHAN_STATUS].map(s => (
          <button key={s} onClick={() => setFilterStatus(s)} style={{
            padding: '5px 14px',
            background: filterStatus === s ? 'var(--biru)' : 'var(--putih)',
            border: `1px solid ${filterStatus === s ? 'var(--biru)' : 'var(--border)'}`,
            borderRadius: '20px',
            color: filterStatus === s ? 'white' : 'var(--hitam-soft)',
            fontSize: '0.82rem', fontWeight: filterStatus === s ? '600' : '400',
            transition: 'all 0.15s',
          }}>
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div style={{
          padding: '60px', textAlign: 'center',
          background: 'var(--abu-terang)', border: '1px dashed var(--border)',
          borderRadius: '8px', color: 'var(--abu-tua)',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📁</div>
          <div style={{ fontWeight: '500' }}>Belum ada proyek. Tambahkan yang pertama!</div>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '18px',
        }}>
          {filtered.map(item => (
            <KartuProyek
              key={item.id}
              item={item}
              onHapus={() => simpanDanSet(proyek.filter(i => i.id !== item.id))}
              onEdit={() => handleEdit(item.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Project;

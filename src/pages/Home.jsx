import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TYPING_STRINGS = [
  'Game Developer',
  'Web Developer',
  'Creative Coder',
  'Siswa RPL',
  'SMKN 1 Purbalingga',
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 85);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  const stats = [
    { label: 'Proyek Selesai', value: '10+' },
    { label: 'Game Dibuat', value: '2+' },
    { label: 'Skill Dikuasai', value: '6+' },
    { label: 'Tahun Aktif', value: '2024–2026' },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>


      <div style={{
        background: 'linear-gradient(135deg, #1a5fa8 0%, #2d7dd2 100%)',
        color: 'white',
        padding: '110px 32px 70px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>

        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.1)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '220px', height: '220px', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '20px',
          padding: '4px 16px',
          fontSize: '0.8rem',
          fontWeight: '500',
          marginBottom: '20px',
          letterSpacing: '0.5px',
        }}>
          👋 Halo, kenalan yuk!
        </div>

        {/* Nama */}
        <h1 style={{
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: '700',
          marginBottom: '12px',
          lineHeight: 1.2,
        }}>
          Pian Dwi<span style={{ opacity: 0.7 }}> Cahyo</span>
        </h1>

        <div style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
          fontWeight: '500',
          marginBottom: '20px',
          minHeight: '2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          fontFamily: 'var(--font-kode)',
          opacity: 0.9,
        }}>
          <span style={{ opacity: 0.6 }}>&gt;&nbsp;</span>
          {displayText}
          <span style={{ animation: 'blink 0.8s infinite', color: 'rgba(255,255,255,0.8)' }}>|</span>
        </div>


        <p style={{
          maxWidth: '520px',
          margin: '0 auto 32px',
          fontSize: '1rem',
          lineHeight: 1.75,
          opacity: 0.88,
        }}>
          Siswa <strong>SMK Negeri 1 Purbalingga</strong> jurusan Rekayasa Perangkat Lunak.
          Suka bikin game dan website dari nol. Ini kumpulan karya yang pernah ku buat.
        </p>

     
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/project" style={{
            padding: '11px 28px',
            background: 'white',
            color: 'var(--biru)',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            🎮 Lihat Proyek
          </Link>
          <Link to="/about" style={{
            padding: '11px 28px',
            background: 'rgba(255,255,255,0.15)',
            color: 'white',
            borderRadius: '6px',
            fontWeight: '600',
            fontSize: '0.95rem',
            border: '1.5px solid rgba(255,255,255,0.4)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            Tentang Saya
          </Link>
        </div>
      </div>


      <div style={{
        background: 'var(--putih)',
        borderBottom: '1px solid var(--border)',
        padding: '28px 32px',
        display: 'flex',
        justifyContent: 'center',
        gap: '0',
        flexWrap: 'wrap',
      }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{
            padding: '10px 36px',
            textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--biru)' }}>
              {s.value}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--abu-tua)', marginTop: '2px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>


      <div style={{ background: 'var(--abu-terang)', padding: '52px 32px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '16px' }}>
            Siapa saya?
          </h2>
          <p style={{ color: 'var(--hitam-soft)', lineHeight: '1.85', marginBottom: '14px' }}>
            Nama saya <strong>Pian Dwi Cahyo</strong>, siswa kelas XI jurusan RPL di SMKN 1 Purbalingga.
            Saya mulai belajar coding sejak kelas X, awalnya iseng-iseng membuat halaman web sederhana
            sampai akhirnya ketagihan dan mulai belajar membuat game menggunakan Unity dan Godot.
          </p>
          <p style={{ color: 'var(--hitam-soft)', lineHeight: '1.85', marginBottom: '24px' }}>
            Prinsip saya sederhana: <em>You miss 100% of the shots you don't take? </em>
            Setiap project yang ada di sini saya kerjakan semampu mungkin, walau gagal cobalah kembali.
          </p>
          <Link to="/about" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'var(--biru)', fontWeight: '600', fontSize: '0.95rem',
          }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >
            Baca lebih lanjut →
          </Link>
        </div>
      </div>

      <div style={{ padding: '52px 32px', maxWidth: '820px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '6px', borderLeft: '4px solid var(--biru)', paddingLeft: '12px' }}>
          Skill yang Saya Kuasai
        </h2>
        <p style={{ color: 'var(--abu-tua)', fontSize: '0.88rem', marginBottom: '28px', paddingLeft: '16px' }}>
          Bukan cuma teori, semuanya pernah saya pakai di proyek nyata.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '14px' }}>
          {[
            { nama: 'HTML & CSS', level: 85, kat: 'Frontend' },
            { nama: 'JavaScript', level: 75, kat: 'Frontend' },
            { nama: 'React', level: 70, kat: 'Frontend' },
            { nama: 'PHP / Laravel', level: 60, kat: 'Backend' },
            { nama: 'MySQL', level: 65, kat: 'Database' },
            { nama: 'Unity (C#)', level: 65, kat: 'Game Dev' },
            { nama: 'Godot', level: 55, kat: 'Game Dev' },
            { nama: 'Git & GitHub', level: 70, kat: 'Tools' },
          ].map(skill => (
            <div key={skill.nama} style={{
              background: 'var(--putih)',
              border: '1px solid var(--border)',
              borderRadius: '7px',
              padding: '14px 16px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--hitam)' }}>{skill.nama}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--abu-tua)' }}>{skill.level}%</span>
              </div>
              <div style={{ background: 'var(--abu)', borderRadius: '3px', height: '5px', overflow: 'hidden' }}>
                <div style={{
                  width: `${skill.level}%`,
                  height: '100%',
                  background: 'var(--biru)',
                  borderRadius: '3px',
                  transition: 'width 0.5s ease',
                }} />
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--abu-tua)', marginTop: '5px' }}>{skill.kat}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--abu-terang)', padding: '52px 32px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '6px', borderLeft: '4px solid var(--biru)', paddingLeft: '12px' }}>
            Proyek Unggulan
          </h2>
          <p style={{ color: 'var(--abu-tua)', fontSize: '0.88rem', marginBottom: '28px', paddingLeft: '16px' }}>
            Beberapa karya yang paling saya banggakan.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            {[
              { nama: 'Fate Of Lacrima', jenis: '2D drop down', emoji: '🎮', engine: 'Godot', tahun: '2026', warna: '#e8f5e9', warnaText: '#1e8449' },

            ].map(p => (
              <div key={p.nama} style={{
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 1px 6px rgba(0,0,0,0.06)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <div style={{
                  background: p.warna,
                  height: '100px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '3rem',
                }}>
                  {p.emoji}
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--hitam)', marginBottom: '4px' }}>
                    {p.nama}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--abu-tua)', marginBottom: '8px' }}>
                    {p.jenis} · {p.engine}
                  </div>
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 10px', borderRadius: '20px',
                    fontSize: '0.72rem', fontWeight: '600',
                    background: p.warna, color: p.warnaText,
                  }}>
                    {p.tahun}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/project" style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            color: 'var(--biru)', fontWeight: '600', fontSize: '0.95rem',
          }}
          onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
          onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
          >
            Lihat semua proyek →
          </Link>
        </div>
      </div>

      <footer style={{
        background: 'var(--hitam)',
        color: 'rgba(255,255,255,0.6)',
        textAlign: 'center',
        padding: '28px 16px',
        fontSize: '0.85rem',
      }}>
        <div style={{ marginBottom: '6px', color: 'rgba(255,255,255,0.85)', fontWeight: '500' }}>
          Pian Dwi Cahyo — Siswa SMKN 1 Purbalingga
        </div>
        <div>Dibuat sendiri dengan React · {new Date().getFullYear()}</div>
      </footer>
    </div>
  );
}

export default Home;

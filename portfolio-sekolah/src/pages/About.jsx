import { useState } from 'react';

const SKILLS = [
  { nama: 'HTML / CSS', level: 60, kat: 'Frontend' },
  { nama: 'JavaScript', level: 50, kat: 'Frontend' },
  { nama: 'React', level: 50, kat: 'Frontend' },
  { nama: 'Godot', level: 55, kat: 'Game Dev' },
  { nama: 'PHP', level: 40, kat: 'Backend' },
  { nama: 'MySQL', level: 60, kat: 'Database' },
  { nama: 'Git / GitHub', level: 70, kat: 'Tools' },
  { nama: 'Figma', level: 20, kat: 'Desain' },
];

const ATRIBUT = [
  { nama: 'Kreativitas', nilai: 88 },
  { nama: 'Problem Solving', nilai: 78 },
  { nama: 'Ketekunan', nilai: 75 },
  { nama: 'Kerja Tim', nilai: 79 },
  { nama: 'Kecepatan Belajar', nilai: 80 },
];

function BarSkill({ skill }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '10px 0',
        borderBottom: '1px solid var(--abu)',
        transition: 'background 0.15s',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: '600', fontSize: '0.9rem', color: hover ? 'var(--biru)' : 'var(--hitam)', transition: 'color 0.15s' }}>
            {skill.nama}
          </span>
          <span style={{
            fontSize: '0.7rem', padding: '1px 8px', borderRadius: '10px',
            background: 'var(--abu)', color: 'var(--abu-tua)',
          }}>
            {skill.kat}
          </span>
        </div>
        <span style={{ fontSize: '0.82rem', color: 'var(--abu-tua)', fontWeight: '500' }}>
          {skill.level}%
        </span>
      </div>
      <div style={{ background: 'var(--abu)', borderRadius: '3px', height: '5px', overflow: 'hidden' }}>
        <div style={{
          width: `${skill.level}%`, height: '100%',
          background: hover ? 'var(--biru-muda)' : 'var(--biru)',
          borderRadius: '3px', transition: 'width 0.4s ease, background 0.2s',
        }} />
      </div>
    </div>
  );
}

function About() {
  const [tab, setTab] = useState('skill');

  const tabs = [
    { id: 'skill', label: 'Skill' },
    { id: 'karakter', label: 'Karakter' },
    { id: 'cerita', label: 'Cerita Saya' },
  ];

  return (
    <div className="halaman" style={{ paddingTop: '90px' }}>

      <div style={{ marginBottom: '36px' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '6px' }}>
          Tentang Saya
        </h1>
        <p style={{ color: 'var(--abu-tua)', fontSize: '0.9rem' }}>
          Kenalan lebih jauh — siapa saya, apa yang saya bisa, dan kenapa saya suka coding.
        </p>
        <div style={{ height: '3px', width: '50px', background: 'var(--biru)', borderRadius: '2px', marginTop: '12px' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '28px', alignItems: 'start' }}>

        <div style={{
          background: 'var(--putih)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '24px 20px',
          boxShadow: 'var(--shadow)',
          position: 'sticky', top: '80px',
        }}>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{
              width: '90px', height: '90px', borderRadius: '50%',
              background: 'var(--biru-bg)',
              border: '3px solid var(--biru)',
              margin: '0 auto 12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem',
            }}>
              🧑‍💻
            </div>
            <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--hitam)', marginBottom: '2px' }}>
              Namaku
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--biru)', fontWeight: '500' }}>
              Game Developer
            </div>
          </div>

          <div style={{ height: '1px', background: 'var(--abu)', margin: '0 0 16px' }} />

          {[
            { label: 'Kelas', nilai: 'XI RPL' },
            { label: 'Sekolah', nilai: 'SMKN 1 Purbalingga' },
            { label: 'Kota', nilai: 'Purbalingga, Jawa Tengah' },
            { label: 'Level', nilai: 'Intermediate' },
            { label: 'Status', nilai: 'Open to Work ✓' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', justifyContent: 'space-between',
              padding: '6px 0',
              borderBottom: '1px solid var(--abu)',
              fontSize: '0.83rem',
            }}>
              <span style={{ color: 'var(--abu-tua)' }}>{item.label}</span>
              <span style={{ fontWeight: '500', color: 'var(--hitam)', textAlign: 'right', maxWidth: '130px' }}>
                {item.nilai}
              </span>
            </div>
          ))}


          <div style={{ height: '1px', background: 'var(--abu)', margin: '16px 0' }} />

          <a href="https://github.com/lapiann969" target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '9px 14px', borderRadius: '6px',
              background: 'var(--abu-terang)', border: '1px solid var(--border)',
              fontSize: '0.85rem', fontWeight: '500', color: 'var(--hitam-soft)',
              marginBottom: '8px', transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--abu)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--abu-terang)'}
          >
            <span>⌥</span> GitHub Saya
          </a>
          <a href="mailto:email@example.com"
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '9px 14px', borderRadius: '6px',
              background: 'var(--biru-bg)', border: '1px solid rgba(26,95,168,0.2)',
              fontSize: '0.85rem', fontWeight: '500', color: 'var(--biru)',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#d6e8f7'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--biru-bg)'}
          >
            <span>✉</span> Hubungi Saya
          </a>
        </div>

        <div>

          <div style={{
            display: 'flex', gap: '0',
            borderBottom: '2px solid var(--abu)',
            marginBottom: '24px',
          }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                padding: '10px 22px',
                background: 'transparent',
                border: 'none',
                borderBottom: tab === t.id ? '2px solid var(--biru)' : '2px solid transparent',
                color: tab === t.id ? 'var(--biru)' : 'var(--abu-tua)',
                fontWeight: tab === t.id ? '600' : '400',
                fontSize: '0.9rem',
                marginBottom: '-2px',
                transition: 'all 0.15s',
              }}>
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'skill' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <p style={{ color: 'var(--abu-tua)', fontSize: '0.85rem', marginBottom: '20px' }}>
                Skill yang sudah saya gunakan di proyek nyata. Angka persentase menunjukkan seberapa nyaman saya menggunakannya.
              </p>
              {SKILLS.map(s => <BarSkill key={s.nama} skill={s} />)}
            </div>
          )}

          {tab === 'karakter' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <p style={{ color: 'var(--abu-tua)', fontSize: '0.85rem', marginBottom: '24px' }}>
                Penilaian jujur tentang diri sendiri berdasarkan pengalaman selama belajar coding.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {ATRIBUT.map(a => (
                  <div key={a.nama}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--hitam)' }}>{a.nama}</span>
                      <span style={{ fontWeight: '700', color: 'var(--biru)', fontSize: '1rem' }}>{a.nilai}</span>
                    </div>
                    <div style={{ background: 'var(--abu)', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${a.nilai}%`, height: '100%',
                        background: 'linear-gradient(90deg, var(--biru), var(--biru-muda))',
                        borderRadius: '4px',
                      }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '32px',
                padding: '20px 24px',
                background: 'var(--biru-bg)',
                border: '1px solid rgba(26,95,168,0.15)',
                borderRadius: '8px',
              }}>
                <div style={{ fontWeight: '600', fontSize: '0.85rem', color: 'var(--biru)', marginBottom: '6px' }}>
                  Penilaian Keseluruhan
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--hitam)', marginBottom: '8px' }}>
                  B<span style={{ color: 'var(--biru)' }}>+</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--hitam-soft)', lineHeight: '1.7' }}>
                  Masih terus belajar dan berkembang. Setiap hari selalu ada hal baru yang dipelajari —
                  dari debugging yang menyebalkan sampai fitur baru yang berhasil dibuat.
                </p>
              </div>
            </div>
          )}

          {tab === 'cerita' && (
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              {[
                {
                  ikon: '📖',
                  judul: 'Awal Mula',
                  isi: 'Berawal dari fomo ikut teman masuk jurusan ini, walau awal masih suka menyesal "kenapa waktu itu masuk sini". Lama kelamaan menemukan ritme nya jika sudah terbiasa , dan di jurusan ini juga bisa menjabarkan ide kreatif ku seperti contoh nya aku sudah membuat game yang dimana dari dulu aku ingin ounya game sendiri',
                },
                {
                  ikon: '🎮',
                  judul: 'Kenapa Game Dev?',
                  isi: 'Karena saya suka main game, itu yang mengisnpirasi ku membuat game .',
                },
                {
                  ikon: '🏆',
                  judul: 'Target Ke Depan',
                  isi: 'Pengen bikin game indie kecil-kecilan. Rilis satu game di Steam sebelum lulus SMK. Impian besar, tapi dijalani pelan-pelan setiap hari.',
                },
              ].map(s => (
                <div key={s.judul} style={{
                  padding: '18px 20px',
                  marginBottom: '12px',
                  background: 'var(--putih)',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--biru)',
                  borderRadius: '0 7px 7px 0',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>{s.ikon}</span>
                    <span style={{ fontWeight: '700', fontSize: '0.9rem', color: 'var(--hitam)' }}>{s.judul}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--hitam-soft)', lineHeight: '1.75' }}>{s.isi}</p>
                </div>
              ))}

              <div style={{
                padding: '20px 24px', marginTop: '8px',
                background: 'var(--abu-terang)',
                border: '1px solid var(--border)',
                borderRadius: '8px', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', opacity: 0.3, marginBottom: '8px' }}>"</div>
                <p style={{ fontStyle: 'italic', color: 'var(--hitam-soft)', lineHeight: '1.75', fontSize: '0.95rem' }}>
                  Setiap game dimulai dari satu baris kode.
                  <br />
                  <strong style={{ color: 'var(--biru)' }}>Mulai aja dulu.</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;

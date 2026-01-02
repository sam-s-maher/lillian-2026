import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header
        className="w-full fixed top-0 left-0 right-0 z-40 flex items-center justify-center shadow-sm lg:relative lg:w-1/2 lg:h-screen"
        style={{
          height: 'var(--header-height)',
          background: 'var(--primary-background)',
          boxShadow: '0 1px 6px 0 rgba(0,0,0,0.02)'
        }}>
        <Image src="/images/logo_lillian_albazi_2.png" alt="Lillian Albazi Logo" height={45} width={220} />
      </header>
      <div style={{ height: 'var(--header-height)' }} />
    </>
  );
}

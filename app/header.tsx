import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header
        className="w-full fixed top-0 left-0 right-0 z-40 flex items-center justify-center"
        style={{
          height: 'var(--header-height)',
          background: 'var(--primary-background)'
        }}>
        <Image src="/images/logo_lillian_albazi_2.png" alt="Lillian Albazi Logo" height={45} width={220} />
      </header>
      <div style={{ height: 'var(--header-height)' }} />
    </>
  );
}

    // <header className="h-24 w-full fixed top-0 left-0 right-0 z-40 flex items-center justify-center" style={{ background: 'var(--primary-background)' }}>
    //   <Image src="/images/logo_lillian_albazi_2.png" alt="Lillian Albazi Logo" height={57} width={288} />
    // </header>

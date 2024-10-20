import Image from 'next/image';
import logo from '../../public/logo-preta.png';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Blocok"
        sizes="100vw"
        style={{
          width: '120px',
          height: 'auto',
        }}
      />
    </Link>
  );
}

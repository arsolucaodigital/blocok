import Image from 'next/image';
import logo from '../../public/logo-preta.png';

export function Logo() {
  return (
    <Image
      src={logo}
      alt="Blocok"
      sizes="100vw"
      style={{
        width: '120px',
        height: 'auto',
      }}
    />
  );
}

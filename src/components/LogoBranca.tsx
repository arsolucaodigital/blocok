import Image from 'next/image';
import logo from '../../public/logo-branca.png';

export function LogoBranca() {
  return (
    <Image
      src={logo}
      alt="Blocok"
      sizes="100vw"
      style={{
        width: '200px',
        height: 'auto',
      }}
    />
  );
}

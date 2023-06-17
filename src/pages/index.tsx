import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/signup'}>Đăng ký</Link>
    </main>
  );
}

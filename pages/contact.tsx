
import Link from 'next/link';
import { Inter } from '@next/font/google'
import { MainLayout } from '../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact.js</code>
          </p>
          <div>
            Go to <Link href='/'>Home</Link>
          </div>
        </div>
    </MainLayout>
  )
}

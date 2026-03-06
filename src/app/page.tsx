import { redirect } from 'next/navigation';
import { internationalConfig } from '@/config/internationalConfig';

export default function RootPage() {
  redirect(`/${internationalConfig.defaultLocale}`);
}

import { SwatchBookIcon, SearchIcon, StarIcon, SmartphoneIcon, LockKeyholeIcon, ShieldBanIcon } from 'lucide-react'
import Features from '@/components/shadcn-studio/blocks/features-section-01/features-section-01'

const featuresList = [
  {
    icon: SwatchBookIcon,
    title: 'Intuitive Dashboard',
    description:
      "Easily track your eco projects, funding progress, and impact metrics all in one place. Designed to be simple for beginners and powerful for experts.",
    cardBorderColor: 'border-primary/40 hover:border-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  },
  {
    icon: ShieldBanIcon,
    title: 'Secure Contributions',
    description:
      'All donations and investments are securely processed. Your financial information is encrypted.',
    cardBorderColor: 'border-green-600/40 hover:border-green-600 dark:border-green-400/40 dark:hover:border-green-400',
    avatarTextColor: 'text-green-600 dark:text-green-400',
    avatarBgColor: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
    icon: SearchIcon,
    title: 'Project Creation Platform',
    description:
      'Investors create eco-events on the platform. We do not provide investment advice. Users can browse and engage with events, but all decisions are independent.',
    cardBorderColor: 'border-amber-600/40 hover:border-amber-600 dark:border-amber-400/40 dark:hover:border-amber-400',
    avatarTextColor: 'text-amber-600 dark:text-amber-400',
    avatarBgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
    icon: StarIcon,
    title: 'Community Feedback',
    description:
      'See ratings and reviews from contributors. celebrate successful initiatives together.',
    cardBorderColor: 'border-destructive/40 hover:border-destructive',
    avatarTextColor: 'text-destructive',
    avatarBgColor: 'bg-destructive/10'
  },
  {
    icon: SmartphoneIcon,
    title: 'Mobile Access',
    description:
      'All events created by investors are visible globally. Users can see ongoing eco-projects and participate in initiatives across regions.',

    cardBorderColor: 'border-sky-600/40 hover:border-sky-600 dark:border-sky-400/40 dark:hover:border-sky-400',
    avatarTextColor: 'text-sky-600 dark:text-sky-400',
    avatarBgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    icon: LockKeyholeIcon,
    title: 'Transparent Reporting',
    description:
      'Access detailed reports of fund allocation and project progress. Know exactly how your contributions are making an impact in the real world.',
    cardBorderColor: 'border-primary/40 hover:border-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  }
]

const FeaturesPage = () => {
  return <Features featuresList={featuresList} />
}

export default FeaturesPage

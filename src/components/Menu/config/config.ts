import { MenuItemsType, DropdownMenuItemType } from '@doodaswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
    href: '/prediction',
    icon: 'Trophy',
    items: [
      {
        label: t('Prediction (BETA)'),
        href: '/prediction',
      },
      {
        label: t('Lottery'),
        href: '/lottery',
      },
    ],
  },
  {
    label: t('NFT'),
    href: '/collectibles',
    icon: 'Nft',
    showOnMobile: false,
    showItemsOnMobile: false,
    items: [
      {
        label: t('Collectibles'),
        href: '/collectibles',
      },
    ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://pancakeswap.medium.com',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config

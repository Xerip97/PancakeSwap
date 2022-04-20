import { Pool } from '@app/models/Pool';

export const pools: Pool[] = [
  {
    id: 0,
    type: 'IFO',
    name: 'CAKE',
    description: 'Stake CAKE to participate in IFOs',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    urlIcon2: 'https://pancakeswap.finance/images/tokens/ifo-pool-icon.svg',
    apr: 48.71,
    apy: 61.45,
    totalStaked: 29462078,
    earned: 0,
    auto: true,
    creditCalculation: 15954340,
    unstakingFee: 1,
    performanceFee: 2,
    daylyCompound: 1,
    creation: new Date('2015, 03, 12')
  },
  {
    id: 1,
    type: 'Auto',
    name: 'CAKE',
    description: 'Automatic restaking ',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    urlIcon2: 'https://pancakeswap.finance/images/tokens/autorenew.svg',
    apr: 48.71,
    apy: 61.51,
    totalStaked: 132212784,
    earned: 0,
    auto: true,
    unstakingFee: 0.1,
    performanceFee: 2,
    daylyCompound: 5000,
    creation: new Date('2015, 03, 10')
  },
  {
    id: 2,
    type: 'Manual',
    name: 'CAKE',
    description: 'Earn CAKE, stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 48.71,
    apy: 62.71,
    totalStaked: 54189742,
    earned: 0,
    auto: false,
    daylyCompound: 1,
    creation: new Date('2015, 03, 24')
  },
  {
    id: 3,
    type: 'Manual',
    name: 'BSW',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x965F527D9159dCe6288a2219DB51fc6Eef120dD1.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 56.56,
    apy: 75.97,
    totalStaked: 2481216,
    earned: 0,
    endsIn: 1494165,
    auto: false,
    daylyCompound: 1,
    creation: new Date('2022, 03, 20')
  },
  {
    id: 4,
    type: 'Manual',
    name: 'DUET',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 57.54,
    apy: 77.65,
    totalStaked: 391453,
    earned: 0,
    endsIn: 1406881,
    auto: false,
    daylyCompound: 1,
    creation: new Date('2022, 03, 17')
  },
  {
    id: 5,
    type: 'Manual',
    name: 'GMT',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 59.56,
    apy: 81.32,
    totalStaked: 9082292,
    earned: 0,
    endsIn: 1352192,
    auto: false,
    daylyCompound: 1,
    creation: new Date('2022, 03, 12')
  },
  {
    id: 6,
    type: 'Manual',
    name: 'ACH',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0xBc7d6B50616989655AfD682fb42743507003056D.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 43.66,
    apy: 0,
    totalStaked: 26199,
    earned: 0,
    endsIn: 54455,
    auto: false,
    creation: new Date('2022, 03, 09')
  },
  {
    id: 7,
    type: 'Manual',
    name: 'FUND',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x477bC8d23c634C154061869478bce96BE6045D12.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 78.65,
    apy: 0,
    totalStaked: 24009,
    earned: 0,
    endsIn: 45334,
    auto: false,
    creation: new Date('2022, 03, 02')
  },
  {
    id: 8,
    type: 'Earn',
    name: 'HIGH',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x5f4Bde007Dc06b867f86EBFE4802e34A1fFEEd63.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 66.11,
    apy: 0,
    totalStaked: 854079,
    earned: 0,
    endsIn: 181938,
    auto: false,
    creation: new Date('2022, 03, 24')
  },
  {
    id: 9,
    type: 'Earn',
    name: 'XWG',
    description: 'Stake CAKE',
    urlIcon:
      'https://pancakeswap.finance/images/tokens/0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc.svg',
    urlIcon2:
      'https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg',
    apr: 75.78,
    apy: 0,
    totalStaked: 237544,
    earned: 0,
    endsIn: 324097,
    auto: false,
    creation: new Date('2022, 03, 25')
  },
];

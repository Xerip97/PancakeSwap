export interface Pool {
  id: number;
  type?: 'IFO' | 'Auto' | 'Manual';
  name: string;
  description:
    | 'Stake CAKE to participate in IFOs'
    | 'Automatic restaking '
    | 'Earn CAKE, stake CAKE'
    | 'Stake CAKE';
  urlIcon: string;
  urlIcon2: string;
  apr: number;
  apy: number;
  totalStaked: number; //number of CAKE staked
  earned: number;
  endsIn?: number | 'ended';
  auto?: boolean;
  creditCalculation?: number;
  unstakingFee?: number;
  performanceFee?: number;
  daylyCompound?: number;
}

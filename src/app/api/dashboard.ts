export interface DashboardList {
    title: string;
    value: number;
    label: string;
    iconUrl: string;
    trendClass: string;
}

export const DASHBOARDLIST: DashboardList[] = [
  {
      title: 'Total reports',
      value: 138,
      iconUrl: 'description',
      label: 'bg-blue-50 text-blue-600',
      trendClass: 'bg-green-50 text-green-700'
    },
    {
      title: 'Today\'s reports',
      value: 112,
      iconUrl: 'check_circle',
      label: 'bg-green-50 text-green-600',
      trendClass: 'bg-green-50 text-green-700'
    },
    {
      title: 'Last week reports',
      value: 18,
      iconUrl: 'schedule',
      label: 'bg-amber-50 text-amber-600',
      trendClass: 'bg-red-50 text-red-600'
    },
    {
      title: 'Total downloads',
      value: 8,
      iconUrl: 'download',
      label: 'bg-purple-50 text-purple-600',
      trendClass: 'bg-slate-100 text-slate-500'
    }
  ];
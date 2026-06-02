export interface Report {
  name: string;
  category: string;
  lastRun: string;
  date: string;
  status: 'success' | 'failed' | 'pending';
}

export const REPORTS: Report[] = [
    {
      name: 'Loan Report', 
      category: 'Loan', 
      lastRun: 'John Doe', 
      date: 'Sep 12, 2022', 
      status: 'success'
    },
     { 
      name: 'Finance Summary Report', 
      category: 'Finance', 
      lastRun: 'Admin User', 
      date: 'Aug 12, 2022', 
      status: 'success'
     }, 
     { 
      name: 'Guarantor Summary Report', 
      category: 'Loan', 
      lastRun: 'John Doe', 
      date: 'Aug 12, 2022', 
      status: 'failed'
    },
    { 
      name: 'Loan Report', 
      category: 'Loan', 
      lastRun: 'John Doe', 
      date: 'Sep 12, 2022', 
      status: 'success'
    }, 
    { 
      name: 'Finance Summary Report', 
      category: 'Finance', 
      lastRun: 'Admin User', 
      date: 'Aug 12, 2022', 
      status: 'pending'
    },
    { 
      name: 'Guarantor Summary Report', 
      category: 'Loan', 
      lastRun: 'John Doe', 
      date: 'Aug 12, 2022', 
      status: 'success'
    }
];
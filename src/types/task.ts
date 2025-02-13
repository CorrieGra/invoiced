type TaskStatus = 'PENDING' | 'ACTIVE' | 'PAUSED' | 'CANCELLED' | 'COMPLETED';

interface TaskBilling {
	billable: boolean;
	rate: 'HOURLY' | 'MILESTONES';
	cost: number;
}

interface Task {
	name: string;
	description: string;
	status: TaskStatus;
	billing: TaskBilling;
	startedAt: Date;
	updatedAt: Date;
	endedAt: Date;
}

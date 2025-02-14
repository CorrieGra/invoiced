type ProjectStatus =
	| 'PENDING'
	| 'ACTIVE'
	| 'PAUSED'
	| 'CANCELLED'
	| 'COMPLETED'
	| 'AWAITING PAYMENT';

interface Project {
	name: string;
	description: string;
	tasks: Task[];
	status: ProjectStatus;
	startedAt: Date;
	updatedAt: Date;
	endedAt: Date;
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
	db: { id: number; name: string }[] = [];

	async findById(id: number) {
		return this.db.find((project) => project.id === id);
	}

	async create(name: string) {
		const id = this.db.length + 1;
		const project = { id, name };
		this.db.push(project);
		return project;
	}
}

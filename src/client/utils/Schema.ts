import * as Yup from 'yup';

export const CreateProjectSchema = Yup.object().shape({
	name: Yup.string().min(1).required().lowercase().trim(),
	description: Yup.string().min(1).required().lowercase(),
	repo_url: Yup.string().url().required(),
	web_url: Yup.string().url().optional(),
	technologies: Yup.array()
		.of(Yup.string().min(1).lowercase().trim())
		.optional()
		.default([])
});

export const CreateTechnologySchema = Yup.object().shape({
	name: Yup.string().min(1).required().lowercase().trim(),
	logo: Yup.string().url().required()
});

export const UpdateUserSchema = Yup.object().shape({
	tagline: Yup.string().min(1).lowercase().trim().optional(),
	description: Yup.string().min(1).optional()
});

export const UpdateTechnologySchema = Yup.object().shape({
	name: Yup.string().min(1).optional().lowercase().trim(),
	logo: Yup.string().url().optional()
});

export const UpdateProjectSchema = Yup.object().shape({
	name: Yup.string().min(1).optional().lowercase().trim(),
	description: Yup.string().min(1).optional().lowercase(),
	repo_url: Yup.string().url().optional(),
	web_url: Yup.string().url().optional()
});

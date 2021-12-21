import * as Yup from 'yup';

export const CreateProjectSchema = Yup.object().shape({
	name: Yup.string().min(1).required().lowercase().trim(),
	description: Yup.string().min(1).required().lowercase(),
	repo_url: Yup.string().url().required(),
	web_url: Yup.string().url().notRequired(),
	technologies: Yup.array()
		.of(Yup.string().min(1).lowercase().trim())
		.notRequired()
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

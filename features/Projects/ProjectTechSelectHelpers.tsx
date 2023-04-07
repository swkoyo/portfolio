/* eslint-disable react/display-name */
import {
	Box,
	CloseButton,
	Flex,
	MultiSelectValueProps,
	SelectItemProps,
	rem
} from '@mantine/core';
import { forwardRef } from 'react';
import Icon from '../../components/Icon';
import { TECH } from '../../constants';

export function SelectValue({
	value,
	label,
	onRemove,
	...others
}: MultiSelectValueProps & { value: string }) {
	return (
		<div {...others}>
			<Box
				sx={(theme) => ({
					display: 'flex',
					cursor: 'default',
					alignItems: 'center',
					backgroundColor: theme.colors.dark[7],
					border: `${rem(1)} solid ${theme.colors.dark[7]}`,
					paddingLeft: theme.spacing.xs,
					borderRadius: theme.radius.sm
				})}
			>
				<Box mr={10} display='flex' sx={{ alignItems: 'center' }}>
					<Icon type={value as TECH} />
				</Box>
				<Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
				<CloseButton
					onMouseDown={onRemove}
					variant='transparent'
					size={22}
					iconSize={14}
					tabIndex={-1}
				/>
			</Box>
		</div>
	);
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
	({ label, value, ...others }, ref) => {
		return (
			<div ref={ref} {...others}>
				<Flex align='center'>
					<Box mr={10} display='flex' sx={{ alignItems: 'center' }}>
						<Icon type={value as TECH} />
					</Box>
					<div>{label}</div>
				</Flex>
			</div>
		);
	}
);

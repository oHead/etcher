/*
 * Copyright 2018 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react';
import { Button, Flex, Provider, Txt } from 'rendition';
import styled from 'styled-components';
import { space } from 'styled-system';

import { colors } from './theme';

const theme = {
	// TODO: Standardize how the colors are specified to match with rendition's format.
	customColors: colors,
	button: {
		border: {
			width: '0',
			radius: '24px',
		},
		disabled: {
			opacity: 1,
		},
		extend: () => `
      && {
				width: 200px;
				height: 48px;
				font-size: 16px;

				&:disabled {
					background-color: ${colors.dark.disabled.background};
					color: ${colors.dark.disabled.foreground};
					opacity: 1;

					&:hover {
						background-color: ${colors.dark.disabled.background};
						color: ${colors.dark.disabled.foreground};
					}
				}
      }
    `,
	},
};

export const ThemedProvider = (props: any) => (
	<Provider theme={theme} {...props}></Provider>
);

export const Icon = styled(props => <Button plain {...props} />)`
	&&& {
		width: 24px;
		height: 24px;
		font-size: 24px;
		color: #fff;

		> svg {
			font-size: 1em;
		}
	}
`;

export const StepButton = styled((props: any) => <Button {...props}></Button>)`
	color: rgba(255, 255, 255, 0.7);
	margin: auto;
`;

export const ChangeButton = styled(Button)`
	&& {
		border-radius: 24px;
		color: ${colors.primary.background};
		padding: 0;
		height: 18px;
		font-size: 14px;

		&:enabled {
			&:hover,
			&:focus,
			&:active {
				color: #8f9297;
			}
		}
		${space}
	}
`;
export const StepNameButton = styled(Button)`
	border-radius: 24px;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-weight: bold;
	color: ${colors.dark.foreground};

	&:enabled {
		&:hover,
		&:focus,
		&:active {
			color: #8f9297;
		}
	}
`;
export const StepSelection = styled(Flex)`
	flex-wrap: wrap;
	justify-content: center;
`;
export const Footer = styled(Txt)`
	margin-top: 10px;
	color: ${colors.dark.disabled.foreground};
	font-size: 10px;
`;
export const Underline = styled(Txt.span)`
	border-bottom: 1px dotted;
	padding-bottom: 2px;
`;
export const DetailsText = styled(Txt.p)`
	color: ${colors.dark.disabled.foreground};
	margin-bottom: 0;
`;

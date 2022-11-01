import { Text as TextField, TextInput, TextInputProps, View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { theme as THEME } from './theme';

interface TextProps {
  size?: keyof typeof THEME.size;
  family?: keyof typeof THEME.font;
  color?: keyof typeof THEME.colors;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  lineHeight?: number;
}

export const Text = styled(TextField)<TextProps>`
  ${({ theme, size, family, color, marginTop, marginBottom, marginLeft, marginRight, lineHeight }) => css`
    font-size: ${theme.size[size ?? 'label']};
    font-family: ${theme.font[family ?? 'primaryRegular']};
    color: ${theme.colors[color ?? 'gray100']};
    margin-top: ${marginTop ?? 0}px;
    margin-bottom: ${marginBottom ?? 0}px;
    margin-left: ${marginLeft ?? 0}px;
    margin-right: ${marginRight ?? 0}px;
    ${lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
  `}
`;

interface InputProps extends TextInputProps {}

export const DefaultInput = styled(TextInput)<InputProps>`
  ${({ theme }) => css`
    font-size: ${16}px;
    font-family: ${theme.font.primaryRegular};
    color: ${theme.colors.gray800};
  `}
`;

interface SeparatorProps {
  height?: number;
  borderBottomWidth?: number;
  borderBottomColor?: keyof typeof THEME.colors;
  marginTop?: number;
  marginBottom?: number;
}

export const Separator = styled(View)<SeparatorProps>`
  ${({ theme, height, borderBottomWidth, borderBottomColor, marginTop, marginBottom }) => css`
    height: ${height ?? 0}px;
    border-bottom-width: ${borderBottomWidth ?? 0}px;
    border-bottom-color: ${theme.colors[borderBottomColor ?? 'gray400']};
    margin-top: ${marginTop ?? 0}px;
    margin-bottom: ${marginBottom ?? 0}px;
  `}
`;

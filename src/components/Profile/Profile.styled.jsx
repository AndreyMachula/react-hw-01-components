import styled from 'styled-components';

export const Avatar = styled.img`
  display: block;
  width: 100%;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.secondaryText};
  border-radius: ${p => p.theme.radii.round};
  margin-bottom: ${p => p.theme.space[6]}px;
  background-color: ${p=> p.theme.colors.lightColor};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSize.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.primaryText};
`;

export const Tag = styled.p`
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.space[0]};
  color: ${p => p.theme.colors.secondaryText};
`;

export const Location = styled.p`
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.secondaryText};
`;

export const ItemStats = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.lightColor};
  border-top: ${p => p.theme.borders.normal} ${p=>p.theme.colors.secondaryText};
  padding: ${p => p.theme.space[5]}px;
  &:not(:first-child) {
    border-left: ${p => p.theme.borders.normal};
  }
`;

export const ItemLabel = styled.span`
  font-size: ${p => p.theme.fontSize.m};
  font-weight: ${p => p.theme.fontWeight.bold};
  color: ${p => p.theme.colors.secondaryText};
  margin-bottom: ${p=>p.theme.space[3]}px;
`;

export const ItemQuantity = styled.span`
font-size: ${p=>p.theme.fontSize.l};
font-weight: ${p=>p.theme.fontWeight.bold};
color: ${p=>p.theme.colors.primaryText};
`;

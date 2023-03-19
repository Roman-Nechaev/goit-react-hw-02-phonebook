import styled from 'styled-components';
import { IoPersonOutline, IoCallOutline } from 'react-icons/io5';

export const Container = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 18px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 20px;
  border: 1px dashed gray;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;

  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 20px;

  align-items: flex-end;
  display: flex;
`;

export const PersonOutline = styled(IoPersonOutline)`
  padding-right: 10px;
`;
export const CallOutline = styled(IoCallOutline)`
  padding-right: 8px;
  padding-left: 10px;
`;

export const Btn = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  margin-left: auto;
  border-radius: 15px;
  padding: 10px 24px;
  background-color: #3f82b5;
  color: white;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  &:focus {
    background-color: #3e65b3;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

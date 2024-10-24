import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backbasic};
  color: #333;

`;

export const ButtonGroup=styled.div`
    display: flex;
    justify-content: space-around;
    button{
        border:1px solid rgba(214, 232, 241, 1);
        border-radius: 16px;
        background-color: white;
        color: rgba(94, 147, 182, 1);
        width:70px;
        height:28px;
        font-size: 12px;
        font-weight: 600;
        box-shadow: 0 0 4px rgba(94, 147, 182, 1);
        cursor: pointer;
        &.selected{
            background-color: rgba(94, 147, 182, 1);
            color:white;
            box-shadow: 0 0 4px rgba(214, 232, 241, 1);
        }
    }
    /* align-items: center; */

`

export const SelectGroup=styled.div`
    margin-top: 7%;
    label{
        color:rgba(98, 98, 98, 1);
        font-size:12px;
        font-weight: 600;
        padding-left:6%;
    
    }
`


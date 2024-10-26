import styled from 'styled-components';

export const Layout = styled.div`
  max-height: 660px;
  &::-webkit-scrollbar {
        width: 2px;
        height:50px;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 스크롤바 배경 색상 */
    }

    &::-webkit-scrollbar-thumb {
        background: #626262; /* 스크롤바 손잡이 색상 */
        border-radius: 10px; /* 손잡이 둥글게 처리 */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; /* 손잡이 호버 색상 */
    }
  background-color: ${({ theme }) => theme.colors.backbasic};
  color: #333;
  padding:10%;
  overflow-y: auto; 
  overflow-x: hidden;
  line-height: 1.3;
  
`;

export const FirstText=styled.div`
    font-family: 'Pretendard';
    font-size:12px;
    color: rgba(52, 135, 190, 1);
    margin-bottom: 30px;
    

`
export const SecondText=styled.div`
    font-size:20px;
    margin-bottom: 10px;
    & .reco{
        color:rgba(31, 53, 127, 1);

    }

`
export const ThirdText=styled.div`
    font-size:12px;
    color:rgba(98, 98, 98, 1);
    margin-bottom: 10px;

`
export const ExampleContainer=styled.div`
    background-color: rgba(214, 232, 241, 1) ;
    box-shadow: inset 0 0 4px rgba(131, 139, 164, 1);
    border-radius: 28px;
    padding: 12px 28px;
    margin-bottom: 40px;
    width:269px;
    height:72px;
    font-size: 12px;
    color:rgba(26, 38, 79, 1);

    & .firstText{
        color:rgba(98, 98, 98, 1);
        font-size: 8px;
        padding-bottom: 10px;
    }
`

export const MyMessage=styled.div`
    background-color: white;
    box-shadow:0 0 4px rgba(162, 162, 162, 0.5);
    border-radius: 16px 0px 16px 16px;
    padding: 12px;
    /* width:240px; */
    height:auto;
    font-size: 12px;
    font-weight:300;
    max-width: 80%; /* 최대 너비 설정, 필요에 따라 조정 가능 */
    align-self: flex-start; /* 부모의 flex 컨테이너에서 필요한 만큼의 너비만 사용 */
    word-wrap: break-word; 

`
export const RecoMessage=styled.div`
    background-color: rgba(26, 38, 79, 1);
    color:white;
    box-shadow:0 0 4px rgba(162, 162, 162, 0.5);
    border-radius: 0px 16px 16px 16px;
    padding: 12px;
    /* width:240px; */
    height:auto;
    font-size: 12px;
    font-weight:300;
    max-width: 240px;

`
export const MyContainer=styled.div`
    display:flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    /* position:relative;
    right:0; */
`

export const RecoContainer=styled.div`
    display:flex;
    gap:5px;
    margin-bottom: 20px;
    
`
export const InputContainer=styled.div`
    width:100%;
    height:70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* padding: 20px 10px; */
    background-color: rgba(214, 232, 241, 1);
    position:absolute;
    bottom:0;
    input{
        width:82%;
        height:36px;
        padding:16px 8px 17px 20px;
        background-color: rgba(217, 217, 217, 1);
        border-radius: 4px;
        &::placeholder{
            color:rgba(98, 98, 98, 1);
        }
    }
    button{
        background-color: rgba(192, 192, 192, 1);
        color:rgba(109, 109, 109, 1);
        padding:10px;
        border-radius: 4px;
    }
    
;

`
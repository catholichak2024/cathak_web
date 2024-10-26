import styled from 'styled-components';


export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    background-color: white;
    color: #333;
    position:relative;
    overflow-y: scroll;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
        width: 0; 
        background: transparent; 
    }

`;

export const TitleText=styled.div`
    
    line-height: 20px;
    font-size: 20px;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
`
export const Line=styled.div`
    background-color:rgba(174, 211, 236, 1) ;
    margin-bottom: 1.5rem;
    height:1px;
    width:85%;
`
export const Body=styled.div`
    width:80%;
    
`
export const InputField=styled.div`
    position:relative;
    margin-bottom: 5%;
    /* margin-top: 5%; */
    div{
        
        font-size: 12px;
        font-weight: 500;
        padding-left:6%;
        margin-bottom: 1%;

        &.errorText{
            font-size: 8px;
            color:rgba(239, 102, 102, 1);
            position:absolute;
        }
    }
    & .idMessage{
        font-size: 8px;
        
        position:absolute;
    }
    input{
        font-size: 12px;
        width: calc(100% - 16px);
        height:40px;
        padding:0;
        padding-left: 16px;
        border-radius: 16px;
        border:none;
        outline:none;
        background-color:rgba(239, 248, 254, 1) ;
        &::placeholder{
            color:rgba(161, 161, 161, 1);
        }
        &.error{
            width: calc(100% - 18px);
            height:38px;
            border:1px solid rgba(239, 102, 102, 1);
            background-color:white ;
        }
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        position:absolute;
        top:50%;
        right:4%;
        width:20%;
        height:20px;
        background-color:rgba(94, 147, 182, 1);
        color:white;
        border-radius: 16px;
        border:none;
        font-size:8px;
        font-weight:600;
        cursor:pointer;
        font-weight: 300;
    }
`
export const MajorTitle=styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-top: 10%;
    margin-bottom: 3%;
`
export const MajorErrorText=styled.div`
    margin-top: 3px;
    font-size: 8px;
    color:rgba(239, 102, 102, 1);
    padding-left:6%;
`
export const SaveButton=styled.button`
    /* position:absolute; */
    /* right:10%;
    bottom:5%; */
    padding:30px 0px;
    margin-left:250px;
    border: none;
    background-color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color:rgba(98, 98, 98, 1);
`
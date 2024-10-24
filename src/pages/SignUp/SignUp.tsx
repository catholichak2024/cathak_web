import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserRegistrationType } from '../../recoil/types/userRegistration';
import { userRegistrationState } from '../../recoil/states/UserRegistrationState';
import ChoiceMajor from './ChoiceMajor/ChoiceMajor';
import MajorSelection from './ChoiceMajor/MajorSelection';
import { Body,InputField, Layout, Line,MajorTitle,SaveButton,TitleText } from './Styles';
import Header from '../../components/Header/Header';

const SignUp: React.FC = () => {
  
    const [registrationInfo, setRegistrationInfo] = useRecoilState<UserRegistrationType>(userRegistrationState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [idDuplicateMessage, setIdDuplicateMessage] = useState<string>(''); 

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        // 유효성 검사
        if (!registrationInfo.name.match(/^[가-힣]{2,7}$/)) {
        newErrors.name = '이름은 2~7자리 한글이어야 합니다.';
        }
        if (!registrationInfo.id.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,12}$/)) {
        newErrors.id = '아이디는 3~12자리의 영문 및 숫자 조합이어야 합니다.';
        }
        if (!registrationInfo.password.match(/^[A-Za-z\d!@#$%^&*]{5,15}$/)) {
        newErrors.password = '비밀번호는 5~15자리의 영문, 숫자, 특수문자 조합이어야 합니다.';
        }
        if (registrationInfo.password !== registrationInfo.confirmPassword) {
        newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        }
        if (!registrationInfo.studentId.match(/^\d{9}$/)) {
        newErrors.studentId = '학번은 9자리 숫자여야 합니다.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // 오류가 없으면 true 반환
    };

  //저장하기 버튼 클릭 시 서버 전송
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // 모든 필드 통과 시 서버 전송
        if (validateForm()) {
        console.log('회원가입 정보:', registrationInfo);
        // 추후 서버 전송 로직 추가
        setErrors({}); // 모든 필드 통과 시 에러 메세지 초기화
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegistrationInfo((prev) => ({
        ...prev,
        [name]: value, 
        }));
    };

    // 서버로 아이디 중복 확인 요청을 보내기
    // const checkIdDuplicate = async () => {
    
    //     try {
    //     const response = await fetch('/api/check-id', { 
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ id: registrationInfo.id }),
    //     });

    //     const data = await response.json();
    //     if (data.isAvailable) {
    //         setIdDuplicateMessage('사용 가능한 아이디입니다.'); 
    //         setErrors((prev) => ({ ...prev, id: '' })); 
    //     } else {
    //         setIdDuplicateMessage('중복된 아이디입니다.');
    //         setErrors((prev) => ({ ...prev, id: '' })); 
    //     }
    //     } catch (error) {
    //     console.error('아이디 중복 확인 오류:', error);
    //     }
    // };

  return (
    <Layout>
        
        <Header backarrow/>
        <TitleText>회원가입</TitleText>
        <Line></Line>
        
        <Body>
            <form onSubmit={handleSubmit}>
                <InputField>
                    <div>이름</div>
                    <input
                        type="text"
                        name="name"
                        value={registrationInfo.name}
                        onChange={handleChange}
                        placeholder='이름 입력'
                        className={errors.name ? 'error' : ''}
                    />
                    
                    {errors.name && <div className='errorText'>{errors.name}</div>}
                </InputField>

                <InputField>
                    <div>아이디</div>
                    <input
                        type="text"
                        name="id"
                        value={registrationInfo.id}
                        onChange={handleChange}
                        placeholder='영문,숫자 포함 3~12자리'
                        className={errors.id ? 'error' : ''}
                    />
                    
                    
                    {/* <button type="button" onClick={checkIdDuplicate}> */}
                    <button type="button">
                        중복 확인
                    </button>
                    {errors.id && <div className='errorText'>{errors.id}</div>}
                    {idDuplicateMessage && (
                    <p style={{ color: idDuplicateMessage === '중복된 아이디입니다.' ? 'red' : 'green' }}>
                        {idDuplicateMessage}
                    </p>
                    )}
                </InputField>

                <InputField>
                    <div>비밀번호</div>
                    
                    <input
                        type="password"
                        name="password"
                        value={registrationInfo.password}
                        onChange={handleChange}
                        placeholder='영문,숫자,특수문자 포함 5~15자리'
                        className={errors.password? 'error' : ''}
                    />
                
                    {errors.password && <div className='errorText'>{errors.password}</div>}
                </InputField>

                <InputField>
                    
                    <input
                        type="password"
                        name="confirmPassword"
                        value={registrationInfo.confirmPassword}
                        onChange={handleChange}
                        placeholder='비밀번호 재입력'
                        className={errors.confirmPassword ? 'error' : ''}
                    />
                    {errors.confirmPassword && <div className='errorText'>{errors.confirmPassword}</div>}
                </InputField>

                <InputField>
                    <div>학번</div>
                    
                    <input
                        type="text" 
                        name="studentId"
                        value={registrationInfo.studentId}
                        onChange={handleChange}
                        placeholder='학번 9자리 입력'
                        className={errors.studentId ? 'error' : ''}
                    />
                    {errors.studentId && <div className='errorText'>{errors.studentId}</div>}
                </InputField>
                
                <MajorTitle>전공선택</MajorTitle>
                <MajorSelection/>
                
                <SaveButton type="submit">저장하기</SaveButton>
            </form>
        </Body>
    </Layout>
    
  );
};

export default SignUp;

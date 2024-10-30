import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { UserRegistrationType } from '../../recoil/types/userRegistration';
import { userRegistrationState } from '../../recoil/states/UserRegistrationState';
import MajorSelection from './ChoiceMajor/MajorSelection';
import { BackArrowContainer, Body, InputField, Layout, Line, MajorErrorText, MajorTitle, SaveButton, TitleText } from './Styles';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { BackArrow } from '../../assets/icon';

const SignUp: React.FC = () => {
    const [registrationInfo, setRegistrationInfo] = useRecoilState<UserRegistrationType>(userRegistrationState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [idDuplicateMessage, setIdDuplicateMessage] = useState<string>('');
    const [isIdChecked, setIsIdChecked] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSignBackClick = () => {
        navigate('/login'); 
    };


    const handleMajorDataChange = (majorData: { majorType: string, major1: string | null, major2?: string | null, minor?: string | null }) => {
        setRegistrationInfo((prev): UserRegistrationType => ({
            ...prev,
            major_type: majorData.majorType,
            major1: majorData.major1 ?? null,
            major2: majorData.major2 ?? null,
            minor: majorData.minor ?? null,
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!registrationInfo.name.match(/^[가-힣]{2,7}$/)) {
            newErrors.name = '이름은 2~7자리 한글이어야 합니다.';
        }
        const isIdValid = registrationInfo.id.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,12}$/);
        if (!isIdValid) {
            newErrors.id = '아이디는 3~12자리의 영문 및 숫자 조합이어야 합니다.';
        } else if (!isIdChecked) {
            newErrors.id = '아이디 중복 확인이 필요합니다.';
        }
        if (!registrationInfo.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=])[A-Za-z\d!@#$%^&*()_\-+=]{5,15}$/)) {
            newErrors.password = '비밀번호는 5~15자리의 영문, 숫자, 특수문자 조합이어야 합니다.';
        }
        if (registrationInfo.password !== registrationInfo.confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        }
        if (!registrationInfo.studentId.match(/^\d{9}$/)) {
            newErrors.studentId = '학번은 9자리 숫자여야 합니다.';
        }
        if (!registrationInfo.major1) {
            newErrors.major1 = '제1전공을 선택해야 합니다.';
        }
        if (registrationInfo.major_type === '복수전공' && !registrationInfo.major2) {
            newErrors.major2 = '제2전공을 선택해야 합니다.';
        }
        if (registrationInfo.major_type === '부전공' && !registrationInfo.minor) {
            newErrors.minor = '부전공을 선택해야 합니다.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // 오류가 없으면 true 반환
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            const requestBody = {
                name: registrationInfo.name,
                id: registrationInfo.id,
                pw: registrationInfo.password,
                number: registrationInfo.studentId,
                major_type: registrationInfo.major_type,
                major1: registrationInfo.major1 ,
                major2: registrationInfo.major2 || null,
                minor: registrationInfo.minor || null,
            };
            console.log(requestBody);

            try {
                const response = await fetch('https://www.everygrade.store/EveryGrade/user/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                const data = await response.json();
                console.log("Response Data:", data);
                if (response.ok) {
                    console.log("회원가입 성공:", data);
                    navigate('/login')
                } else {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        studentId: data.error.reason || '알 수 없는 오류가 발생했습니다.', 
                    }));
                    console.error('회원가입 오류:', data.message);
                }
            } catch (error) {
                console.error('서버 오류:', error);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegistrationInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (name === "id") {
            setIsIdChecked(false);
            setIdDuplicateMessage('');
        }
    };

    const checkIdDuplicate = async () => {
        if (!registrationInfo.id.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{3,12}$/)) {
            setErrors((prev) => ({ ...prev, id: '아이디는 3~12자리의 영문 및 숫자 조합이어야 합니다.' }));
            return;
        }
        try {
            const response = await fetch(`https://www.everygrade.store/EveryGrade/user/signup/isExistId/${registrationInfo.id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            if (data.isSuccess && data.result.isExist === "사용 가능한 아이디입니다.") {
                setIdDuplicateMessage(data.result.isExist);
                setErrors((prev) => ({ ...prev, id: '' }));
                setIsIdChecked(true);
            } else if (data.result.isExist === "이미 사용 중인 아이디입니다.") {
                setIdDuplicateMessage('이미 사용 중인 아이디입니다.');
                setErrors((prev) => ({ ...prev, id: '이미 사용 중인 아이디입니다.' }));
                setIsIdChecked(false);
            }
        } catch (error) {
            console.error('아이디 중복 확인 오류:', error);
        }
    };

    return (
        <Layout>
            {/* <Header backarrow/> */}
            <BackArrowContainer onClick={handleSignBackClick} >
                <BackArrow/>
            </BackArrowContainer>
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
                        <button type="button" onClick={checkIdDuplicate}>중복 확인</button>
                        {errors.id && <div className='errorText'>{errors.id}</div>}
                        {idDuplicateMessage && (
                            <div className='idMessage' style={{ color: idDuplicateMessage === '이미 사용 중인 아이디입니다.' ? 'rgba(239, 102, 102, 1)' : 'rgba(35, 124, 35, 1)' }}>
                                {idDuplicateMessage}
                            </div>
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
                            className={errors.password ? 'error' : ''}
                        />
                        {errors.password && <div className='errorText'>{errors.password}</div>}
                    </InputField>

                    <InputField>
                        <div>비밀번호 확인</div>
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
                    <MajorSelection onMajorDataChange={handleMajorDataChange} />
                    
                    {errors.major1 && <MajorErrorText>{errors.major1}</MajorErrorText>}
                    {errors.major2 && <MajorErrorText>{errors.major2}</MajorErrorText>}
                    {errors.minor && <MajorErrorText>{errors.minor}</MajorErrorText>}
                    
                    <SaveButton type="submit">저장하기</SaveButton>
                </form>
            </Body>
        </Layout>
    );
};

export default SignUp;

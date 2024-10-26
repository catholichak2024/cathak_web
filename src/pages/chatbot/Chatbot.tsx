import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import * as S from './Styles';
import { Reco } from '../../assets/icon';

const Chatbot: React.FC = () => {
    const [question, setQuestion] = useState<string>(''); // 사용자 입력 상태
    const [messages, setMessages] = useState<Array<{ type: 'user' | 'response'; content: string }>>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    // 스크롤을 최신 메시지로 이동
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (question.trim()) {
            // 사용자 메시지 추가
            setMessages((prevMessages) => [...prevMessages, { type: 'user', content: question }]);
            setQuestion(''); // 입력 필드 초기화

            // 서버에 비동기 요청
            try {
                const response = await fetch('http://10.1.14.88:5000/test/data', {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        major: "컴퓨터 공학과", // 로그인한 사용자의 정보로 대체 필요
                        student_id: 23, // 로그인한 사용자의 정보로 대체 필요
                        question: question,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const data = await response.json();
                console.log(data);
             // 서버 응답 메시지 추가
            setMessages((prevMessages) => [...prevMessages, { type: 'response', content: data.message || '응답을 받을 수 없습니다.' }]);
        } catch (error) {
            console.error('서버 오류:', error);
            setMessages((prevMessages) => [...prevMessages, { type: 'response', content: '서버와의 통신에 실패했습니다.' }]);
        }
        } else {
            console.log('질문을 입력해주세요');
        }
    };

    return (
        <div>
            <S.Layout>
                <S.FirstText>챗봇과 대화중</S.FirstText>
                <S.SecondText>
                    <div>안녕하세요,</div>
                    <div>교양추천 챗봇 <span className='reco'>리코</span>입니다!</div>
                </S.SecondText>
                <S.ThirdText>
                    <div>학번과 전공, 관심분야를 입력해주시면</div>
                    <div>당신을 위한 교양 수업을 추천해드릴게요!</div>
                </S.ThirdText>
                <S.ExampleContainer>
                    <div className='firstText'>이렇게 입력해보세요!</div>
                    <div>나는 미디어기술콘텐츠학과 2학년 학생이야.</div>
                    <div>영상관련 교양 수업을 추천해줘.</div>
                </S.ExampleContainer>

                {/* 전송된 메시지와 서버 응답 표시 */}
                {messages.map((msg, index) => (
                    <div key={index}>
                        {msg.type === 'user' ? (
                            <S.MyContainer>
                                <S.MyMessage>{msg.content}</S.MyMessage>
                            </S.MyContainer>
                        ) : (
                            <S.RecoContainer>
                                <Reco /> 
                                <S.RecoMessage>{msg.content}</S.RecoMessage>
                            </S.RecoContainer>
                        )}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </S.Layout>

            {/* 질문 입력 폼 */}
            <S.InputContainer>
                <input
                    type="text"
                    placeholder="메세지를 입력하세요."
                    value={question}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>전송</button>
            </S.InputContainer>
        </div>
    );
};

export default Chatbot;


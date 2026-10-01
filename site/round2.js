// 2차 통합 발표 전용 자료입니다. 1차 자료와 독립적으로 편집합니다.
export const secondRoundSlides = [
  {
    type: 'cover', title: 'GETDDO\n2차 멘토링', label: 'MENTORING 02',
    description: '화면 디자인 · 시스템 설계 · 구현 진행 사항',
    tags: ['화면 디자인', '구조·데이터', '처리 흐름'],
  },
  {
    type: 'agenda', title: '목차', label: 'CONTENTS',
    description: '서비스를 짧게 돌아보고, 화면과 설계 자료를 중심으로 공유합니다.',
    items: [
      { title: '프로젝트·시연 범위', description: '목표 · 핵심 기능 · 운영 범위', target: 2 },
      { title: '화면 디자인', description: '사용자 · 관리자 실제 화면', target: 4 },
      { title: '기술·시스템 구조', description: '핵심 기술 · 시스템 아키텍처', target: 6 },
      { title: '데이터 모델', description: 'ERD · 주요 엔티티 관계', target: 8 },
      { title: '시퀀스 다이어그램', description: '응모 · 추첨 및 결과 발표', target: 9 },
      { title: '진행 현황', description: '구현·검증 현황 · 확인할 사항', target: 11 },
    ],
  },
  {
    type: 'cards', title: '프로젝트 요약', label: '01 / OVERVIEW',
    description: '멤버십 사용자의 반복 참여와 이벤트 응모를 연결하는 서비스 · 설계 목표',
    cards: [
      { label: 'SERVICE', title: '참여를 응모로', text: 'LG유플러스 멤버십 사용자가 출석·미션·게임으로 응모권을 모으고, 원하는 이벤트에 참여합니다.', tag: '구매·결제 연계 없는 참여', tone: 'mint' },
      { label: 'CONSISTENCY', title: '응모권 정합성', text: '응모 기록·응모권 차감·이력을 함께 처리합니다. 지급·사용 이력을 누적해 보유량과 변동 근거를 확인합니다.', tag: '잔액과 이력의 일치', tone: 'yellow' },
      { label: 'TRACEABILITY', title: '설명 가능한 추첨', text: '추첨 대상·조건·시드 등 재현 자료와 운영자의 판단 이력을 남깁니다. 관리자 승인 후 결과를 공개합니다.', tag: '추첨 재현 · 운영 기록', tone: 'pink' },
    ],
  },
  {
    type: 'cards', title: '핵심 기능 · 시연 범위', label: '01 / SCOPE',
    description: '응모권 획득 → 이벤트 응모 → 결과 확인 · 사용자와 관리자 흐름',
    cards: [
      { label: 'USER', title: '응모권 획득·조회', text: '출석·미션·게임으로 응모권 획득. 보유량과 지급·사용 이력 확인.', tag: '게임 종류·세부 규칙은 미확정', tone: 'mint' },
      { label: 'EVENT', title: '두 가지 응모 방식', text: '응모권 미사용 이벤트와 지정 시각 응모권 사용 이벤트. 이벤트별 멤버십 자격·가중치 설정.', tag: '응모와 추첨 결과 확인', tone: 'yellow' },
      { label: 'ADMIN', title: '이벤트·추첨 운영', text: '이벤트·경품 관리, 어뷰징 검토, 추첨 이력 조회와 결과 발표 승인.', tag: '사용자 화면과 백오피스 연결', tone: 'pink' },
      { label: 'DEMO', title: '가상 사용자 시연', text: '고정 ID와 더미 데이터 사용. 관리자 별도 인증. 실제 결제·배송·외부 알림 발송 제외.', tag: '알림 모의 발송', tone: 'mint' },
    ],
  },
  {
    type: 'image', title: '화면 디자인 · 사용자', label: '02 / USER SCREENS', track: 'frontend',
    description: '브랜드 컬러와 마스코트를 반영한 실제 화면 · 홈 → 이벤트 상세·응모 → 응모권·결과',
    src: '', alt: 'GETDDO 사용자 화면 디자인', caption: '',
    placeholder: '실제 디자인 화면 추가 예정',
  },
  {
    type: 'image', title: '화면 디자인 · 관리자', label: '02 / ADMIN SCREENS', track: 'frontend',
    description: '이벤트 관리 → 응모·어뷰징 검토 → 추첨 결과 발표',
    src: '', alt: 'GETDDO 관리자 화면 디자인', caption: '',
    placeholder: '실제 디자인 화면 추가 예정',
  },
  {
    type: 'tech', title: '핵심 기술 스택', label: '03 / TECH STACK',
    description: '프론트엔드·백엔드의 주요 기술과 역할',
    items: [
      { icon: 'react', name: 'React · TypeScript', role: '화면 개발 · Vite 빌드' },
      { icon: 'spring', name: 'Spring Boot · Java', role: 'API · 비즈니스 로직' },
      { icon: 'tanstack', name: 'TanStack Query', role: '서버 상태 · API 연동' },
      { icon: 'mysql', name: 'JPA · MySQL', role: '데이터 저장 · 트랜잭션' },
      { icon: 'tailwindcss', name: 'Tailwind · shadcn/ui', role: 'UI 스타일 · 컴포넌트' },
      { icon: 'flyway', name: 'Flyway · Gradle', role: 'DB 스키마 변경 · 빌드' },
    ],
    notesTitle: '주요 보조 도구',
    notes: [
      { title: '상태·입력', text: 'Zustand · Redux Toolkit · React Hook Form · Zod' },
      { title: '모션·검증', text: 'GSAP · Framer Motion · Vitest · Testing Library · MSW' },
      { title: 'Redis', text: '도입 예정 · 용도와 적용 범위 확인 필요' },
    ],
  },
  {
    type: 'image', title: '시스템 아키텍처', label: '03 / SYSTEM ARCHITECTURE',
    description: '클라이언트·서버·데이터 저장소의 구성과 연결 관계',
    src: '', alt: 'GETDDO 시스템 아키텍처', caption: '',
    placeholder: '시스템 아키텍처 이미지 추가 예정',
  },
  {
    type: 'image', title: 'ERD', label: '04 / DATA MODEL', track: 'backend',
    description: '사용자·이벤트·응모권·응모·추첨을 중심으로 주요 엔티티와 관계 설명',
    src: '', alt: 'GETDDO ERD', caption: '',
    placeholder: 'ERD 이미지 추가 예정',
  },
  {
    type: 'image', title: '시퀀스 · 이벤트 응모', label: '05 / ENTRY SEQUENCE',
    description: '응모 요청부터 처리 결과까지 · 호출 순서·트랜잭션 경계·중복 및 실패 처리',
    src: '', alt: '이벤트 응모 시퀀스 다이어그램', caption: '',
    placeholder: '응모 시퀀스 다이어그램 추가 예정',
  },
  {
    type: 'image', title: '시퀀스 · 추첨 및 결과 발표', label: '05 / DRAW SEQUENCE',
    description: '대상 확정 → 추첨 → 관리자 승인 → 결과 공개·알림',
    src: '', alt: '추첨 및 결과 발표 시퀀스 다이어그램', caption: '',
    placeholder: '추첨·발표 시퀀스 다이어그램 추가 예정',
  },
  {
    type: 'cards', title: '진행 현황 · 확인할 사항', label: '06 / STATUS',
    description: '구현 완료 여부와 측정 결과는 팀 확인 후 반영합니다.',
    cards: [
      { label: 'DESIGN', title: '화면·설계 자료', text: '사용자·관리자 화면, 시스템 아키텍처, ERD와 시퀀스 다이어그램을 각 페이지에 추가.', tag: '실제 자료 삽입 예정', tone: 'mint' },
      { label: 'IMPLEMENTATION', title: '구현·검증 현황', text: '완료·진행 중 기능, API 연동 상황, 시연 및 테스트 결과를 정리.', tag: '팀 진행 현황 확인 후 추가', tone: 'yellow' },
      { label: 'REVIEW', title: '설계 확인', text: '응모 정합성, 중복 요청·실패 처리, 추첨과 발표의 트랜잭션 경계를 설계 자료와 함께 확인.', tag: '멘토링 논의', tone: 'pink' },
    ],
  },
  { type: 'ending', title: '감사합니다', label: 'GETDDO', description: '2차 멘토링' },
];

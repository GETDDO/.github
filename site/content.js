// 발표 내용은 이 파일에서 편집합니다. 사용 가능한 레이아웃은 README.md 참고.
export const tracks = {
  frontend: { name: '프론트엔드', english: 'Frontend', short: 'FE', description: '화면 및 API 연동' },
  backend: { name: '백엔드', english: 'Backend', short: 'BE', description: 'API 및 데이터 처리' },
};

// 표지·목차·요구사항은 두 트랙이 같은 데이터를 사용합니다.
const commonSlides = [
  {
    type: 'cover', shared: true, title: 'GETDDO\n1차 멘토링', label: 'MENTORING 01',
    description: '출석·미션·게임 기반 이벤트 응모 서비스',
    tags: ['이벤트', '응모권', '관리자'],
  },
  {
    type: 'agenda', shared: true, title: '목차', label: 'CONTENTS', description: '',
    items: [
      { title: '이벤트', description: '이벤트 유형 · 모집 시간 · 응모 방식', target: 2 },
      { title: '응모권', description: '획득 · 차감 · 만료 · 반환', target: 3 },
      { title: '관리자', description: '이벤트 운영 · 추첨 · 어뷰징 검토', target: 4 },
      { title: '아키텍처', description: '구성 및 연동', target: 5 },
      { title: '질문', description: '확인할 정책과 설계', target: 6 },
    ],
  },
  {
    type: 'cards', shared: true, title: '이벤트', label: '01 / EVENTS',
    description: '응모권 미사용 이벤트 / 지정 시각에 모집하는 응모권 사용 이벤트',
    cards: [
      { label: '01', title: '응모권 미사용', text: '응모 기간 내 사용자당 1회 응모. 응모권 차감 없이 이벤트 자체에 응모. 마감·검토 후 관리자 수동 추첨.', tag: '응모권 0장 · 사용자당 1회', tone: 'mint' },
      { label: '02', title: '응모권 사용', text: '지정 시각에 모집 시작, 설정된 마감 시각까지 접수. 이벤트당 모집 회차 1개. 마감 후 자동 추첨.', tag: '예: 15:00~15:10 모집 · 시간 설정 가능', tone: 'yellow' },
      { label: '03', title: '가중치·경품 구성', text: '가중치 적용: 여러 장 차감·추가 응모 가능. 미적용: 1장 차감·사용자당 1회. 단일 경품 또는 등수별 여러 경품 구성.', tag: '멤버십 등급별 응모 자격', tone: 'pink' },
    ],
    footnote: '응모자 수·차감 응모권 수 자동 갱신 · 관리자 승인 후 결과 발표 · 자동 추첨 시 미검토 건 처리 정책은 미정',
  },
  {
    type: 'cards', shared: true, title: '응모권', label: '02 / TICKETS',
    description: '이벤트 공통 응모권 · 보유량 및 지급·차감 이력 조회',
    cards: [
      { label: '01', title: '획득', text: '출석: 하루 1장. 일회성 미션: 설문·퀴즈·연속 출석. 게임: 하루 1회 1장 보상.', tag: '주간 미션 보류', tone: 'mint' },
      { label: '02', title: '차감·내역', text: '응모권 사용 이벤트에 응모할 때 차감. 보유량과 지급·차감 내역 확인. 중복 지급 및 보유량 초과 차감 방지.', tag: '응모 기록·차감·이력 함께 처리', tone: 'yellow' },
      { label: '03', title: '만료·반환', text: '월별 잔여 응모권 만료. 이벤트 취소 및 추첨 대상 제외 시 해당 응모의 차감분 반환. 반환·만료 내역 보관.', tag: '반환 시점·유효기간 세부 정책 미정', tone: 'pink' },
    ],
    footnote: '게임 일일 보상의 전체 합산·게임별 기준 미정 · 부정 획득 응모권은 별도 회수 정책 적용',
  },
  {
    type: 'cards', shared: true, title: '관리자', label: '03 / ADMIN',
    description: '이벤트·보상 운영, 추첨 결과 관리 및 어뷰징 검토',
    cards: [
      { label: '01', title: '운영 관리', text: '이벤트·경품·응모 조건 설정. 출석·미션·게임 보상 관리. 배너 등록·수정·삭제. 이벤트 중단·재개·취소.', tag: '중단: 일시 정지 / 취소: 최종 종료', tone: 'mint' },
      { label: '02', title: '추첨·결과 발표', text: '당첨자 및 추첨 이력 조회·재현. 사유를 기록한 수동 재추첨. 관리자 승인 후 결과 공개 및 응모자 알림.', tag: '알림함 · 읽음 처리 · 모의 발송', tone: 'yellow' },
      { label: '03', title: '어뷰징 검토', text: '의심 응모 확인 후 참여 허용 또는 추첨 대상 제외. 부정 획득 응모권 회수. 처리 사유·담당자·이력 기록.', tag: '일반 응모권 임의 지급·잔액 수정 제외', tone: 'pink' },
    ],
    footnote: '미션 인증 제출·관리자 승인 기능 제외 · 부정 획득분 회수는 최신 백오피스 항목 기준, 6절 제외 문구 정리 필요',
  },
];

const makeSlides = (track) => {
  const frontend = track === 'frontend';
  return [
    ...commonSlides,
    {
      type: 'architecture', title: '아키텍처',
      label: '04 / ARCHITECTURE', description: '구성 초안 · 기술 스택 및 연결 구조 작성 예정',
      nodes: frontend ? [
        { title: '사용자 화면', subtitle: '이벤트 · 출석 · 게임', detail: '화면 / 컴포넌트' },
        { title: '상태 & 요청', subtitle: '로딩 · 성공 · 오류', detail: '상태 관리 / API 연동' },
        { title: '서버와 연결', subtitle: '응모 · 현황 · 결과', detail: '연동 계약 / 갱신 방식' },
      ] : [
        { title: '요청 & 권한', subtitle: '사용자 · 관리자', detail: 'API / 인증·권한' },
        { title: '핵심 도메인', subtitle: '응모권 · 응모 · 추첨', detail: '정책 / 트랜잭션' },
        { title: '저장 & 전달', subtitle: '이력 · 결과 · 알림', detail: 'DB / 비동기 작업' },
      ],
      notes: frontend ? [
        ['화면 설계', '주요 사용자 흐름과 공통 컴포넌트'],
        ['연동 계약', '에러 코드 · 페이지네이션 · 멱등 키'],
        ['논의할 지점', '실시간 현황 갱신 방식과 주기'],
      ] : [
        ['정합성', 'DB 트랜잭션 · 유일 제약 · 조건부 차감'],
        ['초기 배포 요구', 'Docker 애플리케이션 1대 + DB · HTTPS'],
        ['검증 목표', '마감 집중 100 RPS · 응모 p95 1초 이하'],
      ],
    },
    {
      type: 'questions', title: '질문', label: '05 / QUESTIONS',
      description: '정책 및 구현 관련 확인 사항',
      questions: frontend ? [
        '응모·결과 확인 화면의 필수 상태와 안내 범위?',
        '실시간 현황 갱신 방식과 주기?',
        '멱등 키·에러 코드·페이지네이션 연동 계약?',
      ] : [
        '응모 접수 완료 시점과 마감 경계 처리 기준?',
        '이벤트 중단·취소와 동시 응모의 처리 순서?',
        '자동 추첨 시 미검토 탐지 건 및 월 경계 반환 처리?',
      ],
      footnote: '논의 항목 초안',
    },
  ];
};

// 2·3차는 해당 트랙에 slides를 추가하고 enabled: true로 바꾸면 열립니다.
export const rounds = [
  { id: '1', title: '1차 멘토링', subtitle: '요구사항 및 설계', description: '이벤트 · 응모권 · 관리자 · 아키텍처', stage: 'FOUNDATION', decks: {
    frontend: { enabled: true, slides: makeSlides('frontend') },
    backend: { enabled: true, slides: makeSlides('backend') },
  } },
  { id: '2', title: '2차 멘토링', subtitle: '구현 진행 사항', description: '발표 자료 준비 중', stage: 'BUILD & REFINE', decks: {
    frontend: { enabled: false, slides: [] }, backend: { enabled: false, slides: [] },
  } },
  { id: '3', title: '3차 멘토링', subtitle: '최종 구현 및 시연', description: '발표 자료 준비 중', stage: 'REVIEW & GROW', decks: {
    frontend: { enabled: false, slides: [] }, backend: { enabled: false, slides: [] },
  } },
];

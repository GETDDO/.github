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
      { title: '요구사항', description: '이벤트 · 응모권 · 관리자', target: 2 },
      { title: '아키텍처', description: '구성 및 연동', target: 5 },
      { title: '질문', description: '확인할 정책과 설계', target: 6 },
    ],
  },
  {
    type: 'cards', shared: true, title: '이벤트', label: '01 / REQUIREMENTS · 이벤트',
    description: '응모권 미사용 이벤트 / 지정 시각에 모집하는 응모권 사용 이벤트',
    cards: [
      { label: '01', title: '응모권 미사용', text: '응모 기간 내 사용자당 1회 응모. 응모권 차감 없이 이벤트 자체에 응모. 마감·검토 후 관리자 수동 추첨.', tag: '응모권 0장 · 사용자당 1회', tone: 'mint' },
      { label: '02', title: '응모권 사용', text: '지정 시각에 모집 시작, 설정된 마감 시각까지 접수. 이벤트당 모집 회차 1개. 마감 후 자동 추첨.', tag: '예: 15:00~15:10 모집 · 시간 설정 가능', tone: 'yellow' },
      { label: '03', title: '가중치·경품 구성', text: '가중치 적용: 여러 장 차감·추가 응모 가능. 미적용: 1장 차감·사용자당 1회. 단일 경품 또는 등수별 여러 경품 구성.', tag: '멤버십 등급별 응모 자격', tone: 'pink' },
    ],
    footnote: '응모자 수·차감 응모권 수 자동 갱신 · 관리자 승인 후 결과 발표 · 자동 추첨 시 미검토 건 처리 정책은 미정',
  },
  {
    type: 'cards', shared: true, title: '응모권', label: '01 / REQUIREMENTS · 응모권',
    description: '이벤트 공통 응모권 · 보유량 및 지급·차감 이력 조회',
    cards: [
      { label: '01', title: '획득', text: '출석: 하루 1장. 일회성 미션: 설문·퀴즈·연속 출석. 게임: 하루 1회 1장 보상.', tag: '주간 미션 보류', tone: 'mint' },
      { label: '02', title: '차감·내역', text: '응모권 사용 이벤트에 응모할 때 차감. 보유량과 지급·차감 내역 확인. 중복 지급 및 보유량 초과 차감 방지.', tag: '응모 기록·차감·이력 함께 처리', tone: 'yellow' },
      { label: '03', title: '만료·반환', text: '월별 잔여 응모권 만료. 이벤트 취소 및 추첨 대상 제외 시 해당 응모의 차감분 반환. 반환·만료 내역 보관.', tag: '반환 시점·유효기간 세부 정책 미정', tone: 'pink' },
    ],
    footnote: '게임 일일 보상의 전체 합산·게임별 기준 미정 · 부정 획득 응모권은 별도 회수 정책 적용',
  },
  {
    type: 'cards', shared: true, title: '관리자', label: '01 / REQUIREMENTS · 관리자',
    description: '이벤트·보상 운영, 추첨 결과 관리 및 어뷰징 검토',
    cards: [
      { label: '01', title: '운영 관리', text: '이벤트·경품·응모 조건 설정. 출석·미션·게임 보상 관리. 배너 등록·수정·삭제. 이벤트 중단·재개·취소.', tag: '중단: 일시 정지 / 취소: 최종 종료', tone: 'mint' },
      { label: '02', title: '추첨·결과 발표', text: '당첨자 및 추첨 이력 조회·재현. 사유를 기록한 수동 재추첨. 관리자 승인 후 결과 공개 및 응모자 알림.', tag: '알림함 · 읽음 처리 · 모의 발송', tone: 'yellow' },
      { label: '03', title: '어뷰징 검토', text: '의심 응모 확인 후 참여 허용 또는 추첨 대상 제외. 부정 획득 응모권 회수. 처리 사유·담당자·이력 기록.', tag: '일반 응모권 임의 지급·잔액 수정 제외', tone: 'pink' },
    ],
    footnote: '미션 인증 제출·관리자 승인 기능 제외 · 부정 획득분 회수는 최신 백오피스 항목 기준, 6절 제외 문구 정리 필요',
  },
];

// 백엔드 발표: 구현 확인이 필요한 항목은 추가 예정으로 유지.
const makeBackendSlides = () => [
  commonSlides[0],
  {
    type: 'agenda', title: '목차', label: 'CONTENTS', description: '',
    items: [
      { title: '프로젝트 개요', description: '범위 · 목표 규모 · 진행 상태', target: 2 },
      { title: '요구사항', description: '이벤트 · 응모권 · 관리자', target: 4 },
      { title: '시스템 아키텍처', description: '구성도 추가 예정', target: 7 },
      { title: 'ERD', description: '테이블 및 관계 추가 예정', target: 8 },
      { title: '핵심 처리 흐름', description: '응모 · 추첨 · 결과 발표', target: 9 },
      { title: '검증 계획', description: '정합성 · 부하 · 예외 상황', target: 11 },
      { title: '질문', description: '설계 검토 및 정책 확인', target: 12 },
    ],
  },
  {
    type: 'cards', title: '프로젝트 개요', label: 'OVERVIEW',
    description: '출석·미션·게임으로 받은 응모권을 사용하는 이벤트 응모 서비스',
    cards: [
      { label: 'SERVICE', title: '사용자·관리자', text: '사용자: 응모권 획득, 이벤트 응모, 결과 확인. 관리자: 이벤트·경품 운영, 어뷰징 검토, 추첨 결과 발표.', tag: '응모권 미사용·사용 이벤트', tone: 'mint' },
      { label: 'SCOPE', title: '시연 범위', text: '고정 ID의 가상 사용자와 더미 데이터로 시연. 관리자 기능은 별도 인증. 실제 결제·배송·외부 알림 발송 제외.', tag: '주간 미션 보류 · 알림 모의 발송', tone: 'yellow' },
      { label: 'TARGET', title: '목표 규모', text: '이벤트당 응모자 1,000명. 동시 접속 100명. 평시 20 RPS, 마감 직전 100 RPS를 1분간 유지.', tag: '요구사항 목표 · 측정 결과 아님', tone: 'pink' },
    ],
    footnote: '2026.09.17 요구사항 기준 · 동시 접속자 수와 초당 요청 수는 별도 지표',
  },
  {
    type: 'cards', title: '진행 상태', label: 'STATUS',
    description: '현재 자료에 반영된 내용과 추가할 자료',
    cards: [
      { label: 'REQUIREMENTS', title: '요구사항 정리', text: '이벤트·응모권·관리자 기능과 목표 규모 정리. 자동 추첨 시 미검토 건, 중단·재개 조건, 월 경계 반환 정책은 확인 필요.', tag: '정리된 범위와 미정 정책 구분', tone: 'mint' },
      { label: 'DESIGN', title: '설계 자료', text: '시스템 아키텍처, ERD, 기술 선택 근거, 상세 트랜잭션 경계와 연동 방식.', tag: '추가 예정', tone: 'yellow' },
      { label: 'IMPLEMENTATION', title: '구현·검증 현황', text: '완료·진행 중 기능, 담당 범위, 개발 일정, 시연 화면 및 테스트 결과.', tag: '팀 진행 현황 확인 후 추가 예정', tone: 'pink' },
    ],
    footnote: '기능별 구현 완료 여부는 미확인 · 다음 처리 흐름과 검증 계획은 요구사항 기준',
  },
  ...commonSlides.slice(2, 5),
  {
    type: 'image', title: '시스템 아키텍처', label: '02 / ARCHITECTURE',
    description: '프론트 · 백엔드 · DB · 이미지 저장소 · 알림 처리 연결 구성',
    src: '', alt: 'GETDDO 시스템 아키텍처', placeholder: '시스템 아키텍처 추가 예정', caption: '',
    footnote: '기술 스택, 구성요소별 역할, 통신 방식 및 선택 이유 추가 예정',
  },
  {
    type: 'image', title: 'ERD', label: '03 / ERD', description: '주요 테이블 및 관계',
    // 완성한 이미지를 site/assets/에 넣고 src 지정. 예: 'assets/erd.svg'
    src: '', alt: 'GETDDO 백엔드 ERD', placeholder: 'ERD 추가 예정', caption: '',
    footnote: '응모권 잔액·이력, 응모, 추첨 실행·결과, 반환·회수의 연결 구조 검토 예정',
  },
  {
    type: 'architecture', title: '응모 처리 흐름', label: '04 / ENTRY FLOW',
    description: '요구사항 기준 · 상세 처리 순서와 동시성 제어 방식 추가 예정',
    nodes: [
      { title: '접수 조건', subtitle: '응모 자격 · 모집 기간', detail: '멤버십 · 횟수 제한 · 중복 요청' },
      { title: '응모·차감', subtitle: '응모 기록 · 응모권 · 이력', detail: '함께 성공 또는 함께 실패' },
      { title: '응답·현황', subtitle: '접수 결과 · 내 응모 내역', detail: '응모자 수 · 차감 수량 반영' },
    ],
    notes: [
      ['정합성 기준', '중복 응모 반영·초과 차감 방지. 미사용 이벤트는 차감 없이 응모.'],
      ['요구사항의 초기 방안', 'DB 트랜잭션 · 유일 제약 · 조건부 차감. 실제 설계·구현 자료 추가 예정.'],
      ['확인할 부분', '멱등 키 생성·전달 방식, 접수 완료 시점, 마감과 동시 응모의 처리 기준.'],
    ],
    footnote: '실제 호출 순서도·트랜잭션 범위·실패 시 처리 상세 추가 예정',
  },
  {
    type: 'architecture', title: '추첨·결과 발표 흐름', label: '04 / DRAW FLOW',
    description: '추첨 결과 확정과 사용자에게 결과를 공개하는 시점 구분',
    nodes: [
      { title: '마감·대상 확정', subtitle: '유효 응모 · 제외 결과 반영', detail: '추첨 대상 및 조건 스냅샷 보관' },
      { title: '추첨·결과 확정', subtitle: '미사용: 수동 / 사용: 자동', detail: '실행별 중복 확정 방지 · 이력 보존' },
      { title: '관리자 발표', subtitle: '결과 공개 · 알림 작업 등록', detail: '알림 비동기 생성 · 실패 시 재시도' },
    ],
    notes: [
      ['발표 전 비공개', '관리자 승인 후 결과 공개. 전체 알림 생성 완료를 기다리지 않음.'],
      ['요구사항의 처리 기준', '발표 상태 변경과 알림 작업 등록을 같은 트랜잭션으로 처리.'],
      ['확인할 부분', '마감 시 미검토 탐지 건이 남은 경우 자동 추첨 처리 정책.'],
    ],
    footnote: '추첨 알고리즘·가중치 공식·재추첨 후보 및 상세 처리 구조 추가 예정',
  },
  {
    type: 'cards', title: '검증 계획', label: '05 / VALIDATION',
    description: '요구사항의 합격 기준 · 테스트 구현 및 측정 결과 추가 예정',
    cards: [
      { label: 'CONSISTENCY', title: '정합성', text: '같은 사용자의 동시 응모와 중복 요청. 출석·보상 중복 지급, 초과 차감, 추첨 결과 중복 확정 여부 확인.', tag: '정합성 오류 0건 목표', tone: 'mint' },
      { label: 'LOAD', title: '부하·응답 시간', text: 'k6: 20 RPS 10분, 100 RPS 1분. 조회 p95 500ms, 응모 p95 1초 이하. 예상하지 않은 오류 1% 미만.', tag: '서버·DB 사양 및 요청 비율 추가 예정', tone: 'yellow' },
      { label: 'EDGE CASES', title: '예외·경계 상황', text: '잔액 부족, 마감 경계, 이벤트 취소, 월별 만료·반환, 추첨 대상 없음, 알림 실패·재시도.', tag: '세부 시나리오·실행 결과 추가 예정', tone: 'pink' },
    ],
    footnote: '목표 수치이며 달성 결과 아님 · 정책상 정상 거절은 시스템 오류와 구분',
  },
  {
    type: 'questions', title: '질문', label: '06 / QUESTIONS',
    description: '요구사항의 초기 방안을 기준으로 검토할 항목',
    questions: [
      'DB 트랜잭션·유일 제약·조건부 차감 방안에서 중복 요청과 동시 응모에 빠진 정합성 조건은?',
      '응모 접수 완료 시점을 어디로 정할지? 마감·취소·월 경계 반환이 겹칠 때 처리 기준은?',
      '응모권 사용 이벤트의 자동 추첨 시 미검토 건 처리와 추첨·재추첨 이력 보존에서 필요한 기준은?',
    ],
    footnote: '아키텍처·ERD 완성 후 설계 근거 및 대안 비교 질문 추가 예정',
  },
  { type: 'ending', shared: true, title: '감사합니다', label: 'GETDDO', description: '1차 멘토링' },
];

const makeSlides = (track) => {
  if (track === 'backend') return makeBackendSlides();
  return [
    ...commonSlides,
    {
      type: 'architecture', title: '아키텍처',
      label: '02 / ARCHITECTURE', description: '구성 초안 · 기술 스택 및 연결 구조 작성 예정',
      nodes: [
        { title: '사용자 화면', subtitle: '이벤트 · 출석 · 게임', detail: '화면 / 컴포넌트' },
        { title: '상태 & 요청', subtitle: '로딩 · 성공 · 오류', detail: '상태 관리 / API 연동' },
        { title: '서버와 연결', subtitle: '응모 · 현황 · 결과', detail: '연동 계약 / 갱신 방식' },
      ],
      notes: [
        ['화면 설계', '주요 사용자 흐름과 공통 컴포넌트'],
        ['연동 계약', '에러 코드 · 페이지네이션 · 멱등 키'],
        ['논의할 지점', '실시간 현황 갱신 방식과 주기'],
      ],
    },
    {
      type: 'questions', title: '질문', label: '03 / QUESTIONS',
      description: '정책 및 구현 관련 확인 사항',
      questions: [
        '응모·결과 확인 화면의 필수 상태와 안내 범위?',
        '실시간 현황 갱신 방식과 주기?',
        '멱등 키·에러 코드·페이지네이션 연동 계약?',
      ],
      footnote: '논의 항목 초안',
    },
    {
      type: 'ending', shared: true, title: '감사합니다', label: 'GETDDO',
      description: '1차 멘토링',
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

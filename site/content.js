// 발표 내용은 이 파일에서 편집합니다. 사용 가능한 레이아웃은 README.md 참고.
export const tracks = {
  frontend: { name: '프론트엔드', english: 'Frontend', short: 'FE', description: '참여하고 싶은 경험을 설계합니다.' },
  backend: { name: '백엔드', english: 'Backend', short: 'BE', description: '신뢰할 수 있는 기회를 설계합니다.' },
};

// 표지·목차·요구사항은 두 트랙이 같은 데이터를 사용합니다.
const commonSlides = [
  {
    type: 'cover', shared: true, title: '작은 참여가,\n새로운 기회로.', label: '01 / FIRST MENTORING',
    description: '출석·미션·게임으로 응모권을 모으고,\n이벤트 응모를 통해 새로운 기회를 만나는 서비스.',
    tags: ['참여의 즐거움', '공정한 기회', '투명한 결과'],
  },
  {
    type: 'agenda', shared: true, title: '오늘, 함께 나눌 이야기', label: 'CONTENTS',
    description: '서비스의 방향부터 설계의 고민까지.',
    items: [
      { title: '요구사항', description: '7가지 핵심 기능으로 보는 서비스', target: 2 },
      { title: '아키텍처', description: '그 경험을 어떻게 연결할 것인가', target: 4 },
      { title: '질문 & 논의', description: '더 나은 결정을 위해 함께 고민할 것', target: 5 },
    ],
  },
  {
    type: 'cards', shared: true, title: '응모권을 모으고, 기회에 응모합니다.',
    label: '01 / REQUIREMENTS · 1 OF 2', description: '사용자 경험을 만드는 4가지 핵심 기능',
    cards: [
      { label: '01 · EARN', title: '출석·미션·게임', text: '출석, 설문·퀴즈·연속 출석 미션, 게임 플레이를 통해 응모권을 지급합니다.', tag: '참여 → 응모권 획득', tone: 'mint' },
      { label: '02 · TICKETS', title: '응모권 관리', text: '보유량과 지급·차감 이력을 조회하고, 월별 만료와 이벤트 취소 등에 따른 반환을 관리합니다.', tag: '지급 · 차감 · 만료 · 반환', tone: 'yellow' },
      { label: '03 · ENTER', title: '이벤트 탐색·응모', text: '이벤트와 멤버십 자격을 확인하고, 응모권 사용·미사용 이벤트에 응모합니다.', tag: '탐색 → 자격 확인 → 응모', tone: 'pink' },
      { label: '04 · LIVE', title: '실시간 응모 현황', text: '응모자 수와 전체·본인이 응모에 차감한 응모권 수를 자동 갱신합니다.', tag: '응모 현황 자동 갱신', tone: 'mint' },
    ],
    footnote: '2026.09.17 요구사항 기준 · 주간 미션 보류 · 미션 인증 제출·관리자 승인 기능 제외',
  },
  {
    type: 'cards', shared: true, title: '추첨부터 결과까지, 신뢰를 만듭니다.',
    label: '01 / REQUIREMENTS · 2 OF 2', description: '공정한 기회와 안정적인 운영을 위한 3가지 핵심 기능',
    cards: [
      { label: '05 · DRAW', title: '추첨·당첨자 관리', text: '이벤트 유형별 자동·수동 추첨과 중복 당첨 방지, 추첨 근거 보관·재현, 당첨 취소·재추첨을 지원합니다.', tag: '추첨 → 검증 → 이력 보존', tone: 'mint' },
      { label: '06 · RESULTS', title: '결과 발표·알림', text: '관리자 승인 후 결과를 공개합니다. 본인 당첨 결과와 이벤트 시작·결과 알림, 알림함·읽음 처리를 제공합니다.', tag: '발표 → 결과 확인 → 알림', tone: 'yellow' },
      { label: '07 · OPERATIONS', title: '관리자 운영·어뷰징 대응', text: '이벤트·경품·보상·배너를 관리하고, 의심 응모 검토·추첨 대상 제외와 부정 획득 응모권 회수 이력을 관리합니다.', tag: '운영 관리 · 부정 이용 대응', tone: 'pink' },
    ],
    footnote: '2026.09.17 요구사항 기준 · 부정 획득분 회수는 최신 백오피스 항목 기준이며, 6절 제외 문구와의 정리가 필요합니다.',
  },
];

const makeSlides = (track) => {
  const frontend = track === 'frontend';
  return [
    ...commonSlides,
    {
      type: 'architecture', title: frontend ? '하나의 흐름으로 이어지는 경험' : '신뢰를 만드는 처리의 흐름',
      label: '02 / ARCHITECTURE', description: '설계 논의용 템플릿 · 실제 기술 스택과 연결 구조를 이 자리에 추가하세요.',
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
      type: 'questions', title: '더 좋은 기회를,\n함께 만들어 가려면.', label: '03 / QUESTIONS & DISCUSSION',
      description: '설계의 선택과 아직 남아 있는 고민을 나눕니다.',
      questions: frontend ? [
        '응모에서 결과 확인까지, 사용자에게 꼭 필요한 피드백은 무엇일까요?',
        '실시간 갱신 방식과 화면 상태를 어떤 기준으로 나누면 좋을까요?',
        '멱등 키·에러 코드·페이지네이션 계약을 어떻게 맞출까요?',
      ] : [
        '응모 승인 시점과 마감 경계는 어떤 처리 단계로 정의할까요?',
        '중단·취소와 동시 응모, 응모권 반환 순서를 어떻게 보장할까요?',
        '관리자 응모권 회수 범위와 시간대 정책의 상충 내용을 어떻게 확정할까요?',
      ],
      footnote: '질문 예시입니다. 멘토링 전 팀의 실제 고민으로 교체하세요.',
    },
  ];
};

// 2·3차는 해당 트랙에 slides를 추가하고 enabled: true로 바꾸면 열립니다.
export const rounds = [
  { id: '1', title: '1차 멘토링', subtitle: '아이디어를 설계로', description: '서비스의 방향과 첫 번째 설계를 공유합니다.', stage: 'FOUNDATION', decks: {
    frontend: { enabled: true, slides: makeSlides('frontend') },
    backend: { enabled: true, slides: makeSlides('backend') },
  } },
  { id: '2', title: '2차 멘토링', subtitle: '설계를 경험으로', description: '구현 과정과 더 나은 선택을 이야기합니다.', stage: 'BUILD & REFINE', decks: {
    frontend: { enabled: false, slides: [] }, backend: { enabled: false, slides: [] },
  } },
  { id: '3', title: '3차 멘토링', subtitle: '경험을 완성으로', description: '완성된 서비스와 배운 점을 나눕니다.', stage: 'REVIEW & GROW', decks: {
    frontend: { enabled: false, slides: [] }, backend: { enabled: false, slides: [] },
  } },
];

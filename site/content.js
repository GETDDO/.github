// 발표 내용은 이 파일에서 편집합니다. 사용 가능한 레이아웃은 README.md 참고.
export const tracks = {
  frontend: { name: '프론트엔드', english: 'Frontend', short: 'FE', description: '참여하고 싶은 경험을 설계합니다.' },
  backend: { name: '백엔드', english: 'Backend', short: 'BE', description: '신뢰할 수 있는 기회를 설계합니다.' },
};

const makeSlides = (track) => {
  const frontend = track === 'frontend';
  return [
    {
      type: 'cover', title: '작은 참여가,\n새로운 기회로.', label: '01 / FIRST MENTORING',
      description: frontend ? '참여의 시작부터 결과의 순간까지,\n다시 찾고 싶은 사용자 경험을 만듭니다.' : '응모권 한 장부터 추첨 결과까지,\n모든 참여가 신뢰로 이어지는 흐름을 만듭니다.',
      tags: frontend ? ['사용자 경험', '참여 흐름', '화면 설계'] : ['데이터 정합성', '공정한 추첨', '안정적인 처리'],
    },
    {
      type: 'agenda', title: '오늘, 함께 나눌 이야기', label: 'CONTENTS',
      description: '서비스의 방향부터 설계의 고민까지.',
      items: [
        { title: '요구사항', description: '어떤 경험과 가치를 만들 것인가', target: 2 },
        { title: '아키텍처', description: '그 경험을 어떻게 연결할 것인가', target: 3 },
        { title: '질문 & 논의', description: '더 나은 결정을 위해 함께 고민할 것', target: 4 },
      ],
    },
    {
      type: 'cards', title: frontend ? '참여는 가볍게, 경험은 명확하게.' : '참여의 모든 순간에, 일관된 기록.',
      label: '01 / REQUIREMENTS', description: '출석·미션·게임으로 응모권을 모으고, 이벤트에 참여하는 서비스',
      cards: frontend ? [
        { label: '01 · EARN', title: '매일 쌓는 참여', text: '출석, 일회성 미션, 게임을 통해 응모권을 적립합니다. 보유량과 적립·사용 내역을 보여줍니다.', tag: '획득 → 확인', tone: 'mint' },
        { label: '02 · ENTER', title: '이해하기 쉬운 응모', text: '참여 기간, 멤버십 조건, 응모권 사용 여부와 가중치 규칙을 안내하고 응모 결과를 전달합니다.', tag: '탐색 → 응모', tone: 'yellow' },
        { label: '03 · DISCOVER', title: '끝까지 명확한 결과', text: '참여 현황을 자동 갱신하고 결과와 제외 사유를 구분합니다. 로딩·빈 목록·오류 상태도 설계합니다.', tag: '현황 → 결과', tone: 'pink' },
      ] : [
        { label: '01 · CONSISTENCY', title: '응모권 정합성', text: '보상 중복 지급과 초과 차감을 방지합니다. 응모·차감·사용 이력은 함께 성공하거나 함께 실패합니다.', tag: '중복 지급 · 초과 차감 0건', tone: 'mint' },
        { label: '02 · DRAW', title: '검증 가능한 추첨', text: '검토 후 추첨 대상을 확정하고 관리자 추첨을 실행합니다. 실행 이력과 재현·검증 결과를 보관합니다.', tag: '확정 → 추첨 → 검증', tone: 'yellow' },
        { label: '03 · DELIVERY', title: '안정적인 결과 전달', text: '결과 공개와 개인별 알림 생성을 분리합니다. 모의 알림을 비동기 처리하고 중복 생성과 누락을 방지합니다.', tag: '공개 → 비동기 알림', tone: 'pink' },
      ],
      footnote: '요구사항 요약 · 2026.09.16 기준 / 주간 미션은 보류 · 상세 정책과 미정 사항은 원문 참고',
    },
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

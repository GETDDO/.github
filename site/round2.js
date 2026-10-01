// 2차 통합 발표 전용 자료입니다. 1차 자료와 독립적으로 편집합니다.
export const secondRoundSlides = [
  {
    type: 'cover', title: 'GETDDO\n2차 멘토링', label: 'MENTORING 02',
    description: '멤버십 이벤트 플랫폼 · 서비스 기획과 설계',
    tags: ['주요 기능', '서비스 비교·차별점', '시스템 설계'],
  },
  {
    type: 'agenda', title: '목차', label: 'CONTENTS',
    description: '어떤 서비스를 만들고, 어떤 기능과 차별점을 제공할지 소개합니다.',
    items: [
      { title: '서비스 소개', description: '만들려는 서비스 · 대상 고객', target: 2 },
      { title: '주요 기능', description: '사용자 기능 · 관리자 기능', target: 3 },
      { title: '유사 서비스·차별점', description: '서비스별 비교 · GETDDO의 특징', target: 5 },
      { title: '기술·데이터 설계', description: '기술 스택 · 아키텍처 · ERD', target: 7 },
      { title: '사용자 흐름', description: '화면 이동 · 사용자 행동', target: 10 },
    ],
  },
  {
    type: 'cards', title: 'GETDDO 서비스 소개', label: '01 / SERVICE',
    description: '출석·미션·게임으로 응모권을 모아 경품 이벤트에 참여하는 멤버십 플랫폼을 만들고자 합니다.',
    cards: [
      { label: 'GOAL', title: '매일 이용하는 멤버십', text: '기간 한정 이벤트와 상시 참여 콘텐츠를 함께 제공해 고객이 꾸준히 멤버십을 이용할 기회를 만듭니다.', tag: '출석 · 미션 · 게임 · 경품 이벤트', tone: 'mint' },
      { label: 'TARGET', title: 'LG유플러스 멤버십 고객', text: '멤버십 전 등급 고객을 대상으로 합니다. 개별 이벤트에서 참여 가능한 등급과 조건을 설정합니다.', tag: '이벤트별 참여 조건 설정', tone: 'yellow' },
      { label: 'FLOW', title: '응모권 획득부터 당첨 확인까지', text: '응모권을 모으고, 원하는 경품 이벤트에 응모한 뒤, 발표된 당첨 결과를 한 서비스에서 확인합니다.', tag: '획득 → 응모 → 결과 확인', tone: 'pink' },
    ],
  },
  {
    type: 'cards', title: '사용자 기능', label: '02 / USER FEATURES',
    description: '고객은 일상 콘텐츠로 응모권을 얻고, 원하는 경품 이벤트에 참여합니다.',
    cards: [
      { label: 'REWARD', title: '출석·미션·게임', text: '출석 체크, 설문·퀴즈 등의 미션, 게임 참여로 응모권을 획득합니다.', tag: '활동별 응모권 보상', tone: 'mint' },
      { label: 'EVENT', title: '이벤트 조회·응모', text: '경품과 참여 조건을 확인하고, 응모권 사용 또는 미사용 이벤트에 응모합니다.', tag: '이벤트별 응모 방식·가중치', tone: 'yellow' },
      { label: 'TICKET', title: '응모권 조회', text: '보유 응모권 수와 지급·사용·만료·반환 내역을 확인합니다.', tag: '보유량 · 변동 내역', tone: 'pink' },
      { label: 'RESULT', title: '당첨 결과·알림', text: '발표된 당첨자와 경품을 확인하고, 알림함에서 안내를 조회·읽음 처리합니다.', tag: '결과 조회 · 알림함', tone: 'mint' },
    ],
  },
  {
    type: 'cards', title: '관리자 기능', label: '02 / ADMIN FEATURES',
    description: '관리자는 이벤트를 등록하고, 응모 검토부터 추첨·결과 발표까지 운영합니다.',
    cards: [
      { label: 'EVENT', title: '이벤트·경품 관리', text: '경품·응모 조건·모집 시간을 설정하고, 이벤트를 중단·재개·취소합니다.', tag: '등급 조건 · 가중치 설정', tone: 'mint' },
      { label: 'CONTENT', title: '보상·배너 관리', text: '출석·미션·게임의 보상을 관리하고, 서비스 배너를 등록·수정·삭제합니다.', tag: '참여 콘텐츠 · 노출 관리', tone: 'yellow' },
      { label: 'DRAW', title: '추첨·결과 발표', text: '당첨자와 추첨 이력을 조회하고, 사유를 남겨 재추첨합니다. 승인 후 결과를 공개합니다.', tag: '추첨 이력 · 재추첨 · 발표 승인', tone: 'pink' },
      { label: 'REVIEW', title: '부정 참여 검토', text: '의심 응모의 참여 허용·제외를 결정하고 부정 획득 응모권을 회수합니다. 사유와 담당자를 기록합니다.', tag: '검토 · 회수 · 처리 이력', tone: 'mint' },
    ],
  },
  {
    type: 'comparison', title: '유사 서비스 분석', label: '03 / COMPARISON',
    description: '멤버십 혜택·활동 보상·행사 운영 서비스를 비교해 GETDDO의 기획 방향을 정했습니다.',
    rows: [
      ['SKT T멤버십', '제휴 할인·혜택 · 멤버십 이벤트', '출석·미션·게임과 경품 응모를 연결'],
      ['캐시워크', '걷기·챌린지로 캐시 적립', '응모권을 모아 멤버십 경품 이벤트에 참여'],
      ['이벤터스', '행사 개설 · 참가 신청 · 운영', '멤버십 보상 획득·경품 응모 운영에 집중'],
      ['구매 연계 경품 이벤트', '구매·리뷰를 참여 조건으로 설정', '구매 없이 출석·미션·게임으로 참여'],
    ],
  },
  {
    type: 'cards', title: 'GETDDO의 차별점', label: '03 / DIFFERENCE',
    description: '여러 참여 콘텐츠를 응모권으로 연결하고, 고객 참여와 관리자 운영을 함께 구성합니다.',
    cards: [
      { label: 'REWARD', title: '출석·미션·게임을 응모권으로', text: '활동별로 모은 응모권을 원하는 경품 이벤트에 사용합니다. 상품 구매를 참여 조건으로 두지 않습니다.', tag: '보상 획득 → 경품 응모', tone: 'mint' },
      { label: 'ENTRY', title: '두 가지 응모 방식', text: '응모권 없이 1회 참여하는 이벤트와 응모권을 사용하는 이벤트를 제공합니다. 가중치는 이벤트별로 설정합니다.', tag: '응모권 미사용형 · 사용형', tone: 'yellow' },
      { label: 'OPERATION', title: '참여부터 결과 발표까지', text: '고객 화면과 관리자 화면을 함께 제공합니다. 이벤트 등록·응모 검토·추첨·발표를 한 흐름으로 운영합니다.', tag: '사용자 서비스 · 관리자 도구', tone: 'pink' },
      { label: 'HISTORY', title: '추첨 재현·응모권 이력', text: '추첨 당시 조건으로 결과를 재현하고 재추첨 사유를 보관합니다. 응모권 변동 이력으로 지급·차감·반환을 확인합니다.', tag: '추첨 검증 · 응모권 내역 확인', tone: 'mint' },
    ],
  },
  {
    type: 'tech', title: '핵심 기술 스택', label: '04 / TECH STACK',
    description: '프론트엔드·백엔드의 주요 기술과 역할',
    items: [
      { icon: 'react', name: 'React · TypeScript', role: '화면 개발 · Vite 빌드' },
      { icon: 'spring', name: 'Spring Boot · Java', role: 'API · 비즈니스 로직' },
      { icon: 'tanstack', name: 'TanStack Query', role: '서버 상태 · API 연동' },
      { icon: 'mysql', name: 'JPA · MySQL', role: '데이터 저장 · 트랜잭션' },
      { icon: 'tailwindcss', name: 'Tailwind · shadcn/ui', role: 'UI 스타일 · 컴포넌트' },
      { icon: 'redis', name: 'Redis', role: '백엔드 인메모리 데이터 저장소' },
      { icon: 'flyway', name: 'Flyway · Gradle', role: 'DB 스키마 변경 · 빌드' },
    ],
    notesTitle: '주요 보조 도구',
    notes: [
      { title: '상태·입력', text: 'Zustand · Redux Toolkit · React Hook Form · Zod' },
      { title: '모션·검증', text: 'GSAP · Framer Motion · Vitest · Testing Library · MSW' },
      { title: 'AWS 인프라', text: 'ALB · EC2 · RDS · ElastiCache · S3 · CloudWatch' },
    ],
  },
  {
    type: 'image', layout: 'diagram', title: '시스템 아키텍처', label: '04 / SYSTEM ARCHITECTURE',
    description: '2개 가용 영역에 ALB·EC2 배치. RDS(MySQL)·ElastiCache를 공유하고, S3로 파일을 저장하며 CloudWatch로 로그·지표를 확인합니다.',
    src: 'assets/round2-architecture.png', alt: 'GETDDO AWS 시스템 아키텍처: 2개 가용 영역의 ALB·EC2, 공유 RDS·ElastiCache, S3·CloudWatch', caption: '',
  },
  {
    type: 'image', title: 'ERD', label: '04 / DATA MODEL', track: 'backend',
    description: '사용자·이벤트·응모권·응모·추첨을 중심으로 주요 엔티티와 관계 설명',
    src: '', alt: 'GETDDO ERD', caption: '',
    placeholder: 'ERD 이미지 추가 예정',
  },
  {
    type: 'image', layout: 'journey', title: '사용자 이용 흐름', label: '05 / USER JOURNEY',
    description: '홈에서 원하는 활동을 선택하고, 이벤트에 응모한 뒤 당첨 결과를 확인합니다.',
    src: 'assets/round2-user-journey.svg',
    alt: '홈에서 출석·미션·게임으로 응모권을 모으거나 바로 이벤트를 선택합니다. 상세 확인과 응모 후 내 응모 내역에서 발표를 기다리고, 알림함 또는 이벤트에서 당첨 결과를 확인합니다.', caption: '',
  },
  { type: 'ending', title: '감사합니다', label: 'GETDDO', description: '2차 멘토링' },
];

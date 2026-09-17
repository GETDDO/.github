# GETDDO · Mentoring Studio

민트 컬러와 응모권 모티프를 사용한 멘토링 발표 웹 템플릿입니다. 브라우저에서 16:9 슬라이드를 넘기며 발표합니다. PowerPoint 파일을 생성하는 도구는 아닙니다.

## 미리보기

이 폴더에서 실행합니다. `index.html`을 더블클릭하는 대신 로컬 서버를 사용하세요(ES modules 사용).

```sh
python3 -m http.server 4173 --directory site
```

브라우저에서 http://localhost:4173 을 엽니다. 실행 시 npm 설치나 빌드는 필요 없습니다. 글꼴과 모든 화면 리소스가 포함되어 런타임 CDN 요청도 없습니다.

## 화면 구성

- 메인: 1·2·3차 멘토링 → 프론트엔드 / 백엔드 선택
- 1차: 공통 표지 · 목차 · 이벤트 · 응모권 · 관리자 → 트랙별 아키텍처 · 질문 → 공통 감사합니다, 프론트 8장 / 백엔드 14장(개요·진행 상태·처리 흐름·검증 계획 포함)
- 2·3차: 준비 중, 링크 및 직접 URL 접근 비활성화
- 발표: 좌측 슬라이드 목록, 이전/다음, 전체 화면, 현재 슬라이드 주소 공유
- 방향키 / Page Up·Down / Space: 이동, Home·End: 첫 장·마지막 장
- F: 전체 화면 전환, 전체 화면 종료 버튼 또는 브라우저 Esc: 종료
- 작은 화면: 하단 ‘슬라이드 목록’ 버튼, 가로 방향 사용 권장

## 내용 편집

`site/content.js`의 `rounds` → 차수 → `decks.frontend` 또는 `decks.backend` → `slides`를 편집합니다. 공통 표지·요구사항은 `commonSlides`에서 관리합니다. 백엔드 전용 내용은 `makeBackendSlides()`에서, 프론트 내용은 `makeSlides(track)`에서 관리합니다. 표지의 차수 라벨도 내용 데이터입니다.

슬라이드를 추가하려면 `slides` 배열에 객체를 추가합니다. 개수와 번호, 진행률, 좌측 목록은 자동 반영됩니다. 목차는 의도한 흐름을 유지하도록 `items`를 직접 편집하며 `target`은 **0부터 시작하는 슬라이드 인덱스**입니다.

각 레이아웃의 속성:

| type | 필수 내용 |
| --- | --- |
| `ending` | `title`, `description` (감사합니다 등 마무리) |
| `cover` | `title`, `description`, `tags: ['키워드']` |
| `agenda` | `title`, `items: [{title, description, target: 2}]` |
| `cards` | `title`, `cards: [{label, title, text, tag, tone: 'mint'}]` |
| `architecture` | `title`, `nodes: [{title, subtitle, detail}]`, `notes: [['주제', '설명']]` |
| `questions` | `title`, `description`, `questions: ['질문']` |
| `text` | `title`, `paragraphs: ['문단']`, 선택 `bullets: ['항목']` |
| `split` | `title`, `columns: [{label, title, paragraphs: ['문단']}]` |
| `image` | `title`, `src: 'assets/diagram.svg'`, `alt`, `caption` |

공통 선택 속성은 `label`, `description`, `footnote`입니다. `title`의 `\n`은 줄바꿈으로 표시됩니다. 모든 본문은 일반 텍스트로 취급하며 HTML을 넣지 않습니다. 이미지 경로는 `assets/` 아래 또는 `https://` 주소만 지원합니다. 카드 3개 또는 4개(2×2), 아키텍처 노드 3개, 질문 3개, 비교 2열을 기준으로 설계했습니다. 내용이 길면 여러 장으로 나누세요.

예: 비교 장 추가

```js
{
  type: 'split',
  label: '04 / DECISION',
  title: '설계 대안 비교',
  description: '팀이 검토한 선택과 근거',
  columns: [
    { label: 'OPTION A', title: '폴링', paragraphs: ['구현 방식과 장단점을 적습니다.'] },
    { label: 'OPTION B', title: 'SSE', paragraphs: ['구현 방식과 장단점을 적습니다.'] },
  ],
  footnote: '논의 중 · 결정 후 내용을 업데이트합니다.',
}
```

## 2·3차 열기

트랙별로 내용과 공개 여부를 관리합니다. 예를 들어 2차 프론트엔드:

```js
frontend: {
  enabled: true,
  slides: [
    {
      type: 'cover', label: '02 / SECOND MENTORING',
      title: '설계를 경험으로.', description: '2차 프론트엔드 멘토링', tags: ['구현', '사용자 경험'],
    },
    { type: 'text', title: '이번 멘토링에서 나눌 내용', paragraphs: ['팀 발표 내용을 입력합니다.'] },
  ],
}
```

`enabled: true`와 비어 있지 않은 `slides`가 모두 있어야 열립니다. 백엔드는 준비될 때 독립적으로 열 수 있습니다.

## 디자인과 요구사항

- 목차: **요구사항 → 아키텍처 → 질문**. 백엔드는 아키텍처 다음 **ERD** 항목 추가. 요구사항 세부 페이지: 이벤트 · 응모권 · 관리자. 마지막은 감사합니다 페이지.
- 브랜드: `#1FBE8E`, 소프트 민트 `#E8FAF3`
- 응모권: 오렌지 `#FF5A2D`, 노랑 `#FFC83D`
- 원본 로고의 U+ 마젠타는 유지합니다.
- 원본 파일: `site/assets/logo.svg`, `site/assets/colors.svg`
- Pretendard Variable과 SIL OFL 라이선스: `site/assets/`
- `site/requirements.md`: 제공받은 요구사항 스냅샷(문서의 최신화 표기는 2026-09-17)
- 내용은 요약 예시입니다. 아키텍처는 **설계 논의용 템플릿**이며 실제 구현 상태를 의미하지 않습니다.
- 요구사항 원문에 시간대·관리자 응모권 회수 범위·발표 시점 등의 상충/미정 항목이 남아 있습니다. 발표 전 팀이 확정한 정책으로 내용을 갱신하세요.

## GETDDO/.github에 배포

이 폴더 **내부 파일 전체**를 `GETDDO/.github` 저장소의 루트에 둡니다. `presentation-site` 폴더 자체를 한 단계 더 감싸서 올리지 않습니다. 조직 프로필 README를 추가할 경우 `profile/README.md`에 두면 사이트와 분리됩니다.

1. 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 설정합니다.
2. `main`에 코드를 반영하거나 Actions의 **Deploy mentoring studio**를 수동 실행합니다.
3. 배포 워크플로 성공 후 `https://getddo.github.io/.github/`에서 확인합니다. 사용자 지정 도메인이 있다면 주소는 다를 수 있습니다.

워크플로는 `site/`만 업로드합니다. 메인 파일, 폰트, 원본 색상표 및 요구사항 스냅샷은 이 배포 폴더에 포함됩니다. 발표 자료와 요구사항 링크가 사이트 방문자에게 제공됩니다.

저장소는 사용자 승인에 따라 **public**으로 전환했으며, GitHub Pages의 **GitHub Actions** 배포를 활성화했습니다. 게시 주소는 https://getddo.github.io/.github/ 입니다. 배포 성공 여부는 Actions 결과와 게시 주소에서 확인할 수 있습니다.

참고: [GitHub Pages 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

## 검증

```sh
npm install
npx playwright install chromium
npm test
```

자동 검증은 `/.github/` 하위 경로의 리소스, 활성/비활성 트랙, 키보드·목차 이동, 슬라이드 경계, 직접 URL과 새로고침, 전체 화면 유지/종료, 모바일 세로/가로 비율, 본문 겹침, 미래 차수 활성화, 범용 레이아웃을 실제 Chromium에서 확인합니다.

기존 Chromium을 사용하려면 `CHROMIUM_PATH=/경로/chrome npm test`로 실행합니다.

## 백엔드 ERD 추가

백엔드 아키텍처 다음에 ERD 이미지 페이지가 있습니다. 현재는 `ERD 추가 예정` 표시이며 빈 이미지 요청은 발생하지 않습니다.

1. 완성한 ERD 이미지를 `site/assets/erd.svg` 또는 `site/assets/erd.png`로 저장합니다.
2. `site/content.js`의 `title: 'ERD'` 객체에서 `src: ''`를 `src: 'assets/erd.svg'` 등 실제 경로로 수정합니다.
3. 이미지 아래 설명이 필요하면 `caption`을 입력합니다.

프론트 발표에는 ERD 페이지를 추가하지 않습니다.

## 백엔드 발표 구성

표지 → 목차 → 프로젝트 개요 → 진행 상태 → 요구사항(이벤트·응모권·관리자) → 시스템 아키텍처 → ERD → 응모 처리 흐름 → 추첨·결과 발표 흐름 → 검증 계획 → 질문 → 감사합니다.

- 프로젝트 범위·목표 규모·처리 기준·검증 목표: 요구사항 기준으로 작성.
- 시스템 아키텍처·ERD: 추가 예정. 해당 이미지 슬라이드의 `src`를 지정하면 표시.
- 기술 선택 근거·상세 처리 방식·진행 상태·담당·일정·측정 결과: 확인 후 추가 예정.
- 성능 수치는 합격 목표이며 실제 측정값이나 달성 결과가 아님.
- 흐름도는 요구사항 요약이며 실제 구현의 호출 순서나 완성된 시스템 구성도가 아님.

백엔드 목차를 변경할 때 `items[].target`의 0부터 시작하는 슬라이드 인덱스도 함께 갱신합니다.

# TailwindCSS
마크업에서 직접 모든 디자인을 구축하도록 구성할 수 있는 flex, pt-4, text-center 및 rotate-90과 같은 다양한 클래스로 가득 찬 유틸리티 최초의 CSS 프레임워크입니다.
https://tailwindcss.com

Tailwind CSS IntelliSense (확장 프로그램)
Tailwind CSS IntelliSense는 Visual Studio Code 사용자에게 자동 완성, 구문 강조 표시 및 린팅과 같은 고급 기능을 제공하여 Tailwind 개발 환경을 향상시킵니다.
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

TailwindCSS 클래스 검색 사이트
https://tailwind.spacet.me/
https://tailwind.build/classes


TailwindCSS Modifier 리스트

기본적으로 Tailwind에 포함된 모든 단일 modifier들입니다.
(~일 때 실행하는 것들)
```
Modifier(왼쪽), CSS(오른쪽)
hover (&:hover)
focus (&:focus)
active (&:active)
first (&:first-child)
disabled (&:disabled)
sm (@media (min-width: 640px))
md ( @media (min-width: 768px))
lg (@media (min-width: 1024px))
dark (@media (prefers-color-scheme: dark))
등등
```
https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference


Ring Width
상자 그림자가 있는 윤곽선을 만들기 위한 유틸리티입니다.
ring-{width} 유틸리티를 사용하여 특정 두께의 solid box-shadow를 요소에 적용합니다. 링은 기본적으로 반투명한 파란색으로 많은 시스템의 기본 포커스 링 스타일과 유사합니다.
ex) ring-2 ring-offset-2 focus:ring-2 ring-red-500
```
button class="ring-2 ring-offset-2 focus:ring-2"
div class="ring-2 hover:ring-4 md:ring-4"
```
https://tailwindcss.com/docs/ring-width

Ring Color
외곽선 링의 색상을 설정하는 유틸리티입니다.
ring-{color} 유틸리티를 사용하여 외곽선 링의 색상을 설정합니다.
```
button class="... ring-2 ring-blue-500"
button class="... ring-2 ring-blue-500/50
```
https://tailwindcss.com/docs/ring-color



:empty

empty modifier를 사용하여 콘텐츠가 없는 경우 스타일을 지정합니다.
콘텐츠가 없는 경우=>빈 텍스트, undefined, null등과 같이 값이 없는 경우에 해당
+ empty:hidden은 display: none과 같다.
```
{[1, 2, ""].map((number) => (
< h3 className="bg-red-500 empty:hidden" key={number}>
{number}
< /h3>
))}
```
https://tailwindcss.com/docs/hover-focus-and-other-states#empty

짝수=> even:bg-blue-200
홀수=> odd:bg-red-200



group
상위(부모) 상태를 기반으로 한 스타일 지정
일부 부모 요소의 상태를 기반으로 요소의 스타일을 지정해야 하는 경우 부모를 group 클래스로 표시하고 group-hover와 같은 group-* 수정자를 사용하여 대상 요소의 스타일을 지정합니다.
이 패턴은 group-focus, group-active 또는 group-odd와 같은 모든 유사 클래스 수정자와 함께 작동합니다.
```
< a href="#" class="group">
< h3 class="group-hover:text-white">New project< /h3>
< /a>
```
https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state

peer
형제 상태를 기반으로 한 스타일 지정
형제 요소의 상태를 기반으로 요소의 스타일을 지정해야 하는 경우 형제를 peer 클래스로 표시하고 peer-invalid와 같은 peer-* 수정자를 사용하여 대상 요소의 스타일을 지정합니다. 이 패턴은 모든 유사 클래스 수정자(예: peer-focus, peer-required 및 peer-disabled)와 함께 작동합니다.
< input class="peer"/ >
< p class="peer-invalid:visible"> Pizza< /p>
```
https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state


details
HTML details 요소는 "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. 요약이나 레이블은 summary 요소를 통해 제공할 수 있습니다. 정보 공개 위젯은 보통 레이블 옆의 작은 삼각형이 돌아가면서 열림/닫힘 상태를 나타냅니다. details 요소의 첫 번째 자식이 summary 요소라면, summary의 콘텐츠를 위젯의 레이블로 사용합니다.
```
< details>
< summary>Details
Something small enough to escape casual notice.
< /details>
```
https://developer.mozilla.org/ko/docs/Web/HTML/Element/details

File input buttons
파일 수정자를 사용하여 파일 입력의 버튼 스타일 지정
ex) file:mr-4 file:py-2 file:px-4
https://tailwindcss.com/docs/hover-focus-and-other-states?email=george%40krugerindustrial&password=Bosco#file-input-buttons

::file-selector-button
::file-selector-button CSS 의사 요소는 type="file"의 input 버튼을 나타냅니다.
ex) input[type=file]::file-selector-button
https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button


obile First

기본적으로 Tailwind는 Bootstrap과 같은 다른 프레임워크에서 사용하는 것과 유사한 모바일 우선 breakpoint 시스템을 사용합니다. 이것이 의미하는 바는 접두사가 붙지 않은 유틸리티(예: uppercase)는 모든 화면 크기에 적용되는 반면 접두사가 붙은 유틸리티(예: md:uppercase)는 지정된 breakpoint 이상에서만 적용됩니다.

이 접근 방식이 사람들을 가장 자주 놀라게 하는 부분은 모바일용으로 스타일을 지정하려면 sm: 접두사가 붙은 버전이 아니라 접두사가 없는 버전의 유틸리티를 사용해야 한다는 것입니다. sm을 "작은 화면에서"를 의미하는 것으로 생각하지 마십시오. "작은 breakpoint"로 생각하십시오.
div class="sm:text-center" => 작은 사이즈 (not 모바일)

이러한 이유로 디자인을 위한 모바일 레이아웃을 먼저 구현한 다음 sm 화면에 적합한 변경 사항을 레이어링한 다음 md 화면 등을 적용하는 것이 좋습니다.
```
sm 640px @media (min-width: 640px) { ... }
md 768px @media (min-width: 768px) { ... }
lg 1024px @media (min-width: 1024px) { ... }
xl 1280px @media (min-width: 1280px) { ... }
2xl 1536px @media (min-width: 1536px) { ... }
```
https://tailwindcss.com/docs/responsive-design#mobile-first

Customizing breakpoints
https://tailwindcss.com/docs/responsive-design#customizing-breakpoints


Dark Mode
Tailwind에는 dark 모드가 활성화되어 있을 때 사이트 스타일을 다르게 지정할 수 있습니다. 현재 사용 중인 컴퓨터에서 설정한 라이트 모드 또는 다크 모드에 따라 dark가 자동으로 적용됩니다.
ex) dark:bg-slate-900
https://tailwindcss.com/docs/dark-mode

수동으로 다크 모드 전환
운영 체제 기본 설정에 의존하는 대신 수동으로 다크 모드 전환을 지원하려면 media 대신 class을 사용하십시오.
```
// tailwind.config.js
module.exports = {
// 클래스를 기준으로 다크모드 적용 (최상위 부모에 dark클래스 지정)
darkMode: 'class',

// @media(prefers-color-scheme)를 기준으로 다크모드 적용 (기본 값)
darkMode: "media",
}
```
https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

prefers-color-scheme
prefers-color-scheme CSS 미디어 특성은 사용자의 시스템이 라이트 테마나 다크 테마를 사용하는지 탐지하는 데에 사용됩니다.
```
@media (prefers-color-scheme: light) {
.themed {
background: white;
color: black;
}
}
```
https://developer.mozilla.org/ko/docs/Web/CSS/@media/prefers-color-scheme


Migrating to the JIT engine

2021년 3월에 발표한 새로운 Just-in-Time 엔진이 Tailwind CSS v3.0의 클래식 엔진을 대체했습니다. 새로운 엔진은 프로젝트에 필요한 스타일을 주문형으로 생성합니다.

Tailwind CSS v3.0 이전: 거대한 CSS파일을 생성하고, 그 파일에 이미 정의해놓은 클래스들을 가져와 사용하는 방식.
대략 20만줄 정도 되는 클래스로 가득찬 파일을 가져와 개발 단계에서 사용하기 때문에 매우 무겁고, 배포 전에는 purge를 해줘야 해서 번거로움

Tailwind CSS v3.0이후: 사용자가 사용하는 스타일들만 그때 그때 생성해서 사용하는 방식. 여러 클래스들을 조합해서 사용할 수 있고, 매우 가볍고, 배포 전 purge를 해주지 않아도 되서 편함

https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine
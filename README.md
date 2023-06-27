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
# TailwindCSS

마크업에서 직접 모든 디자인을 구축하도록 구성할 수 있는 flex, pt-4, text-center 및 rotate-90과 같은 다양한 클래스로 가득 찬 유틸리티 최초의 CSS 프레임워크입니다.
https://tailwindcss.com

Tailwind CSS IntelliSense (확장 프로그램)
Tailwind CSS IntelliSense는 Visual Studio Code 사용자에게 자동 완성, 구문 강조 표시 및 린팅과 같은 고급 기능을 제공하여 Tailwind 개발 환경을 향상시킵니다.
https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

TailwindCSS 클래스 검색 사이트
https://tailwind.spacet.me/
https://tailwind.build/classes


## TailwindCSS Modifier 리스트

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


### Ring Width
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



## group
상위(부모) 상태를 기반으로 한 스타일 지정
일부 부모 요소의 상태를 기반으로 요소의 스타일을 지정해야 하는 경우 부모를 group 클래스로 표시하고 group-hover와 같은 group-* 수정자를 사용하여 대상 요소의 스타일을 지정합니다.
이 패턴은 group-focus, group-active 또는 group-odd와 같은 모든 유사 클래스 수정자와 함께 작동합니다.
```
< a href="#" class="group">
< h3 class="group-hover:text-white">New project< /h3>
< /a>
```
https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state

### peer

형제 상태를 기반으로 한 스타일 지정
형제 요소의 상태를 기반으로 요소의 스타일을 지정해야 하는 경우 형제를 peer 클래스로 표시하고 peer-invalid와 같은 peer-* 수정자를 사용하여 대상 요소의 스타일을 지정합니다. 이 패턴은 모든 유사 클래스 수정자(예: peer-focus, peer-required 및 peer-disabled)와 함께 작동합니다.
```
< input class="peer"/ >
< p class="peer-invalid:visible"> Pizza< /p>
```
https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state


### details
HTML details 요소는 "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. 요약이나 레이블은 summary 요소를 통해 제공할 수 있습니다. 정보 공개 위젯은 보통 레이블 옆의 작은 삼각형이 돌아가면서 열림/닫힘 상태를 나타냅니다. details 요소의 첫 번째 자식이 summary 요소라면, summary의 콘텐츠를 위젯의 레이블로 사용합니다.
```
< details>
< summary>Details
Something small enough to escape casual notice.
< /details>
```
https://developer.mozilla.org/ko/docs/Web/HTML/Element/details

### File input buttons
파일 수정자를 사용하여 파일 입력의 버튼 스타일 지정
ex) file:mr-4 file:py-2 file:px-4
https://tailwindcss.com/docs/hover-focus-and-other-states?email=george%40krugerindustrial&password=Bosco#file-input-buttons

::file-selector-button
::file-selector-button CSS 의사 요소는 type="file"의 input 버튼을 나타냅니다.
ex) input[type=file]::file-selector-button
https://developer.mozilla.org/en-US/docs/Web/CSS/::file-selector-button


### obile First

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

### Customizing breakpoints
https://tailwindcss.com/docs/responsive-design#customizing-breakpoints


- Dark Mode

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


### Migrating to the JIT engine

2021년 3월에 발표한 새로운 Just-in-Time 엔진이 Tailwind CSS v3.0의 클래식 엔진을 대체했습니다. 새로운 엔진은 프로젝트에 필요한 스타일을 주문형으로 생성합니다.

Tailwind CSS v3.0 이전: 거대한 CSS파일을 생성하고, 그 파일에 이미 정의해놓은 클래스들을 가져와 사용하는 방식.
대략 20만줄 정도 되는 클래스로 가득찬 파일을 가져와 개발 단계에서 사용하기 때문에 매우 무겁고, 배포 전에는 purge를 해줘야 해서 번거로움

Tailwind CSS v3.0이후: 사용자가 사용하는 스타일들만 그때 그때 생성해서 사용하는 방식. 여러 클래스들을 조합해서 사용할 수 있고, 매우 가볍고, 배포 전 purge를 해주지 않아도 되서 편함

https://tailwindcss.com/docs/upgrade-guide#migrating-to-the-jit-engine


### Plugins
재사용 가능한 타사 플러그인으로 Tailwind 플러그인을 사용하면 CSS 대신 JavaScript를 사용하여 사용자의 스타일시트에 삽입할 Tailwind에 대한 새 스타일을 등록할 수 있습니다.
https://tailwindcss.com/docs/plugins

@tailwindcss/forms
(form요소에 다양한 기본 스타일을 추가해줍니다.)
form 요소를 유틸리티로 쉽게 재정의할 수 있도록 하는 form 스타일에 대한 기본 reset을 제공하는 플러그인입니다. @tailwindcss/forms 플러그인은 유틸리티 클래스를 사용하여 form 요소의 스타일을 쉽게 지정할 수 있도록 하는 독창적인 form reset layer를 추가합니다.
npm install -D @tailwindcss/forms

@tailwindcss/forms 플러그인 설치 후, tailwind.config.js에 아래와 같이 plugins에 추가
```
// tailwind.config.js
module.exports = {
theme: {
// ...
},
plugins: [
require('@tailwindcss/forms'),
// ...
],
}
```
https://tailwindcss.com/docs/plugins#forms
https://github.com/tailwindlabs/tailwindcss-forms

### user-select
CSS user-select 속성은 사용자가 텍스트를 선택할 수 있는지 지정합니다.
ex) user-select: none;
https://developer.mozilla.org/ko/docs/Web/CSS/user-select



### Heroicons
Tailwind CSS로부터 만들어진 손으로 만든 아름다운 SVG 아이콘
https://heroicons.com/

### Space Between (space-x, space-y)
자식 요소 사이의 공간을 제어하기 위한 유틸리티입니다.
https://tailwindcss.com/docs/space#add-vertical-space-between-children

space-x-{amount} 유틸리티를 사용하여 요소 사이의 수평 공간을 제어합니다.
ex) space-x-4

space-y-{amount} 유틸리티를 사용하여 요소 사이의 수직 공간을 제어합니다.
ex) space-y-4


textarea의 사이즈를 고정시키고 싶으신 분들은 textarea에 resize-none을 추가해주시면 됩니다.
row={10} 세로 사이즈 조정

label

HTML label 요소는 사용자 인터페이스 항목의 설명을 나타냅니다.
label 을 input 요소와 연결하면 몇 가지 이점이 있습니다.

1. label 텍스트는 텍스트 입력과 시각적으로 관련이 있을뿐만 아니라 프로그래밍적으로도 관련이 있습니다. 예를 들어, 화면리더기(screenreader) 는 폼 입력(form input)에서 label 을 읽어서 보조기술(assistive technology) 사용자가 입력해야하는 텍스트가 무엇인지 더 쉽게 이해할 수 있게 합니다.

2. 관련 label 을 클릭해서 input 자체에 초점을 맞추거나 활성화를 시킬 수 있습니다. (활성되어서)늘어난 누를 수 있는 영역(hit area)은 터치스크린 사용자를 포함해 입력하려하는 모든 사람에게 이점을 줍니다.

label 을 input 요소와 연관시키려면, input 에 id 속성을 넣어야합니다. 그런 다음 label 에 id 와 같은 값의 for 속성을 넣어야합니다.
```
< label for="username">Click me< /label>
< input type="text" id="username">
```
https://developer.mozilla.org/ko/docs/Web/HTML/Element/label




### Divide Width

엘리먼트 사이의 border width를 제어하기 위한 유틸리티입니다.
```
divide-x => border-right-width: 1px; border-left-width: 0px;
divide-x-2 => border-right-width: 2px; border-left-width: 0px;

divide-y => border-top-width: 0px; border-bottom-width: 1px;
divide-y-2 => border-top-width: 0px; border-bottom-width: 2px;
```
https://tailwindcss.com/docs/divide-width

+ divide-y-[1px]로 쓰거나 [1px]을 생략하고 divide-y로 쓸 수도 있습니다.


### Aspect Ratio

요소의 종횡비를 제어하기 위한 유틸리티입니다.
또는 대괄호를 사용하여 새로운 속성을 생성할 수도 있습니다.
```
aspect-auto => aspect-ratio: auto;
aspect-square => aspect-ratio: 1 / 1;
aspect-video => aspect-ratio: 16 / 9;

iframe class="w-full aspect-[4/3]" src="https://www.youtube.com/...
```
https://tailwindcss.com/docs/aspect-ratio

aspect-ratio
종횡비 CSS 속성은 자동 크기 및 기타 레이아웃 기능 계산에 사용되는 상자의 기본 종횡비를 설정합니다.
https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio

video 아이콘 복사할 때 SVG가 아닌 JSX로 복사해오시면 속성 수정하지 않고 바로 사용가능합니다. (Copy JSX)
https://heroicons.dev


### Max-Width

요소의 최대 너비를 설정하는 유틸리티입니다.
```
max-w-none => max-width: none;
max-w-xs => max-width: 20rem; /* 320px */
max-w-sm => max-width: 24rem; /* 384px */
max-w-md => max-width: 28rem; /* 448px */
max-w-lg => max-width: 32rem; /* 512px */
max-w-full => max-width: 100%;
max-w-screen-sm => max-width: 640px;
max-w-screen-md => max-width: 768px;
max-w-screen-lg => max-width: 1024px;
max-w-screen-xl => max-width: 1280px;
등등
```
대괄호를 사용하여 임의의 값을 사용하여 즉시 속성을 생성할 수도 있습니다.
div class="max-w-[50%]"

https://tailwindcss.com/docs/max-width


Heroicons
https://heroicons.com/

router.back()
history로 navigate합니다. 브라우저의 뒤로 버튼을 클릭하는 것과 같습니다. window.history.back()을 실행합니다.
https://nextjs.org/docs/api-reference/next/router#routerback

router.push()
클라이언트 측 전환을 처리합니다. 외부 URL에 대해 router.push를 사용할 필요가 없습니다. window.location은 이러한 경우에 더 적합합니다.
https://nextjs.org/docs/api-reference/next/router#routerpush

-------------------carrot-market-----------------------------------------------------

### Prisma
Prisma란 Node.js and Typescript ORM(Object Relational Mapping)
=> JS or TS 와 데이터베이스 사이에 다리를 놓아줌 (기본적으로 번역기의 역할을 한다고 생각하면 됨)
- Prisma를 사용하기 위해서는 먼저 Prisma에게 DB가 어떻게 생겼는지, 데이터의 모양을 설명해줘야 함 => schema.prisma

- Prisma가 이런 타입에 관한 정보를 알고 있으면 client를 생성해줄 수 있음. client를 이용하면 TS로 DB와 직접 상호작용 가능, 자동완성 제공.

- Prisma Studio : Visual Database Browser, DB를 위한 관리자 패널같은 것.

### Prisma 셋업 (Typescript + MySQL)
1. npm install prisma -D

2. npx prisma init
이 명령은 schema.prisma라는 파일과 프로젝트 루트에 .env 파일을 포함하는 prisma라는 새 디렉토리를 생성했습니다. schema.prisma는 데이터베이스 연결과 Prisma Client 생성기가 있는 Prisma 스키마를 포함합니다. .env는 환경 변수를 정의하기 위한 dotenv 파일입니다. (데이터베이스 연결에 사용됨)
https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql

Prisma Model 예시
https://www.prisma.io/docs/concepts/components/prisma-schema

VSCode Prisma Extension
(Prisma 설치하기)

### PlanetScale

MySQL과 호환되는 Serverless 데이터베이스 플랫폼이며, Planetscale은 Vitess를 기반으로 제작되었다. 
https://planetscale.com/

Vitess: Vitess는 MySQL을 스케일링하기 위한 데이터베이스 클러스터링 시스템
인터넷에서 가장 큰 사이트를 호스팅하는 강력한 오픈 소스 기술입니다. Vitess는 유튜브의 많은 데이터 처리를 위해 Google에서 제작한 오픈소스로 초당 수백만 개의 쿼리 처리와 수평 샤딩 등을 지원하기에 Planetscale 또한 그에 대해서 그대로 지원하는 장점이 있다.
https://vitess.io/

Vitess를 사용하는 이유
1. 수평 스케일
2. 고가용성 (Vitess의 기본 복제본 구성은 예기치 않은 이벤트가 발생할 때 기본에서 복제본으로 원활한 장애 조치를 허용합니다.)
3. MySQL 호환
4. 쿠버네티스 네이티브
5. 구체화된 뷰
6. 온라인 스키마 마이그레이션


### PlanetScale setting(Connecting to PlanetScale )

1. PowerShell 실행 (Scoop 설치 )

PS D:\> Set-ExecutionPolicy RemoteSigned -scope CurrentUser
메시지가나 나타나면 
'Y' 키

PS D:\> iex (new-object net.webclient).downloadstring('https://get.scoop.sh')


2. 비주얼 스튜디오 코드 실행
터미널에서 다음과 같이 입력
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git

scoop install pscale mysql

scoop update pscale


3. 로그인 및 연결 
>> pscale auth login

>> 자동으로 뜨는 웹 페이시 에서 code fonfirm 클릭

>> pscale region list 접속 목록 확인

>> pscale database create carrot-market --region ap-northeast

>> pscale connect carrot-market (데이터베이스 연결) 

.env파일을 수정 DATABASE_URL="mysql://127.0.0.1:3306/carrot-market" 


### Referential integrity (참조 무결성)

(어떤 다른 모델을 참조하는 경우 해당 모델이 반드시 존재해야 함)
참조 무결성은 모든 참조가 유효함을 나타내는 데이터 세트의 속성입니다. 참조 무결성을 위해서는 한 레코드가 다른 레코드를 참조하는 경우 반드시 해당 참조하는 레코드가 존재해야 한다. 예를 들어 Post 모델이 user필드를 정의하는 경우 User(모델)도 반드시 존재해야 합니다. 참조 무결성은 참조를 손상시키는 변경을 방지하는 제약 조건과 레코드를 업데이트하거나 삭제할 때 실행되는 참조 작업을 정의함으로써 적용됩니다.
https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-integrity

datasource에서 referential integrity 설정
referential integrity(참조 무결성)은 현재 previewFeatures입니다. 이를 활성화하려면 schema.prisma의 generator 블록에 있는 previewFeatures 목록에 추가합니다.
```
// schema.prisma
generator client {
provider = "prisma-client-js"
}

datasource db {
provider = "mysql"
url = env("DATABASE_URL")
relationMode = "prisma"
}
로 변경했어요
```

### db push
db push는 Prisma Migrate와 동일한 엔진을 사용하여 Prisma 스키마를 데이터베이스 스키마와 동기화하며 스키마 프로토타이핑에 가장 적합합니다.

npx prisma db push
https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push



### Prisma Client

npm install @prisma/client

TypeScript 및 Node.js용 직관적인 데이터베이스 클라이언트
Prisma Client는 생각하는 방식으로 구성하고 앱에 맞춤화된 유형으로 Prisma 스키마에서 자동 생성되는 쿼리 빌더입니다.

```
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
```
https://www.prisma.io/docs/concepts/components/prisma-client

Prisma Studio

:Prisma 에서 DB GUI tool 와 같은 기능을 하는 studio 기능

npx prisma studio



### API Routes

API route는 Next.js로 API를 빌드하기 위한 솔루션을 제공합니다. pages/api 폴더 내의 모든 파일은 /api/*에 매핑되며 API endpoint로 처리됩니다. server-side 전용 번들이며 client-side 번들 크기를 늘리지 않습니다.
req: http.IncomingMessage의 인스턴스와 pre-built된 일부 미들웨어
res: http.ServerResponse의 인스턴스와 일부 helper함수

예를 들어 다음 API 경로 pages/api/user.js는 상태 코드가 200인 json 응답을 반환합니다.
```
export default function handler(req, res) {
res.status(200).json({ name: 'John Doe' })
}
```
https://nextjs.org/docs/api-routes/introduction


-----------------------------React hook form -----------------
React Hook Form설치

npm i react-hook-form


### register

register: (name: string, RegisterOptions?) => ({ onChange, onBlur, name, ref })
이 메서드를 사용하면 input을 등록하거나 엘리먼트를 선택하고 React Hook Form에 유효성 검사 규칙을 적용할 수 있습니다. 유효성 검사 규칙은 모두 HTML 표준을 기반으로 하며 사용자 지정 유효성 검사 방법도 허용합니다.
```
 const {register, handleSubmit, formState:{errors}} = useForm<LoginForm>({
    mode:"onChange",
  });
```
mode에 onChange를 집어넣으면 인풋의 값이 바뀌는 것을 실시간으로 감지하여 에러 모양 표시

```
import { useForm } from "react-hook-form";

const { register, handleSubmit } = useForm();

<input {...register("firstName", { required: true })} placeholder="First name" />
```
https://react-hook-form.com/api/useform/register



register 옵션들
required: string | { value: boolean, message: string}
ex) < input {...register("test", {required: 'error message' })}/>
https://react-hook-form.com/api/useform/register

handleSubmit
이 함수는 form 유효성 검사가 성공하면 form 데이터를 수신합니다.
ex) < form onSubmit={handleSubmit(onSubmit, onError)} />

onSubmit (SubmitHandler) (성공적인 콜백)
(data: Object, e?: Event) => void

onError (SubmitErrorHandler) (오류 콜백)
(errors: Object, e?: Event) => void

https://react-hook-form.com/api/useform/handlesubmit

validate
유효성을 검사할 인수로 콜백 함수를 전달하거나 콜백 함수의 개체를 전달하여 모든 유효성을 검사할 수 있습니다.
```
< input
{...register("test", {
validate: value => value === '1'
})}
/ >
```
https://react-hook-form.com/api/useform/register/

mode: onChange | onBlur | onSubmit | onTouched | all = 'onSubmit'
이 옵션을 사용하면 사용자가 form을 제출하기 전에 유효성 검사를 할 수 있습니다(onSubmit 이벤트).
https://react-hook-form.com/api/useform#props

onTouched
유효성 검사는 첫 번째 blur 이벤트에서 트리거됩니다. 그 후에는 모든 change 이벤트에서 트리거됩니다.

all
blur 및 change 이벤트에서 유효성 검사가 트리거됩니다.

```
import { FieldErrors, useForm } from "react-hook-form"

interface LoginForm {
  username:string;
  password:string;
  email:string;
}

export default function Forms(){
  const {register, handleSubmit, formState:{errors}} = useForm<LoginForm>({
    mode:"onChange",
  });
  const onValid = (data:LoginForm)=>{
    console.log("valid");
  }
  const onInvalid = (errors: FieldErrors)=>{
    console.log(errors)
  };
  return (
  <form onSubmit={handleSubmit(onValid, onInvalid)} >
    <input {...register("username",{
      required:"Username is required!",
      minLength:{
        message:"The username should be longer than 5 chars.",
        value:5,
      },
    })} 
    type="text" 
    placeholder="Username" 
    />
    <input {...register("email",{
      required:"Email is required!",
      validate:{
        notGmail:(value) => !value.includes("@gmail.com") ? "": "Gmail is not allowed",
      },
    })} 
    type="email" 
    placeholder="Email"
    className={`${Boolean(errors.email?.message) ? "border-red-500" :""}`} 
    />
    {errors.email?.message}
    <input {...register("password",{
      required:"Password is required!",
    })} 
    type="password" 
    placeholder="Password" 
    />
    <input type="submit" value="Create Account" />
  </form>
  )
}
````

아래와 같이 tailwind css를 적용하여 에러메시지를 표시해줄 수도 있음. 
```
 className={`${Boolean(errors.email?.message) ? "border-red-500" :""}`} 
 ```



 ## Uploading JSON data

POST프로토콜로 JSON인코딩된 데이터를 보내기 위해 fetch()를 사용합니다.
body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
```
await fetch(url, {
method: 'POST', // *GET, POST, PUT, DELETE 등
body: JSON.stringify(data), // data can be `string` or {object}!
headers:{
'Content-Type': 'application/json'
}
})
```
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data


## 자주 쓰는 HTTP 상태 코드

200 OK: 요청이 성공적으로 되었습니다. (성공)

400 Bad Request: 이 응답은 잘못된 문법으로 인하여 서버가 요청을 이해할 수 없음을 의미합니다. (클라이언트에서 Request할 때 발생한 문제)

403 Forbidden: 클라이언트는 콘텐츠에 접근할 권리를 가지고 있지 않습니다. 401과 다른 점은 서버가 클라이언트가 누구인지 알고 있습니다.

405 Method Not Allowed: 요청한 메서드는 서버에서 알고 있지만, 제거되었고 사용할 수 없습니다. (허용되지 않은 메서드 사용)

500 Internal Server Error: 서버가 처리 방법을 모르는 상황이 발생했습니다. 서버는 아직 처리 방법을 알 수 없습니다.
https://developer.mozilla.org/ko/docs/Web/HTTP/Status

고차함수(Higher Order Function(HOF))이란?
하나 이상의 함수를 인자로 받고, 결과로 함수를 리턴합니다. 다시 말해 함수가 또 하나의 함수를 다루는 함수입니다. HOF를 이용해서 자바스크립트에서 함수형 프로그래밍을 다룰 수 있습니다.
```
// 함수가 또 다른 함수를 리턴하는 구조
const add = function(x) {
return function(y) {
return x+y;
}
}

const sum = add(2)(3); // 5
```
https://javascript-1.gitbook.io/javascript/hof-higher-order-function



Prisma 필드 자동 완성 문제 (2022.4월 말 기준 해결)
referentialIntegrity가 아직 preview 단계의 기능이라서 VSCode에서 자동완성이 완전히 지원되지 않는거 같네요.
user User까지 작성하고 referentialIntegrity = "prisma"를 잠깐 주석처리하시고, 저장하면서 진행해야 될 것 같습니다.

connect
connect 쿼리는 ID 또는 고유 식별자를 지정하여 레코드를 기존 relation 레코드에 연결합니다. (레코드를 연결)
https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#connect

connectOrCreate
connectOrCreate는 ID 또는 고유 식별자로 기존 관련 레코드에 레코드를 연결하거나 레코드가 존재하지 않는 경우 새 관련 레코드를 생성합니다.
```
tags: {
connectOrCreate: {
create: {
name: 'computing',
},
where: {
name: 'computing',
},
},
},
```
https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#connectorcreate


## Twilio
Twilio는 전화 걸기 및 받기, 문자 메시지 보내기 및 받기, 웹 서비스 API를 사용하여 기타 커뮤니케이션 기능 수행을 위한 프로그래밍 가능한 커뮤니케이션 도구를 제공합니다.
https://www.twilio.com/

Twilo Document
https://www.twilio.com/docs

Messaging Services
메시징 서비스는 특정 사용 사례 및 메시징 캠페인을 위한 메시징 기능을 번들로 제공하는 컨테이너입니다. 특정 채널 및 번호 유형 중에서 선택하여 발신자를 메시징 서비스와 일치시키십시오.

랜덤 6자리 숫자 생성
방법 1) Math.floor(100000 + Math.random() * 900000) + "";
방법 2) String(Math.random()).substring(2,8)



twilio설치
npm i twilio

Node.js용 프로그래밍 가능한 SMS 빠른 시작
Twilio의 메시징 채널을 사용하여 전송된 모든 메시징은 A2P(Application-to-Person) 메시징으로 취급되며 Twilio의 메시징 정책이 적용됩니다. 몇 줄의 코드로 Node.js 애플리케이션에서 Twilio Programmable SMS로 문자 메시지를 보내고 받을 수 있습니다.
```
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(accountSid, authToken);

const messageInstance: MessageInstance = await twilioClient.messages.create({
messagingServiceSid: process.env.MESSAGING_SERVICES_SID,
to: process.env.MY_PHONE_NUMBER as string,
body: `휴대폰 로그인을 위한 토큰 ${createdRandomPayload} 입니다.`,
});
```
https://www.twilio.com/docs/sms/quickstart/node

.env 환경변수
TWILIO_SID=
TWILIO_TOKEN=
TWILIO_MSID=
MY_PHONE=+821012345678

딱히 에러는 안나는데 문자가안와서 댓글보고 이거저거 해보니
from: "자기가 부여받은 번호 ", 작성해주고 ( twilo에서 send as SMS 에 From phone nubmer 에서 확인할수있음)
.env 에는 PHONE_NUM="+821012341234" 일케 작성하니 문자 날라오네욥


## Iron session

세션 vs 토큰 vs 쿠키? 기초개념 잡아드림. 10분 순삭! (노마드코더 유튜브)
https://www.youtube.com/watch?v=tosLBcAX1vk


데이터를 저장하기 위해 서명되고 암호화된 쿠키를 사용하는 Node.js stateless session 유틸리티.
Next.js, Express, Nest.js, Fastify 및 모든 Node.js HTTP 프레임워크와 함께 작동합니다. 
- 서명, 암호화된 쿠키를 사용하는 nodejs stateless 세션 도구
- JWT는 암호화되지 않고 서명이 되어있음
- 유저가 안에 있는 정보를 볼 수 없음
- 세션을 위한 백엔드 구축이 필요 없음

npm i iron-session
```
import { withIronSessionApiRoute } from "iron-session/next";

export default withIronSessionApiRoute(NextApiHandler)
```
https://github.com/vvo/iron-session

req.session.save()
세션 데이터를 암호화하고 쿠키를 설정합니다.

32자 랜덤 비밀번호 필요하신 분들은 아래 사이트에서 Length 32로 설정 후 복사해서 사용하시면 됩니다.
https://1password.com/password-generator/



TypeScript로 세션 데이터 Tying (req.session에 데이터 입력)
req.session은 자동으로 올바른 유형으로 채워지므로 .save() 및 .destroy()를 호출할 수 있습니다.
그러나 더 나아가 세션 데이터도 입력할 수 있습니다. 이 코드는 특정 시점에 필요한 파일에 있는 한 프로젝트의 아무 곳에나 넣을 수 있습니다.
```
declare module "iron-session" {
interface IronSessionData {
user?: {
id: number;
admin?: boolean;
};
}
}
```
https://github.com/vvo/iron-session#typing-session-data-with-typescript

Module Augmentation
(위와 같이 모듈을 가져와서 module augmentation을 사용해서 컴파일러에게 알려줄 수 있습니다.)
JavaScript 모듈은 병합을 지원하지 않지만 기존 객체를 가져온 다음 업데이트하여 패치할 수 있습니다.
```
import { Observable } from "./observable";

declare module "./observable" {
interface Observable< T> {
map< U>(f: (x: T) => U): Observable< U>;
}
}
```
https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation


get user profile

모든 api는 실제 백엔드 없이 개별적으로 동작하기 때문에

각 api 마다 type과 withIronSessionApiRoute config를 매번 설정해줘야함

쿠키에 세션이 userId가 저장되어 있기 때문에 Id에 해당하는 user정보를 가져올 수 있음

```tsx
import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import client from '@libs/server/client';

// iron session에 sesstion type 정의
declare module 'iron-session' {
interface IronSessionData {
user?: {
id: number;
};
}
}

async function handler(
req: NextApiRequest,
res: NextApiResponse
) {
console.log(req.session.user);
const profile = await client.user.findUnique({
where: {
id: req.session.user?.id,
},
});
res.json({
ok: true,
profile,
});
}

export default withIronSessionApiRoute(withHandler('GET', handler), {
cookieName: 'carrot_cookie',
password: 'complex_password_at_least_32_characters_long',
// secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
cookieOptions: {
secure: process.env.NODE_ENV === 'production',
},
});
```
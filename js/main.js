console.log("js")

// 돋보기 버튼을 누르면 input이 focus 되는 기능

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


// search 라는 클래스를 찾는 변수를 지정한다.
// 지정한 변수를 다시 사용하여 search라는 클래스 내부에 있는 태그 input을 찾는 변수를 만든다.

// document.querySelector('.search input'); 으로 내부의 input을 지정 할 수도 있다.
// 뭐가 더 편한지는 사실 모르겠다.

searchEl.addEventListener('click', function () {
    searchInputEl.focus()
});
// 1. search 라는 클래스를 가진 요소에 event listener 를 설정한다.
// 2. search 라는 클래스를 가진 요소에 'click' 이라는 이벤트가 발생하면,
// 내부의 input 요소에 focus 라는 이벤트를 강제로 발생시킨다.

// 즉, material icons가 search에 속하므로, 아이콘을 클릭해도 뒤에 있는 input에 
// focus 이벤트가 발생하면서 가상클래스인 input:focus의 속성이 적용된다.

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
    // html 요소에 속성과 속성값을 추가하는 메소드
});
// 1. input 태그에 focus 라는 이벤트가 발생하면,
// 2. search 라는 클래스를 가진 요소에 focused 라는 클래스를 추가하고,
// 3. 내부의 input 에 속성과 속성값으로 placeholder="통합검색" 을 추가한다.

searchInputEl.addEventListener('blur', function () {
    // blur는 focus가 해제되는 것을 뜻하는 이벤트이다.
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder');
    // html 요소에 속한 속성값을 삭제하는 메소드

    // searchInputEl.setAttribute('placeholder', '');
    // 도 위와 같은 모양으로 표시되며, 이 경우 속성은 존재하지만, 값이 없는 형태이다.
});
// 1. input 태그에 focus가 해제되어 blur 라는 이벤트가 발생하면,
// 2. search 라는 클래스를 가진 요소에 focused 라는 클래스를 제거하고,
// 3. 내부의 input의 속성인 placeholder 를 제거한다.

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log('scrolled!');
    if (window.scrollY > 500) {
        //배지 숨겨!
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(toTopEl, .2, {
            x:0
        }); // 상단 이동 버튼을 y 500 이상일때 나타나게 함.
    } else {
        //배지 내놔!
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        gsap.to(toTopEl, .2, {
            x:100
        }); // 상단 이동 버튼을 y 500 미만일때 x 방향으로 이동하여 사라지게함.
    }
}, 300));

// document = html 문서, window = 브라우저 창(화면)을 뜻함.
// 즉, 위의 이벤트리스너는 우리가 보고있는 브라우저 화면에 스크롤이 발생했을 때,
// 내부에 있는 익명함수를 실행시킨다.

// _.throttle(함수(){},ms) -> html에 불러온 lodash 라이브러리의 작성법이며,
// _.throttle 내부에 작성한 함수를 뒤에 작성한 시간마다 실행시켜
// 함수가 한번에 많은 양이 실행되어 부하가 걸리지 않게끔 한다.

// scroll 이벤트가 발생 할 때, 스크롤 한번에도 몇 십개의 함수가 실행되는 것을 방지하는 작성법.

// gsap.to 메소드 -> JS 에서 CSS을 제어 할 수 있게하는 라이브러리
// gsap.to(요소, 지속시간(s), 옵션);
// 요소와 시간, 그리고 적용시킬 명령어를 parameter 로 사용하며,
// 적용할 스타일 속성은 객체데이터의 형태를 띈다.

// 객체데이터 내부에서 속성 : 속성값의 형태로 스타일 속성을 추가 할 수 있으며,
// 속성값이 문자로 되어있는 경우 반드시 문자열로 표시해주어야 한다.


toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo : 0
    });
});

// 만든 상단 이동 버튼을 클릭하면, 페이지의 상단으로 이동하는 코드
// 1. 버튼에 click 이라는 이벤트가 발생하면 익명함수내의 함수를 실행한다.
// 2. gsap라이브러리를 이용하여 요소를 제어하는데, 이때 제어되는 요소는 window 객체 즉, 우리가 보고있는 화면이다.
// 3. gsap 는 window 객체에 적용되는 애니메이션을 .7초 간 재생되게 하며,
// 4. 적용될 애니메이션은 scrollTo 플러그인이고, 스크롤의 0 지점, 즉 최상단으로 이동한다.


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * 0.5
    });
});

// 1. fade-in 이라는 클래스를 가진 모든 요소들을 배열의 형태로 가져온다.
// 2. 불러온 요소들을 forEach 반복문으로 각각의 요소를 fadeEl, 순서를 index로 받아온다.
// 3. gsap 라이브러리를 이용하여 각각의 요소에 효과를 지정한다.
// 4. fadeEl에 효과를 1초동안 지정하는데, 그 효과는 opacity 를 1로 변경한다.
// 5. 각각의 요소의 index 당 0.5초의 딜레이를 가지고 효과가 실행된다.

// 코드 해석하기

//위의 코드의 실행 순서는 아래의 코드와 같다.

// gsap.to(fadeEls[0], 1, {
//     opacity : 1,
//     delay : (0 + 1) * 0.5
// })

// gsap.to(fadeEls[1], 1, {
//     opacity : 1,
//     delay : (1 + 1) * 0.5
// })

// gsap.to(fadeEls[2], 1, {
//     opacity : 1,
//     delay : (2 + 1) * 0.5
// })

// gsap.to(fadeEls[3], 1, {
//     opacity : 1,
//     delay : (3 + 1) * 0.5
// })

// 배열의 요소를 fadeEl로 대체하여 불러오고, 배열안의 요소들의 순서를 index 로 받아 
//  forEach로 각각의 요소에 함수를 실행시킨 것.

// 즉 forEach 로 배열에 있는 모든 요소 각각에 함수를 실행시키는데, 
// 요소가 가지고 있는 순서(0~3) 값을 index로 불러와 delay의 index에 대입시켜 실행하는 것.

// A-0, B-1 일때, 
// A에 이런 함수를 실행할건데 여기에 index 값이 있네, 너는 가지고 있는 index가 0이구나.
// B에 이런 함수를 실행할건데 너는 index가 1이구나.
// 요런식


//swiper 라이브러리 이용하여 슬라이드 만들기
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    loop: true,
    autoplay: true
});

new Swiper('.promotion .swiper', {
    // direction: 'horizontal',
    // horizontal 은 기본값이므로, 명시하지 않아도 된다.
    slidesPerView: 3,
    // 한번에 보여질 페이지의 갯수를 지정한다.
    spaceBetween: 10,
    // 각 슬라이드 간의 여백을 지정한다.
    // CSS 로 지정한 것이 아니라, 라이브러리의 속성으로 지정이 된 것.
    centeredSlides: true,
    // 슬라이드의 첫번째 이미지를 좌측이 아닌 중앙부터 시작한다.
    // 이 경우, loop 가 지정되있지 않다면 좌측의 이미지가 없는 상태가 되며,
    // loop가 적용되어 있다면 좌측에 가장 마지막의 이미지가 표시된다.
    loop: true,
    autoplay: {
        delay: 5000
        // autoplay 속성에 객체를 사용할 경우 ms로 딜레이를 지정할 수 있으며,
        // 기본값은 3000, 3초이다.
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        // 슬라이드의 인디케이터로 작동할 요소의 선택자를 작성한다.
        clickable: true,
        // 해당 인디케이터가 클릭에 작동할 지, 아니면 보여지기만 할지를 결정한다.
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
        // 네비게이션 버튼으로 사용될 요소들을 지정한다.
        // 위의 선택자로 지정된 요소들을 클릭할 경우 각각 이전버튼, 다음버튼으로 동작한다.
    }
});

new Swiper('.awards .swiper', {
    autoplay: true,
    loop : true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    // 변수앞에 !는 변수가 가지고 있는 값의 반대값을 반환한다.
    // 즉 위에서는 !isHidePromotion 이 isHidePromotion에 반대값인 true를 반환하고,
    // 아래의 조건문에 true 가 들어가게 된다.
    if (isHidePromotion) {
        //숨기기
        promotionEl.classList.add('hide')
    } else {
        //보이기
        promotionEl.classList.remove('hide')
    }
});
// 위 방법을 이용해서, 햄버거 버튼을 이용한 드롭다운 메뉴를 쉽게 만들 수 있을 것 같다.

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
    //min 과 max 사이의 랜덤한 숫자를 반환 받는 함수.
    //toFixed()는 문자데이터로 반환한다.
    //parseFloat()는 소수점을 가지는 숫자로 변환한다.
}

function floatingObject(selector, delay, size) {
    gsap.to(
        selector, // 제어할 요소의 선택자 / 아래 함수호출 단계에서 지정된 선택자를 인수로 받는다.
        random(1.5, 2.5), // 애니메이션 지속시간
        { // 속성
            y: size, // 이동할 y좌표
            repeat: -1, // 반복 횟수로, -1은 무한반복을 뜻함(중요)
            yoyo: true, // 애니매이션의 반복여부(0% - 100% - 0%)
            ease: Power1.easeInOut, // gsap 의 ease 함수를 설정한다. / 구글링 gsap easing
            delay: random(0, delay) // 애니메이션의 재생 딜레이을 지정한다.
        }
    );
}

// 함수 호출

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

// floating 요소들이 자연스럽게 보이도록 하는 함수
// 매개변수와 인수를 사용하여 자연스러운 애니메이션을 만들었다.

//매개변수 해석

// seletor 라는 매개변수에 인수로 CSS 셀렉터를 입력한다.
// 이는 gsap에서 제어할 선택자가 된다.
// delay라는 매개변수는 gsap의 delay 속성값에서 랜덤함수의 최댓값이 된다.
// size라는 매개변수는 이동하는 y의 좌표를 설정한다.

//함수 해석

// 함수인 floatingObject 는 총 세개의 매개변수를 사용한다.
// 실행 될 함수는 gsap 라이브러리를 이용하며, gsap 가 제어할 요소는 selector라는 매개변수의 인수로 지정한다.
// gsap 가 애니메이션을 재생하는 시간은 random 함수를 이용하여 1.5 ~ 2.5초 사이로 지정한다.
// gsap는 객체에 지정된 속성값들을 요소에 적용한다. 



    // const floatingEls = document.querySelectorAll('.floating');
    // function randomlyFloating() {
    //     floatingEls.forEach(function (floatingEl){
    //         gsap.to(floatingEl, random(1,2), {
    //             y: random(20, 40),
    //             repeat : -1,
    //             yoyo : true,
    //             ease : Power1.easeInOut,
    //             delay : random(0.5, 1.5)
    //         })
    //     })}

    //     randomlyFloating()

    // 내가 예시 안보고 만들어 본 기능, 랜덤 함수를 이용해서 y축의 이동 거리, 딜레이, 애니메이션 지속시간을 전부 랜덤하게 만들었다.

    // floating 이라는 선택자를 가진 모든 요소를 불러오고, 이는 floatingEls 라는 상수로 지정한다.
    // forEach를 이용하여 변수 floatingEls 에 속한 각각의 요소에 gsap를 사용한다.
    // 이때 gsap로 제어될 요소들은 forEach 의 floatingEl 이라는 인수는 gsap의 선택자 매개변수에 대입된다.
    // 애니메이션 지속시간과 이동할 y좌표, 딜레이는 랜덤함수로 지정된다.
    
    //함수 지정과 호출은 빼도 되겠다.


// 시즌플로팅, 리저브, 픽유어 아이템에 각각 gsap 로 애니메이션 만들기
// 각각의 요소에 적용하기
// 스크롤의 위치를 받아 일정한 위치에서 실행하기 - scrollto 라이브러리

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, 
            // 감시하려는 요소, 보여지는지 보여지지 않는지를 확인하게 될 요소
            triggerHook: 0.8, 
            // 보여진다고 판단하는 기준을 정하는 속성, 뷰포트의 최상단을 0, 하단을 1로 판단한다.
            // 즉, 위의 0.8은 뷰포트의 80퍼센트 아래 지점에서 보일 때, 
            // scrollmagic 라이브러리가 해당 요소를 '보인다'고 판단한다.

            // 즉 내가 방아쇠를 당길 지점(0.8)을 지정하고, 방아쇠인 요소(spyEl)가 해당 지점에 도착하면 방아쇠를 당긴다.
        })
        .setClassToggle(spyEl, 'show')
        // 내가 추가할 요소를 지정하고, 어떤 선택자를 추가할지를 지정한다.
        // => spyEl에 클래스로 show 를 토글 할 것 이다.
        .addTo(new ScrollMagic.Controller())
        //우리가 지정한 옵션을 라이브러리 내부의 컨트롤러에 입력하여 실제로 동작하게끔 함.

    // Scene 제어하려는 요소가 보이는지를 감시하는 메소드
    // setClassToggle html의 선택자를 토글하는 메소드
    // scroll magic 이라는 라이브러리를 사용하기 위한 컨트롤러를 추가하기 위한 메소드
})

// 코드 해석

// section에 scroll-spy 라는 클래스가 있는 모든 일치선택자들을 spyEls 로 지정한다.

// 해당 요소들에 반복문을 활용하여 스크롤매직 라이브러리를 적용하는데, 
// 이때 적용될 각각의 section들을 실행될 함수의 매개변수인 spyEl로 받아온다.

// 생성자로 scrollmagic 라이브러리를 불러오고, 메소드 체이닝을 통해 제어하고자 하는 속성을 작성한다.

// Scene 메소드에 인수로 객체데이터로 감시할 요소와, 감시될 지점을 지정한다.
// 이때 감시될 요소는 반복문의 인수로 지정된 spyEl, 즉 spyEls로 선택된 각각의 요소이고,
// 감시될 지점은 위에서부터 80% 지점이다. (뷰포트 기준 최상단 0, 최하단 1)

// setClassToggle 메소드에 인수로 클래스를 추가 할 요소와, 클래스 이름을 지정한다.
// Scene으로 지정한 설정에 따라 요소가 감시되면 spyEl로 지정된 각각의 요소에 'show' 라는 클래스를 삽입한다.

// addTo 메소드에는 다시 생성자를 사용하여 위와 같은 내용을 추가하는데, 이는 위에서 지정한 내용을
// scrollmagic 라이브러리 내의 컨트롤러에 다시 입력하여 실제로 기능이 실행되게끔 한다.



// 올해 년도 가져오기

// const thisYear = document.querySelector(".this-year")
// const year = new Date().getFullYear();

// thisYear.innerHTML = `${year}`;
// 만든 코드

// this-year라는 클래스를 가진 요소를 가져온다.
// 생성자 함수 Date로 오늘의 날짜를 불러오고, getFullYear 메소드로 연도를 불러와 해당 값을 상수 year로 지정한다.
// 가져온 요소의 html 내용을 보간법을 이용하여 상수 year를 불러오고, 그 값을 문자열로 사용하여 표시한다.

// + 궂이 year를 대입하지 않고 바로 작성해도 작동함.
// 예시코드와의 차이는 사용하는 입력방식이 innerHTML 인가, textContent 인가의 차이

// 보안상,최적화의 이슈로 textContent 를 사용하는 것이 더 권장된다.

// 위와 비슷한 텍스트를 입력, 가져오는 프로퍼티로는 innerHTML innerText textContent 가 있다.




const thisYear = document.querySelector(".this-year")
thisYear.textContent = new Date().getFullYear();
// 실습예시 코드

// this-year라는 클래스를 가진 요소를 가져온다.(동일)
// 가져온 요소에 .textContent 프로퍼티를 이용하여 문자컨텐츠를 삽입하는데, 이때 그 값은 생성자와 메소드로 불러온 연도이다.
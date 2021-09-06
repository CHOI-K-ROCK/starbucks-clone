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
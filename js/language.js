// language.js
// HTML 문서가 로드되면 내부의 코드를 실행 HTML 문서가 완전히 로드된 후에 코드가 실행
$("document").ready(function(){
// 현재 페이지 URL의 쿼리 파라미터를 가져오기 위해 URL 객체를 생성하고, 
// 그것의 searchParams를 사용합니다.이 부분을 통해 페이지 URL에서 "lang"이라는 파라미터 값을 가져옵니다.

    const url = new URL(location.href).searchParams;
    // 이전 단계에서 가져온 URL의 쿼리 파라미터 중 
    // "lang" 값을 가져옵니다. 이 값을 통해 페이지에서 사용할 언어를 결정합니다.
    const language = url.get("lang");
    // 영어 언어 설정에 해당하는 네비게이션 메뉴 항목을 배열로 정의합니다.
    const en_nav = new Array("Profile", "Web Publishing", "Design", "Experience", "Contact")
    // 영어 언어 설정에 해당하는 타이핑 효과로 보여줄 문구를 배열로 정의
    const Main_typed = new Array("Growind Web Designer &amp; This is Web Publisher <em>Hong Gil-dong</em> Click the button below to view the next page");
    // 영어 언어 설정에 해당하는 버튼의 텍스트를 배열로 정의합니다.
    const Main_btn = new Array("Profile")

    const lang_chk = localStorage.getItem("language");
    



    if(lang_chk == "en" || language == "en"){
        $("#typed p").html(Main_typed[0]);
        $(".type a").text(Main_btn[0])
        for(let i = 0; i < en_nav.length; i++){
            $(".header .nav ul li a").eq(i).text(en_nav[i])
        }

    }



})
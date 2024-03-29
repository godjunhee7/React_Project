import React, {useState, useEffect} from 'react';
import "./Topic.css"
import { useNavigate } from 'react-router-dom';



function Topic() {
  const [myClass, setClass] = useState(null);
  const [myTopic, setTopic] = useState(null);
  const [redirectTo, setRedirectTo] = useState(null);
  




  const images = [
    {src:"/image/etc.png", alt:"etc-image", className:"etc"},
    {src:"/image/philosophy.png", alt:"philosophy", className:"philosophy-image"},
    {src:"/image/religion.png", alt:"religion", className:"religion-image"},
    {src:"/image/socialScience.png", alt:"social", className:"socialScience-image"},
    {src:"/image/naturalScience.png", alt:"naturalScience-image", className:"naturalScience"},
    {src:"/image/techonologyScience.png", alt:"techonologyScience-image", className:"techonologyScience"},
    {src:"/image/art.png", alt:"Art", className:"art-image"},
    {src:"/image/language.png", alt:"language", className:"language-image"},
    {src:"/image/literature.png", alt:"literature", className:"literature-image"},
    {src:"/image/history.png", alt:"history", className:"history-image"},
  ]
  const imageTexts = [
    "총류",
    "철학",
    "종교",
    "사회 과학",
    "자연 과학",
    "기술 과학",
    "예술",
    "언어",
    "문학",
    "역사",
  ];
  
  const etc_test = [
    {key : "00 층류", value : ["000 총류", "001 지식,학문일반", "003 시스템", "004 컴퓨터 과학", "005 프로그래밍", "007 연구일반 및 방법론"] },
    {key : "01 도서학, 서지학", value : ["010 도서학, 저작", "011 사본, 판본, 제본", "012출판 및 판매", "013 개인서지 및 목록", "014 국가별 서지 및 목록", "015 주제별 서지 및 목록", "016 특수서지 및 목록", "017 일반서지 및 목록", "018 장서목록"]},
    {key : "02 문헌정보학", value : ["020 문헌정보학", "021 도서관 행정 및 재정", "022 도서관건축 및 설비", "023 도서관 경영, 관리", "024 수서, 정리 및 보관", "025 도서관 봉사 및 활동", "026 일반도서관", "027 학교 및 대학도서관", "028 정보과학", "029 독서 및 정보매체의 이용"]},
    {key : "03 백과사전", value : ["030 백과사전", "031 한국어", "032 중국어", "033 일본어", "034 영어", "035 독일어", "036 프랑스어", "037 스페인어", "038 이탈리아어", "039 기타 제언어"]},
    {key : "04 강연집, 수필집, 연설문집", value : ["041 강연집, 수필집, 연설문집", "042 한국어", "043 중국어", "045 일본어", "044 영어", "045 독일어", "046 프랑스어", "047 스페인어", "048 이탈리아어", "049 기타 제언어"]},
    {key : "05 일반 연속간행물", value : ["050 일반연속간행물", "051 한국어", "052 중국어", "053 일본어", "054 영어", "055 독일어", "056 프랑스어", "057 스페인어", "058 기타 제언어", "059 연감"]},
    {key : "06 일반학회", value : ["060 일반학회", "061 아시아", "062 유럽", "063 아프리카", "064 북아메리카", "065 남아메리카", "066 오세아니아", "067 양극", "068 박물관학"]},
    {key : "07 신문,저널리즘", value : ["070 신문, 저널리즘", "071 아시아의 신문", "072 유럽의 신문", "073 아프리카의 신문", "074 북아메리카의 신문", "075 남아메리카의 신문", "076 오세아니아의 신문", "077 양극지방의 신문", "078 특정주제의 신문"]}
  ]
  const philosophy_test =[
    {key: '10 철학', value : ['100 철학', '101 철학 및 이론의 효용', '102 잡저', '103 사전, 용어사전', '104 강연집, 수필집', '105 연속간행물', '106 단체, 협회, 기관, 의회', '107 지도법, 연구법 및 교육, 교육자료', '108 총서,전집,선집', '109 철학사']}, 
    {key: '11 형이상학', value : ['110 형이상학', '111 방법론', '112 존재론', '113 우주론 및 자연철학', '114 공간', '115 인식론', '116 운동과 변화', '117 구조', '118 힘과 에너지', '119 인과론(인과성)']}, 
    {key: '13 철학의 체계', value : ['130 철학의 체계', '131 관념론및연관철학', '132 비판철학', '133 합리론', '134 인문주의', '135 경험론', '136 자연주의', '137 유물론', '138 과학주의철학', '139 기타']}, 
    {key: '14 경학', value : ['140 경학', '141 역류', '142 서류', '143 시류', '144 예류', '145 악류', '146 춘추류', '147 효경', '148 사서']}, 
    {key: '15 동양,철학,사상', value : ['150 동양,철학,사상', '151 한국철학,사상', '152 중국철학,사상', '153 일본철학,사상', '154 동남아시아제국철학,사상', '155 인도철학,사상', '156 중앙아시아제국학,사상', '157 시베리아철학,사상', '158 서남아시아제국철학,사상', '159 아랍제국철학,사상']}, 
    {key: '16 서양철학', value : ['160 서양철학', '162 미국철학', '163 북구철학', '164 영국철학', '165 독일,오스트리아철학', '166 프랑스,네덜란드철학', '167 스페인철학', '168 이탈리아철학', '169 러시아철학']}, 
    {key: '17 논리학', value : ['170 논리학', '171 연역법', '172 귀납법', '173 변증법적논리학', '174 기호,수리논리학', '175 오류', '176 삼단논법', '177 가설,가정', '178 유추', '179 논증,설득']}, 
    {key: '18 심리학', value : ['180 심리학', '181 각론', '182 차이심리학', '183 발달심리학', '184 이상심리학', '185 생리심리학', '186 임상심리학', '187 심령연구및비학,초심리학', '188 상법,운명판단', '189 응용심리학이론']}, 
    {key: '19 윤리학,도덕철학', value : ['190 윤리학,도덕철학', '191 이론윤리학각론', '192 가정윤리', '193 국가및정치윤리', '194 사회윤리', '195 직업윤리이론', '196 오락및경기윤리', '197 성윤리', '198 소비윤리', '199 도덕훈,교훈']}

  ]
  const religion_test = [
    {key : '20 종교', value : ['200 종교', '201 종교철학및종교사상', '202 잡저', '203 사전', '204 자연종교,자연신학', '205 연속간행물', '206 단체,협회,기관,회의', '207 지도법,연구법및교육,교육자료', '208 총서,전집,선집', '209 종교사']}, 
    {key : '21 비교종교', value : ['210 비교종교', '211 교리', '212 종조,창교자', '213 경전,성전', '214 종교신앙,신앙록,신앙(수도)생활', '215 선교,포교,전도,교육활동', '216 종단,교단(교당론)', '217 예배형식,의식,의례', '218 종파,교파', '219 신화,신화학']}, {key : '22 불교', value :  ['220 불교', '221 불교교리', '222 제불,보살,불제자', '223 경전(불전,대장경)', '224 법어,신앙록,신앙생활', '225 포교,교육,교화활동', '226 사원론', '227 법회,의식,행사', '228 종파', '229 라마교']}, 
    {key : '23 기독교', value : ['230 기독교', '231 기독교신학,교의학(조직신학)', '232 예수그리스도', '233 성서(성경)', '234 신앙록,명상록,신앙생활', '235 전도,교육,교화활동,목회학', '236 교회론', '237 예배,의식,성례', '238 교파', '239 유태교']}, 
    {key : '24 도교', value :  ['240 도교', '241 교의,신선사상', '242 교조,개조', '243 도장', '244 신앙록,신앙생활', '245 포교,전도,교육,교화활동', '246 사원론(도관)', '247 행사,법술', '248 교파']}, 
    {key : '25 천도교', value : ['250 천도교', '259 동학교분파', '259 단군교대종교']}, 
    {key : '26 신도', value : ['260 신도']}, 
    {key : '27 힌두교, 브라만교', value : ['270 힌두교,브리만교', '279 자이나교']}, 
    {key : '28 이슬람교(회교)', value : ['280 이슬람교(회교)', '289 조로아스타교(요교,배화교)']}, 
    {key : '29 기타제종교', value : ['290 기타제종교', '291 아시아', '292 유럽', '293 아프리카', '294 북아메리카', '295 남아메리카', '296 오세아니아', '297 양극지방', '299 기타 다른 기원의 종교']}
  ]

  const socialScience_test = [
    {key: '30 사회과학', value: ['300 사회과학', '301 사회사상', '302 잡저', '303 사전', '304 강연집,수필집,연설문집', '305 연속간행물', '306 학회,단체,협회,기관,회의', '307 연구법,연구방법및교육,교육자료', '308 총서,전집,선집', '309 정치,경제,사회,문화사정및역사']}, 
    {key:'31 통계학', value: ['310 통계학', '311 아시아', '312 유럽', '313 아프리카', '314 북아메리카', '315 남아메리카', '316 오세아니아', '317 양극지방', '319 인구통계']}, 
    {key:'32 경제학', value: ['320 경제학', '321 경제각론', '322 경제정책', '323 산업경제', '324 기업경제', '325 경영', '326 상업,교통,통신', '327 금융', '328 보험', '329 재정']}, 
    {key:'33 사회학,사회문제', value: ['330 사회학,사회문제', '331 사회학', '332 사회조직및제도', '334 사회문제', '335 생활문제', '337 여성문제', '338 사회복지', '339 사회단체']}, 
    {key:'34 정치학', value: ['340 정치학', '341 국가형태', '342 국가와개인및집단', '344 선거', '345 입법', '346 정당', '349 외교,국제관계']}, 
    {key:'35 행정학', value: ['350 행정학', '351 아시아 중앙행정 및 행정부', '352 유럽 중앙행정 및 행정부', '353 아프리카 중앙행정 및 행정부', '354 북아메리카 중앙행정 및 행정부', '355 남아메리카 중앙행정 및 행정부', '356 오세아니아 중앙행정 및 행정부', '357 양극지방 중앙행정 및 행정부', '359 지방자치및행정']}, 
    {key:'36 법학', value: ['360 법학', '361 국제법', '362 헌법', '363 행정법', '364 형법', '365 민법', '366 상법', '367 사법제도및소송법', '368 기타제법', '369 각국법및예규']},
    {key:'37 교육학', value: ['370 교육학', '371 교육정책및행정', '372 학교행정및경영,보건및교육지도', '373 학습지도,교육방법', '374 교육과정', '375 유아및초등교육', '376 중등교육', '377 대학,전문,고등교육', '378 사회교육', '379 특수교육']}, 
    {key:'38 풍속,민속학', value: ['380 풍속,민속학', '381 의식주의풍습', '382 가정생활의풍습', '383 사회생활의풍습', '384 관혼상제', '385 예절', '386 축제,세시풍속', '387 전쟁풍습', '388 민속학', '389 문화인류학']},
    {key:'39 국방,군사학', value: ['390 국방,군사학', '391 군사행정', '392 전략,전술', '393 군사교육 및 훈련', '394 군사시설 및 장비', '395 군특수기술근무', '396 육군', '397 해군', '398 공군', '399 고대병법']}
  ]
  const naturalScience_test =[
    {key : '40 자연과학', value : ['400 자연과학', '401 과학이론,과학철학', '402 잡저(편람,제표,서지,인명록)', '403 사전', '404 강연집,수필집,연설문집', '405 연속간행물', '406 학회,단체,기관,회의', '407 지도법,연구법및교육,교육자료', '408 전집,총서', '409 과학사및지역구분']}, 
    {key : '41 수학', value : ['410 수학', '411 산수', '412 대수학', '413 확률론,통계수학', '414 해석학', '415 기하학', '416 위상수학', '417 삼각법']}, 
    {key : '42 물리학', value : ['420 물리학', '421 고체역학', '422 유체역학', '423 기체역학', '424 음향학,진동학', '425 광학', '426 열학', '427 전기학및전자학', '428 자기', '429 현대물리학']}, 
    {key : '43 화학', value : ['430 화학', '431 이론화학과물리화학', '432 화학실험실,기기,시설', '433 분석화학', '434 합성화학이론', '435 무기화학', '436 금속원소와그화합물', '437 유기화학', '438 환상화합물', '439 고분자화합물과기타유기물']}, 
    {key : '44 천문학', value : ['440 천문학', '441 이론천문학', '442 실지천문학', '443 기술천문학', '445 지구', '446 측지학', '447 항해천문학', '448 역법,측시법']}, 
    {key : '45 지학', value : ['450 지학', '451 지구물리학', '452 지형학', '453 기상학,기후학', '454 해양학', '455 구조지질학', '456 지사학', '457 고생물학(화석학)', '458 응용지질학일반및광상학', '459 암석학']}, 
    {key : '46 광물학', value : ['460 광물학', '461 원소광물', '462 황화광물', '463 할로겐화광물', '464 산화광물', '465 규산및규산염광물', '466 기타산화물을포함한광물', '467 유기광물', '469 결정학']}, 
    {key : '47 생명과학', value : ['470 생명과학', '471 인류학(자연인류학)', '472 생물학', '473 생명론,생물철학', '474 세포학(세포생물학)', '475 미생물학', '476 생물진화', '477 생물지리학', '478 현미경및현미경검사법일반', '479 생물수집및보존']}, 
    {key : '48 식물학', value : ['480 식물학', '481 일반식물학', '482 음화식물', '483 엽상식물', '484 조균류', '485 현화식물,종자식물', '486 나자식물', '487 피자식물', '488 단자엽식물', '489 쌍자식물']}, 
    {key : '49 동물학', value : ['490 동물학', '491 일반동물학', '492 무척추동물', '493 원생동물,해면동물,강장동물,편형동물', '494 연체동물,의연체동물', '495 절지동물,곤충류', '496 척색동물', '497 어류,양서류,파충류', '498 조류', '499 포유류']}
  ]
  
  const techonologyScience_test =[
    {key: '50 기술과학', value : ['500 기술과학', '501 기술철학 및 이론', '502 잡저', '503 사전,용어집', '504 강연집,수필집,연설문집', '505 연속간행물', '506 학회,단체,기관,회의', '507 연구법및교육지도법', '508 전집,총서', '509 기술사']}, 
    {key: '51 의학', value : ['510 의학', '511 기초의학', '512 임상의학', '513 내과학', '514 외과', '515 치과의학,이비인후과학,안과학', '516 산부인과,소아과학', '517 건강증진,공중보건 및 예방의학', '518 약학', '519 한의학']}, 
    {key: '52 농업, 농학', value : ['520 농업,농학', '521 농업기초학', '522 농업경제', '523 재배및보호', '524 작물학', '525 원예', '526 임학,임업', '527 축산학', '528 수의학', '529 수산업,생물자원의보호']}, 
    {key: '53 공학,공업일반,토목공학,환경공학', value : ['530 공학,공업일반,토목공학,환경공학', '531 토목공학', '532 토목역학,토목재료', '533 측량', '534 도로공학', '535 철도공학', '536 교량공학', '537 수리공학', '538 항만공학', '539 위생,도시,환경공학']}, 
    {key: '54 건축공학', value : ['540 건축공학', '541 건축재료', '542 건축실무', '543 건물구조의유형', '544 친환경건축', '545 건물세부구조', '546 건축설비,배관및파이프의부설', '547 난방,환기및공기조절공학', '548 건축마감', '549 각종건물']}, 
    {key: '55 기계공학', value : ['550 기계공학', '551 기계역학,요소 및 설계', '552 공구와 가공장비', '553 열공학과원동기', '554 유체역학,공기역학,진공학', '555 정밀기계', '556 자동차공학', '557 철도차량,기관차', '558 항공우주공학,우주항법학', '559 기타공학']}, 
    {key: '56 전기공학,전자공학', value : ['560 전기공학,전자공학', '561 전기회로,계측,재료', '562 전기기계및기구', '563 발전', '564 송전,배전', '565 전등,조명,전열', '566 전산공학', '567 통신공학', '568 무선공학', '569 전자공학']}, 
    {key: '57 화학공학', value : ['570 화학공학', '571 공업화학약품', '572 폭발물,연료공업', '573 음료기술', '574 식품공학', '575 초,유지,석유,가스공업', '576 요업및동계공업', '577 세탁,염색및동계공업', '578 고분자화학공업', '579 기타유기화학공업']}, 
    {key: '58 제조업', value : ['580 제조업', '581 금속제조및가공업', '582 철및강철제품', '583 철기류및소규모철공', '584 제재업,목공업,목제품', '585 피혁및모피공업', '586 펄프,종이및동계공업', '587 직물및섬유공업', '588 의류제조', '589 소형상품제조']}, 
    {key: '59 생활과학', value : ['590 생활과학', '591 가정관리및가정생활', '592 의복', '593 몸치장(몸단장),화장', '594 식품과음료', '595 주택관리및가정설비', '596 공동주거용주택시설관리', '597 가정위생', '598 육아']}
  ]
  const art_test =[
    {key : '60 예술', value : ['600 예술', '601 미술이론,미학', '602 미술의재료및기법', '603 미술사전', '604 미술의주제', '605 미술연속간행물', '606 미술분야의학회,단체,기관,회의', '607 미술의지도법,연구법및교육,교육자료', '608 미술전집,총서', '609 미술사']}, 
    {key : '61 건축술', value : ['610 건축술', '611 궁전,[묘사],성곽', '612 종교건물', '613 공공건물', '614 과학및연구용건물', '615 공업용건물', '616 상업,교통,통신용건물', '617 주거용건물', '618 기타건물', '619 장식및의장']}, 
    {key : '62 조각 및 조형미술', value : ['620 조각 및 조형미술', '622 조소재료및기법', '623 목조', '624 석조', '625 금동조', '626 점토조소,소조', '627 기타재료', '628 篆각,인장', '629 제상']}, 
    {key : '63 공예,장식미술', value : ['630 공예,장식미술', '631 유리공예', '632 금속공예', '633 보석,갑각,폐류공예', '634 목,죽,화훼,왕골공예', '635 칠공예', '636 염직물공예,섬유공예', '637 고무,플라스틱공예', '638 미술가구', '639 장식예술']}, 
    {key : '64 서예', value : ['640 서예', '641 한자의서체', '642 한자서법', '643 한글서법', '644 기타서법', '646 펜습자', '647 낙관,수결(서명)', '648 서보', '649 문방구']}, 
    {key : '65 회화,도화', value : ['650 회화,도화', '651 채색이론및실제', '652 회화의재료및기법', '653 시대별및국별회화', '654 주제별회화', '656 소묘,도화', '657 만화,삽화', '658 그래픽디자인,도안,포스터', '659 판화']}, 
    {key : '66 사진술', value : ['660 사진술', '661 사진기계,재료', '662 촬영기술', '663 음화처리', '664 양화처리(인화)', '666 특수사진술', '667 사진응용', '668 사진집', '669 인쇄술']}, 
    {key : '67 음악', value : ['670 음악', '671 음악이론및기법', '672 종교음악', '673 성악', '674 극음악,오페라', '675 기악합주', '676 건반악기및타악기', '677 현악기', '678 관악기(취주악기)', '679 한국음악 및 동양전통음악']}, 
    {key : '68 공연예술 및 매체예술', value : ['680 공연예술 및 매체예술', '681 극장,제작,연출,연기', '682 연희', '683 인형극', '684 각종연극', '685 무용,발레', '686 라디오극(방송극) 및 음성(소리)매체 예술', '687 텔레비전 극 및 시청각매체 방송 예술', '688 영화', '689 대중연예']}, 
    {key : '69 오락,스포츠', value : ['690 오락,스포츠', '691 오락', '692 체육학,스포츠', '693 체조,유희', '694 육상경기', '695 구기', '696 수상경기,공중경기', '697 동계운동경기', '698 무예및기타경기', '699 기타오락및레저스포츠']}
  ]
  const language_test = [
    {key : '70 언어', value : ['700 언어', '701 언어학', '702 잡저', '703 사전', '704 강연집', '705 연속간행물', '706 학회,단체,기관,회의', '707 지도법,연구법및교육,교육자료', '708 전집,총서', '709 언어사']}, 
    {key : '71 한국어', value : ['710 한국어', '711 음운,음성,문자', '712 어원,어의', '713 사전', '714 어휘', '715 문법', '716 작문', '717 독본,해석,회화', '718 방언']}, 
    {key : '72 중국어', value : ['720 중국어', '721 음운,음성,문자', '722 어원,어의', '723 사전', '724 어휘', '725 문법,어법', '726 작문', '727 독본,해석,회화', '728 방언']}, 
    {key : '73 일본어', value : ['730 일본어', '731 음운,음성,문자', '732 어원,어의', '733 사전', '734 어휘', '735 문법,어법', '736 작문', '737 독본,해석,회화', '738 방언', '739 기타아시아제어']}, 
    {key : '74 영어', value : ['740 영어', '741 음운,음성,문자', '742 어원,어의', '743 사전', '744 어휘', '745 문법', '746 작문', '747 독본,해석,회화', '748 방언', '749 앵글로색슨어']}, 
    {key : '75 독일어', value : ['750 독일어', '751 음운,음성,문자', '752 어원,어의', '753 사전', '754 어휘', '755 문법', '756 작문', '757 독본,해석,회화', '758 방언', '759 기타게르만어']}, 
    {key : '76 프랑스어', value : ['760 프랑스어', '761 음운,음성,문자', '762 어원,어의', '763 사전', '764 어휘', '765 문법', '766 작문', '767 독본,해석,회화', '768 방언', '769 프로방스어']}, 
    {key : '77 스페인어', value : ['770 스페인어', '771 음운,음성,문자', '772 어원,어의', '773 사전', '774 어휘', '775 문법', '776 작문', '777 독본,해석,회화', '778 방언', '779 포르투갈어']}, 
    {key : '78 이탈리아어', value : ['780 이탈리아어', '781 음운,음성,문자', '782 어원,어의', '783 사전', '784 어휘', '785 문법', '786 작문', '787 독본,해석,회화', '788 방언', '789 루마니아어']}, 
    {key : '79 기타제어', value : ['790 기타제어', '792 인도-유럽계어', '793 아프리카제어', '794 북아메리카인디언어', '795 남아메리카인디언어', '796 오스트로네시아어', '797 셈족어', '798 함족어', '798 남극지방', '799 국제어(인공어)']}
  ]

  const literature_test = [
    {key : '80 문학', value : ['800 문학', '801 문학이론', '802 문장작법,수사학', '803 사전', '804 강연집,수필', '805 연속간행물', '806 학회,단체,기관,회의', '807 지도법및연구법,교육,교육자료', '808 전집,총서', '809 문학사,평론']}, 
    {key : '81 한국문학', value : ['810 한국문학', '811 시', '812 희곡', '813 소설', '814 수필', '815 연설,웅변', '816 일기,서간,기행', '817 풍자,만담,만담연설', '818 르포르타주및기타', '819 르포르타주및기타']}, 
    {key : '82 중국문학', value : ['820 중국문학', '821 시', '822 희곡', '823 소설', '824 수필', '825 연설,웅변', '826 일기,서간,기행', '827 풍자', '828 르포르타주및기타']}, 
    {key : '83 일본문학', value : ['830 일본문학', '831 시', '832 희곡', '833 소설', '834 수필', '835 연설,웅변', '836 일기,서간,기행', '837 풍자', '838 르포르타주및기타', '839 기타아시아제문학']}, 
    {key : '84 영미문학', value : ['840 영미문학', '841 시', '842 희곡', '843 소설', '844 수필', '845 연설,웅변', '846 일기,서간,기행', '847 풍자', '848 르포르타주및기타', '849 앵글로색슨문학']}, 
    {key : '85 독일문학', value : ['850 독일문학', '851 시', '852 희곡', '853 소설', '854 수필', '855 연설,웅변', '856 일기,서간,기행', '857 풍자', '858 르포르타주및기타', '859 기타게르만문학']}, 
    {key : '86 프랑스문학', value : ['860 프랑스문학', '861 시', '862 희곡', '863 소설', '864 수필', '865 연설,웅변', '866 일기,서간,기행', '867 풍자', '868 르포르타주및기타', '869 프로방스문학']}, 
    {key : '87 스페인문학', value : ['870 스페인문학', '871 시', '872 희곡', '873 소설', '874 수필', '875 연설,웅변', '876 일기,서간,기행', '877 풍자', '878 르포르타주및기타', '879 포르투갈문학']}, 
    {key : '88 이탈리아문학', value : ['880 이탈리아문학', '881 시', '882 희곡', '883 소설', '884 수필', '885 연설,웅변', '886 일기,서간,기행', '887 풍자', '888 르포르타주및기타', '889 루마니아문학']}, 
    {key : '89 기타제문학', value : ['890 기타제문학', '891 아시아제문학', '892 인도-유럽계문학', '893 아프리카제문학', '894 북아메리카인디언문학', '895 남아메리카인디언문학', '896 오스토로네시아문학', '897 셈족문학', '898 함족문학', '899 기타문학']}
  ]
  const history_test =[
    {key : '90 역사', value : ['900 역사', '901 역사철학및이론', '902 역사구조학', '903 사전', '904 강연집,사평', '905 연속간행물', '906 학회,단체,기관,회의', '907 지도법,연구법및교육,교육자료', '908 전집,총서', '909 세계사,세계문화사']}, 
    {key : '91 아시아(아세아)', value : ['910 아시아(아세아)', '911 한국', '912 중국', '913 일본', '914 동남아시아', '915 인도', '916 중앙아시아', '917 시베리아', '918 서남아시아,중동', '919 아라비아반도']}, 
    {key : '92 유럽(구라파)', value : ['920 유럽(구라파)', '921 고대그리스', '922 고대로마', '923 스칸디나비아', '924 영국', '925 독일', '926 프랑스(불란서)', '927 스페인(서반아)', '928 이탈리아(이태리)', '929 러시아(로서아)']}, 
    {key : '93 아프리카', value : ['930 아프리카', '931 북아프리카', '932 이집트(애급)', '933 바바리제국', '934 서아프리카', '936 중아프리카', '937 동아프리카', '938 남아프리카', '939 남인도양제도']}, 
    {key : '94 북아메리카(북미)', value : ['940 북아메리카(북미)', '941 캐나다', '942 미국(미합중국)', '943 멕시코', '944 중앙아메리카(중미제국)', '945 과테말라,벨리즈,엘살바도르', '946 온두라스', '947 니카라과', '948 코스타리카,파나마', '949 서인도제도']}, 
    {key : '95 남아메리카(남미)', value : ['950 남아메리카(남미)', '951 콜롬비아', '952 베네수엘라,기아나', '953 브라질', '954 에콰도르', '955 페루', '956 볼리비아', '957 파라과이,우루과이', '958 아르헨티나', '959 칠레']}, 
    {key : '96 오세아니아', value : ['960 오세아니아', '962 오스트레일리아(호주)', '963 뉴질랜드', '964 파푸아뉴기니', '965 멜라네시아', '966 미크로네시아와 인접 국가', '967 폴리네시아', '968 하와이', '969 대서양제도']}, 
    {key : '97 서극지방', value : ['970 서극지방', '971 북극지방', '973 그린란드', '979 외계지역']}, 
    {key : '98 지리', value : ['980 지리', '981 아시아지리', '982 유럽지리', '983 아프리카지리', '984 북아메리카지리', '985 남아메리카지리', '986 오세아니아지리', '987 양극지리', '988 해양', '989 지도및지도책']}, 
    {key : '99 전기', value : ['990 전기', '991 아시아', '992 유럽', '993 아프리카', '994 북아메리카', '995 남아메리카', '996 오세아니아', '997 양극', '998 주제별전기', '999 계보,족보']}
  ]
    

  function handleButtonClick(index) {
    // console.log(index);
    setClass(index);
  }



  function handleItemClick(index) {
    if (index === "005 프로그래밍") {
      setTopic(index);
      setRedirectTo(`/Topic_programming_page/${index}`); // 전환하려는 페이지의 경로를 설정합니다
    }

    else{
      alert("서비스 준비중입니다");
    }
  }
  
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectTo) {
      navigate(redirectTo);
    }
  }, [redirectTo]);
    // 리다이렉트 후, redirectTo 값을 초기화합니다
    // redirectTo 값이 변경되면, 리다이렉트를 수행합니다


  function renderClass(class_data){
    return class_data.map(({key, value}) => (
      <div key={key} className={key}>
        <h3 style={{flexBasis: '100%'}}>{key}</h3>
        <div key = {key}></div>
        <ul>
          {value.map((item, i) => (
            // <li key = {i} onClick={() => handleItemClick(item)}>{item}</li>
            <li key={i} className="custom-list-item" onClick={() => handleItemClick(item)}>
            <span className="custom-button-text">{item}</span>
          </li>
          ))}
        </ul>
      </div>  
    ))
  };


  const render_etc = renderClass(etc_test);
  const render_philosophy = renderClass(philosophy_test);
  const render_religion = renderClass(religion_test);
  const render_socialScience = renderClass(socialScience_test);
  const render_naturalScience = renderClass(naturalScience_test);
  const render_techonologyScience =  renderClass(techonologyScience_test);
  const render_art = renderClass(art_test);
  const render_language = renderClass(language_test);
  const render_literature = renderClass(literature_test);
  const render_history = renderClass(history_test);

  return (
    <div className="center-container">  
      <div className="grid-container">
        {images.map((image, index) => (
          <button type="button" key={index} className="click" onClick={() => handleButtonClick(index)}>
            <ul id="header_navi">
              <li><a href="#">
                <img src={image.src} alt={image.alt} className={image.className} /><span>{imageTexts[index]}</span>
              </a></li>
            </ul>
          </button>

      ))}
      </div>

    {myClass === 0 &&(
      <div className='etc-container'>
        <br /><br />
        <div className='flexbox'>
          {render_etc}
        </div>
      </div>
    )}

    {myClass === 1 &&(
      <div className='philosophy-container'>
        <br /><br />
        <div className='flexbox'>
          {render_philosophy}
        </div>
      </div>
    )}
    {myClass === 2 &&(
      <div className='religion-container'>
        <br /><br />
        <div className='flexbox'>
          {render_religion}
        </div>
      </div>
    )}
    {myClass === 3 &&(
      <div className='socialScience-container'>
        <br /><br />
        <div className='flexbox'>
          {render_socialScience}
        </div>
      </div>
    )}
    {myClass === 4 &&(
      <div className='naturalScience-container'>
        <br /><br />
        <div className='flexbox'>
          {render_naturalScience}
        </div>
      </div>
    )}
    {myClass === 5 &&(
      <div className='techonologyScience-container'>
        <br /><br />
        <div className='flexbox'>
          {render_techonologyScience}
        </div>
      </div>
    )}


    {myClass === 6 &&(
      <div className='art-container'>
        <br /><br />
        <div className='flexbox'>
          {render_art}
        </div>
      </div>
    )}
    {myClass === 7 &&(
      <div className='language-container'>
        <br /><br />
        <div className='flexbox'>
          {render_language}
        </div>
      </div>
    )}
    {myClass === 8 &&(
      <div className='literature-container'>
        <br /><br />
        <div className='flexbox'>
          {render_literature}
        </div>
      </div>
    )}
    {myClass === 9 &&(
      <div className='history-container'>
        <br /><br />
        <div className='flexbox'>
          {render_history}
        </div>
      </div>
    )}


    </div>
  );
}

export default Topic;
module.exports = {
  title: `Chan`,
  description: `chan's dev log`,
  author: `박종찬`,

  siteUrl: `https://chan2.netlify.com`,
  ogImage: `https://raw.githubusercontent.com/zoomKoding/gatsby-starter-zoomkoding/master/src/assets/og-image.png`, // 공유할 때 보이는 프리뷰
  social: {
    github: `https://github.com/JChan91`,
    email: `fourbin1221@gmail.com`,
  },
  comments: {
    utterances: {
      repo: `zoomkoding/gatsby-starter-zoomkoding`,
    },
  },
  ga: 'UA-134826755-3', // Google Analytics Tracking ID

  // metadata for bio
  bio: {
    language: `ko`, // 'en', 'ko'
    name: '박종찬',
    description: [
      '호기심이 많은',
      'CI/CD에 관심이 많은',
      '사용자를 위한 서비스를 만드는',
      '남을 도우는 것을 즐기는',
    ],
  },

  // metadata for About Page
  about: {
    timestamps: [
      {
        date: '2018.07 ~ 2019.05',
        activity: '실시간 스트리밍 라이브러리 연구',
      },

      {
        date: '2020.07 ~ 2020.12',
        activity: '코드스테이츠 Software Engineering 23기',
      },

      {
        date: '2020.11 ~ 2020.12',
        activity: '밤하늘 출사 웹 서비스',
        links: {
          post: 'https://mystar-story.com',
          github: 'https://github.com/codestates/starrynight_client',
        },
      },
    ],

    projects: [
      {
        title: 'Picky(글로벌 스킨케어 제품 분석 모바일 앱) 개발',
        description:
          '스타트업에서 구글 출신 CEO님과 CTO님을 포함한 훌륭하신 4분과 함께 앱 개발 사업을 진행했습니다. 저는 초기에 1인 개발자로 v1.0 개발과 이후 유지보수를 담당했습니다. 약 한달 반의 개발 기간을 거쳐 2020년 4월에 v1.0을 배포했고 2021년 3월 현재 4만명 넘는 유저를 보유하고 있습니다.',
        techStack: ['flutter', 'nodejs'],
        thumbnailUrl:
          'https://media-exp1.licdn.com/dms/image/C560BAQGc18OyGfmPZQ/company-logo_200_200/0/1603042283518?e=1622678400&v=beta&t=brvRul711R43vMtIGR96EX7ZEPSTbemrbyzlhC6Dhm4',
        links: {
          post:
            'https://zoomkoding.github.io/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%ED%9A%8C%EA%B3%A0/2020/03/25/start-up-app-development.html',
          googlePlay: 'https://play.google.com/store/apps/details?id=care.jivaka.picky',
          appStore: 'https://apps.apple.com/app/picky-skincare-made-smarter/id1504197356',
        },
      },
      {
        title: '2020 웹 중심 우아한테크캠프 참여',
        description:
          '웹 프론트엔드 개발 경험을 키워보고자 지원하여 2달간 우아한 형제들에서 주관하는 우아한테크캠프를 진행했습니다. 캠프 기간 동안 저와 비슷한 열정을 가진 사람들과 함께 성장할 수 있었던 유익한 시간이었습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYYxT7-ADQQo72P5qbwJjwySPY8p1C1a3L0w&usqp=CAU',
        links: {
          post:
            'https://zoomkoding.github.io/%ED%9A%8C%EA%B3%A0/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BA%A0%ED%94%84/2020/10/05/woowa-tech-camp-final.html',
          github: 'https://github.com/woowa-techcamp-2020/bmart-6',
        },
      },
      {
        title: '대학시간(대학교 수강신청 보조 웹 앱) 개발',
        description:
          '입사일을 앞두고 뭐를 할까 고민하던 중에 수강신청 준비 과정의 어려움을 해소할 수 있는 웹사이트를 개발하게 되었습니다. 이번 프로젝트는 조금 특별하게 기획, 디자인, 홍보, 개발 모두 직접 도전하게 되었고 약 한달의 시간 끝에 배포했습니다. 21년도 1학기 재학생 중 1600명 정도가 이 서비스를 사용했습니다.',
        techStack: ['react', 'nodejs'],
        thumbnailUrl: 'https://www.timetable.college/timetable.png',
        links: {
          post:
            'https://zoomkoding.github.io/%EB%8C%80%ED%95%99%EC%8B%9C%EA%B0%84/%ED%9A%8C%EA%B3%A0/2021/02/10/college-timetable-development.html',
          github: 'https://github.com/zoomkoding/college-timetable',
          demo: 'http://www.timetable.college',
        },
      },
    ],
  },
};

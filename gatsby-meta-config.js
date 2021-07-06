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
        title: '야경 출사 공유 웹 서비스',
        description:
          '서로 같은 취미를 가진 밤하늘이라는 주제로 다른 사람들과 소통을 목적으로 만든 웹 서비스입니다',
        techStack: ['React', 'Express'],
        thumbnailUrl:
          'https://user-images.githubusercontent.com/49114768/100119813-a3183700-2eba-11eb-841f-006eec049056.png',
        links: {
          post:
            'https://zoomkoding.github.io/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85/%ED%9A%8C%EA%B3%A0/2020/03/25/start-up-app-development.html',
        },
      },
    ],
  },
};
